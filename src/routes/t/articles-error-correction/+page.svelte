<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>Through online shopping, many problematic situations such as parking, queueing as well as a crowd can be prevented. </div>'
        ],
        a: [
            '<div>Through online shopping, many problematic situations such as parking, queueing as well as <b><i>crowds</i></b> can be prevented. </div>'
        ]
    },
    {
        q: [
            '<div>First of all, people are able to buy something at any time and anywhere as long as they have internet connection.</div>'
        ],
        a: [
            '<div>First of all, people are able to buy something at any time and anywhere as long as they have <b><i>an</i></b> internet connection.</div>'
        ]
    },
    {
        q: [
            '<div>Therefore, I think that popularity of online shopping is likely to increase in the future.</div>'
        ],
        a: [
            '<div>Therefore, I think that <b><i>the</i></b> popularity of online shopping is likely to increase in the future.</div>'
        ]
    },
    {
        q: [
            '<div>For example, Wish, which is one of online store applications, offers half price discounts for winter equipment when summer arrives.</div>'
        ],
        a: [
            '<div>For example, Wish, which is <b><i>an</i></b> online store <b><i>application</i></b>, offers half price discounts for winter equipment when summer arrives.</div>'
        ]
    },
    {
        q: [
            '<div>There is abundance of online stores that provide vast resources to compare products and prices.</div>'
        ],
        a: [
            '<div>There is <b><i>an</i></b> abundance of online stores that provide vast resources to compare products and prices.</div>'
        ]
    },
    {
        q: [
            '<div>E-commerce stores offer the effective way to save money and provide convenient ways to purchase goods.</div>'
        ],
        a: [
            '<div>E-commerce stores offer <b><i>an</i></b> effective way to save money and provide convenient ways to purchase goods.</div>'
        ]
    },
    {
        q: [
            '<div>Finally, people can save quality times with their families rather than spending time going to physical stores.</div>'
        ],
        a: [
            '<div>Finally, people can save quality <b><i>time</i></b> with their families rather than spending time going to physical stores.</div>'
        ]
    },
    {
        q: [
            '<div>Firstly online shops offer discounts and sometimes people might find price are a half or a third of price being charged in physical shops. </div>'
        ],
        a: [
            '<div>Firstly online shops offer discounts and sometimes people might find <b><i>prices</i></b> are a half or a third of <b><i>the prices</i></b> being charged in physical shops. </div>'
        ]
    },
    {
        q: [
            '<div>Many online stores offer cheaper prices compared to physical stores, because they do not have to spend a lot of money on renting room or space to display their products.</div>'
        ],
        a: [
            '<div>Many online stores offer cheaper prices compared to physical stores, because they do not have to spend a lot of money on renting <b><i>a</i></b> room or <b><i>a</i></b> space to display their products.</div>'
        ]
    }
]

</script>

<Multiplayer title="articles - error correction" qa={qa} />
