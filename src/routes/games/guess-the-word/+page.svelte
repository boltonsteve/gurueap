<script>
    import { sublists } from '$lib/sublists.js';
    import Dictionary from '../../components/Dictionary.svelte';

    /* let word = 'courteous'; */
    let rand,sublist,wordForms,word;
    let showDictionary = false;
    let showNextWordButton = true;
    let showClearButton = false;

    let count = 0;

    const doToggles = () => {
        showNextWordButton = !showNextWordButton;
        showClearButton = !showClearButton;
        showDictionary = !showDictionary;
    }

    const nextWord = () => {
        
        rand = Math.floor(Math.random() * 10);
        sublist = sublists[rand];
        rand = Math.floor(Math.random() * sublist.length);
        wordForms = sublist[rand].split(' ');
        word = wordForms[0];

        console.log("word: " + word);
        count ++;
        doToggles();
    }

</script>

<div class="mb-3 mw-500">

    <img src="/img/guess.png" alt="guess" style="height:200px;float:right;">
    <h1>Guess the word!</h1>
    <p>Read the definitions and examples and..<br><b><i>Guess the word!</i></b></p>

    {#if showNextWordButton}
        <button class="btn btn-outline-primary" on:click={nextWord}>get word</button>
    {/if}

    {#if showClearButton}
        <button class="btn btn-outline-primary" on:click={doToggles}>clear</button>
    {/if}

    {#if showDictionary}
        <Dictionary bind:word="{word}" mode="guess" />
    {/if}

</div>
