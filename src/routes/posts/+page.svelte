<script>

    import SvelteSeo from "svelte-seo"
    import { base } from '$app/paths';

    import { video, music } from '$lib/emojis.js'
    import { links } from '$lib/links.js';

    let refineTitle = '';
    let refineKeyword = '';

    let students = [
        'anggi',
        'aulia',
        'baya',
        'budhi',
        'chandra',
        'enny',
        'faisal',
        'hafidz',
        'husnul',
        'iin',
        'johan',
        'malik',
        'ninik',
        'sul',
        'taufiq',
        'yani'
    ]

    // = Shuffle array
    students.sort(() => Math.random() - 0.5);

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    let linksCount = links.length;

    let menu,menuItems,countGap,mugshot;

    let setCountGap = () => {
        countGap = Math.floor(Math.random() * 8) + 5;
    }

    let setUp = () => {

        setCountGap();
        let mugCount = 0;

        menuItems = links.map( (next,i) => {

            mugshot = '';
            if(i%countGap == 0) {
                mugshot = `<div class="grid-post"><img src="/img/students/${students[mugCount]}.png" class="img-fluid" alt="student photo"></div>`;
                mugCount ++;
                setCountGap();
            }

            let emoticons = '';

            if('keywords' in next) {
                if(next.keywords.includes('video')) {
                    emoticons += `<span class="text-success mx-1">${video}</span>`;
                }
                if(next.keywords.includes('song')) {
                    emoticons += `<span class="text-success mx-1">${music}</span>`;
                }
            }

            if(refineTitle == '' || next.title.toLowerCase().match(refineTitle)) {
                return `<a class="grid-post" href="${base}/posts/${next.href}">${next.title}${emoticons}</a>${mugshot}`;
            }

        })

        menu = menuItems.join('');

    }

    setUp();

    const handleTitleInput = (e) => {
        refineTitle = e.target.value.toLowerCase();
        setUp();
    }

    const handleKeywordInput = (e) => {
        refineKeyword = e.target.value.toLowerCase();
    }

    const resetTitle = () => {
        refineTitle = '';
        setUp();
        document.getElementById('refine_title').focus();
    }

</script>

<SvelteSeo
  title="GuruEAP - Posts",
  description="Posts covering various categories from language - vocabulary and grammar - to text coherence and cohesion, fluency in speaking and writing, pronunciation - and more!"
/>

<div class="mb-2 mw-500">
    <!--<img src="/img/steve-whiteboard.png" class="img-fluid rounded" alt="Lemon Squeezy Class" style="border:1px solid #bbbbbb;">-->
    <div class="input-container">
        <input id="refine_title" type="text" class="input-item input-item-1" placeholder="search posts" autofocus on:input={handleTitleInput} value={refineTitle}>
        <button class="input-item input-item-2" on:click={resetTitle}>all</button>
    </div>

</div>

<div class="container">{@html menu}</div>

<style>

.container {
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 80px;
    gap: 15px;
}

.input-container {
    display: flex;
    justify-content: center;
    border: 1px solid #bbbbbb;
    border-radius:5px;
    background: #bbbbbb;

}

.input-item {
    border: none;
    font-size: 1.1rem;
}
 
.input-item-1 {
    text-align: center;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 5px 0px 0px 5px;
}

.input-item-2 {
    background-color: #bbbbbb;
    width:70px;
    cursor:pointer;
}

</style>
