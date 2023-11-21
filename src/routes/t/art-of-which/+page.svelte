<script>

    import { PeopleFill } from "svelte-bootstrap-icons"
    import { scale, fade } from 'svelte/transition'

    let qa = [
        {
            q:'Much effort went into the project. The results of the project were amazing.',
            a:'Much effort went into the project, the results of which were amazing.'
        },
        {
            q:'The hotel has seven bedrooms. Three of them are en suite.',
            a:'The hotel has seven bedrooms, three of which are en suite.'
        },
        {
            q:'The city underwent many changes. Some were major changes and others were minor.',
            a:'The city underwent many changes, some of which were major, others minor.'
        },
        {
            q:'The total amounts were 55, 67 and 88. These are all impressive numbers.',
            a:'The total amounts were 55, 67 and 88, all of which are impressive numbers.'
        },
        {
            q:'Twenty islands in Orkney are inhabited. Altogether there are 70 islands.',
            a:'Altogether there are 70 islands in Orkney, 20 of which are inhabited.'
        },
        {
            q:'IALF has over a thousand GE students. More than 50% live in Denpasar.',
            a:'IALF has over a thousand GE students, more than 50% of whom live in Denpasar.'
        },
        {
            q:'There are several possible solutions. None of the solutions are ideal.',
            a:'There are several possible solutions, none of which are ideal.'
        },
        {
            q:'Children used to engage in outdoor activities. These activities are now mostly in decline.',
            a:'Children used to engage in outdoor activities, most of which are now in decline.'
        },
        {
            q:'Ten passengers were seriously injured. One later died.',
            a:'Ten passengers were seriously injured, one of whom later died.'
        },
        {
            q:'The company employs 48 skilled engineers. Eight are Indonesian.',
            a:'The company employs 48 skilled engineers, eight of whom are Indonesian.'
        }
    ]

    let peopleSize = 50;

    let title = "the art of 'which'"
    let showQuestion = false;
    let showAnswer = false;

    let qna = {};
    let question = ''
    let answer = ''
    let players = 2

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
