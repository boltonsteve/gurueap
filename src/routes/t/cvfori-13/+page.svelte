<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            "<div>We live in an i________ wo________, where we need to think globally.</div>"
        ],
        a:[
            "<div>We live in an <b><i>interconnected world</i></b>, where we need to think globally.</div>"
        ]
    },
    {
        q:[
            "<div>Australia is now a mu________ s________ with many races and creeds.</div>"
        ],
        a:[
            "<div>Australia is now a <b><i>multiracial society</i></b> with many races and creeds.</div>"
        ]
    },
    {
        q:[
            "<div>D________ c________ make up what used to be called the Third World.</div>"
        ],
        a:[
            "<div><b><i>Developing countries</i></b> make up what used to be called the Third World.</div>"
        ]
    },
    {
        q:[
            "<div>To fight competition from overseas, some governments resort to pr________, imposing tariffs and other restrictions on imports.</div>"
        ],
        a:[
            "<div>To fight competition from overseas, some governments resort to <b><i>protectionism</i></b>, imposing tariffs and other restrictions on imports.</div>"
        ]
    },
    {
        q:[
            "<div>Today’s e________ i________ may lead to a decline in the number of wars.</div>"
        ],
        a:[
            "<div>Today’s <b><i>economic iinterdependence</i></b> may lead to a decline in the number of wars.</div>"
        ]
    },
    {
        q:[
            "<div>With its low wages, Mexico has managed to lure many mu________ c________.</div>"
        ],
        a:[
            "<div>With its low wages, Mexico has managed to lure many <b><i>multinational corporations</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Capitalists claim that, in theory, fr________ t________ should benefit everyone.</div>"
        ],
        a:[
            "<div>Capitalists claim that, in theory, <b><i>free trade</i></b> should benefit everyone.</div>"
        ]
    },
    {
        q:[
            "<div>Indonesia, Malaysia and Thailand are among the em________ e________ of SE Asia.</div>"
        ],
        a:[
            "<div>Indonesia, Malaysia and Thailand are among the <b><i>emerging economies</i></b> of SE Asia.</div>"
        ]
    },
    {
        q:[
            "<div>There is greater e________ d________ in the cities than in the countryside.</div>"
        ],
        a:[
            "<div>There is greater <b><i>economic development</i></b> in the cities than in the countryside.</div>"
        ]
    },
    {
        q:[
            "<div>I________ i________ from North Africa has become a problem in Spain and Italy.</div>"
        ],
        a:[
            "<div><b><i>Illegal immigration</i></b> from North Africa has become a problem in Spain and Italy.</div>"
        ]
    },
    {
        q:[
            "<div>The gap between the h________ and h________-n________ has widened.</div>"
        ],
        a:[
            "<div>The gap between the <b><i>haves</i></b> and <b><i>have-nots</i></b> has widened.</div>"
        ]
    },
    {
        q:[
            "<div>Many people dream of a bo________ wo________, where passports are unnecessary.</div>"
        ],
        a:[
            "<div>Many people dream of a <b><i>borderless world</i></b>, where passports are unnecessary.</div>"
        ]
    },
    {
        q:[
            "<div>One of the UN goals is p________ a________, especially in Africa.</div>"
        ],
        a:[
            "<div>One of the UN goals is <b><i>poverty alleviation</i></b>, especially in Africa.</div>"
        ]
    },
    {
        q:[
            "<div>The widening gap between rich and poor has led to a rise in gl________ i________.</div>"
        ],
        a:[
            "<div>The widening gap between rich and poor has led to a rise in <b><i>global inequality</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Australia has decided to dump as________ s________ in PNG.</div>"
        ],
        a:[
            "<div>Australia has decided to dump <b><i>asylum seekers</i></b> in PNG.</div>"
        ]
    },
    {
        q:[
            "<div>The er________ of d________ is another important goal.</div>"
        ],
        a:[
            "<div>The <b><i>eradication</i></b> of <b><i>disease</i></b> is another important goal.</div>"
        ]
    },
    {
        q:[
            "<div>Farmers are at the mercy of ma________ fo________ over which they have no control.</div>"
        ],
        a:[
            "<div>Farmers are at the mercy of <b><i>market forces</i></b> over which they have no control.</div>"
        ]
    },
    {
        q:[
            "<div>A downside of globalization is Westernization, a kind of cu________ i________.</div>"
        ],
        a:[
            "<div>A downside of globalization is Westernization, a kind of <b><i>cultural imperialism</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Many British companies have started ou________ j________ to places like India.</div>"
        ],
        a:[
            "<div>Many British companies have started <b><i>outsourcing jobs</i></b> to places like India.</div>"
        ]
    },
    {
        q:[
            "<div>If globalization continues at this rate there will soon be a Mc________ on every co________.</div>"
        ],
        a:[
            "<div>If globalization continues at this rate there will soon be a <b><i>McDonalds</i></b> on every <b><i>corner</i></b>.</div>"
        ]
    }
]

</script>

<Multiplayer title="Globalisation" qa={qa} />
