<script>

    import SvelteSeo from "svelte-seo";
    import { links } from '$lib/links.js';
    import { Film, PersonArmsUp, SquareHalf, MusicNoteBeamed, CircleHalf, Youtube, Pencil, Ear, Hammer } from "svelte-bootstrap-icons";

    links.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));

    let showBadge = false;
    let cards = [];

    // Unique array of keywords (I know this could be tidier..!)
    let all_kw = [];
    links.forEach( next => {
        let the_keywords = next.keywords;
        all_kw = all_kw.concat(the_keywords);
    });
    var uniqueKw = [...new Set(all_kw)]
    let keywords = uniqueKw.filter(e => e !== undefined).sort();

    let refineTitle = '';
    let refineKeyword = '';
    let menu,inclKeyword;

    let setUp = (mode) => {

        cards = links.map( next => {
            inclKeyword = next.keywords.includes(refineKeyword) ? true : false;
            if(mode == 'keyword') {
                if(inclKeyword) {
                    return next;
                } else {
                    return;
                }
            } else {
                // mode = 'title'
                if(refineTitle == '' || next.title.toLowerCase().match(refineTitle)) {
                    return next;
                } else {
                    return;
                }
            }
        })

        cards = cards.filter(e => e !== undefined).sort();

    }

    setUp('title');

    const handleTitleInput = (e) => {
        refineTitle = e.target.value.toLowerCase();
        setUp('title');
    }

    const handleKeywordInput = (e) => {
        refineKeyword = e.target.value;
        setUp('keyword');
        document.getElementById('refine_title').value = '';
        document.getElementById('refine_title').focus();
    }

    const resetTitle = (e) => {
        refineTitle = '';
        setUp('title');
        document.getElementById('refine_title').focus();
        document.getElementById('refine_category').value = 'select';
    }

</script>

<SvelteSeo
    title="GuruEAP - Posts"
    description="Posts covering various categories from language - vocabulary and grammar - to text coherence and cohesion, fluency in speaking and writing, pronunciation - all of which aim to help students preparing for IELTS and for study abroad."
/>

<div class="mb-1 wrapper">

    <div class="input-container">
        <input id="refine_title" type="text" class="input-item input-item-1" placeholder="search titles" autofocus on:input={handleTitleInput} value={refineTitle}>
        <button class="input-item input-item-2" on:click={resetTitle}>all</button>
    </div>

    <div>
        <select id="refine_category" class="form-control" placeholder="search categories" on:input={handleKeywordInput}>
            <option value="select">select keyword</option>
            {#each keywords as keyword}
                <option value="{keyword}">{keyword}</option>
            {/each}
        </select>
    </div>

</div>

<div class="container">
    {#each cards as card}
        <a class="menu-item" href="../{card.href}" style="padding:0px 10px 0px 10px;">

            <div class="badges">
                {#if card.keywords.includes('Bahasa Indonesia') || card.keywords.includes('borrowed word')}
                    <div class="badge badge-indo">
                        <div class="flag">
                            <div class="red">&nbsp;</div>
                            <div class="white">&nbsp;</div>
                        </div>
                    </div>
                {/if}
                {#if card.keywords.includes('video')}
                    <div class="badge badge-video"><Youtube height={25} width={25} /></div>
                {/if}
                {#if card.keywords.includes('song')}
                    <div class="badge badge-song"><MusicNoteBeamed height={20} width={20} /></div>
                {/if}
                {#if card.keywords.includes('listening')}
                    <div class="badge badge-listening"><Ear height={20} width={20} /></div>
                {/if}
                {#if card.keywords.includes('activity')}
                    <div class="badge badge-activity"><PersonArmsUp height={30} width={20} /></div>
                {/if}
            </div>

            {card.title}
        </a>
    {/each}
</div>

<style>

/* * { */
/*     border:1px solid red; */
/* } */

.flag {
    height:16px;
    width:20px;
    border: 1px solid var(--red);
}

.flag .red, .flag .white {
    height:8px;
    width:20px;
}

.flag .red {
    background: var(--red);
}

.flag .white {
    background: var(--light);
}

.badges {
    display:flex;
    flex-direction:row-reverse;
    height:30px;
    width:98%;
    gap:0px;
    justify-content:end;
    /* align-items:center; */
    position: absolute;
    top:2px
}

select {
    height:30px;
}

.wrapper div {
    width: 270px;
}

.wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 10px;
}

.container {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
}

.input-container {
    display: flex;
    justify-content: center;
    text-align: center;
    border: 1px solid #bbbbbb;
    border-radius:5px;
    background: #bbbbbb;
}

#refine_category {
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    font-size: 1.1rem;
    text-align:center;
    cursor: pointer;
    height:32px;
    background-color: #fff;
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

.menu-item {
    font-size:1.1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    min-width:230px;
    width:250px;
    height: 100px;
    border:1px solid var(--blue);
    /* border:1px solid #bbbbbb; */
    border-radius: 5px;
    margin:10px;
    text-align:center;
    background: white;
}

.menu-item:hover {
    background: var(--blue);
    color: var(--light);
    text-decoration: none;
}

.badge{
    display:flex;
    margin:auto 2px;
    /* height:30px; */
    /* width:30px; */
    justify-content:center;
    align-items:center;
    border-radius: 30px 30px 30px 30px;
    /* border:1px solid var(--teal); */
    /* background:var(--light); */
}

.badge-indo{
    /* position: absolute; */
    display:flex;
    justify-content:center;
    align-items:center;
    color:var(--red);
    border-radius: 30px 30px 30px 30px;
    /* transform: rotate(90deg); */

    height:30px;
    width:30px;
}

.badge-video {
    color:var(--teal);
}

.badge-song {
    color:var(--teal);
}

.badge-listening {
    color:var(--teal);
}

.badge-activity {
    color:var(--teal);
}


.badge-indo-outer {
    display:grid;
    grid-template-columns: 1fr;
    height:30px;
    width:30px;
    border-radius: 15px 15px 15px 15px;
    border:1px solid var(--teal);
}

.badge-indo-top {
    display:block;
    background:red;
    height:15px;
    width:30px;
    border-radius: 15px 15px 0px 0px;
}

.badge-indo-bottom {
    display:block;
    background:white;
    height:15px;
    width:30px;
    border-radius: 0px 0px 15px 15px;
}

</style>
