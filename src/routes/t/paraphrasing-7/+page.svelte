<script>

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
        'wf',
        'syn 4',
        'syn 5 (weakening)',
        'acknowledgement'
    ]

    let highlighted = [
        [
            31,
            32,
            33,
            34,
            35,
            36,
            110,
            111
        ],
        [
            114,
            38,
            39,
            40
        ],
        [
            49,
            50,
            51,
            52,
            129,
            130,
            131
        ],
        [
            61,
            133
        ],
        [
            62,
            63,
            138
        ],
        [
            53,
            54,
            100,
            101,
            102,
            103
        ],
        [
            67,
            68,
            69,
            142,
            143
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
    let ori = 'Trade in the necessities of life such as food and simple tools is probably at least as old as our species. What is particularly surprising, however, is that our taste for objects with no obvious survival value – trinkets, luxury items and ‘prestige goods’ – also goes way back. Recent findings in Africa suggest that decorative objects were being manufactured and traded more than 100,000 years ago (Douglas, 2004, p25).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'It is highly likely that humans have been trading in non-essential goods such as jewellery for almost as long as they have been trading in food. There is now evidence from Africa that trade in such goods began over 100,000 years ago (Douglas, 2004).';
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
        <h1 class="text-center">Paraphrasing Strategies - 7</h1>
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
