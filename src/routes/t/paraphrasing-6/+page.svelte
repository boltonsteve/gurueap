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
        'syn 1',
        'syn 2',
        'syn 3',
        'syn 4',
        'syn 5',
        'syn 6',
        'syn 7',
        'syn 8',
        'syn 9',
        'syn 10',
        'public domain'
    ]

    let highlighted = [
        [
            116,
            117,
            118,
            0,
            1,
            2,
            3,
            4
        ],
        [
            10,
            115
        ],
        [
            101,
            102,
            24,
            25
        ],
        [
            103,
            104,
            105,
            29,
            30,
            31,
            32,
            33
        ],
        [
            34,
            35,
            36,
            124
        ],
        [
            50,
            129
        ],
        [
            51,
            130,
            131
        ],
        [
            132,
            133,
            53
        ],
        [
            55,
            135
        ],
        [
            136,
            137,
            138,
            139,
            39,
            40,
            41,
            42,
            43
        ],
        [
            5,
            6,
            120,
            121,
            122,
            123,
            7,
            8
        ]
    ]

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
    let ori = 'Over the past few years, financial services and technology have overshadowed traditional manufacturing and mining as key sectors of the economy. This has been reflected in the composition of share markets across the world. Despite these trends, manufacturing is still an important part of the economy, particularly in servicing the building, housing, mining, automotive and rural industries (Gordon, 2004, p.45).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'As evidenced by global share markets, the traditional industries of mining and manufacturing have been overtaken in recent years by financial services and technology. Nevertheless, certain industries such as construction, real estate, car manufacture and farming, continue to rely on manufacturing.';
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
        <h1 class="text-center">Paraphrasing Strategies - 6</h1>
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
