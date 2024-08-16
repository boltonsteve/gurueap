<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>There is still debate over the relative influence of __________ or __________ on a child’s intelligence.</div>'
        ],
        a:[
            '<div>There is still debate over the relative influence of <b><i>nature</i></b> or <b><i>nurture</i></b> on a child’s intelligence.</div>'
        ]
    },
    {
        q:[
            '<div>Physical characteristics, such as height, eye-color and facial appearance, are __________.</div>'
        ],
        a:[
            '<div>Physical characteristics, such as height, eye-color and facial appearance, are <b><i>genetically inherited</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>A child’s __________ development is more affected by environmental factors than its __________ development is.</div>'
        ],
        a:[
            '<div>A child’s <b><i>mental</i></b> development is more affected by environmental factors than its <b><i>physical</i></b> development is.</div>'
        ]
    },
    {
        q:[
            '<div>Most children in the 10-14 __________ will experience a growth spurt with the onset of puberty.</div>'
        ],
        a:[
            '<div>Most children in the 10-14 <b><i>age group</i></b> will experience a growth spurt with the onset of puberty.</div>'
        ]
    },
    {
        q:[
            '<div>How can children acquire __________ if they do not mix with other kids?</div>'
        ],
        a:[
            '<div>How can children acquire <b><i>social skills</i></b> if they do not mix with other kids?</div>'
        ]
    },
    {
        q:[
            '<div>__________ in children focuses information processing, language learning, and other aspects of brain development.</div>'
        ],
        a:[
            '<div><b><i>Cognitive development</i></b> in children focuses information processing, language learning, and other aspects of brain development.</div>'
        ]
    },
    {
        q:[
            '<div>Many teenagers go through a __________ when they develop an identity independent from their parents and other adults.</div>'
        ],
        a:[
            '<div>Many teenagers go through a <b><i>rebellious phase</i></b> when they develop an identity independent from their parents and other adults.</div>'
        ]
    },
    {
        q:[
            '<div>__________ parents may delay the development of independence in their children.</div>'
        ],
        a:[
            '<div><b><i>Overprotective</i></b> parents may delay the development of independence in their children.</div>'
        ]
    },
    {
        q:[
            '<div>Pre-school gives children an opportunity to __________ with peers.</div>'
        ],
        a:[
            '<div>Pre-school gives children an opportunity to <b><i>interact</i></b> with peers.</div>'
        ]
    },
    {
        q:[
            '<div>__________ may push teenagers to experiment with drugs and alcohol.</div>'
        ],
        a:[
            '<div><b><i>Peer pressure</i></b> may push teenagers to experiment with drugs and alcohol.</div>'
        ]
    },
    {
        q:[
            '<div>__________ such as OCD and autism seem to have increased in recent years.</div>'
        ],
        a:[
            '<div><b><i>Behavioral disorders</i></b> such as OCD and autism seem to have increased in recent years.</div>'
        ]
    },
    {
        q:[
            '<div>Children may not have a __________ sense of right and wrong.</div>'
        ],
        a:[
            '<div>Children may not have a <b><i>fully-developed</i></b> sense of right and wrong.</div>'
        ]
    },
    {
        q:[
            '<div>The age between childhood and adulthood is known as __________.</div>'
        ],
        a:[
            '<div>The age between childhood and adulthood is known as <b><i>adolescence</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Children develop __________, such as crawling, walking, and balancing, at different rates.</div>'
        ],
        a:[
            '<div>Children develop <b><i>motor skills</i></b>, such as crawling, walking, and balancing, at different rates.</div>'
        ]
    },
    {
        q:[
            '<div>Most people believe that __________ have more impact on the development of personality than genetic factors do.</div>'
        ],
        a:[
            '<div>Most people believe that <b><i>environmental factors</i></b> have more impact on the development of personality than genetic factors do.</div>'
        ]
    },
    {
        q:[
            '<div>Such new skills as smiling for the first time, waving bye-bye, and playing with others are known as __________.</div>'
        ],
        a:[
            '<div>Such new skills as smiling for the first time, waving bye-bye, and playing with others are known as <b><i>developmental milestones</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>All children need adequate __________ in order to grow properly.</div>'
        ],
        a:[
            '<div>All children need adequate <b><i>nutrition</i></b> in order to grow properly.</div>'
        ]
    },
    {
        q:[
            '<div>Playing games with others is one way of learning to __________.</div>'
        ],
        a:[
            '<div>Playing games with others is one way of learning to <b><i>share</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>When both parents are working, they may have to spend much of their income on __________.</div>'
        ],
        a:[
            '<div>When both parents are working, they may have to spend much of their income on <b><i>child care</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>__________ means ‘able to deal with other people in a normal or healthy way’.</div>'
        ],
        a:[
            '<div><b><i>Well-adjusted</i></b> means ‘able to deal with other people in a normal or healthy way’.</div>'
        ]
    }
]

</script>

<Multiplayer title="Body and Mind" qa={qa} />
