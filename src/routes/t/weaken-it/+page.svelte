<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [

    {
        q:[
            'Computers are more a hindrance than a help.'
        ],
        a:[
            'Computers can be more a hindrance than a help.'
        ]
    },
    {
        q:[
            'Censorship of the media is essential in Indonesia.'
        ],
        a:[
            'In certain situations, censorship of the media is essential in Indonesia.'
        ]
    },
    {
        q:[
            'Men and women can never be equal.'
        ],
        a:[
            'It would appear that men and women can never be equal.'
        ]
    },
    {
        q:[
            'Gay marriage is wrong.'
        ],
        a:[
            'Gay marriage is wrong, at least according to Trump supporters.'
        ]
    },
    {
        q:[
            'People should wait until they are at least 24 before getting married.'
        ],
        a:[
            'Ideally, people should wait until they are at least 24 before getting married.'
        ]
    },
    {
        q:[
            'Waste materials should be recycled.'
        ],
        a:[
            'Wherever possible, waste materials should be recycled.'
        ]
    },
    {
        q:[
            'People of different nationality can never live together peacefully.'
        ],
        a:[
            'People of different nationality often struggle to live together peacefully.'
        ]
    },
    {
        q:[
            'People should carry guns for self-defence.'
        ],
        a:[
            'In a war zone, people should carry guns for self-defence.'
        ]
    },
    {
        q:[
            'To stop pollution we should stop using motor vehicles and ride bicycles instead.'
        ],
        a:[
            'To stop pollution, one solution might be to stop using motor vehicles and ride bicycles instead.'
        ]
    },
    {
        q:[
            'English is easier to learn than Chinese.'
        ],
        a:[
            'In terms of writing, English is easier to learn than Chinese.'
        ]
    }
]

</script>

<Multiplayer title="Weaken that claim!" qa={qa} />
