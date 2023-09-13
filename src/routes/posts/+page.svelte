<script>

    import SvelteSeo from "svelte-seo";
    import { base } from '$app/paths';
    import { video, music } from '$lib/emojis.js';
    import { links } from '$lib/links.js';

    let all_kw = [];
    links.forEach( next => {
        let the_keywords = next.keywords;
        all_kw = all_kw.concat(the_keywords);
    });

    var uniqueKw = [...new Set(all_kw)]
    let keywords = uniqueKw.filter(e => e !== undefined).sort();

    let kwOptionsArr = keywords.map( next => `<option value="${next}">${next}</option>` );

    let kwOptions = kwOptionsArr.join('');

    let refineTitle = '';
    let refineKeyword = '';

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    let linksCount = links.length;

    let menu,menuItems;

    let setUp = (mode) => {

        menuItems = links.map( (next,i) => {

            let emoticons = '';
            let includesKeyword = false;

            if('keywords' in next) {
                if(next.keywords.includes('video')) {
                    emoticons += `<span class="text-success mx-1">${video}</span>`;
                }
                if(next.keywords.includes('song')) {
                    emoticons += `<span class="text-success mx-1">${music}</span>`;
                }

                if(next.keywords.includes(refineKeyword)) {
                    includesKeyword = true;
                }

            }

            if(mode == 'keyword') {

                if(includesKeyword) {
                    console.log("refineKeyword: " + refineKeyword);
                    return `<a class="grid-post" href="${base}/posts/${next.href}">${next.title}${emoticons}</a>`;
                }

            } else {
                if(refineTitle == '' || next.title.toLowerCase().match(refineTitle)) {
                    return `<a class="grid-post" href="${base}/posts/${next.href}">${next.title}${emoticons}</a>`;
                }
            }


        })


        menu = menuItems.join('');

    }

    setUp('title');

    const handleTitleInput = (e) => {
        refineTitle = e.target.value.toLowerCase();
        setUp('title');
    }

    const handleKeywordInput = (e) => {
        refineKeyword = e.target.value;
        setUp('keyword');
    }

    const resetTitle = () => {
        refineTitle = '';
        setUp('title');
        document.getElementById('refine_title').focus();
        document.getElementById('refine_category').value = 'select';
    }

</script>

<SvelteSeo
  title="GuruEAP - Posts",
  description="Posts covering various categories from language - vocabulary and grammar - to text coherence and cohesion, fluency in speaking and writing, pronunciation - and more!"
/>

<div class="mb-2 mw-500 wrapper">
    <div class="input-container">
        <input id="refine_title" type="text" class="input-item input-item-1" placeholder="search titles" autofocus on:input={handleTitleInput} value={refineTitle}>
        <button class="input-item input-item-2" on:click={resetTitle}>all</button>
    </div>
    <div class="input-container">

        <select id="refine_category" class="form-control input-item input-item-1" placeholder="search categories" on:input={handleKeywordInput}>
            {@html kwOptions}
            <option value="select" selected>search categories</option>
        </select>
    </div>

</div>

<div class="container">{@html menu}</div>

<style>

select {
    height:30px;
    /* border-radius: 5px; */
}

.wrapper {
    display:grid;
    grid-template-cols: 2fr 1fr;
    gap: 10px;
    /* flex-wrap: wrap; */
}

.container {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    /* display:grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
    /* grid-auto-rows: 80px; */
    /* gap: 15px; */
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
    width:60px;
    cursor:pointer;
}

.input-item-3 {
    text-align: center;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 5px;
}

</style>
