<script>
    import { fade } from 'svelte/transition'

    export let title;
    export let task;
    export let qa;
    export let jumble = false; 
    export let limit = 100;

console.log("limit: " + limit);

    task = task.replace(/\|/g,'<br>');

    let showButton = true;
    let showQuiz = true;
    let showFeedback = false;
    let scoreMsg = '';

    if(jumble) {
        qa = shuffle(qa);
    }

    if(limit < 100) {
        qa = qa.slice(0,limit);
    }

    let active = false;
    let score = 0;

    let answers = qa.map( next => next.answers[0]);
    let attempts = qa.map( next => '');
    let feedbacks = qa.map( next => '');

    let shuffled = qa.map( (next,i) => {
        let a_shuffle = shuffle(next.answers).map(next => {
            return {
                answer:next,
                active:active,
            }
        });
        return {
            question: next.question,
            answers: a_shuffle
        }
    })

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function doOption(e) {
        let ulData = e.target.parentElement.attributes.data.nodeValue;
        let liData = e.target.attributes.data.nodeValue;
        shuffled[ulData].answers.forEach( next => {
            next.active = false;
        })
        shuffled[ulData].answers[liData].active = true;
        attempts[ulData] = e.target.innerText
    }

    function checkAnswers() {
        answers.forEach( (next,i) => {
            if(attempts[i] == next) {
                score++;
                feedbacks[i] = '<span class="text-success font-weight-bold">Correct!</span>';
            } else {
                feedbacks[i] = '<span class="text-danger font-weight-bold">Incorrect.</span> The correct answer is <b><i>' + next + '</i></b>.';
            }
        })
        showFeedback = true;
        scoreMsg = `<h1 class="text-center">Score: ${score}/${answers.length}</h1>`;
    }

</script>


<div class="container">

    <h1 id="title">{title}</h1>
    <p class="lead">{@html task}</p>

    {@html scoreMsg}

    {#each shuffled as next,i}

        <div class="q-block">

            <div class="q-grid">
                <div>{i+1}.</div>
                <div>
                    <div class="question">{next.question}</div>
                    {#if showFeedback}
                        <div class="feedback" transition:fade>{@html feedbacks[i]}</div>
                    {/if}
                    <div class="options" data={i}>
                        {#each next.answers as next,i}
                            {#if next.active}
                                <div class="option active" data={i} on:click={doOption}>{next.answer}</div>
                            {:else}
                                <div class="option" data={i} on:click={doOption}>{next.answer}</div>
                            {/if}
                        {/each}
                    </div>
                </div>
            </div>


        </div>

    {/each}
    <hr>
    <button id="check" class="btn btn-outline-dark" on:click={checkAnswers}>Check answers</button>

</div>


<style>

    /* div { */
    /*     border:1px solid red; */
    /* } */

    .active {
        background:yellow;
    }

    .q-grid {
        display:grid;
        grid-template-columns: 30px 1fr;
        font-weight:bold;
    }

    .question {
        font-weight:bold;
    }

    .q-block {
        margin-bottom:35px;
    }

    .options {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        gap:10px;
        padding:10px 0px 10px 0px;
    }

    .option {
        padding:5px;
        border:1px solid var(--dark);
        border-radius:5px;
        cursor:pointer;
    }

    .container {
        max-width:500px;
        margin: 0px auto;
    }

    button {
        display:block;
        margin:15px auto;
    }

</style>
