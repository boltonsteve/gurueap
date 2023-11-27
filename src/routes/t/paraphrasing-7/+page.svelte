<script>
    import Highlighter from '../../components/Highlighter.svelte'

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

    // ********** Set up ORI **********
    let ori = 'Trade in the necessities of life such as food and simple tools is probably at least as old as our species. What is particularly surprising, however, is that our taste for objects with no obvious survival value – trinkets, luxury items and ‘prestige goods’ – also goes way back. Recent findings in Africa suggest that decorative objects were being manufactured and traded more than 100,000 years ago (Douglas, 2004, p25).';

    // ********** Set up PARA **********
    let para = 'It is highly likely that humans have been trading in non-essential goods such as jewellery for almost as long as they have been trading in food. There is now evidence from Africa that trade in such goods began over 100,000 years ago (Douglas, 2004).';

</script>

<Highlighter title="Paraphrasing - 7" items={items} highlighted={highlighted} ori={ori} para={para} />
