<script>
    import Highlighter from '../../components/Highlighter.svelte'

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

    // ********** Set up ORI **********
    let ori = 'The Antarctic is the vast source of cold on our planet, just as the sun is the source of our heat, and it exerts tremendous control on our climate,” Jacques Cousteau told the camera. “The cold ocean water around Antarctica flows north to mix with warmer water from the tropics, and its upwellings help to cool both the surface water and our atmosphere, Yet the fragility of this regulating system is now threatened by human activity.” (Audubon, 1990, p.17).';

    // ********** Set up PARA **********
    let para = 'According to Jacques Cousteau (in Audubon, 1990), the activity of people in Antarctica is jeopardising a delicate natural mechanism that controls the earth’s climate. He fears that human activity could interfere with the balance between the sun, the source of the earth’s heat, and the important source of cold from Antarctic waters that flow north and cool the oceans and atmosphere.';

</script>

<Highlighter title="Paraphrasing - 2" items={items} highlighted={highlighted} ori={ori} para={para} />
