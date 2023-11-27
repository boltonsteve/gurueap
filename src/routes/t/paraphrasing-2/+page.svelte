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
        'syn/wf 1',
        'classification',
        'syn 4',
        'syn/wf 2',
        'information',
        'acknowledgement'
    ]

    let highlighted = [
        [
            0,
            1,
            112
        ],
        [
            145,
            4,
            5,
            6,
            7,
            146,
            147,
            148
        ],
        [
            9,
            10,
            122
        ],
        [
            72,
            73,
            114
        ],
        [
            67,
            68,
            69,
            132,
            133,
            134,
            135,
            136,
            143,
            144,
            150,
            151,
            145,
            146,
            147,
            148,
            149,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49
        ],
        [
            58,
            59,
            158
        ],
        [
            116,
            65
        ],
        [
            64,
            65,
            66,
            67,
            68,
            null,
            69,
            70,
            71,
            77,
            76,
            75,
            74,
            73,
            72,
            78,
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
            114,
            113,
            115,
            116,
            117,
            118,
            119,
            120,
            121,
            122,
            123
        ],
        [
            100,
            101,
            102,
            103,
            104,
            105,
            106,
            29,
            30,
            76,
            77,
            78
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
    let ori = 'The Antarctic is the vast source of cold on our planet, just as the sun is the source of our heat, and it exerts tremendous control on our climate,” Jacques Cousteau told the camera. “The cold ocean water around Antarctica flows north to mix with warmer water from the tropics, and its upwellings help to cool both the surface water and our atmosphere, Yet the fragility of this regulating system is now threatened by human activity.” (Audubon, 1990, p.17).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'According to Jacques Cousteau (in Audubon, 1990), the activity of people in Antarctica is jeopardising a delicate natural mechanism that controls the earth’s climate. He fears that human activity could interfere with the balance between the sun, the source of the earth’s heat, and the important source of cold from Antarctic waters that flow north and cool the oceans and atmosphere.';
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
        <h1 class="text-center">Paraphrasing Strategies 2</h1>
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
