<script>

    import { fade, slide } from 'svelte/transition';
    import * as animateScroll from "svelte-scrollto";

    export let incoming;
    export let title;

    let inStr = incoming.replace(/\n/g,'<br>');
    let inArr = inStr.split(/(\s\[|]\s?)/).filter( next => !next.match(/[\[\]]/) );
    let inObjs = inArr.map( next => {
        let toReturn = '';
        let items;
        if(next.match(/\|/)) {
            let items = next.split(/\|/);
            toReturn = {
                ori: items[0],
                q: items[1],
                user: ''
            }
        } else {
            toReturn = {
                ori: '',
                q: '',
                user: ''
            }
        }
        return toReturn;
    });

    let finished = false;
    let showInstructions = true;
    let instMsg = 'hide instructions';

    const toggleInstructions = () => { 
        showInstructions = !showInstructions
        if(showInstructions) {
            instMsg = 'hide instructions';
        } else {
            instMsg = 'show instructions';
        }
    };

    const doUser = (e) => {
        let id = e.target.attributes.data.nodeValue;
        let edit = prompt(inObjs[id].q);
        inObjs[id].user = edit;

        /* setTimeout(function() { */
        /*     let html = document.getElementById('activity').innerHTML.replace(/&nbsp;(\.|,|\?)/g,'$1'); */
        /*     document.getElementById('activity').innerHTML = html; */
        /* }, 500); */
    }

    const finish = () => {
        let empty = 0;
        inObjs.forEach( next => {
            if(next.user == '') {
                empty ++;
            }
        })
        if(empty > 0) {
            alert('Please attempt all text replacements.');
        } else {
            finished = true;
            setTimeout(function() {
                animateScroll.scrollTo({element: '#finished', duration: 1000});
            },500);
        }
    }

</script>

<div class="container">
    
    <button id="btn_instructions" class="btn btn-outline-dark" on:click={toggleInstructions}>{instMsg}</button>

    {#if showInstructions}
        <div id="instructions" transition:slide>
            <ul>
                <li>Click red items and enter your own ideas.</li>
                <li>Click again to edit.</li>
                <li>Click 'Finished' to see sample text.</li>
            </ul>
        </div>
    {/if} 

    <h1 class="text-center">{title}</h1>

    <div id="activity">

        <div>
            {#each inObjs as next,i}
                {#if next.ori == ''}
                    {@html inArr[i]}&nbsp;
                {:else if next.user == ''}
                    <span class="text-danger" data={i} on:click={doUser}>{next.q}</span>&nbsp;
                {:else}
                    <span class="text-danger" data={i} on:click={doUser}>{next.user}</span>&nbsp;
                {/if} 
            {/each} 

            <button id="check" class="btn btn-next btn-outline-dark mx-auto my-3 d-block" on:click={finish}>Finished!</button>

        </div>

        {#if finished}
            <div id="finished" transition:fade>
                {#each inObjs as next,i}
                    {#if next.ori == ''}
                        {@html inArr[i]}&nbsp;
                    {:else}
                        <span class="text-success">{next.ori}</span>&nbsp;
                    {/if} 
                {/each} 
            </div>
        {/if} 

    </div>

</div>


<style>

    #btn_instructions {
        cursor:pointer;
        border:1px solid black;
        border-radius:5px;
        margin-top:10px;
        font-size:0.8rem;
        padding:3px;
    }

    ul {
        margin-top:5px;
        font-size:0.8rem;
    }

    #activity {
        display:flex;
        justify-content:center;
        gap:20px;
    }

    #activity div {
        max-width:500px;
    }

    @media(min-width:480px) {
        #activity {
            flex-wrap:wrap;
        }
    }

</style>
