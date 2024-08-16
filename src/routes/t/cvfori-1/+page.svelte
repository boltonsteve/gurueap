<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Her __________ includes her grandparents, uncles, aunts and cousins.</div>'
        ],
        a:[
            '<div>Her <b><i>extended family</i></b> includes her grandparents, uncles, aunts and cousins.</div>'
        ]
    },
    {
        q:[
            '<div>These days the __________, consisting of just parents and children, is the most common family unit.</div>'
        ],
        a:[
            '<div>These days the <b><i>nuclear family</i></b>, consisting of just parents and children, is the most common family unit.</div>'
        ]
    },
    {
        q:[
            '<div>I was lucky to have a very __________, without many disruptions or enforced changes.</div>'
        ],
        a:[
            '<div>I was lucky to have a very <b><i>stable upbringing</i></b>, without many disruptions or enforced changes.</div>'
        ]
    },
    {
        q:[
            '<div>It is said that __________ can be a determining factor in character. The first child, for instance, often exhibits more ambition and sense of responsibility than their younger siblings.</div>'
        ],
        a:[
            '<div>It is said that <b><i>birth order</i></b> can be a determining factor in character. The first child, for instance, often exhibits more ambition and sense of responsibility than their younger siblings.</div>'
        ]
    },
    {
        q:[
            '<div>Should children in __________ be removed by the local authority?</div>'
        ],
        a:[
            '<div>Should children in <b><i>dysfunctional families</i></b> be removed by the local authority?</div>'
        ]
    },
    {
        q:[
            '<div>The __________ is said to create a close bond between mother and child.</div>'
        ],
        a:[
            '<div>The <b><i>maternal instinct</i></b> is said to create a close bond between mother and child.</div>'
        ]
    },
    {
        q:[
            '<div>Because of the rise in divorce rates, __________ are becoming more and more common.</div>'
        ],
        a:[
            '<div>Because of the rise in divorce rates, <b><i>single-parent families</i></b> are becoming more and more common.</div>'
        ]
    },
    {
        q:[
            '<div>Sri has very happy __________, while Dani looks back on his youth with regret.</div>'
        ],
        a:[
            '<div>Sri has very happy <b><i>childhood memories</i></b>, while Dani looks back on his youth with regret.</div>'
        ]
    },
    {
        q:[
            '<div>A very __________ developed between Ipin and his brother Upin. Now they are inseperable!</div>'
        ],
        a:[
            '<div>A very <b><i>close connection</i></b> developed between Ipin and his brother Upin. Now they are inseperable!</div>'
        ]
    },
    {
        q:[
            '<div>By attending pre-school, children may learn to __________ with other kids.</div>'
        ],
        a:[
            '<div>By attending pre-school, children may learn to <b><i>build relationships</i></b> with other kids.</div>'
        ]
    },
    {
        q:[
            '<div>Because __________ takes place behind closed doors, the extent of this crime is often hard to measure.</div>'
        ],
        a:[
            '<div>Because <b><i>domestic violence</i></b> takes place behind closed doors, the extent of this crime is often hard to measure.</div>'
        ]
    },
    {
        q:[
            '<div>At __________ my father used to play folk songs and ask us all to sing along.</div>'
        ],
        a:[
            '<div>At <b><i>family gatherings</i></b> my father used to play folk songs and ask us all to sing along.</div>'
        ]
    },
    {
        q:[
            '<div>Yasmin was an __________, and she tended to be spoiled by her parents.</div>'
        ],
        a:[
            '<div>Yasmin was an <b><i>only child</i></b>, and she tended to be spoiled by her parents.</div>'
        ]
    },
    {
        q:[
            '<div>Some people believe slapping and other forms of corporal punishment should be labeled as __________, and the perpetrators should be prosecuted.</div>'
        ],
        a:[
            '<div>Some people believe slapping and other forms of corporal punishment should be labeled as <b><i>child abuse</i></b>, and the perpetrators should be prosecuted.</div>'
        ]
    },
    {
        q:[
            '<div>Kiki bears a __________ to her mother.</div>'
        ],
        a:[
            '<div>Kiki bears a <b><i>striking resemblance</i></b> to her mother.</div>'
        ]
    },
    {
        q:[
            '<div>Luckily, due to my __________, I was able to get a job in Dunkin Donuts. My uncle is the manager there!</div>'
        ],
        a:[
            '<div>Luckily, due to my <b><i>family connections</i></b>, I was able to get a job in Dunkin Donuts. My uncle is the manager there!</div>'
        ]
    },
    {
        q:[
            '<div>My __________ consists of two sisters and my parents.</div>'
        ],
        a:[
            '<div>My <b><i>immediate family</i></b> consists of two sisters and my parents.</div>'
        ]
    },
    {
        q:[
            '<div>Hamdan comes from a very __________, so he can afford to study overseas.</div>'
        ],
        a:[
            '<div>Hamdan comes from a very <b><i>well-to-do family</i></b>, so he can afford to study overseas.</div>'
        ]
    },
    {
        q:[
            '<div>It is claimed that musical ability can be an __________, passed from generation to generation.</div>'
        ],
        a:[
            '<div>It is claimed that musical ability can be an <b><i>inherited characteristic</i></b>, passed from generation to generation.</div>'
        ]
    },
    {
        q:[
            '<div>My husband comes from a __________. They all get together at least once a year.</div>'
        ],
        a:[
            '<div>My husband comes from a <b><i>close-knit family</i></b>. They all get together at least once a year.</div>'
        ]
    }
]


</script>

<Multiplayer title="Family" qa={qa} />
