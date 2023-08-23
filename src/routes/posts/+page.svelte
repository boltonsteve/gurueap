<script>
    import { links } from '$lib/links.js';
    console.log(links);

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    import { base } from '$app/paths';
    console.log(base);

    const menuDivs = links.map( next => {
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
                <a href="${base}/posts/${next.href}" class="link-menu">${next.title}</a> ${emoticons}
        </div>`
    })

    const menu = menuDivs.join('');

</script>

<div class="mb-3 mw-500">
    {@html menu}
</div>

