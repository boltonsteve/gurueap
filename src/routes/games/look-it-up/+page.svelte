<script>
    import SvelteSeo from "svelte-seo"
    import { tooltip } from '$lib/tooltip';
    import { ArrowReturnLeft, ArrowReturnRight } from "svelte-bootstrap-icons";
    import { onMount } from 'svelte';
    import { sublists } from '$lib/sublists.js';
    import Dictionary from '../../components/Dictionary.svelte';

    let myInput = '';
    let iconSize = 24;

    let rand,sublist,wordForms,word,wL,gL;

    let msg = '';
    let guesses = '';
    let guess = '';
    let corrCount = 0;

    let back = false;
    let front = false;
    let correct = false;
    
    let showClearButton = false;
    let showDictionary = false;
    let showNextButton = false;
    let showWordButton = true;
    let showCheckButton = true;
    let showInput = true;

    let wordArr = [];
    let guessArr = [];
    let guessesArr = [];

    const showWord = () => {
        showWordButton = false;
        showClearButton = false;
        showCheckButton = false;
        showDictionary = true;
        showNextButton = true;
        showInput = false;
    }

    const getWord = () => {

        showDictionary = false;
        showNextButton = false;
        showWordButton = true;
        showCheckButton = true;
        showInput = true;

        rand = Math.floor(Math.random() * 10);
        sublist = sublists[rand];
        rand = Math.floor(Math.random() * sublist.length);
        wordForms = sublist[rand].split(' ');
        word = wordForms[0];

        wordArr = word.split('');

    }

    const clearWord = () => {

        /* showClearButton = false; */
        word = '';
        guesses = '';
        guess = '';
        corrCount = 0;
        msg = '';
        wordArr = [];
        guessArr = [];
        guessesArr = [];

        front = false;
        back = false;
        correct = false;

        showDictionary = false;
        showNextButton = true;
        showClearButton = false;
        /* showWordButton = false; */

        /* document.getElementById('input').value = ''; */
        /* document.getElementById('input').focus(); */

        getWord();
    }

    const getKey = (e) => {
        if(e.key == 'Enter') {
            if(showDictionary == false) {
                checkWord();
            }
        }
    }
    
    const handleInput = (e) => {
        guess = e.target.value;
    }
    
    const getCloser = (wL,gL) => {
        if(wL > gL) {
            back = true;
        } else {
            front = true;
        }
    }

    const checkWord = () => {

        front = false;
        back = false;
        correct = false;

        msg = '';

        if(guess == '') {

            msg = '<div>Please enter some text!</div>';

        } else {

            if(guess == word) {

                msg = '<div>Correct!</div>';
                showDictionary = true;
                showCheckButton = false;
                showWordButton = false;
                showClearButton = true;

                correct = true;
                showInput = false;
                showNextButton = true;

            } else {

                guessArr = guess.split('');
                corrCount = 0;
                let searching = true;
                guessArr.forEach( (next,i) => {
                    if(next == wordArr[i] && searching) {
                        corrCount ++;
                    } else {
                        searching = false;
                    }
                })

                /* console.log('word: ' + word + ' guess: ' + guess); */
                /* console.log('wordArr',wordArr); */
                /* console.log('guessArr',guessArr); */

                if(corrCount == 0) {
                    wL = word.charCodeAt(0);
                    gL = guess.charCodeAt(0);
                    getCloser(wL,gL);
                    document.getElementById('input').value = '';
                    document.getElementById('input').focus();
                } else if(corrCount == 1) {
                    wL = word.charCodeAt(1);
                    gL = guess.charCodeAt(1);
                    msg = '<div>The first letter is correct.</div>';

                    if(guess.length > 1) {
                        getCloser(wL,gL);
                    }

                    document.getElementById('input').value = word[0];
                    document.getElementById('input').focus();
                } else {
                    wL = word.charCodeAt(corrCount);
                    gL = guess.charCodeAt(corrCount);

                    msg = '<div>The first ' + corrCount + ' letters are correct.</div>';

                    if(word.length > guess.length) {
                        if(guess.length > corrCount) {
                            getCloser(wL,gL);
                        } else {
                            back = true;
                        }

                    } else {
                        if(guess.length > corrCount) {
                            getCloser(wL,gL);
                        } else {
                            front = true;
                        }
                    }

                    let soFar = '';
                    for(let i=0;i<corrCount;i++) {
                        soFar += guess[i];
                    }

                    document.getElementById('input').value = soFar;
                    document.getElementById('input').focus();

                }


                guessesArr.push(guess);
                guessesArr = [...new Set(guessesArr)];
                guesses = guessesArr.join(', ');

            }

        }

        /* document.getElementById('input').focus(); */

    }

    getWord();

    onMount(() => {
		document.getElementById('input').focus();
	});


