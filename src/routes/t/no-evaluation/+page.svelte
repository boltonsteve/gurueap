<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>This paragraph will compare living on campus with living in private accommodation.</div>'
        ],
        a: [
            '<div>Living on campus offers students <b><i>advantages</i></b> that living in private accommodation does not.</div>'
        ]
    },
    {
        q: [
            '<div>The topic that I want to discuss is genetically modified foods.</div>'
        ],
        a: [
            '<div>The <b><i>safety</i></b> of genetically modified foods <b><i>is disputed</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>Many people today use credit cards.</div>'
        ],
        a: [
            '<div>Many people today use credit cards, even though there are <b><i>security issues</i></b> associated with their use.</div>'
        ]
    },
    {
        q: [
            '<div>An issue in the modern world is the spread of diseases like Covid.</div>'
        ],
        a: [
            '<div>An <b><i>urgent</i></b> issue in the modern world is the spread of diseases like Covid.</div>'
        ]
    },
    {
        q: [
            '<div>The subject of my paragraph is global warming.</div>'
        ],
        a: [
            '<div>Global warming is a <b><i>threat</i></b> to life on our planet.</div>'
        ]
    },
    {
        q: [
            '<div>The price of sembako has risen in recent months.</div>'
        ],
        a: [
            '<div>The price of sembako has risen in recent months, so that many families are <b><i>struggling</i></b> to make ends meet.</div>'
        ]
    },
    {
        q: [
            '<div>Our teacher is Steve.</div>'
        ],
        a: [
            '<div><b><i>Luckily</i></b> for us, our teacher is Steve.</div>'
        ]
    },
    {
        q:[
            '<div>IALF Bali is close to the centre of Denpasar.</div>'
        ],
        a:[
            '<div>IALF Bali is <b><i>strategically located</i></b> close to the centre of Denpasar.</div>'
        ]
    }
]

</script>

<Multiplayer title="evaluative claims" qa={qa} />
