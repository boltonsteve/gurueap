<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            "<div>Strict bu________ r________s were enforced after the 1995 Kobe earthquake.</div>"
        ],
        a:[
            "<div>Strict <b><i>building regulations</i></b> were enforced after the 1995 Kobe earthquake.</div>"
        ]
    },
    {
        q:[
            "<div>The red-brick e________ of my house is actually nicer than the interior.</div>"
        ],
        a:[
            "<div>The red-brick <b><i>exterior</i></b> of my house is actually nicer than the interior.</div>"
        ]
    },
    {
        q:[
            "<div>In Singapore, most people live in hi________-r________ a________.</div>"
        ],
        a:[
            "<div>In Singapore, most people live in <b><i>high-rise apartments</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>After World War 2, the government built m________-produced housing units for the poor.</div>"
        ],
        a:[
            "<div>After World War 2, the government built <b><i>mass</i></b>-produced housing units for the poor.</div>"
        ]
    },
    {
        q:[
            "<div>Traditional houses in this region are built on s________, with an open area beneath.</div>"
        ],
        a:[
            "<div>Traditional houses in this region are built on <b><i>stilts</i></b>, with an open area beneath.</div>"
        ]
    },
    {
        q:[
            "<div>With all this modern construction, the inner-city has turned into a concrete ju________.</div>"
        ],
        a:[
            "<div>With all this modern construction, the inner-city has turned into a concrete <b><i>juungle</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>My father lives in a sh________ h________ with a grocery store on the ground floor.</div>"
        ],
        a:[
            "<div>My father lives in a <b><i>shared house</i></b> with a grocery store on the ground floor.</div>"
        ]
    },
    {
        q:[
            "<div>A s________-s________ h________ is sometimes known as a bungalow.</div>"
        ],
        a:[
            "<div>A <b><i>single-storey house</i></b> is sometimes known as a bungalow.</div>"
        ]
    },
    {
        q:[
            "<div>In recent years, the world’s tallest s________ have been built in Asia.</div>"
        ],
        a:[
            "<div>In recent years, the world’s tallest <b><i>skyscrapers</i></b> have been built in Asia.</div>"
        ]
    },
    {
        q:[
            "<div>Traditional b________ m________ in Japan include wood and bamboo.</div>"
        ],
        a:[
            "<div>Traditional <b><i>building materials</i></b> in Japan include wood and bamboo.</div>"
        ]
    },
    {
        q:[
            "<div>Old slums were demolished and their occupants were accommodated in pu________ h________ p________. </div>"
        ],
        a:[
            "<div>Old slums were demolished and their occupants were accommodated in <b><i>public housing projects</i></b>. </div>"
        ]
    },
    {
        q:[
            "<div>Many people find that mo________ ar________ lacks a human scale.</div>"
        ],
        a:[
            "<div>Many people find that <b><i>modern architecture</i></b> lacks a human scale.</div>"
        ]
    },
    {
        q:[
            "<div>Perhaps the ‘h________ of the f________’ will feature brain-controlled appliances.</div>"
        ],
        a:[
            "<div>Perhaps the ‘<b><i>homes</i></b> of the <b><i>future</i></b>’ will feature brain-controlled appliances.</div>"
        ]
    },
    {
        q:[
            "<div>In areas of seismic risk, it is now possible to build e________-r________ buildings. </div>"
        ],
        a:[
            "<div>In areas of seismic risk, it is now possible to build <b><i>earthquake-resistant</i></b> buildings. </div>"
        ]
    },
    {
        q:[
            "<div>The new museum is famous for its s________-o________-t________–a________ construction.</div>"
        ],
        a:[
            "<div>The new museum is famous for its <b><i>state-of-the–art</i></b> construction.</div>"
        ]
    },
    {
        q:[
            "<div>In the countryside you still see houses with th________ roofs.</div>"
        ],
        a:[
            "<div>In the countryside you still see houses with <b><i>thatched</i></b> roofs.</div>"
        ]
    },
    {
        q:[
            "<div>Located on a mountainside, the hotel has a pleasant v________ of the valley.</div>"
        ],
        a:[
            "<div>Located on a mountainside, the hotel has a pleasant <b><i>view</i></b> of the valley.</div>"
        ]
    },
    {
        q:[
            "<div>In the east of Indonesia houses often have c________-i________ roofs.</div>"
        ],
        a:[
            "<div>In the east of Indonesia houses often have <b><i>corrugated-iron</i></b> roofs.</div>"
        ]
    },
    {
        q:[
            "<div>My mother’s house is in a c________ l________, right next to the tube station.</div>"
        ],
        a:[
            "<div>My mother’s house is in a <b><i>convenient location</i></b>, right next to the tube station.</div>"
        ]
    },
    {
        q:[
            "<div>In Java and Bali, most houses have ceramic r________ t________.</div>"
        ],
        a:[
            "<div>In Java and Bali, most houses have ceramic <b><i>roof tiles</i></b>.</div>"
        ]
    }
]

</script>

<Multiplayer title="Design and Innovation" qa={qa} />
