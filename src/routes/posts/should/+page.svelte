<script>

    import { fade, scale } from "svelte/transition";

    const corrects = ['should','have to','should have','had to'];
    const checkAnswers = () => {
        let answers = document.querySelectorAll('.ans'),i;
        let score = 0;

        /* console.log(answers); */

        for (i = 0; i < answers.length; ++i) {

            let nextGuess = document.getElementById('a'+i);
            nextGuess.className = 'ans';
            let guess = answers[i].value.toLowerCase().trim();
            if(guess == '') {
                nextGuess.classList.add('bg-warning');
                nextGuess.value='not attempted';
            } else {
                if(guess == corrects[i]) {
                    score ++;
                    nextGuess.classList.add('bg-success');
                } else {
                    nextGuess.classList.add('bg-danger');
                }
            }
        }
        console.log("score: " + score);

    }

    let showA = false;
    let showB = false;

    const show1 = () => {
        showA = !showA;
        if(showA) {
            document.getElementById('s1').innerText = 'hide';
        } else {
            document.getElementById('s1').innerText = 'show';
        }
    }

    const show2 = () => {
        showB = !showB;
        if(showB) {
            document.getElementById('s2').innerText = 'hide';
        } else {
            document.getElementById('s2').innerText = 'show';
        }
    }

</script>

<div class="mb-3 mw-600">

    <h1><i>Should</i> or <i>Have to</i></h1>
    
    <p class="ml-3 font-italic">I'm going to bed early because I <span class="font-weight-bold text-danger">should</span> get up early tomorrow.</p>

    <p><b>Consider the following examples:</b></p>

    <p>As a teacher I <b><i>have to</i></b> [1] get up early on work days because I <b><i>have to</i></b> [2] be in class at 8 o’clock. I drive to work, although I <b><i>should</i></b> [3] probably use a motorcycle, which is faster and more convenient in Bali.</p>

    <p>When I was a musician I didn’t <b><i>have to</i></b> [4] get up early, but I <b><i>had to</i></b> [5] be on stage most evenings at 8 o’clock. I <b><i>had to</i></b> [6] drive to gigs because I <b><i>had to</i></b> [7] carry many drums. I know what you’re thinking - I <b><i>should’ve </i></b>[8] chosen a smaller instrument like the violin. Yes, but then I would have <b><i>had to</i></b> [9] play the violin!</p>

    <p class="mb-0">In which situations did I have a choice? (<span id="s1" on:click={show1}>show</span>)</p>
{#if showA}
    <div in:scale out:fade>Ans: 3,8</div>
{/if}

<p class="mb-0">In which situations did I NOT have a choice? (<span id="s2" on:click={show2}>show</span>)</p>
{#if showB}
    <div in:scale out:fade class="mt-0">Ans: 1,2,4,5,6,7,9</div>
{/if}

<p><b>Complete the rule:</b></p>

<p>In the present:</p>
<ul>
    <li>we use <input id="a0" class="ans" size="12" autofocus> to talk about situations when it is a good idea to do something, but we have a choice. (We probably don’t do it!)</li>
	<li>we use <input id="a1" class="ans" size="12"> to talk about situations when we have NO choice. (We do it, even if we don’t want to!)</li>
</ul>
<p>In the past:</p>
<ul>
	<li>we use <input id="a2" class="ans" size="12"> to talk about situations when it was good idea to do something, but we had a choice. (We probably didn’t do it!)</li>
	<li>we use <input id="a3" class="ans" size="12"> to talk about situations when we had NO choice. (We did it, even if we did’t want to!)</li>
</ul>

<button on:click={checkAnswers}>check</button>

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
</style>
