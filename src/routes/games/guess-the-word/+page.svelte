<script>
    import SvelteSeo from "svelte-seo"
    import { sublists } from '$lib/sublists.js';
    import Dictionary from '../../components/Dictionary.svelte';

    /* let word = 'courteous'; */
    let rand,sublist,wordForms,word;
    let mode = 'guess';
    let showClearButton = false;

    let showDictionary = false;
    let showGetNextButton = true;
    let showWordButton = false;

    const doShowWord = () => {
        mode = 'dictionary';
        showWordButton = false;
        showClearButton = true;
    }

    const getNext = () => {

        rand = Math.floor(Math.random() * 10);
        sublist = sublists[rand];
        rand = Math.floor(Math.random() * sublist.length);
        wordForms = sublist[rand].split(' ');
        word = wordForms[0];

        showDictionary = true;
        showGetNextButton = false;
        showWordButton = true;

    }

    const doClear = () => {

        showClearButton = false;
        mode = 'guess';
        word = '';

        showDictionary = false;
        showGetNextButton = true;
        showWordButton = false;

    }

</script>

<SvelteSeo
title="Guess the word!"
description="Read definitions and examples and guess the word!"
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,games,Academic Word List"
 />

<div class="mb-3 mw-500">

    <img src="/img/guess.png" alt="guess" style="height:250px;float:right;">
    <h1>Guess the word!</h1>
    <p>Read the definitions and examples and..<br><b><i>Guess the word!</i></b></p>

    {#if showGetNextButton}
        <button class="btn btn-outline-success" on:click={getNext}>get word</button>
    {/if}

    {#if showClearButton}
        <button class="btn btn-outline-info" on:click={doClear}>clear</button>
    {/if}

    {#if showWordButton && mode=="guess"}
        <button class="btn btn-outline-danger" on:click={doShowWord}>show word</button>
    {/if}

    {#if showDictionary}
        <Dictionary bind:word="{word}" bind:mode="{mode}" />
    {/if}

</div>


<style>
    button {
        width:100px;
        font-size:1rem;
    }
</style>
