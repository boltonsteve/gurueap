<script>
    import Highlighter from '../../components/Highlighter.svelte'

    // ********** Set up ITEMS **********
    const items = [
        'syn 1',
        'syn 2',
        'syn 3',
        'wf',
        'syn 4',
        'order of info',
        'acknowledgement'
    ]

    const highlighted = [
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

    let ori = 'Although examples of management practice can be traced back several thousand years, the development of management as a field of knowledge is recent. Much of the impetus for developing management theories and principles came from the Industrial Revolution and the factory growth in the early 1800’s. With factories came a widespread need to coordinate large numbers of people in producing goods (Bartol et al, 2001, p.33).';

    let para = 'When demand for factory workers increased, there was a parallel increase in demand for management (Bartol et al, 2001). Although management dates back several millennia, it is only recently that it has become an independent field of study, in particular since the rapid expansion of factories during the industrial revolution.';

</script>

<Highlighter title="Paraphrasing - 4" items={items} highlighted={highlighted} ori={ori} para={para} />
