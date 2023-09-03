<script>
    import SvelteSeo from "svelte-seo"
    import { base } from '$app/paths';

    import { video, music } from '$lib/emojis.js'
    import { links } from '$lib/links.js';

    let refineTitle = '';
    let refineKeyword = '';

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    let linksCount = links.length;

    let menu,menuDivs;

    let setUp = () => {

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

            console.log("refineTitle: " + refineTitle);

            if(refineTitle == '') {
                return `<div class="mb-2 text-center link-menu">
                    <a href="${base}/posts/${next.href}">${next.title}</a> <span class="text-success">${emoticons}</span>
                </div>`
            } else {
                console.log('Refining..!');
                if(next.title.toLowerCase().match(refineTitle)) {
                    return `<div class="mb-2 text-center link-menu">
                        <a href="${base}/posts/${next.href}">${next.title}</a> <span class="text-success">${emoticons}</span>
                    </div>`
                }
            }

        })

        menu = menuDivs.join('');

    }

    setUp();


    const handleTitleInput = (e) => {
        refineTitle = e.target.value.toLowerCase();
        setUp();
    }

    const handleKeywordInput = (e) => {
        refineKeyword = e.target.value.toLowerCase();
        /* setUp(); */
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

<svelte:head>
    <title>GuruEAP - Posts</title>
</svelte:head>

<div class="mb-3 mw-500">

    <img src="/img/steve-whiteboard.png" class="img-fluid rounded" alt="Lemon Squeezy Class" style="border:1px solid #bbbbbb;">

    <div class="flexbox-container mb-2">
        <input id="refine_title" type="text" class="flexbox-item flexbox-item-1" placeholder="search titles" autofocus on:input={handleTitleInput} value={refineTitle}>
        <button class="flexbox-item flexbox-item-2" on:click={resetTitle}>all</button>
    </div>

    <!--<h1 class="text-center">{linksCount} Posts</h1>-->

    {@html menu}

</div>

<style>
    
.flexbox-container {
    margin: 10px auto;
    display: flex;
    justify-content: center;
    border: 1px solid #bbbbbb;
    border-radius:5px;
    background: #bbbbbb;

}

.flexbox-item {
    border: none;
    font-size: 1.1rem;
}
 
.flexbox-item-1 {
    text-align: center;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 5px 0px 0px 5px;
}

.flexbox-item-2 {
    background-color: #bbbbbb;
    width:70px;
    cursor:pointer;
}

</style>
