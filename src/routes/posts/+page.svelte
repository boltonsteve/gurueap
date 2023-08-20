<script>
    import { links } from '$lib/links.js';
    console.log(links);

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    import { base } from '$app/paths';
    console.log(base);

    const menuDivs = links.map( next => {
        let k = 'keywords' in next ? `<div>${next.keywords.join(', ')}</div>` : ``;

        return `<div class="row-col cols-11 mb-2 border border-dark rounded" style="align-items:center;">
            <div class="menu-item">
                <a href="${base}/posts/${next.href}" class="link-menu">${next.title}</a>
            </div>
            <div class="keywords">${k}</div>
        </div>`
    })

    const menu = menuDivs.join('');

</script>

<div class="mb-3 mw-600">
    <h1>Posts</h1>
    {@html menu}
</div>

