<script>
    import Highlighter from '../../components/Highlighter.svelte'

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

    // ********** Set up ORI **********
    let ori = 'Of the more than 1000 bicycling deaths each year, three-fourths are caused by head injuries. Half of those killed are school-age children. One study concluded that wearing a bike helmet can reduce the risk of head injury by 85 percent. In an accident, a bike helmet absorbs the shock and cushions the head. (Bike Helmets: Unused Lifesavers 1990, p.348).';

    // ********** Set up PARA **********
    let para = 'The use of a helmet is the key to reducing bicycling fatalities, which are due to head injuries 75% of the time. By cushioning the head upon impact, a helmet can lower the rate of accidental injury by as much as 85%, saving the lives of hundreds of victims annually, half of whom are school children (Bike Helmets: Unused Lifesavers 1990).';

</script>

<Highlighter title="Paraphrasing - 4" items={items} highlighted={highlighted} ori={ori} para={para} />
