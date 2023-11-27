<script>
    import Highlighter from '../../components/Highlighter.svelte'

    // ********** Set up ITEMS **********
    let items = [
        'pd 1',
        'pd 2',
        'syn 1',
        'syn 2',
        'pd 3',
        'pd 4',
        'syn 3'
    ]

    let highlighted = [
        [
            100,
            101,
            102,
            103,
            104,
            105,
            14,
            15,
            16,
            17,
            18,
            19
        ],
        [
            107,
            108,
            109,
            3,
            4,
            5
        ],
        [
            6,
            11,
            12,
            9,
            10,
            113,
            114,
            115,
            116,
            117,
            118
        ],
        [
            22,
            23,
            126,
            127
        ],
        [
            129,
            130,
            131,
            25,
            26,
            27
        ],
        [
            37,
            38,
            39,
            40,
            133,
            134,
            135,
            136
        ],
        [
            139,
            140,
            141,
            142,
            41,
            42,
            43,
            44
        ]
    ]

    // ********** Set up ORI **********
    let ori = 'Few sectors of the stock exchange receive as much political and media attention as the paper and forest products sector. Either the taxation laws regarding tree farming schemes are making headline news, or else political debate over logging in old-growth forests hits the front pages. (Trench, 2004, p.42).';

    // ********** Set up PARA **********
    let para = 'The paper and forest products sector of the stock exchange are more frequently in the political and media spotlight than many other sectors. Issues such as tax legislation for tree farming schemes and logging in old-growth forests are often debated in the media (Trench, 2004).';

</script>

<Highlighter title="Paraphrasing - 3" items={items} highlighted={highlighted} ori={ori} para={para} />
