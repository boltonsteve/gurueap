<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>The best-known __________ in Sydney is the Opera House.</div>'
        ],
        a:[
            '<div>The best-known <b><i>tourist attraction</i></b> in Sydney is the Opera House.</div>'
        ]
    },
    {
        q:[
            '<div>In the first few days, visitors to India may suffer from __________.</div>'
        ],
        a:[
            '<div>In the first few days, visitors to India may suffer from <b><i>culture shock</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Montego Bay is a popular __________ in Jamaica.</div>'
        ],
        a:[
            '<div>Montego Bay is a popular <b><i>holiday resort</i></b> in Jamaica.</div>'
        ]
    },
    {
        q:[
            '<div>In Europe, the __________ for tourism is July-August.</div>'
        ],
        a:[
            '<div>In Europe, the <b><i>peak season</i></b> for tourism is July-August.</div>'
        ]
    },
    {
        q:[
            '<div>Nepal has established itself as a popular destination for __________ such as trekking and mountaineering.</div>'
        ],
        a:[
            '<div>Nepal has established itself as a popular destination for <b><i>adventure tourism</i></b> such as trekking and mountaineering.</div>'
        ]
    },
    {
        q:[
            '<div>In the long run, the best solution to traffic congestion is free, convenient __________.</div>'
        ],
        a:[
            '<div>In the long run, the best solution to traffic congestion is free, convenient <b><i>public transport</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Environmentally-conscious travelers have triggered a growth in __________.</div>'
        ],
        a:[
            '<div>Environmentally-conscious travelers have triggered a growth in <b><i>eco-tourism</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Sadly, an influx of Western holiday-makers has resulted in __________.</div>'
        ],
        a:[
            '<div>Sadly, an influx of Western holiday-makers has resulted in <b><i>cultural degradation</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Jim once visited Japan on a __________ but didn’t have time to do any sightseeing.</div>'
        ],
        a:[
            '<div>Jim once visited Japan on a <b><i>business trip</i></b> but didn’t have time to do any sightseeing.</div>'
        ]
    },
    {
        q:[
            '<div>Most tourists come to the outback to enjoy the __________.</div>'
        ],
        a:[
            '<div>Most tourists come to the outback to enjoy the <b><i>unspoiled scenery</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>People say that travel __________ the __________, but it is not always true.</div>'
        ],
        a:[
            '<div>People say that travel <b><i>broadens</i></b> the <b><i>mind</i></b>, but it is not always true.</div>'
        ]
    },
    {
        q:[
            '<div>With all these __________ airlines, international travel has become more affordable.</div>'
        ],
        a:[
            '<div>With all these <b><i>low-cost</i></b> airlines, international travel has become more affordable.</div>'
        ]
    },
    {
        q:[
            '<div>In reality, the __________ do not always benefit from tourism.</div>'
        ],
        a:[
            '<div>In reality, the <b><i>local inhabitants</i></b> do not always benefit from tourism.</div>'
        ]
    },
    {
        q:[
            '<div>You may suffer from __________ if you fly from Europe to the Far East.</div>'
        ],
        a:[
            '<div>You may suffer from <b><i>jet-lag</i></b> if you fly from Europe to the Far East.</div>'
        ]
    },
    {
        q:[
            '<div>Resorts like Kuta and Sanur boomed with the advent of __________ in the late 20th century.</div>'
        ],
        a:[
            '<div>Resorts like Kuta and Sanur boomed with the advent of <b><i>mass tourism</i></b> in the late 20th century.</div>'
        ]
    },
    {
        q:[
            '<div>More __________ are needed to accommodate the needs of holiday-makers.</div>'
        ],
        a:[
            '<div>More <b><i>tourist facilities</i></b> are needed to accommodate the needs of holiday-makers.</div>'
        ]
    },
    {
        q:[
            '<div>Unless you are a citizen of the EU, you’ll need to __________ for a __________.</div>'
        ],
        a:[
            '<div>Unless you are a citizen of the EU, you’ll need to <b><i>apply</i></b> for a <b><i>visa</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The city sky-line has been transformed with the construction of dozens of __________ hotels.</div>'
        ],
        a:[
            '<div>The city sky-line has been transformed with the construction of dozens of <b><i>high-rise</i></b> hotels.</div>'
        ]
    },
    {
        q:[
            '<div>__________ tend to spend less money than older, more conventional tourists.</div>'
        ],
        a:[
            '<div><b><i>Back-packers</i></b> tend to spend less money than older, more conventional tourists.</div>'
        ]
    },
    {
        q:[
            '<div>It can be hard to keep kids occupied on a __________ flight, like the one from London to Tokyo.</div>'
        ],
        a:[
            '<div>It can be hard to keep kids occupied on a <b><i>long-haul</i></b> flight, like the one from London to Tokyo.</div>'
        ]
    }
]

</script>

<Multiplayer title="Tourism and Travel" qa={qa} />
