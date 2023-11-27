<script>

    function doSpans(t) {
        let words = t.split(' ');
        let spanArr = words.map( next => `<span>${next}</span>` );
        let spanStr = spanArr.join(' ');
        return spanStr;
    }

    let started = false;
    let words = []
    let spanArr = [];
    let paraHls = [];
    let oriSpanned = '';
    let paraSpanned = '';

    let current = 0;

    // ********** Set up ITEMS **********
    let items = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n'
    ]
    let highlighted = [];
    items.forEach( next => highlighted.push([]) );

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

    // ********** Set up ORI **********
    let ori = 'Few sectors of the stock exchange receive as much political and media attention as the paper and forest products sector. Either the taxation laws regarding tree farming schemes are making headline news, or else political debate over logging in old-growth forests hits the front pages. (Trench, 2004, p.42).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'The paper and forest products sector of the stock exchange are more frequently in the political and media spotlight than many other sectors. Issues such as tax legislation for tree farming schemes and logging in old-growth forests are often debated in the media (Trench, 2004).';
    redrawPara();

    function doItem(e) {
        // Reset current
        current = e.target.id.replace(/i/,'');
        // Highlight current in ORI
        redrawOri();
        // Highlight current in PARA
        redrawPara();
        itemsSpanned = redrawItems();

        // To be taken and used stand-alone
        console.log(highlighted);
    }

    function doOri(e) {
        let id = Number(e.target.id.replace(/o/,''));
        if(highlighted[current].includes(id)) {
            highlighted[current] = highlighted[current].filter((next) => next !== id)
        } else {
            highlighted[current].push(id);
        }
        redrawOri();
    }

    function redrawOri() {
        words = ori.split(' ');
        let toReturn = [];
        words.forEach( (next,i) => {
            if(highlighted[current].includes(i)) {
                toReturn.push(`<span id="o${i}" class="text-success font-weight-bold">${next}</span>`);
            } else {
                toReturn.push(`<span id="o${i}">${next}</span>`);
            }
        })
        oriSpanned = toReturn.join(' ');
    }

    function doPara(e) {
        let id = Number(e.target.id.replace(/p/,''));
        if(highlighted[current].includes(id)) {
            highlighted[current] = highlighted[current].filter((next) => next !== id)
        } else {
            highlighted[current].push(id);
        }
        redrawPara();
    }

    function redrawPara() {
        words = para.split(' ');
        let toReturn = [];
        let countPlus = 100;
        words.forEach( (next,i) => {
            if(highlighted[current].includes(i+countPlus)) {
                toReturn.push(`<span id="p${i+countPlus}" class="text-success font-weight-bold">${next}</span>`);
            } else {
                toReturn.push(`<span id="p${i+countPlus}">${next}</span>`);
            }
        })
        paraSpanned = toReturn.join(' ');
    }


</script>


<div class="container">

    <div>
        <h1 class="text-center">Paraphrasing Strategies</h1>
    <div id="cols">
        <div id="ori" on:click={doOri}>
            <h3 class="text-center">Original</h3>
            {@html oriSpanned}
        </div>
        <div id="para" on:click={doPara}>
            <h3 class="text-center">Paraphrase</h3>
            {@html paraSpanned}
        </div>
    </div>

    <div id="items" on:click={doItem}>{@html itemsSpanned}</div>
    </div>

</div>



<style>

    .container {
        height:100vh;
        max-width:700px;
        margin:0px auto;
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
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:20px;
        margin-bottom:30px;
    }

</style>


[
    [
        3,
        4,
        100,
        101
    ],
    [
        105,
        106,
        107,
        7,
        8
    ],
    [
        13,
        5,
        null,
        6,
        12,
        111,
        112,
        113
    ],
    [
        115,
        116,
        105,
        16,
        17,
        18,
        19,
        20
    ],
    [
        129,
        130,
        31,
        32
    ],
    [
        37,
        137
    ],
    [
        0,
        1,
        2,
        3,
        4,
        100,
        101,
        102,
        103,
        104
    ],
    [
        117,
        118,
        119,
        120,
        121,
        122,
        18,
        19,
        20,
        21,
        22,
        23,
        24
    ],
    [
        7,
        106
    ],
    [
        123,
        124,
        125,
        126,
        43,
        44,
        45,
        46,
        47
    ]
]
