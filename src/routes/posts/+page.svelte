<script>
    import { base } from '$app/paths';

    import { video, music } from '$lib/emojis.js'
    import { links } from '$lib/links.js';

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    let linksCount = links.length;

    let menu,menuDivs;

    menuDivs = links.map( next => {
        let emoticons = '';
        if('keywords' in next) {
            if(next.keywords.includes('video')) {
                emoticons += `${video}&nbsp;`;
            }
            if(next.keywords.includes('song')) {
                emoticons += `${music}&nbsp;`;
            }
        }

        return `<div class="mb-2 menu text-center">
            <a href="${base}/posts/${next.href}" class="link-menu">${next.title}</a> <span class="text-success">${emoticons}</span>
        </div>`
    })

    menu = menuDivs.join('');

</script>

<div class="mb-3 mw-500">
    <!--<input id="refine" type="text" class="form-control" autofocus>-->
    <!--<h1 class="text-center">{linksCount} Posts</h1>-->
    <img src="/img/lemon-squeezy-class.png" class="img-fluid rounded mb-3" alt="Lemon Squeezy Class" style="border:1px solid #bbbbbb;">
    {@html menu}
</div>

