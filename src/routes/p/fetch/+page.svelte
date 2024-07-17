<script>

    import Dictionary from '../../components/Dictionary.svelte';

    let word = 'courteous';
    let showDictionary = false;

    let count = 0;
    let words = [
        'banana',
        'orange',
        'apple'
    ]


    const tryWord = () => {
        word = words[count];
        console.log("word: " + word);
        count ++;
        showDictionary = true;
    }

</script>

<div class="mb-3 mw-500">

    {#if showDictionary}
        <Dictionary bind:word="{word}" />
    {/if}

    <button class="btn btn-outline-primary" on:click={tryWord}>try word</button>
    <button class="btn btn-outline-primary" on:click={() => {showDictionary=false;}}>clear</button>

</div>
