<script>
    import SvelteSeo from "svelte-seo"
    import { Book, ArrowLeft, ArrowRight } from "svelte-bootstrap-icons";
    import { onMount } from 'svelte';
    import { sublists } from '$lib/sublists.js';
    import Dictionary from '../../components/Dictionary.svelte';

    let myInput = '';

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

    let showGetWordButton = false;

    let showWordButton = true;

    let showCheckButton = true;

    let wordArr = [];
    let guessArr = [];
    let guessesArr = [];

    const showWord = () => {
        showWordButton = false;
        showClearButton = true;
        showDictionary = true;
        /* document.getElementById('input').value = ''; */
        /* document.getElementById('input').focus(); */
    }

    const getWord = () => {

        rand = Math.floor(Math.random() * 10);
        sublist = sublists[rand];
        rand = Math.floor(Math.random() * sublist.length);
        wordForms = sublist[rand].split(' ');
        word = wordForms[0];

        /* showDictionary = false; */
        showGetWordButton = false;
        showWordButton = true;
        showCheckButton = true;

        wordArr = word.split('');

    }

    getWord();

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

        showDictionary = false;
        showGetWordButton = true;
        showClearButton = false;
        /* showWordButton = false; */

        document.getElementById('input').value = '';
        document.getElementById('input').focus();

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
        /* return wL > gL ? "It's closer to the back of the dictionary." : "It's closer to the front of the dictionary."; */
    }

    const checkWord = () => {

        front = false;
        back = false;
        correct = false;

        msg = '';

        if(guess == '') {

            msg = 'Please enter some text!';

        } else {

            if(guess == word) {

                msg = 'Correct!';
                showDictionary = true;
                showCheckButton = false;
                showWordButton = false;
                showClearButton = true;

                correct = true;

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

                console.log('word: ' + word + ' guess: ' + guess);
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
                    msg = 'The first letter is correct.';

                    if(guess.length > 1) {
                        getCloser(wL,gL);
                    }

                    document.getElementById('input').value = word[0];
                    document.getElementById('input').focus();
                } else {
                    wL = word.charCodeAt(corrCount);
                    gL = guess.charCodeAt(corrCount);

                    msg = 'The first ' + corrCount + ' letters are correct.';

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

        /* console.log(msg); */

        document.getElementById('input').focus();

    }

    onMount(() => {
		/* console.log('the component has mounted'); */
		myInput = document.getElementById('input').focus();
	});

    let iconSize = 24;

</script>

<SvelteSeo
    title="Look it up!"
    description="The app selects a random word from the Academic Word List (AWL). You guess the word based on feedback from the app."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,Academic Word List,games"
 /> 

<div class="mb-3 mw-500">

    <h1 class="mt-0">Look it up!</h1>

        <p class="mb-0">Try to guess the word chosen from the dictionary by the app.</p>

        <p class="mt-0">Type a guess then press 'enter' or click (or tap) 'check'.</p>

        <p class="mb-0">Hints will guide you:</p>

        <div class="my-grid mb-0">
            <div class="icons mb-0" style="justify-self:end;"><ArrowLeft height={iconSize} width={iconSize} /><Book height={iconSize} width={iconSize} /></div>
            <div class="mb-0">It's closer to the front of the dictionary.</div>
        </div>

        <div class="my-grid mb-1 mt-0">
            <div class="mt-0" style="justify-self:end;">It's closer to the back.</div>
            <div class="icons mt-0"><Book height={iconSize} width={iconSize} /><ArrowRight height={iconSize} width={iconSize} /></div>
        </div>

    <div id="buttons" class="my-grid-11 mb-0">

        {#if showGetWordButton}
            <div><button class="btn btn-outline-success" on:click={getWord}>get word</button></div>
        {/if}

        {#if showClearButton}
            <div><button class="btn btn-outline-info" on:click={clearWord}>next word</button></div>
        {/if}

        {#if showWordButton}
            <div><button class="btn btn-outline-danger" on:click={showWord}>show word</button></div>
        {/if}

        {#if showCheckButton}
            <div><button class="btn btn-outline-primary" on:click={checkWord}>check</button></div>
        {/if}

    </div>

    <input id="input" class="form-control mt-1 text-center" on:input={handleInput} on:keyup={getKey}>

    <div id="msg">
        {#if correct}
            <div>{@html msg}</div>
        {/if}
        {#if back}
            <div>{msg}</div>
            <div><Book height={iconSize} width={iconSize} /><ArrowRight height={iconSize} width={iconSize} /></div>
        {/if}
        {#if front}
            <div><ArrowLeft height={iconSize} width={iconSize} /><Book height={iconSize} width={iconSize} /></div>
            <div>{msg}</div>
        {/if}
    </div>

    <div id="guesses">{guesses}</div>

    {#if showDictionary}
        <Dictionary bind:word="{word}" />
    {/if}

</div>


<style>
    #msg, #buttons {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
    }
    .my-grid {
        display:grid;
        grid-template-columns: 2fr 3fr;
        column-gap: 10px;
        align-items:center;
    }
    .my-grid button {
        margin-bottom:0px;   
    }
    #buttons button {
        width:100px;
        font-size:1rem;
    }
    #msg,#guesses {
        margin:15px auto;
        text-align: center;
    }
    #guesses {
        color: var(--red);
    }
    /* * { */
        /* border:1px solid green; */
    /* } */
</style>
