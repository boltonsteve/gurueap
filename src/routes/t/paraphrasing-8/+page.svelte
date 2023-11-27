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
        'order of info',
        'acknowledgement'
    ]

    let highlighted = [
        [
            3,
            4,
            120
        ],
        [
            9,
            10,
            11,
            123,
            124
        ],
        [
            17,
            18,
            19,
            20,
            133,
            134,
            135,
            136,
            137
        ],
        [
            128,
            22
        ],
        [
            40,
            41,
            143,
            144,
            145
        ],
        [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            107,
            108,
            109,
            110,
            111,
            112,
            113,
            114,
            46,
            47,
            48,
            49,
            50,
            51,
            52,
            53,
            54,
            55,
            56,
            57,
            58,
            59,
            60
        ],
        [
            61,
            62,
            63,
            64,
            65,
            115,
            116,
            117,
            118
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
    let ori = 'Although examples of management practice can be traced back several thousand years, the development of management as a field of knowledge is recent. Much of the impetus for developing management theories and principles came from the Industrial Revolution and the factory growth in the early 1800’s. With factories came a widespread need to coordinate large numbers of people in producing goods (Bartol et al, 2001, p.33).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'When demand for factory workers increased, there was a parallel increase in demand for management (Bartol et al, 2001). Although management dates back several millennia, it is only recently that it has become an independent field of study, in particular since the rapid expansion of factories during the industrial revolution.';
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
        <h1 class="text-center">Paraphrasing Strategies - 8</h1>
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
