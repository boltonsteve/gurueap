<script>
    import SvelteSeo from "svelte-seo"
    import { tooltip } from '$lib/tooltip';
    import { scale } from "svelte/transition";
    let show = false;
</script>

<SvelteSeo
    title="Research",
    description="Showing that 'research' is usually uncountable, plus examples."
/>

<div class="mw-500 mb-3">

    <img src="/img/researcher.png" class="img-fluid rounded" alt="researcher">

    <h1 class="tooltip" title="Almost never plural! Usually uncountable." use:tooltip>Research(es)</h1>

    <p class="ml-3 font-italic">Several <span class="font-weight-bold text-danger">researches</span> have proven that nuclear energy is not as dangerous as people think.</p>

    <p>Actually there's nothing 'wrong' with this. I just looks odd to a native speaker because <b><i>research</i></b> is nearly always uncountable:</p>

    <p class="ml-3 font-italic">Much <span class="font-weight-bold text-success">research</span> has proven that nuclear energy is not as dangerous as people think.</p>

    <p>Investigate the differences between <a href="https://skell.sketchengine.eu/#result?lang=en&query=research&f=concordance" target="_blank">research</a> (uncountable) and <a href="https://skell.sketchengine.eu/#result?lang=en&query=researches&f=concordance" target="_blank">research</a> (countable). Then try Google's NGRAM viewer to see <a href="https://books.google.com/ngrams/graph?content=research%2Cresearches&year_start=1800&year_end=2019&corpus=en-2019&smoothing=3" target="_blank">which form of the word is more common</a>.</p>

    <p><b><i>Researches</i></b> (plural) did not appear even once in a search I tried at <a href="https://netspeak.org/#q=scientists+conducting+%3F+%3F+" target="_blank">Netspeak.org</a>. However, the results give us two countable synonyms for <b><i>researches</i></b>. Can you find them?</p>

    <button class="btn mb-1 mx-auto" on:click={() => {show = true}}>I can't find them. Please show me.</button>

    {#if show}
        <p class="text-center" in:scale={{duration:1000}}><span class="font-weight-bold text-success font-italic">studies</span> and <span class="font-weight-bold text-success font-italic">experiments</span></p>
    {/if}

    <img src="/img/research.png" class="img-fluid" alt="research">

</div>
