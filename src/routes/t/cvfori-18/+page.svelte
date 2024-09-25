<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Most people agree that c__________ p__________ is more effective than crime detection.</div>'
        ],
        a:[
            '<div>Most people agree that <b><i>crime prevention</i></b> is more effective than crime detection.</div>'
        ]
    },
    {
        q:[
            '<div>After three hours of deliberation, the jury r____________ a ve___________.</div>'
        ],
        a:[
            '<div>After three hours of deliberation, the jury <b><i>reach</i></b> a <b><i>verdict</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Not everyone who co____________ a cr___________ is arrested and charged.</div>'
        ],
        a:[
            '<div>Not everyone who <b><i>commits</i></b> a <b><i>crime</i></b> is arrested and charged.</div>'
        ]
    },
    {
        q:[
            '<div>The d________ p__________ has been abandoned by most countries in the world.</div>'
        ],
        a:[
            '<div>The <b><i>death penalty</i></b> has been abandoned by most countries in the world.</div>'
        ]
    },
    {
        q:[
            '<div>Surprisingly, the c__________ ra__________ in major US cities has halved since the early 1990s.</div>'
        ],
        a:[
            '<div>Surprisingly, the <b><i>crime rate</i></b> in major US cities has halved since the early 1990s.</div>'
        ]
    },
    {
        q:[
            '<div>In some Asian countries d__________ s__________ can be punishable by death.</div>'
        ],
        a:[
            '<div>In some Asian countries <b><i>drug smuggling</i></b> can be punishable by death.</div>'
        ]
    },
    {
        q:[
            '<div>After fleeing the scene, Lee Harvey Oswald was a__________ in a movie theatre.</div>'
        ],
        a:[
            '<div>After fleeing the scene, Lee Harvey Oswald was <b><i>arrested</i></b> in a movie theatre.</div>'
        ]
    },
    {
        q:[
            '<div>L__________ im__________ is the longest prison sentence that can be given.</div>'
        ],
        a:[
            '<div><b><i>Life imprisonment</i></b> is the longest prison sentence that can be given.</div>'
        ]
    },
    {
        q:[
            '<div>Even pe__________ c__________ like shoplifting need to be investigated.</div>'
        ],
        a:[
            '<div>Even <b><i>petty crimes</i></b> like shoplifting need to be investigated.</div>'
        ]
    },
    {
        q:[
            '<div>Kelly was suspected of murder but not charged because of a l__________ of e__________.</div>'
        ],
        a:[
            '<div>Kelly was suspected of murder but not charged because of a <b><i>lack</i></b> of <b><i>evidence</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Without effective l__________ en__________, criminals feel invulnerable.</div>'
        ],
        a:[
            '<div>Without effective <b><i>law enforcement</i></b>, criminals feel invulnerable.</div>'
        ]
    },
    {
        q:[
            '<div>Originally the ju__________ sy__________ was established as a check against state power.</div>'
        ],
        a:[
            '<div>Originally the <b><i>jury system</i></b> was established as a check against state power.</div>'
        ]
    },
    {
        q:[
            '<div>The cornerstone of our justice system is the idea that one is i__________ until proven g__________.</div>'
        ],
        a:[
            '<div>The cornerstone of our justice system is the idea that one is <b><i>innocent</i></b> until proven <b><i>guilty</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The media expressed surprise at the h__________ s__________ that the judge passed.</div>'
        ],
        a:[
            '<div>The media expressed surprise at the <b><i>heavy/harsh sentence</i></b> that the judge passed.</div>'
        ]
    },
    {
        q:[
            '<div>V__________ c__________ are those offenses which involve physical force or the threat of it.</div>'
        ],
        a:[
            '<div><b><i>Violent crimes</i></b> are those offenses which involve physical force or the threat of it.</div>'
        ]
    },
    {
        q:[
            '<div>Can anyone truly say that they have never br__________ the l__________?</div>'
        ],
        a:[
            '<div>Can anyone truly say that they have never <b><i>broken</i></b> the <b><i>law</i></b>?</div>'
        ]
    },
    {
        q:[
            '<div>The athlete Oscar Pistorius was ch__________ with mu__________.</div>'
        ],
        a:[
            '<div>The athlete Oscar Pistorius was <b><i>charged</i></b> with <b><i>murder</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The villagers plan to s__________ the mining company for human rights violations.</div>'
        ],
        a:[
            '<div>The villagers plan to <b><i>sue</i></b> the mining company for human rights violations.</div>'
        ]
    },
    {
        q:[
            '<div>Parliament has p__________ a l__________ to make cyber-bullying a crime.</div>'
        ],
        a:[
            '<div>Parliament has <b><i>passed</i></b> a <b><i>law</i></b> to make cyber-bullying a crime.</div>'
        ]
    },
    {
        q:[
            '<div>The defendant was fo__________ g__________ and sentenced to two years imprisonment.</div>'
        ],
        a:[
            '<div>The defendant was <b><i>found guilty</i></b> and sentenced to two years imprisonment.</div>'
        ]
    },
    {
        q:[
            '<div>The courtroom where the t__________ took place was closed to the media.</div>'
        ],
        a:[
            '<div>The courtroom where the <b><i>trial</i></b> took place was closed to the media.</div>'
        ]
    }
]


</script>

<Multiplayer title="The Law" qa={qa} />
