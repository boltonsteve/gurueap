<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>The best-known t__________ a__________ in Sydney is the Opera House.</div>'
        ],
        a:[
            '<div>The best-known <b><i>tourist attraction</i></b> in Sydney is the Opera House.</div>'
        ]
    },
    {
        q:[
            '<div>In the first few days, visitors to India may suffer from c__________ s__________.</div>'
        ],
        a:[
            '<div>In the first few days, visitors to India may suffer from <b><i>culture shock</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Montego Bay is a popular h__________ r__________ in Jamaica.</div>'
        ],
        a:[
            '<div>Montego Bay is a popular <b><i>holiday resort</i></b> in Jamaica.</div>'
        ]
    },
    {
        q:[
            '<div>In Europe, the p__________ s__________ for tourism is July-August.</div>'
        ],
        a:[
            '<div>In Europe, the <b><i>peak season</i></b> for tourism is July-August.</div>'
        ]
    },
    {
        q:[
            '<div>Nepal has established itself as a popular destination for a__________ t__________ such as trekking and mountaineering.</div>'
        ],
        a:[
            '<div>Nepal has established itself as a popular destination for <b><i>adventure tourism</i></b> such as trekking and mountaineering.</div>'
        ]
    },
    {
        q:[
            '<div>In the long run, the best solution to traffic congestion is free, convenient p__________ t__________.</div>'
        ],
        a:[
            '<div>In the long run, the best solution to traffic congestion is free, convenient <b><i>public transport</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Environmentally-conscious travelers have triggered a growth in e__________-t__________.</div>'
        ],
        a:[
            '<div>Environmentally-conscious travelers have triggered a growth in <b><i>eco-tourism</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Sadly, an influx of Western holiday-makers has resulted in c__________ d__________.</div>'
        ],
        a:[
            '<div>Sadly, an influx of Western holiday-makers has resulted in <b><i>cultural degradation</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Jim once visited Japan on a b__________ t__________ but didn’t have time to do any sightseeing.</div>'
        ],
        a:[
            '<div>Jim once visited Japan on a <b><i>business trip</i></b> but didn’t have time to do any sightseeing.</div>'
        ]
    },
    {
        q:[
            '<div>Most tourists come to the outback to enjoy the u__________ s__________.</div>'
        ],
        a:[
            '<div>Most tourists come to the outback to enjoy the <b><i>unspoiled scenery</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>People say that travel b__________ the m__________, but it is not always true.</div>'
        ],
        a:[
            '<div>People say that travel <b><i>broadens</i></b> the <b><i>mind</i></b>, but it is not always true.</div>'
        ]
    },
    {
        q:[
            '<div>With all these low__________-c__________ airlines, international travel has become more affordable.</div>'
        ],
        a:[
            '<div>With all these <b><i>low-cost</i></b> airlines, international travel has become more affordable.</div>'
        ]
    },
    {
        q:[
            '<div>In reality, the l__________ i__________ do not always benefit from tourism.</div>'
        ],
        a:[
            '<div>In reality, the <b><i>local inhabitants</i></b> do not always benefit from tourism.</div>'
        ]
    },
    {
        q:[
            '<div>You may suffer from j__________-l__________ if you fly from Europe to the Far East.</div>'
        ],
        a:[
            '<div>You may suffer from <b><i>jet-lag</i></b> if you fly from Europe to the Far East.</div>'
        ]
    },
    {
        q:[
            '<div>Resorts like Kuta and Sanur boomed with the advent of m__________ t__________ in the late 20th century.</div>'
        ],
        a:[
            '<div>Resorts like Kuta and Sanur boomed with the advent of <b><i>mass tourism</i></b> in the late 20th century.</div>'
        ]
    },
    {
        q:[
            '<div>More t__________ f__________ are needed to accommodate the needs of holiday-makers.</div>'
        ],
        a:[
            '<div>More <b><i>tourist facilities</i></b> are needed to accommodate the needs of holiday-makers.</div>'
        ]
    },
    {
        q:[
            '<div>Unless you are a citizen of the EU, you’ll need to a__________ for a v__________.</div>'
        ],
        a:[
            '<div>Unless you are a citizen of the EU, you’ll need to <b><i>apply</i></b> for a <b><i>visa</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The city sky-line has been transformed with the construction of dozens of h__________-r__________ hotels.</div>'
        ],
        a:[
            '<div>The city sky-line has been transformed with the construction of dozens of <b><i>high-rise</i></b> hotels.</div>'
        ]
    },
    {
        q:[
            '<div>B__________-p__________ tend to spend less money than older, more conventional tourists.</div>'
        ],
        a:[
            '<div><b><i>Back-packers</i></b> tend to spend less money than older, more conventional tourists.</div>'
        ]
    },
    {
        q:[
            '<div>It can be hard to keep kids occupied on a l__________-h__________ flight, like the one from London to Tokyo.</div>'
        ],
        a:[
            '<div>It can be hard to keep kids occupied on a <b><i>long-haul</i></b> flight, like the one from London to Tokyo.</div>'
        ]
    }
]

</script>

<Multiplayer title="Tourism and Travel" qa={qa} />