</script>

<SvelteSeo
    title="Look it up!"
    description="The app selects a random word from the Academic Word List (AWL). You guess the word based on feedback from the app."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,Academic Word List,games"
 /> 

<div class="mb-3 mw-500">

    <h1>Look it up!</h1>

    <p class="mb-0">Try to guess the word chosen at random from the <span class="tooltip" title="Academic Word List" use:tooltip>AWL</span>.</p>
    <p class="mt-0">Type a guess then press 'enter' or click (or tap) 'check'.</p>
    <p class="mb-1">Hints will guide you:</p>

    <div class="my-grid mb-0">
        <div class="icons mb-0"><ArrowReturnLeft height={iconSize} width={iconSize} /></div>
        <div class="mb-0">Closer to the front of the dictionary.</div>
    </div>

    <div class="my-grid mb-1 mt-0">
        <div class="icons mt-0"><ArrowReturnRight height={iconSize} width={iconSize} /></div>
        <div class="mt-0">Closer to the back.</div>
    </div>

    <div id="buts">
        <div>
            {#if showWordButton}
                <div><button class="btn btn-outline-danger" on:click={showWord}>show word</button></div>
            {/if}
        </div>
        <div>
            {#if showInput}
                <input id="input" class="form-control text-center" autofocus on:input={handleInput} on:keyup={getKey}>
            {/if}
            {#if showNextButton}
                <div><button class="btn btn-outline-success" on:click={clearWord}>next word</button></div>
            {/if}
        </div>
        <div>
            {#if showCheckButton}
                <div><button class="btn btn-outline-primary" on:click={checkWord}>check</button></div>
            {/if}
        </div>
    </div>

    <div id="msg">
        {#if correct}
            {@html msg}
        {/if}
        {#if back}
            {@html msg}
            <div><ArrowReturnRight height={iconSize} width={iconSize} /></div>
        {/if}
        {#if front}
            <div><ArrowReturnLeft height={iconSize} width={iconSize} /></div>
            {@html msg}
        {/if}
    </div>

    <div id="guesses">{guesses}</div>

    {#if showDictionary}
        <Dictionary bind:word="{word}" />
    {/if}

</div>


<style>
    .icons {
        display:flex;
        justify-content:center;
        align-items:center;
    }
    #msg, #buttons {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        /* justify-content:space-around; */
        column-gap: 10px;
    }
    #buts {
        display:grid;
        grid-template-columns: 2fr 3fr 2fr;
        column-gap: 10px;
        align-items:center;
    }
    .my-grid {
        display:grid;
        grid-template-columns: 1fr 4fr;
        column-gap: 10px;
        align-items:center;
    }
    .my-grid button {
        margin-bottom:0px;   
    }
    button {
        width:100%;
        font-size:1rem;
        padding: 7px 1px;
    }
    #msg,#guesses {
        margin:15px auto;
        text-align: center;
        font-size:1.1rem;
    }
    #guesses {
        color: var(--red);
    }
    /* * { */
        /* border:1px solid green; */
    /* } */
</style>
