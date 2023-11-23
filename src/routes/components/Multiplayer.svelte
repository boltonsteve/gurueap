<script>
    import { PeopleFill } from "svelte-bootstrap-icons"
    import { scale, fade } from 'svelte/transition'
    import { onMount } from 'svelte'

    export let qa;
    export let players = 2;
    export let title;

    // Declare stuff
    let peopleSize = 50;
    let showQuestion = false;
    let showAnswer = false;
    let qna = {};
    let question = []
    let answer = []
    let current = 0
    let remaining = qa.length

    let men = [
        {
            color:'var(--green)',
            score: 0
        },
        {
            color:'var(--blue)',
            score: 0
        },
        {
            color:'var(--red)',
            score: 0
        },
        {
            color:'var(--orange)',
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
        } else if (e.key == 'q') {
            showQuestion = true;
        } else if (e.key == 'a') {
            showAnswer = true;
        } else if (e.key == 'n') {
            doNext();
        } else if (e.key == 'N') {
            doPrevious();
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

    function doPrevious() {
        showQuestion = false;
        showAnswer = false;
        if(current > 0) {
            current --;
            redraw();
        }
        showQuestion = true;
    }

    function doNext() {
        showQuestion = false;
        showAnswer = false;
        if(current < qa.length-1) {
            current ++;
            redraw();
        }
        showQuestion = true;
    }

    function redraw() {
        question = qa[current].q;
        answer = qa[current].a;
    }

    redraw();

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
            <div transition:scale>
                {#each question as next}
                    <div>{@html next}</div>
                {/each}
            </div>
        {/if}
    </div>

    <div id="answer">
        {#if showAnswer}
            <div transition:scale>
                {#each answer as next}
                    <div>{@html next}</div>
                {/each}
            </div>
        {/if}
    </div>

    <div id="footer">
        <div>n/N; q/a; 1234 players; rgboRGBO points;</div>
        <div>{current+1}/{qa.length}</div>
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
    grid-template-rows: 100px 50px 1fr 1fr 25px;
}

#header {
    display:flex;
    justify-content:space-around;
    padding-top:10px;
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

#question {
    display:flex;
    justify-content:space-around;
}

#question div {
    width:100%;
    display:flex;
    justify-content:center;
    gap:20px;
}

#answer {
    display:flex;
    justify-content:center;
}

#answer div {
    display:flex;
    flex-direction:column;
    gap:20px;
}

#question, #answer {
    text-align:center;
    font-size:1.5rem;
    align-items:center;
    gap:20px;
}

#footer {
    color: #aaaaaa;
    font-size:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

</style>
