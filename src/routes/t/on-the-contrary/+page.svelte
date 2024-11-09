<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>On the contrary, he felt very cool.</div>'
        ],
        a:[
            '<div>He was concerned that the weather would be hot and sticky.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, the facts are suppressed.</div>'
        ],
        a:[
            '<div>Many believe that all the relevant details have been shared with the public.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, they may increase.</div>'
        ],
        a:[
            '<div>Some assume that the numbers will decline as time passes.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, the films were huge hits.</div>'
        ],
        a:[
            '<div>Many critics predicted that the films would flop, given the unconventional storyline.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, it offers great possibilities.</div>'
        ],
        a:[
            '<div>Some people argue that it is too limited to be useful.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, he spoke very clearly.</div>'
        ],
        a:[
            '<div>It was assumed that he might struggle to express his ideas.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, its implementation has widened.</div>'
        ],
        a:[
            '<div>Initially, the project was expected to be restricted in scope.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, intimacy and romance coexist.</div>'
        ],
        a:[
            '<div>There’s a belief that one must sacrifice either intimacy or romance in order to have a successful relationship.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, a great deal is happening.</div>'
        ],
        a:[
            '<div>Some have suggested that nothing of significance is going on right now.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, users admire the vivid colors.</div>'
        ],
        a:[
            '<div>Some have criticized the design for being too bold and distracting.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, the roles are frequently reversed.</div>'
        ],
        a:[
            '<div>Many assume that the characters follow traditional roles.</div>'
        ]
    },
    {
        q:[
            '<div>On the contrary, the entire business is full of surprises.</div>'
        ],
        a:[
            '<div>Most people think they will soon become bored.</div>'
        ]
    }
]

</script>

<Multiplayer title="On the contrary" qa={qa} />
