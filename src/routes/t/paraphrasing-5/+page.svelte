<script>
    import Highlighter from '../../components/Highlighter.svelte'

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

    // ********** Set up ORI **********
    let ori = 'Many more species are at risk of extinction than scientists thought. That is because some species depend on another for their survival, so if one disappears, many more that have gone largely unnoticed by conservationists will follow. There are 12,200 species at risk according to the World Conservation Union (IUCN) Red List, the definitive audit of rare, threatened and endangered species. The true number, however, is likely to be much higher, says a team led by Liam Pin Koh at the National University of Singapore (Young, 2004, p.12).';

    // ********** Set up PARA **********
    let para = 'Koh, of the National University of Singapore (in Young, 2004) warns that there are more species in danger of disappearing than the 12,200 recorded on the World Conservation Union’s (IUCN) Red List, the official audit of rare, threatened and endangered species. This under-counting has occurred, he says, because conservationists have not recognised the dependence of some species on other endangered species. Once these have become extinct, these other species will also disappear.';

</script>

<Highlighter title="Paraphrasing - 5" items={items} highlighted={highlighted} ori={ori} para={para} />
