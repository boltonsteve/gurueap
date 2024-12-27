<script>
import Multiplayer from '../../components/Multiplayer.svelte'
let qa = [
    {
        q:[
            "<div>Coal, oil and gas are the principal f________ f________s.</div>"
        ],
        a:[
            "<div>Coal, oil and gas are the principal <b><i>fossil fuels</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Wind power is a r________ e________ s________.</div>"
        ],
        a:[
            "<div>Wind power is a <b><i>renewable energy source</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>The Gulf region still has abundant o________ and n________ g________ reserves.</div>"
        ],
        a:[
            "<div>The Gulf region still has abundant <b><i>oil</i></b> and <b><i>natural gas</i></b> reserves.</div>"
        ]
    },
    {
        q:[
            "<div>The Three Gorges dam in China generates much-needed h________-e________ p________.</div>"
        ],
        a:[
            "<div>The Three Gorges dam in China generates much-needed <b><i>hydro-electric power</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Some people feel w________ f________s should be constructed off-shore, not on land.</div>"
        ],
        a:[
            "<div>Some people feel <b><i>wind farms</i></b> should be constructed off-shore, not on land.</div>"
        ]
    },
    {
        q:[
            "<div>Solar power can only g________ e________ on a small scale.</div>"
        ],
        a:[
            "<div>Solar power can only <b><i>generate electricity</i></b> on a small scale.</div>"
        ]
    },
    {
        q:[
            "<div>East Kalimantan is well-known for c________ m________.</div>"
        ],
        a:[
            "<div>East Kalimantan is well-known for <b><i>coal mining</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>The Kyoto Accord aimed to reduce c________ d________ e________s.</div>"
        ],
        a:[
            "<div>The Kyoto Accord aimed to reduce <b><i>carbon dioxide emissions</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>The government has subsidized the search for a________ e________ sources.</div>"
        ],
        a:[
            "<div>The government has subsidized the search for <b><i>alternative energy</i></b> sources.</div>"
        ]
    },
    {
        q:[
            "<div>Some people feel that, despite its risks, n________ p________ is still the answer.</div>"
        ],
        a:[
            "<div>Some people feel that, despite its risks, <b><i>nuclear power</i></b> is still the answer.</div>"
        ]
    },
    {
        q:[
            "<div>In place of traditional ‘gasoline-guzzlers’, h________ c________s are now becoming more common in the United States.</div>"
        ],
        a:[
            "<div>In place of traditional ‘gasoline-guzzlers’, <b><i>hybrid cars</i></b> are now becoming more common in the United States.</div>"
        ]
    },
    {
        q:[
            "<div>Australia has been blessed with abundant n________ r________s.</div>"
        ],
        a:[
            "<div>Australia has been blessed with abundant <b><i>natural resources</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>A new p________ s________ is being built to satisfy the local demand for electricity.</div>"
        ],
        a:[
            "<div>A new <b><i>power station</i></b> is being built to satisfy the local demand for electricity.</div>"
        ]
    },
    {
        q:[
            "<div>The o________ f________s of Saudi Arabia are believed to be the most extensive on earth.</div>"
        ],
        a:[
            "<div>The <b><i>oil fields</i></b> of Saudi Arabia are believed to be the most extensive on earth.</div>"
        ]
    },
    {
        q:[
            "<div>We tend to drive more f________-e________ cars now than we did thirty years ago.</div>"
        ],
        a:[
            "<div>We tend to drive more <b><i>fuel-efficient</i></b> cars now than we did thirty years ago.</div>"
        ]
    },
    {
        q:[
            "<div>The transition to b________s such as ethanol has made Brazil very wealthy.</div>"
        ],
        a:[
            "<div>The transition to <b><i>biofuels</i></b> such as ethanol has made Brazil very wealthy.</div>"
        ]
    },
    {
        q:[
            "<div>Global e________ c________ has increased astronomically with the economic rise of China and India.</div>"
        ],
        a:[
            "<div>Global <b><i>energy consumption</i></b> has increased astronomically with the economic rise of China and India.</div>"
        ]
    },
    {
        q:[
            "<div>Some people think a c________ tax will help tackle the energy crisis.</div>"
        ],
        a:[
            "<div>Some people think a <b><i>carbon</i></b> tax will help tackle the energy crisis.</div>"
        ]
    },
    {
        q:[
            "<div>Sooner or later, the earth will r________ o________ of oil.</div>"
        ],
        a:[
            "<div>Sooner or later, the earth will <b><i>run out</i></b> of oil.</div>"
        ]
    },
    {
        q:[
            "<div>Incredibly, this vehicle is p________ by alcohol.</div>"
        ],
        a:[
            "<div>Incredibly, this vehicle is <b><i>powered</i></b> by alcohol.</div>"
        ]
    }
]
    
    
</script>
<Multiplayer title="The Energy Crisis" qa={qa} />
