<script>
    import SvelteSeo from "svelte-seo"
    import { onMount } from 'svelte';
    import { sublists } from '$lib/sublists.js';
    import Dictionary from '../../components/Dictionary.svelte';

    let myInput = '';

    let rand,sublist,wordForms,word,wL,gL;

    let msg = '';
    let guesses = '';
    let guess = '';
    let corrCount = 0;
    
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
        /* console.log(e); */
        guess = e.target.value;
        /* if(e.key == 'Enter') { */
        /* } */
    }
    
    const getCloser = (wL,gL) => {
        console.log('wL: ' + wL + ' gl: ' + gL);
        return wL > gL ? "It's closer to the back of the dictionary." : "It's closer to the front of the dictionary.";
    }

    const checkWord = () => {

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
                console.log('wordArr',wordArr);
                console.log('guessArr',guessArr);

                if(corrCount == 0) {
                    wL = word.charCodeAt(0);
                    gL = guess.charCodeAt(0);
                    msg = getCloser(wL,gL);
                    document.getElementById('input').value = '';
                    document.getElementById('input').focus();
                } else if(corrCount == 1) {
                    wL = word.charCodeAt(1);
                    gL = guess.charCodeAt(1);
                    msg = 'The first letter is correct.<br>';

                    if(guess.length > 1) {
                        msg += getCloser(wL,gL);
                    }

                    document.getElementById('input').value = word[0];
                    document.getElementById('input').focus();
                } else {
                    wL = word.charCodeAt(corrCount);
                    gL = guess.charCodeAt(corrCount);

                    msg = 'The first ' + corrCount + ' letters are correct.<br>';

                    if(word.length > guess.length) {
                        if(guess.length > corrCount) {
                            msg += getCloser(wL,gL);
                        } else {
                            msg += "It's closer to the back of the dictionary.";
                        }

                    } else {
                        if(guess.length > corrCount) {
                            msg += getCloser(wL,gL);
                        } else {
                            msg += "It's closer to the front of the dictionary.";
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

        console.log(msg);

        document.getElementById('input').focus();

    }

    onMount(() => {
		/* console.log('the component has mounted'); */
		myInput = document.getElementById('input').focus();
	});

</script>

<SvelteSeo
title="Look it up!"
description="The app selects a random word from the Academic Word List (AWL). You guess the word based on feedback from the app."
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,Academic Word List,games"
 /> 

<div class="mb-3 mw-500">

    <h1>Look it up!</h1>

    <img src="/img/dictionary.png" class="mx-auto" alt="dictionary" style="max-width:500px;">
        
    <p>Try to guess the word chosen from the dictionary by the app.<br>Type a guess then press 'enter' or click (or tap) 'check'.</p>

    {#if showGetWordButton}
        <button class="btn btn-outline-success" on:click={getWord}>get word</button>
    {/if}

    {#if showClearButton}
        <button class="btn btn-outline-info" on:click={clearWord}>next word</button>
    {/if}

    {#if showWordButton}
        <button class="btn btn-outline-danger" on:click={showWord}>show word</button>
    {/if}

    {#if showCheckButton}
        <button class="btn btn-outline-primary" on:click={checkWord}>check</button>
    {/if}

    <input id="input" class="form-control mt-2 text-center" on:input={handleInput} on:keyup={getKey}>
    <div id="msg">{@html msg}</div>
    <div id="guesses">{guesses}</div>

    {#if showDictionary}
        <Dictionary bind:word="{word}" />
    {/if}

</div>


<style>
    button {
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
    /*     border:1px solid green; */
    /* } */
</style>
