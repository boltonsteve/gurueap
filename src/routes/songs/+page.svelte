<script>
    import SvelteSeo from "svelte-seo"
    import { songs } from '$lib/songs.js';
    import { video, music } from '$lib/emojis.js'

    songs.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    let songsCount = songs.length;

    import { base } from '$app/paths';

    const menuDivs = songs.map( next => {
        let emoticons = '';
        if('keywords' in next) {
            if(next.keywords.includes('video')) {
                emoticons += `${video}&nbsp;`;
            }
            if(next.keywords.includes('song')) {
                emoticons += `${music}&nbsp;`;
            }
        }

        return `<div class="mb-0 text-center">
            <a class="song-title" href="${base}/songs/${next.href}">${next.title}</a> <span class="text-success">${emoticons}</span>
        </div>
        <p class="mt-0 mb-2 song-desc text-center">${next.description}</p>`
    })

    const menu = menuDivs.join('');

</script>

<SvelteSeo
  title="GuruEAP - Songs",
  description="Songs that demonstrate various aspects of language, for example lexical and grammatical structures, that often become lost in translation from other languages into English. Performed by EAP students, many of whom are preparing for IELTS."
/>

<div class="mb-3 mw-500">
    <img src="/img/steve-baby.png" class="mx-auto mb-3 w-25" alt="gurueap">
    {@html menu}
</div>

<style>
img {
    border: 7px solid white; 
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    rotate: -5deg;
}
</style>

