<script>
    import { songs } from '$lib/songs.js';

    console.log('songs', songs);

    songs.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    import { base } from '$app/paths';
    console.log(base);

    const menuDivs = songs.map( next => {
    let emoticons = '';

        if('keywords' in next) {
            if(next.keywords.includes('video')) {
                emoticons += '&#127909;&nbsp;';
            }
            if(next.keywords.includes('song')) {
                emoticons += '&#127908;';
            }
        }

        return `<div class="mb-2 menu text-center">
            <a class="song-title" href="${base}/songs/${next.href}" class="link-menu">${next.title}</a> ${emoticons}
            <p class="mt-0">${next.description}</p>
        </div>`
    })

    const menu = menuDivs.join('');

</script>

<div class="mb-3 mw-500">
    <img src="/img/guru-eap.png" class="img-fluid mx-auto mb-3" style="width:200px;" alt="gurueap">
    {@html menu}
</div>

