<script>
  import { base } from '$app/paths';
    console.log(base);

    const links = [
        {
            title: "It or this?",
            href: "it-or-this",
            keywords: ['referencing','substitution','CC']
        },
        {
            title: "(And) besides",
            href: "and-besides"
        },
        {
            title: "There is Ada",
            href: "there-is-ada"
        },
        {
            title: "When 'become' is not becoming",
            href: "become"
        },
        {
            title: "Youths and young people",
            href: "youths"
        },
        {
            title: "Goodbye to 'By'",
            href: "goodbye-to-by"
        },
        {
            title: "(the) Society",
            href: "the-society"
        },
        {
            title: "Have an impact on..",
            href: "impact"
        },
        {
            title: "Cannot 'also can'",
            href: "also-can"
        }
    ]

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
    console.log(menu);

</script>

<div class="mb-3 mw-600">
<h1>Posts</h1>
{@html menu}
</div>

