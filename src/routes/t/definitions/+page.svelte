<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>A scientific theory is a theory like Darwin’s theory.</div>'
        ],
        a: [
            '<div>A scientific theory is a conceptualisation based on observable phenomena, such as Darwin\'s theory of natural selection.</div>'
        ]
    },
    {
        q:[
        '<div>An apple is round, red, and about the size of a fist.</div>'
        ],
        a: [
        '<div>An apple is a fruit that is round, red or green, and about the size of a fist.</div>'
        ]
    },
    {
        q:[
        '<div>Calculus is a tough subject.</div>'
        ],
        a: [
        '<div>Calculus is a branch of mathematics involving the rate of change of observable phenomena.</div>'
        ]
    },
    {
        q:[
        '<div>An ear is an auditory appendage of Homo sapiens and other species.</div>'
        ],
        a: [
        '<div>An ear is an auditory appendage of Homo sapiens and other species.</div>'
        ]
    },
    {
        q:[
        '<div>A unicorn is not a real animal.</div>'
        ],
        a: [
        '<div>A unicorn is a mythical beast resembling a horse, but with a long, protruding horn.</div>'
        ]
    },
    {
        q:[
        '<div>Tornadoes are very dangerous.</div>'
        ],
        a: [
        '<div>Tornadoes are twisting storms characterised by very strong winds capable of destroying buildings and infrastructure.</div>'
        ]
    },
    {
        q:[
        '<div>Radium is an element.</div>'
        ],
        a: [
            '<div>Radium is a gaseous/solid element that is radioactive and therefore dangerous.</div>'
        ]
    },
    {
        q:[
        '<div>A compass looks like a clock.</div>'
        ],
        a: [
        '<div>A compass looks like a magnetic tool resembling a clock, used to ascertain direction, especially when reading a map.</div>'
        ]
    },
    {
        q:[
        '<div>An amphibian is like a frog or a turtle.</div>'
        ],
        a: [
        '<div>An amphibian is an animal species capable of living in two habitats: on water and on land.</div>'
        ]
    },
    {
        q:[
        '<div>A supernova is a big nova.</div>'
        ],
        a: [
        '<div>A supernova is colourful explosion in outer space involving a dying star, observable through powerful telescopes.</div>'
        ]
    }
]

</script>

<Multiplayer title="definitions" qa={qa} />
