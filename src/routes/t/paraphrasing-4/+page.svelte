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
        'wf 1',
        'wf 2',
        'acknowledgement'
    ]

    let highlighted = [
        [
            5,
            6,
            110,
            111
        ],
        [
            11,
            12,
            114,
            115
        ],
        [
            7,
            8,
            149
        ],
        [
            15,
            16,
            17,
            150,
            151,
            152,
            18,
            148
        ],
        [
            20,
            21,
            154,
            155
        ],
        [
            26,
            27,
            28,
            29,
            101,
            102,
            103,
            104
        ],
        [
            31,
            32,
            33,
            34,
            35,
            36,
            131,
            132,
            133,
            134,
            135,
            136
        ],
        [
            38,
            39,
            37,
            137,
            138,
            139,
            140,
            141
        ],
        [
            41,
            42,
            135
        ],
        [
            50,
            123
        ],
        [
            53,
            54,
            55,
            56,
            57,
            58,
            156,
            157,
            158,
            159,
            160
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
    let ori = 'Of the more than 1000 bicycling deaths each year, three-fourths are caused by head injuries. Half of those killed are school-age children. One study concluded that wearing a bike helmet can reduce the risk of head injury by 85 percent. In an accident, a bike helmet absorbs the shock and cushions the head. (Bike Helmets: Unused Lifesavers 1990, p.348).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'The use of a helmet is the key to reducing bicycling fatalities, which are due to head injuries 75% of the time. By cushioning the head upon impact, a helmet can lower the rate of accidental injury by as much as 85%, saving the lives of hundreds of victims annually, half of whom are school children (Bike Helmets: Unused Lifesavers 1990).';
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
        <h1 class="text-center">Paraphrasing Strategies - 4</h1>

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
