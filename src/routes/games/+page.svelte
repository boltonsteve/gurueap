<script>
    import SvelteSeo from "svelte-seo"
    import { games } from '$lib/games.js';

    /* games.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); */

    let gamesCount = games.length;

    import { base } from '$app/paths';

    const menuDivs = games.map( next => {
        return `<div class="mb-0 text-center">
            <a class="song-title" href="${base}/games/${next.href}">${next.title}</a>
        </div>
        <p class="mt-0 mb-2 song-desc text-center">${next.description}</p>`
    })

    const menu = menuDivs.join('');

</script>

<SvelteSeo
  title="GuruEAP - Games",
  description=""
/>

<div class="mb-3 pt-2 mw-500">
    {@html menu}
</div>

<style>
</style>

