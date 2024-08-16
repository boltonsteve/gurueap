<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Despite my busy work schedule, I manage to spend __________ with my family.</div>'
        ],
        a:[
            '<div>Despite my busy work schedule, I manage to spend <b><i>quality time</i></b> with my family.</div>'
        ]
    },
    {
        q:[
            '<div>Surprisingly, the most common __________ in England is gardening.</div>'
        ],
        a:[
            '<div>Surprisingly, the most common <b><i>recreational activity</i></b> in England is gardening.</div>'
        ]
    },
    {
        q:[
            '<div>Some people prefer __________ like football and baseball to individual sports.</div>'
        ],
        a:[
            '<div>Some people prefer <b><i>team sports</i></b> like football and baseball to individual sports.</div>'
        ]
    },
    {
        q:[
            '<div>My therapist recommended walking as part of my __________.</div>'
        ],
        a:[
            '<div>My therapist recommended walking as part of my <b><i>daily routine</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>On my __________, I like to stay at home and chill out with my family.</div>'
        ],
        a:[
            '<div>On my <b><i>day off</i></b>, I like to stay at home and chill out with my family.</div>'
        ]
    },
    {
        q:[
            '<div>Do your children prefer __________ activities or __________ activities?</div>'
        ],
        a:[
            '<div>Do your children prefer <b><i>outdoor</i></b> activities or <b><i>indoor</i></b> activities?</div>'
        ]
    },
    {
        q:[
            '<div>As a civil servant, how many days __________ do you get?</div>'
        ],
        a:[
            '<div>As a civil servant, how many days <b><i>annual leave</i></b> do you get?</div>'
        ]
    },
    {
        q:[
            '<div>After her husband died, Mrs. Fonseca decided to __________ golf as a __________.</div>'
        ],
        a:[
            '<div>After her husband died, Mrs. Fonseca decided to <b><i>take up</i></b> golf as a <b><i>hobby</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Many children enjoy the sense of __________ engendered by sports like football and badminton.</div>'
        ],
        a:[
            '<div>Many children enjoy the sense of <b><i>competition</i></b> engendered by sports like football and badminton.</div>'
        ]
    },
    {
        q:[
            '<div>Mountain climbing is an increasingly popular __________.</div>'
        ],
        a:[
            '<div>Mountain climbing is an increasingly popular <b><i>leisure activity</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>You look tired. Why don’t you __________ for a bit?</div>'
        ],
        a:[
            '<div>You look tired. Why don’t you <b><i>take it easy</i></b> for a bit?</div>'
        ]
    },
    {
        q:[
            '<div>Recently, __________ like snowboarding and sky-diving have become popular.</div>'
        ],
        a:[
            '<div>Recently, <b><i>extreme sports</i></b> like snowboarding and sky-diving have become popular.</div>'
        ]
    },
    {
        q:[
            '<div>Since he retired, my father has taken up painting to explore his __________.</div>'
        ],
        a:[
            '<div>Since he retired, my father has taken up painting to explore his <b><i>creative side</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>During the __________, flights tend to be more expensive.</div>'
        ],
        a:[
            '<div>During the <b><i>school holidays</i></b>, flights tend to be more expensive.</div>'
        ]
    },
    {
        q:[
            '<div>Most Europeans like to __________ in August, often to the beach.</div>'
        ],
        a:[
            '<div>Most Europeans like to <b><i>go on holiday</i></b> in August, often to the beach.</div>'
        ]
    },
    {
        q:[
            '<div>These days many young people lead a __________, with very little physical exercise.</div>'
        ],
        a:[
            '<div>These days many young people lead a <b><i>sedentary lifestyle</i></b>, with very little physical exercise.</div>'
        ]
    },
    {
        q:[
            '<div>Being a member of a team or club can also provide a much-needed sense of __________.</div>'
        ],
        a:[
            '<div>Being a member of a team or club can also provide a much-needed sense of <b><i>belonging</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>After a hard day’s work, it is good to get some __________.</div>'
        ],
        a:[
            '<div>After a hard day’s work, it is good to get some <b><i>down-time</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>In my __________, I like to go surfing or wind-surfing.</div>'
        ],
        a:[
            '<div>In my <b><i>free time</i></b>, I like to go surfing or wind-surfing.</div>'
        ]
    },
    {
        q:[
            '<div>These days, juggling both job and family commitments, it is not easy to achieve a __________.</div>'
        ],
        a:[
            '<div>These days, juggling both job and family commitments, it is not easy to achieve a <b><i>work life balance</i></b>.</div>'
        ]
    }
]


</script>

<Multiplayer title="Leisure" qa={qa} />
