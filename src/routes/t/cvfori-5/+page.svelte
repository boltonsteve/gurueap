<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Erik __________ the University of Western Australia in 2009.</div>'
        ],
        a:[
            '<div>Erik <b><i>graduated from</i></b> the University of Western Australia in 2009.</div>'
        ]
    },
    {
        q:[
            '<div>In most countries, a foreign language is stipulated as a key subject in the __________.</div>'
        ],
        a:[
            '<div>In most countries, a foreign language is stipulated as a key subject in the <b><i>national curriculum</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Some private schools are __________, while all state schools are co-educational.</div>'
        ],
        a:[
            '<div>Some private schools are <b><i>single-sex</i></b>, while all state schools are co-educational.</div>'
        ]
    },
    {
        q:[
            '<div>Unfortunately, the high school __________ rate is very high in rural areas.</div>'
        ],
        a:[
            '<div>Unfortunately, the high school <b><i>drop out</i></b> rate is very high in rural areas.</div>'
        ]
    },
    {
        q:[
            '<div>At the age of eleven, Hugh was sent away to __________ school.</div>'
        ],
        a:[
            '<div>At the age of eleven, Hugh was sent away to <b><i>boarding</i></b> school.</div>'
        ]
    },
    {
        q:[
            '<div>My tutor asked me to __________ an __________ at the end of the week.</div>'
        ],
        a:[
            '<div>My tutor asked me to <b><i>submit</i></b> an <b><i>assignment</i></b> at the end of the week.</div>'
        ]
    },
    {
        q:[
            '<div>__________ education consists of two levels, namely playgroup and kindergarten.</div>'
        ],
        a:[
            '<div><b><i>Pre-school</i></b> education consists of two levels, namely playgroup and kindergarten.</div>'
        ]
    },
    {
        q:[
            '<div>The only way to get __________ is to study hard from day one.</div>'
        ],
        a:[
            '<div>The only way to get <b><i>good grades</i></b> is to study hard from day one.</div>'
        ]
    },
    {
        q:[
            '<div>One of the MDGs is the achievement of __________ basic education.</div>'
        ],
        a:[
            '<div>One of the MDGs is the achievement of <b><i>universal</i></b> basic education.</div>'
        ]
    },
    {
        q:[
            '<div>In my day, __________ was only an optional subject.</div>'
        ],
        a:[
            '<div>In my day, <b><i>Religious Education</i></b> was only an optional subject.</div>'
        ]
    },
    {
        q:[
            '<div>Helmut couldn’t afford the __________ so he applied for a scholarship.</div>'
        ],
        a:[
            '<div>Helmut couldn’t afford the <b><i>tuition fees</i></b> so he applied for a scholarship.</div>'
        ]
    },
    {
        q:[
            '<div>The biggest change in the __________ has been the de-segregation of public schools.</div>'
        ],
        a:[
            '<div>The biggest change in the <b><i>school system</i></b> has been the de-segregation of public schools.</div>'
        ]
    },
    {
        q:[
            '<div>In most countries, __________ starts as early as the age of six.</div>'
        ],
        a:[
            '<div>In most countries, <b><i>primary school</i></b> starts as early as the age of six.</div>'
        ]
    },
    {
        q:[
            '<div>At school we used __________ to memorise our multiplication tables.</div>'
        ],
        a:[
            '<div>At school we used <b><i>rote learning</i></b> to memorise our multiplication tables.</div>'
        ]
    },
    {
        q:[
            '<div>__________ can be more appropriate for students who are focused on certain careers.</div>'
        ],
        a:[
            '<div><b><i>Vocational schools</i></b> can be more appropriate for students who are focused on certain careers.</div>'
        ]
    },
    {
        q:[
            '<div>In recent decades, __________ has replaced more teacher-centered methods.</div>'
        ],
        a:[
            '<div>In recent decades, <b><i>learner-centered education</i></b> has replaced more teacher-centered methods.</div>'
        ]
    },
    {
        q:[
            '<div>Instead of attending college, I decided to do an __________ at a local engineering firm.</div>'
        ],
        a:[
            '<div>Instead of attending college, I decided to do an <b><i>apprenticeship</i></b> at a local engineering firm.</div>'
        ]
    },
    {
        q:[
            '<div>Do you think that __________ like ADHD are getting more common?</div>'
        ],
        a:[
            '<div>Do you think that <b><i>learning disorders</i></b> like ADHD are getting more common?</div>'
        ]
    },
    {
        q:[
            '<div>I really don’t believe music should be a __________ in school.</div>'
        ],
        a:[
            '<div>I really don’t believe music should be a <b><i>compulsory (core) subject</i></b> in school.</div>'
        ]
    },
    {
        q:[
            '<div>These days, in order to get a decent job, you first have to __________.</div>'
        ],
        a:[
            '<div>These days, in order to get a decent job, you first have to <b><i>get a degree</i></b>.</div>'
        ]
    }
]


</script>

<Multiplayer title="Education" qa={qa} />
