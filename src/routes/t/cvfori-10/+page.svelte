<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>There are eight planets in our s__________ s__________.</div>'
        ],
        a:[
            '<div>There are eight planets in our <b><i>solar system</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The first m__________ l__________ took place in July 1969.</div>'
        ],
        a:[
            '<div>The first <b><i>moon landing</i></b> took place in July 1969.</div>'
        ]
    },
    {
        q:[
            '<div>The competition between the USA and the USSR to put a man on the moon was known as the S__________ R__________.</div>'
        ],
        a:[
            '<div>The competition between the USA and the USSR to put a man on the moon was known as the <b><i>Space Race</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Space rockets have to overcome the f__________ of g__________ to escape the earth’s atmosphere.</div>'
        ],
        a:[
            '<div>Space rockets have to overcome the <b><i>force</i></b> of <b><i>gravity</i></b> to escape the earth’s atmosphere.</div>'
        ]
    },
    {
        q:[
            '<div>L__________ of o__________ could prove to be an insurmountable obstacle to colonization of the moon.</div>'
        ],
        a:[
            '<div><b><i>Lack</i></b> of <b><i>oxygen</i></b> could prove to be an insurmountable obstacle to colonization of the moon.</div>'
        ]
    },
    {
        q:[
            '<div>I’d like to go into space because I have always wanted to e__________ w__________.</div>'
        ],
        a:[
            '<div>I’d like to go into space because I have always wanted to <b><i>experience weightlessness</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The Apollo 13 l__________ m__________ almost ended in tragedy.</div>'
        ],
        a:[
            '<div>The Apollo 13 <b><i>lunar mission</i></b> almost ended in tragedy.</div>'
        ]
    },
    {
        q:[
            '<div>Many scientists believe there may be i__________ l__________ on other planets in our galaxy.</div>'
        ],
        a:[
            '<div>Many scientists believe there may be <b><i>intelligent life</i></b> on other planets in our galaxy.</div>'
        ]
    },
    {
        q:[
            '<div>The Russian Yuri Gagarin achieved the first m__________ s__________ f__________.</div>'
        ],
        a:[
            '<div>The Russian Yuri Gagarin achieved the first <b><i>manned space flight</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Space technology has had some k__________ b__________ in other fields of science.</div>'
        ],
        a:[
            '<div>Space technology has had some <b><i>knock-on benefits</i></b> in other fields of science.</div>'
        ]
    },
    {
        q:[
            '<div>The earth takes 365 days to o__________ the S__________.</div>'
        ],
        a:[
            '<div>The earth takes 365 days to <b><i>orbit</i></b> the <b><i>Sun</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The c__________ of other p__________ may start with a proposed mission to Mars.</div>'
        ],
        a:[
            '<div>The <b><i>colonization</i></b> of other <b><i>planets</i></b> may start with a proposed mission to Mars.</div>'
        ]
    },
    {
        q:[
            '<div>The USSR was the first country to l__________ a s__________, Sputnik in 1957.</div>'
        ],
        a:[
            '<div>The USSR was the first country to <b><i>launch</i></b> a <b><i>satellite</i></b>, Sputnik in 1957.</div>'
        ]
    },
    {
        q:[
            '<div>The planet Mars is considered too cold to s__________/s__________ life.</div>'
        ],
        a:[
            '<div>The planet Mars is considered too cold to <b><i>sustain/support</i></b> life.</div>'
        ]
    },
    {
        q:[
            '<div>Some travel companies have already started to promote s__________ t__________.</div>'
        ],
        a:[
            '<div>Some travel companies have already started to promote <b><i>space tourism</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Many people dismissed the US space program as a w__________ of m__________.</div>'
        ],
        a:[
            '<div>Many people dismissed the US space program as a <b><i>waste</i></b> of <b><i>money</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Space has inspired many works of s__________ f__________, such as Star Wars.</div>'
        ],
        a:[
            '<div>Space has inspired many works of <b><i>science fiction</i></b>, such as Star Wars.</div>'
        ]
    },
    {
        q:[
            '<div>The practical benefits of s__________ e__________ are often disputed.</div>'
        ],
        a:[
            '<div>The practical benefits of <b><i>space exploration</i></b> are often disputed.</div>'
        ]
    },
    {
        q:[
            '<div>Neil Armstrong was the first man to walk on the s__________ of the m__________.</div>'
        ],
        a:[
            '<div>Neil Armstrong was the first man to walk on the <b><i>surface</i></b> of the <b><i>moon</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Voyager is an u__________ s__________ that has traveled throughout the solar system.</div>'
        ],
        a:[
            '<div>Voyager is an <b><i>unmanned spacecraft</i></b> that has traveled throughout the solar system.</div>'
        ]
    }
]


</script>

<Multiplayer title="Space" qa={qa} />
