<script>
    import { createEventDispatcher } from 'svelte';
    import { fade, slide } from 'svelte/transition';
    import * as animateScroll from "svelte-scrollto";
    import { shuffle } from '$lib/shuffle.js'
    import { onMount } from 'svelte';

    export let incoming;
    export let title;
    export let count = 0;

    let answers = [];
    let guesses = [];

    const dispatch = createEventDispatcher();

    let inStr = incoming.replace(/\n/g,'<br>');
    let inArr = inStr.split(/(\[|\])/).filter( next => !next.match(/[\[\]]/) );
    let inObjs = inArr.map( (next,i) => {

        // Fill out guesses array with NULL values
        guesses.push(null);

        if(next.match(/\|/)) {
            let items = next.split(/\|/);
            answers.push(items[0]);
            shuffle(items);
            return items;
        } else {
            answers.push('');
            return next;
        }

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
            let value = e.target.value;
            let id = Number(e.target.id.replace(/s/,''));
            guesses[id] = value;
            dispatch("updateGuesses", guesses);
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

    onMount(() => {
        dispatch("updateAnswers", answers);
    });

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
                {#if typeof next === 'string'}
                    {next}
                {:else}
                    <select id="s{i}" on:change={doUser}>
                        <option value="select">select</option>
                        {#each next as option}
                            <option value="{option}">{option}</option>
                        {/each} 
                    </select>
                {/if} 
            {/each} 

            <button id="check" class="btn btn-next btn-outline-dark mx-auto my-3 d-block" on:click={finish}>Finished!</button>

        </div>

        {#if finished}
            <div id="finished" transition:fade>
                {#each inObjs as next,i}
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
