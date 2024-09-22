<script>
    import SvelteSeo from "svelte-seo"

    export let title;
    export let items;
    export let highlighted;
    export let ori;
    export let para;

    let y=0;

    let words = []
    let oriSpanned = '';
    let paraSpanned = '';

    let current = 0;
    let hl = 'font-weight-bold font-italic text-primary';

    // ********** Set up ORI **********
    redrawOri();

    // ********** Set up PARA **********
    redrawPara();

    function redrawItems() {
        let itemsArr = items.map( (next,i) => {
            let toReturn = '';
            if(i == current) {
                toReturn = `<div id="i${i}" class="text-light bg-dark item">${next}</div>`;
            } else {
                toReturn = `<div id="i${i}" class="item">${next}</div>`;
            }
            return toReturn;
        })
        return itemsArr.join(' ');
    }
    let itemsSpanned = redrawItems();

    function doItem(e) {
        // Reset current
        current = e.target.id.replace(/i/,'');
        // Highlight current in ORI
        redrawOri();
        // Highlight current in PARA
        redrawPara();
        itemsSpanned = redrawItems();
    }

    function redrawOri() {
        words = ori.split(' ');
        let toReturn = [];
        words.forEach( (next,i) => {
            if(highlighted[current].includes(i)) {
                toReturn.push(`<span id="o${i}" class="${hl}">${next}</span>`);
            } else {
                toReturn.push(`<span id="o${i}">${next}</span>`);
            }
        })
        oriSpanned = toReturn.join(' ');
    }

    function redrawPara() {
        words = para.split(' ');
        let toReturn = [];
        let countPlus = 100;
        words.forEach( (next,i) => {
            if(highlighted[current].includes(i+countPlus)) {
                toReturn.push(`<span id="p${i+countPlus}" class="${hl}">${next}</span>`);
            } else {
                toReturn.push(`<span id="p${i+countPlus}">${next}</span>`);
            }
        })
        paraSpanned = toReturn.join(' ');
    }


</script>

<SvelteSeo
    title="{title}"
  description="Paraphrasing Analysis"
/>


<div class="container">

    <div>
        <h1 class="text-center">{title}</h1>
        <div id="cols">
            <div id="ori">
                <h3 class="text-center">Original</h3>
                {@html oriSpanned}
            </div>
            <div id="para">
                <h3 class="text-center">Paraphrase</h3>
                {@html paraSpanned}
            </div>
        </div>
        <div id="items" on:click={doItem}>{@html itemsSpanned}</div>
    </div>

</div>

<style>

    div {
        /* border:1px solid pink; */
    }

    h3 {
        margin:5px;
        padding:0px;
    }
    h1 {
        margin-top:0px;
    }

    .container {
        max-width:700px;
        margin:0px auto;
        height:100vh;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    #items {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        gap:10px;
        font-size:0.8rem;
    }

    #cols {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap:20px;
        margin-bottom:30px;
    }

    #cols > div {
        max-width:340px;
    }

</style>
