<script>
    import SvelteSeo from "svelte-seo"
    import { SongStore } from '$lib/stores.js'
    import { video, music } from '$lib/emojis.js'
    import Card from '../components/Card.svelte'

    $SongStore.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    let songsCount = $SongStore.length;

</script>

<SvelteSeo
  title="GuruEAP - Songs"
  description="Songs that demonstrate various aspects of language, for example lexical and grammatical structures, that often become lost in translation from other languages into English. Performed by EAP students, many of whom are preparing for IELTS."
/>

    <div><img src="/img/steve-baby.png" class="mx-auto my-2" alt="gurueap" style="width:150px;"></div>
<div class="mb-3 pt-2 container">
    {#each $SongStore as song}
        <div class="card">
            <Card title="{song.title}" icon="songs" path="./songs/{song.href}" text="{song.description}" />
        </div>
    {/each}
</div>

<style>

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card {
    margin:10px;
}

img {
    border: 7px solid white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    rotate: -5deg;
}

</style>

