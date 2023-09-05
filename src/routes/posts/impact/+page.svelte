<script>
    import SvelteSeo from "svelte-seo"
    import Youtube from "svelte-youtube-embed";
    import { flagIndo } from '$lib/flags.js';
</script>

<SvelteSeo
    title="Impact",
  description="Contrasting the English collocation with 'impact' with the Indonesian."
/>

<div class="mb-3 mw-500">

    <h1>Have an impact on..</h1>

    <p class="ml-3 font-italic">Passive smoking <span class="text-danger font-weight-bold">brings negative impact for</span> people who do not smoke.</p>
    
    <p>{@html flagIndo} This is a collocation problem for Indonesians translating "..membawa dampak negatif untuk.."</p>

    <p>In English the collocation is:</p>

    <p class="ml-3 font-italic">Passive smoking <span class="text-success font-weight-bold">has a negative impact on</span> people who do not smoke.</p>

    <p class="font-weight-bold ml-3">s.th./s.o. + has + an impact + on + s.th./s.o.</p>

    <p>Using the correct collocation will <span class="text-success font-weight-bold">have a very positive impact on</span> your IELTS score for vocabulary in both speaking and writing!</p>

    <p>Listen to <a href="../songs/impact-song" target="_blank">The Impact Song</a>:</p>

    <a href="../songs/impact-song" target="_blank"><img src="/img/impact-song.png" class="img-fluid rounded" alt="impact song thumbnail"></a>

</div>
