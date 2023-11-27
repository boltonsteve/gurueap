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
        'nominalisation',
        'structure',
        'syn 2',
        'syn 3',
        'syn 4',
        'acknowledgement'
    ]

    let highlighted = [
        [
            4,
            5,
            6,
            7,
            116,
            117,
            118,
            119
        ],
        [
            14,
            15,
            16,
            17,
            18,
            152,
            153,
            154,
            155,
            156,
            157,
            158,
            160
        ],
        [
            23,
            24,
            25,
            26,
            27,
            35,
            36,
            161,
            162,
            163,
            164,
            165,
            166,
            167,
            168,
            169,
            170,
            171
        ],
        [
            41,
            42,
            116,
            117
        ],
        [
            43,
            44,
            123,
            124
        ],
        [
            52,
            53,
            54,
            132,
            133,
            134
        ],
        [
            71,
            72,
            73,
            74,
            75,
            76,
            77,
            78,
            79,
            null,
            80,
            81,
            82,
            83,
            84,
            85,
            86,
            87,
            100,
            102,
            101,
            103,
            104,
            105,
            106,
            107,
            108,
            109
        ],
        [],
        [],
        [],
        [],
        [],
        [],
        []
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
    let ori = 'Many more species are at risk of extinction than scientists thought. That is because some species depend on another for their survival, so if one disappears, many more that have gone largely unnoticed by conservationists will follow. There are 12,200 species at risk according to the World Conservation Union (IUCN) Red List, the definitive audit of rare, threatened and endangered species. The true number, however, is likely to be much higher, says a team led by Liam Pin Koh at the National University of Singapore (Young, 2004, p.12).';
    redrawOri();

    // ********** Set up PARA **********
    let para = 'Koh, of the National University of Singapore (in Young, 2004) warns that there are more species in danger of disappearing than the 12,200 recorded on the World Conservation Union’s (IUCN) Red List, the official audit of rare, threatened and endangered species. This under-counting has occurred, he says, because conservationists have not recognised the dependence of some species on other endangered species. Once these have become extinct, these other species will also disappear.';
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
        <h1 class="text-center">Paraphrasing Strategies - 5</h1>
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
