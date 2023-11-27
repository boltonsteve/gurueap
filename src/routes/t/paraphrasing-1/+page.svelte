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
        'wo 1',
        'wo 2',
        'wf',
        'acknowledgement'
    ]

    let highlighted = [
        [
            3,
            4,
            100,
            101
        ],
        [
            105,
            106,
            107,
            7,
            8
        ],
        [
            13,
            5,
            null,
            6,
            12,
            111,
            112,
            113
        ],
        [
            115,
            116,
            105,
            14,
            16,
            17
        ],
        [
            129,
            130,
            31,
            32
        ],
        [
            37,
            137
        ],
        [
            0,
            1,
            2,
            3,
            4,
            100,
            101,
            102,
            103,
            104
        ],
        [
            117,
            118,
            119,
            120,
            121,
            122,
            18,
            19,
            20,
            21,
            22,
            23,
            24
        ],
        [
            7,
            106
        ],
        [
            123,
            124,
            125,
            126,
            43,
            44,
            45,
            46,
            47
        ]
    ]

    let ori = 'Vitamin C in large doses not only protects against the common cold but also offers considerable protection against other infectious diseases, both viral and bacterial. I believe that Vitamin C in adequate amounts could considerably decrease the incidence and severity of the flu. (Pauling and Robinson, 1992, p.9)';

    let para = 'Large amounts of Vitamin C provide protection from the common cold as well as some immunity from other viral and bacterial infectious diseases. Pauling and Robinson (1992) believe that sufficient quantities of Vitamin C can reduce the frequency and severity of the flu.';

</script>

<Highlighter title="Paraphrasing - 1" items={items} highlighted={highlighted} ori={ori} para={para} />
