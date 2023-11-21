<script>
    import { PeopleFill } from "svelte-bootstrap-icons"
    import { scale, fade } from 'svelte/transition'
    import { onMount } from 'svelte'

    export let qa;
    export let players;

    // Declare stuff
    let peopleSize = 50;
    let title = "the art of 'which'"
    let showQuestion = false;
    let showAnswer = false;
    let qna = {};
    let question = ''
    let answer = ''

    let men = [
        {
            id: 0,
            color:'green',
            score: 0
        },
        {
            id: 1,
            color:'blue',
            score: 0
        },
        {
            id: 2,
            color:'red',
            score: 0
        },
        {
            id: 3,
            color:'orange',
            score: 0
        }
    ]
   
    let onKeyUp = (e) => {
        if (e.key == 'g') {
            men[0].score ++
        } else if (e.key == 'G') {
            men[0].score --
        } else if (e.key == 'b') {
            men[1].score ++
        } else if (e.key == 'B') {
            men[1].score --
        } else if (e.key == 'r') {
            men[2].score ++
        } else if (e.key == 'R') {
            men[2].score --
        } else if (e.key == 'o') {
            men[3].score ++
        } else if (e.key == 'O') {
            men[3].score --
        } else if (e.key == 'a') {
            showAnswer = true;
        } else if (e.key == 'n') {
            doNext();
        } else if (e.key == '1') {
            players = 1;
        } else if (e.key == '2') {
            players = 2;
        } else if (e.key == '3') {
            players = 3;
        } else if (e.key == '4') {
            players = 4;
        }
    }

    function doNext() {
        showQuestion = false;
        showAnswer = false;
        qna = qa.shift();
        question = qna.q;
        answer = qna.a;
        showQuestion = true;
    }

</script>

<div id="container">

    <div id="header">
        {#each {length: players} as _, i}
            <div id="{men[i].id}">
                <PeopleFill fill="{men[i].color}" width={peopleSize} height={peopleSize} />
                <div>{men[i].score}</div>
            </div>
        {/each}
    </div>

    <div id="title">{title}</div>

    <div id="question">
        {#if showQuestion}
            <div transition:scale>{question}</div>
        {/if}
    </div>

    <div id="answer">
        {#if showAnswer}
            <div transition:scale>{answer}</div>
        {/if}
    </div>

</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

/* div { */
/*     border:1px solid red */
/* } */

#container {
    height:100vh;
    display:grid;
    grid-auto-flow: column;
    grid-template-rows: 90px 40px 1fr 1fr;
}

#header {
    display:flex;
    justify-content:space-around;
}

#header > div {
    text-align:center;
    font-size:1.5rem;
}

#title {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
    color: var(--light);
    background: var(--grey);
}

#question, #answer {
    font-size:1.5rem;
    display:flex;
    justify-content:center;
    align-items:center;
}

</style>
