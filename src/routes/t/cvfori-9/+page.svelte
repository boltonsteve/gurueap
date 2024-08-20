<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Pineapples and mangoes only grow in a t__________ c__________.</div>'
        ],
        a:[
            '<div>Pineapples and mangoes only grow in a <b><i>tropical climate</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The a__________ k__________ can be divided into vertebrates and invertebrates.</div>'
        ],
        a:[
            '<div>The <b><i>animal kingdom</i></b> can be divided into vertebrates and invertebrates.</div>'
        ]
    },
    {
        q:[
            '<div>Whether or not c_________ c_________ is man-made, it is certainly happening.</div>'
        ],
        a:[
            '<div>Whether or not <b><i>climate change</i></b> is man-made, it is certainly happening.</div>'
        ]
    },
    {
        q:[
            '<div>Pandas and rhinos are well-known examples of e_________ s_________.</div>'
        ],
        a:[
            '<div>Pandas and rhinos are well-known examples of <b><i>endangered species</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>We are trying to re-i__________ orangutans to their natural habitat.</div>'
        ],
        a:[
            '<div>We are trying to re-i<b><i>ntroduce</i></b> orangutans to their natural habitat.</div>'
        ]
    },
    {
        q:[
            '<div>Because of its isolation, Australia’s f_________ and f__________ are very different from those of other continents.</div>'
        ],
        a:[
            '<div>Because of its isolation, Australia’s <b><i>flora</i></b> and <b><i>fauna</i></b> are very different from those of other continents.</div>'
        ]
    },
    {
        q:[
            '<div>Horses, dogs and cats are examples of d_________ a_________.</div>'
        ],
        a:[
            '<div>Horses, dogs and cats are examples of <b><i>domesticated animals</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The civilizations of Southeast Asia have been shaped by the demands of r_________ c_________.</div>'
        ],
        a:[
            '<div>The civilizations of Southeast Asia have been shaped by the demands of <b><i>rice cultivation</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Until humans arrived in Mauritius the dodo had few n_________ p_________.</div>'
        ],
        a:[
            '<div>Until humans arrived in Mauritius the dodo had few <b><i>natural predators</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The cultivation of g_________-m__________ crops may solve the food shortage in sub-Saharan Africa.</div>'
        ],
        a:[
            '<div>The cultivation of <b><i>genetically-modified</i></b> crops may solve the food shortage in sub-Saharan Africa.</div>'
        ]
    },
    {
        q:[
            '<div>Deforestation has had a drastic effect on some v________ reptile species.</div>'
        ],
        a:[
            '<div>Deforestation has had a drastic effect on some <b><i>vulnerable</i></b> reptile species.</div>'
        ]
    },
    {
        q:[
            '<div>The overuse of p_________ causes water pollution when they enter the river system.</div>'
        ],
        a:[
            '<div>The overuse of <b><i>pesticides</i></b> causes water pollution when they enter the river system.</div>'
        ]
    },
    {
        q:[
            '<div>Milk, cheese, yogurt, and other d_________ p_________ can provide calcium.</div>'
        ],
        a:[
            '<div>Milk, cheese, yogurt, and other <b><i>dairy products</i></b> can provide calcium.</div>'
        ]
    },
    {
        q:[
            '<div>Charles Darwin discovered the process of n_________ s_________ when comparing species of finch on the Galapagos Islands.</div>'
        ],
        a:[
            '<div>Charles Darwin discovered the process of <b><i>natural selection</i></b> when comparing species of finch on the Galapagos Islands.</div>'
        ]
    },
    {
        q:[
            '<div>The government has encouraged farmers to grow d_________-r__________ crops that are unaffected by pests.</div>'
        ],
        a:[
            '<div>The government has encouraged farmers to grow <b><i>disease-resistant</i></b> crops that are unaffected by pests.</div>'
        ]
    },
    {
        q:[
            '<div>If a_________ l_________ continues to be lost to urban sprawl, the food supply will be diminished.</div>'
        ],
        a:[
            '<div>If <b><i>arable land</i></b> continues to be lost to urban sprawl, the food supply will be diminished.</div>'
        ]
    },
    {
        q:[
            '<div>This species of grasshopper is e_________ to the island of Timor.</div>'
        ],
        a:[
            '<div>This species of grasshopper is <b><i>endemic</i></b> to the island of Timor.</div>'
        ]
    },
    {
        q:[
            '<div>Even a small change in the environment can have l_________-t__________ repercussions.</div>'
        ],
        a:[
            '<div>Even a small change in the environment can have <b><i>long-term</i></b> repercussions.</div>'
        ]
    },
    {
        q:[
            '<div>The sudden introduction of predatory cats upset the ecological balance of the island.</div>'
        ],
        a:[
            '<div>The sudden introduction of predatory cats upset the e_________ b_________ of the island.</div>'
        ]
    },
    {
        q:[
            '<div>The world’s water supply is divided into f__________-w__________, found in lakes, rivers and glaciers, and s__________-w__________, found in the oceans and seas.</div>'
        ],
        a:[
            '<div>The world’s water supply is divided into <b><i>fresh-water</i></b>, found in lakes, rivers and glaciers, and <b><i>salt-water</i></b>, found in the oceans and seas.</div>'
        ]
    }
]

</script>

<Multiplayer title="Nature" qa={qa} />
