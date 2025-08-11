<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>________ money is not enough to bring us ________ happiness.</div>'
        ],
        a: [
            '<div>Money is not enough to bring us happiness.</div>'
        ]
    },
    {
        q: [
            '<div>Follow ________ street over there until you get to ________ subway.</div>'
        ],
        a: [
            '<div>Follow the street over there until you get to the subway.</div>'
        ]
    },
    {
        q: [
            '<div>________ beautiful picture was hanging on ________ wall of ________ bedroom.</div>'
        ],
        a: [
            '<div>A beautiful picture was hanging on the wall of the bedroom.</div>'
        ]
    },
    {
        q: [
            '<div>Please get ________ bread and ________ butter from refrigerator and put them on ________ table.</div>'
        ],
        a: [
            '<div>Please get (some) bread and (some) butter from the refrigerator and put them on the table.</div>'
        ]
    },
    {
        q: [
            '<div>_________ cattle are raised in many parts of this country.</div>'
        ],
        a: [
            '<div>Cattle are raised in many parts of this country.</div>'
        ]
    },
    {
        q: [
            '<div>________ doctors recommend ________ aspirin for ________ colds.</div>'
        ],
        a: [
            '<div>Doctors recommend (an) aspirin for colds.</div>'
        ]
    },
    {
        q: [
            '<div>She is studying ________ Spanish in ________ high school.</div>'
        ],
        a: [
            '<div>She is studying Spanish in high school.</div>'
        ]
    },
    {
        q: [
            '<div>________ British and ________ French fought many wars.</div>'
        ],
        a: [
            '<div>The British and the French fought many wars.</div>'
        ]
    },
    {
        q: [
            '<div>Kyoto has ________ large population.</div>'
        ],
        a: [
            '<div>Kyoto has a large population.</div>'
        ]
    },
    {
        q: [
            '<div>________ celebration of our country’s independence takes place on July 4.</div>'
        ],
        a: [
            '<div>The celebration of our country’s independence takes place on July 4.</div>'
        ]
    },
    {
        q: [
            '<div>I read ________ story about ________ man living before the American revolution.</div>'
        ],
        a: [
            '<div>I read a story about a man living before the American revolution.</div>'
        ]
    },
    {
        q: [
            '<div>________ man lived at ________ foot of ________ mountains.</div>'
        ],
        a: [
            '<div>The man lived at the foot of the mountains.</div>'
        ]
    },
    {
        q: [
            '<div>Because of ________ superstitions, some buildings do not have ________ thirteenth floor.</div>'
        ],
        a: [
            '<div>Because of superstitions, some buildings do not have a thirteenth floor.</div>'
        ]
    },
    {
        q: [
            '<div>One day I went to ________ friend’s house and I noticed something new.</div>'
        ],
        a: [
            '<div>One day I went to a friend’s house and I noticed something new.</div>'
        ]
    },
    {
        q: [
            '<div>Such ________ small country cannot have ________ diversity of industry.</div>'
        ],
        a: [
            '<div>Such a small country cannot have diversity of industry.</div>'
        ]
    },
    {
        q: [
            '<div>________ population of Mexico City keeps increasing.</div>'
        ],
        a: [
            '<div>The population of Mexico City keeps increasing.</div>'
        ]
    },
    {
        q: [
            '<div>________ automobile has contributed to ________ development of ________ suburbs.</div>'
        ],
        a: [
            '<div>The automobile has contributed to the development of (the) suburbs.</div>'
        ]
    },
    {
        q: [
            '<div>He was lying on ________ ground, looking up at ________ moon and  ________ stars.</div>'
        ],
        a: [
            '<div>He was lying on the ground, looking up at the moon and the stars.</div>'
        ]
    },
    {
        q: [
            '<div>This is ________ best book I’ve ever read.</div>'
        ],
        a: [
            '<div>This is the best book I’ve ever read.</div>'
        ]
    },
    {
        q: [
            '<div>________ second paragraph gives ________ most important idea of  ________ essay we are reading.</div>'
        ],
        a: [
            '<div>The second paragraph gives the most important idea of the essay we are reading.</div>'
        ]
    },
    {
        q: [
            '<div>Most of ________ students in our class passed ________ examination.</div>'
        ],
        a: [
            '<div>Most of the students in our class passed the examination.</div>'
        ]
    },
    {
        q: [
            '<div>________ psychology teaches us a lot about ________ human nature.</div>'
        ],
        a: [
            '<div>Psychology teaches us a lot about human nature.</div>'
        ]
    },
    {
        q: [
            '<div>I began to attend ________ college ________ last year.</div>'
        ],
        a: [
            '<div>I began to attend college last year.</div>'
        ]
    },
    {
        q: [
            '<div>She is quite ________ good teacher.</div>'
        ],
        a: [
            '<div>She is quite a good teacher.</div>'
        ]
    },
    {
        q: [
            '<div>________ housework has been made easier because of ________ modern conveniences.</div>'
        ],
        a: [
            '<div>Housework has been made easier because of modern conveniences.</div>'
        ]
    },
    {
        q: [
            '<div>In ________ past, it was hoped that ________ younger generation would create ________ new and better society.</div>'
        ],
        a: [
            '<div>In the past, it was hoped that the younger generation would create a new and better society.</div>'
        ]
    },
    {
        q: [
            '<div>Many of ________ people whose homes were flooded received assistance from the government.</div>'
        ],
        a: [
            '<div>Many of the people whose homes were flooded received assistance from the government.</div>'
        ]
    },
    {
        q: [
            '<div>________ burning of trash outdoors can be dangerous.</div>'
        ],
        a: [
            '<div>The burning of trash outdoors can be dangerous.</div>'
        ]
    },
    {
        q: [
            '<div>________ people I have met so far have been kind and warm.</div>'
        ],
        a: [
            '<div>The people I have met so far have been kind and warm.</div>'
        ]
    },
    {
        q: [
            '<div>What ________ beautiful weather we are having.</div>'
        ],
        a: [
            '<div>What beautiful weather we are having.</div>'
        ]
    },
    {
        q: [
            '<div>After many months, I finally got ________ visa.</div>'
        ],
        a: [
            '<div>After many months, I finally got a visa.</div>'
        ]
    },
    {
        q: [
            '<div>In ________ last one hundred years, my city has become ________ very important centre of ________ trade and ________ culture.</div>'
        ],
        a: [
            '<div>In the last one hundred years, my city has become a very important centre of trade and culture.</div>'
        ]
    },
    {
        q: [
            '<div>________ chapter five is ________ most interesting one in our textbook.</div>'
        ],
        a: [
            '<div>Chapter five is the most interesting one in our textbook.</div>'
        ]
    },
    {
        q: [
            '<div>Columbus discovered America in ________ 15th century.</div>'
        ],
        a: [
            '<div>Columbus discovered America in the 15th century.</div>'
        ]
    },
    {
        q: [
            '<div>________ history teaches us that ________ same mistakes can occur again.</div>'
        ],
        a: [
            '<div>History teaches us that the same mistakes can occur again.</div>'
        ]
    }
]

</script>

<Multiplayer title="articles - quiz" qa={qa} />

