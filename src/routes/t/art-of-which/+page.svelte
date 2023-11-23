<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            'Much effort went into the project.',
            'The results of the project were amazing.'
        ],
        a:[
            'Much effort went into the project, the results of which were amazing.'
        ]
    },
    {
        q:[
            'The hotel has seven bedrooms.',
            'Three of them are en suite.'
        ],
        a:[
            'The hotel has seven bedrooms, three of which are en suite.'
        ]
    },
    {
        q:[
            'The city underwent many changes.',
            'Some were major changes and others were minor.'
        ],
        a:[
            'The city underwent many changes, some of which were major, others minor.'
        ]
    },
    {
        q:[
            'The total amounts were 55, 67 and 88.',
            'These are all impressive numbers.'
        ],
        a:[
            'The total amounts were 55, 67 and 88, all of which are impressive numbers.'
        ]
    },
    {
        q:[
            'Twenty islands in Orkney are inhabited.',
            'Altogether there are 70 islands.'
        ],
        a:[
            'Altogether there are 70 islands in Orkney, 20 of which are inhabited.'
        ]
    },
    {
        q:[
            'IALF has over a thousand GE students.',
            'More than 50% live in Denpasar.'
        ],
        a:[
            'IALF has over a thousand GE students, more than 50% of whom live in Denpasar.'
        ]
    },
    {
        q:[
            'There are several possible solutions.',
            'None of the solutions are ideal.'
        ],
        a:[
            'There are several possible solutions, none of which are ideal.'
        ]
    },
    {
        q:[
            'Children used to engage in outdoor activities.',
            'These activities are now mostly in decline.'
        ],
        a:[
            'Children used to engage in outdoor activities, most of which are now in decline.'
        ]
    },
    {
        q:[
            'Ten passengers were seriously injured.',
            'One later died.'
        ],
        a:[
            'Ten passengers were seriously injured, one of whom later died.'
        ]
    },
    {
        q:[
            'The company employs 48 skilled engineers.',
            'Eight are Indonesian.'
        ],
        a:[
            'The company employs 48 skilled engineers, eight of whom are Indonesian.'
        ]
    }
]


</script>

<Multiplayer title="the art of 'which'" qa={qa} />
