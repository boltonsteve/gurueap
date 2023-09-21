<script>

    import SvelteSeo from "svelte-seo"
    import { fade, scale, slide } from "svelte/transition"
    import Select from '../../components/Select.svelte'
    import Modal from '../../components/Modal.svelte'
    import * as animateScroll from "svelte-scrollto"

    let score = 0;

    let showModal = false;
    const toggleModal = () => {
        showModal = !showModal;
    }

    const checkAnswers = () => {

        let answers = document.querySelectorAll('.ans'),i;

        let completed = true;
        for (i = 1; i < answers.length+1; ++i) {
            let coba = document.getElementById('A'+i).value;
            if(coba == 'select') {
                completed = false;
            }
        }

        if(!completed) {
            toggleModal();
        } else {
            score = 0;
            for (i = 1; i < answers.length+1; ++i) {

                let coba = document.getElementById('A'+i).value;
                let ans = document.getElementById('A'+i).getAttribute('data');

                if(coba == ans) {
                    document.getElementById('A'+i).classList.add('success');
                    score ++;
                } else {
                    document.getElementById('A'+i).classList.add('danger');
                }

            }


            console.log("score: " + score);

            document.querySelector('#feedback').innerHTML = 'Score ' + score + '/' + answers.length;
            animateScroll.scrollTo({element: '#feedback', duration: 1000, offset: -50})

        }


    }

    let done = false;

    let showA = false;
    let showB = false;
    let showHide;

    const show1 = () => {
        showA = !showA;
        showHide = showA ? 'hide' : 'show';
        document.getElementById('s1').innerText = showHide;
    }

    const show2 = () => {
        showB = !showB;
        showHide = showB ? 'hide' : 'show';
        document.getElementById('s2').innerText = showHide;
    }

</script>

<SvelteSeo
    title="Should or Have to"
    description="Demonstrating the differences in meaning between 'should' and 'have to'."
/>

<Modal {showModal} on:click={toggleModal} />

<div class="mb-3 mw-500">

    <h1><i>Should</i> or <i>Have to</i></h1>
    
    <div class="alert alert-danger font-italic">I'm going to bed early because I <span class="font-weight-bold text-danger">should</span> get up early tomorrow.</div>

    <p><b>Consider the following examples:</b></p>

    <p>As a teacher I <b><i>have to</i></b> [1] get up early on work days because I <b><i>have to</i></b> [2] be in class at 8 o'clock. I drive to work, although I <b><i>should</i></b> [3] probably use a motorcycle, which is faster and more convenient in Bali.</p>

    <p>When I was a musician I didn't <b><i>have to</i></b> [4] get up early, but I <b><i>had to</i></b> [5] be on stage most evenings at 8 o'clock. I <b><i>had to</i></b> [6] drive to gigs because I <b><i>had to</i></b> [7] carry many drums. I know what you're thinking - I <b><i>should've </i></b>[8] chosen a smaller instrument like the violin. Yes, but then I would have <b><i>had to</i></b> [9] play the violin!</p>

    <p class="mb-0">In which situations did I have a choice? (<span id="s1" on:click={show1}>show</span>)</p>
    {#if showA}
        <div in:scale out:fade>Ans: 3,8</div>
    {/if}

    <p class="mb-0">In which situations did I NOT have a choice? (<span id="s2" on:click={show2}>show</span>)</p>
    {#if showB}
        <div in:scale out:fade class="mt-0">Ans: 1,2,4,5,6,7,9</div>
    {/if}
    <div id="activity">

        <h3>Complete the rule</h3>

            <div id="feedback"></div>

        <p>In the present:</p>
        <ul>
            <li>we use <Select count="1" options="should,have to,should've,had to" /> to talk about situations when it is a good idea to do something, but we have a choice. (We probably don't do it!)</li>
            <li>we use <Select count="2" options="have to,should,should've,had to" /> to talk about situations when we have NO choice. (We do it, even if we don't want to!)</li>
        </ul>
        <p>In the past:</p>
        <ul>
            <li>we use <Select count="3" options="should've,had to,should,have to" /> to talk about situations when it was good idea to do something, but we had a choice. (We probably didn't do it!)</li>
            <li>we use <Select count="4" options="had to,should've,should,have to" /> to talk about situations when we had NO choice. (We did it, even if we did't want to!)</li>
        </ul>

        <button class="btn btn-outline-primary" on:click={checkAnswers}>check</button>

    </div>

</div>

<style>
    button {
        padding: 5px 15px;
        border-radius: 5px;
        cursor: pointer;
        display:block;
        margin:auto;
    }
    span {
        cursor:pointer;
    }
    #feedback {
        text-align:center;
        font-size:18px;
        margin:20px;
    }
</style>
