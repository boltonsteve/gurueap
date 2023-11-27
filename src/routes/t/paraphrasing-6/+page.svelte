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

    // ********** Set up ORI **********
    let ori = 'Over the past few years, financial services and technology have overshadowed traditional manufacturing and mining as key sectors of the economy. This has been reflected in the composition of share markets across the world. Despite these trends, manufacturing is still an important part of the economy, particularly in servicing the building, housing, mining, automotive and rural industries (Gordon, 2004, p.45).';

    // ********** Set up PARA **********
    let para = 'As evidenced by global share markets, the traditional industries of mining and manufacturing have been overtaken in recent years by financial services and technology. Nevertheless, certain industries such as construction, real estate, car manufacture and farming, continue to rely on manufacturing.';

</script>

<Highlighter title="Paraphrasing - 6" items={items} highlighted={highlighted} ori={ori} para={para} />
