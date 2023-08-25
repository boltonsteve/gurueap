<script>
    import { songs } from '$lib/songs.js';
    import { video, music } from '$lib/emojis.js'

    songs.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

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

<div class="mb-3 mw-500">
    <img src="/img/guru-eap.png" class="img-fluid mx-auto mb-3" style="width:200px;" alt="gurueap">
    {@html menu}
</div>

