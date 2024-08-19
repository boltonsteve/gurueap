<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>During the C__________ E__________, Indonesia was occupied by the Dutch.</div>'
        ],
        a: [
            '<div>During the <b><i>Colonial Era</i></b>, Indonesia was occupied by the Dutch.</div>'
        ]
    },
    {
        q: [
            '<div>A__________ e__________ suggests the city of Damascus was founded six thousand years ago.</div>'
        ],
        a: [
            '<div><b><i>Archeological evidence</i></b> suggests the city of Damascus was founded six thousand years ago.</div>'
        ]
    },
    {
        q: [
            '<div>The police organised the cases in c_________ o_________.</div>'
        ],
        a: [
            '<div>The police organised the cases in <b><i>chronological order</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>In the M__________ A__________, the only large buildings were castles and cathedrals.</div>'
        ],
        a: [
            '<div>In the <b><i>Middle Ages</i></b>, the only large buildings were castles and cathedrals.</div>'
        ]
    },
    {
        q: [
            '<div>In the late t__________ c__________, many communist countries turned to capitalism.</div>'
        ],
        a: [
            '<div>In the late <b><i>twentieth century</i></b>, many communist countries turned to capitalism.</div>'
        ]
    },
    {
        q: [
            '<div>In r__________ y__________, China has become the world’s most dynamic economy.</div>'
        ],
        a: [
            '<div>In <b><i>recent years</i></b>, China has become the world’s most dynamic economy.</div>'
        ]
    },
    {
        q: [
            '<div>P_________ r__________/r__________ including stone circles and graves, can be found in many parts of the UK.</div>'
        ],
        a: [
            '<div><b><i>Prehistoric remains/ruins</i></b>, including stone circles and graves, can be found in many parts of the UK.</div>'
        ]
    },
    {
        q: [
            '<div>The Olympic Games were first held during c__________ __________s.</div>'
        ],
        a: [
            '<div>The Olympic Games were first held during <b><i>classical times</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>__________ a__________, sailors from Sumatra crossed the Indian Ocean and settled in Madagascar.</div>'
        ],
        a: [
            '<div><b><i>Long ago</i></b>, sailors from Sumatra crossed the Indian Ocean and settled in Madagascar.</div>'
        ]
    },
    {
        q: [
            '<div>Despite the comforts of the modern world, people often feel n__________ for the past.</div>'
        ],
        a: [
            '<div>Despite the comforts of the modern world, people often feel <b><i>nostalgic</i></b> for the past.</div>'
        ]
    },
    {
        q: [
            '<div>In the p__________-9/11 __________s, there has been a greater focus on soft diplomacy.</div>'
        ],
        a: [
            '<div>In the <b><i>post-9/11 years</i></b>, there has been a greater focus on soft diplomacy.</div>'
        ]
    },
    {
        q: [
            '<div>The early t__________ c__________ witnessed the emergence of mass culture, including cinema and popular music.</div>'
        ],
        a: [
            '<div>The early <b><i>twentieth century</i></b> witnessed the emergence of mass culture, including cinema and popular music.</div>'
        ]
    },
    {
        q: [
            '<div>During the C__________ __________s, the USSR and the USA confronted each other with the threat of mutually assured destruction.</div>'
        ],
        a: [
            '<div>During the <b><i>Cold War</i></b> years, the USSR and the USA confronted each other with the threat of mutually assured destruction.</div>'
        ]
    },
    {
        q: [
            '<div>The UK is often viewed as the birthplace of the I__________ R__________.</div>'
        ],
        a: [
            '<div>The UK is often viewed as the birthplace of the <b><i>Industrial Revolution</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>Because of the advent of the Internet, the current era is sometimes known as the I__________ A__________.</div>'
        ],
        a: [
            '<div>Because of the advent of the Internet, the current era is sometimes known as the <b><i>Information Age</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>The N__________ O__________ came to an end when the Asian Financial Crisis struck in 1997-98.</div>'
        ],
        a: [
            '<div>The <b><i>New Order</i></b> came to an end when the Asian Financial Crisis struck in 1997-98.</div>'
        ]
    },
    {
        q: [
            '<div>Central Java is full of a__________ m__________, such as Prambanan and Borobudur.</div>'
        ],
        a: [
            '<div>Central Java is full of <b><i>ancient monuments</i></b>, such as Prambanan and Borobudur.</div>'
        ]
    },
    {
        q: [
            '<div>The voyages of Columbus, Magellan and Vasco da Gama heralded the A__________ of D__________.</div>'
        ],
        a: [
            '<div>The voyages of Columbus, Magellan and Vasco da Gama heralded the <b><i>Age of Discovery</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>S__________ i__________, Indonesia’s population has multiplied several times.</div>'
        ],
        a: [
            '<div><b><i>Since independence</i></b>, Indonesia’s population has multiplied several times.</div>'
        ]
    },
    {
        q: [
            '<div>Should old buildings be preserved for p__________ or should they simply be knocked down?</div>'
        ],
        a: [
            '<div>Should old buildings be preserved for <b><i>posterity</i></b> or should they simply be knocked down?</div>'
        ]
    }
]


</script>

<Multiplayer title="Time and History" qa={qa} />
