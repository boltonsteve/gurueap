<script>
import Multiplayer from '../../components/Multiplayer.svelte'
let qa = [
    {
        q:[
            '<div>Charlie Chaplin was the first c________ actor to become a household name.</div>'
        ],
        a:[
            '<div>Charlie Chaplin was the first <b><i>child</i></b> actor to become a household name.</div>'
        ]
    },
    {
        q:[
            '<div>Tolstoy is the most famous Russian no________.</div>'
        ],
        a:[
            '<div>Tolstoy is the most famous Russian <b><i>novelist</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The lit________ of South America is most notable for the Magical Realism genre. </div>'
        ],
        a:[
            '<div>The <b><i>literature</i></b> of South America is most notable for the Magical Realism genre. </div>'
        ]
    },
    {
        q:[
            '<div>An oi________ p________ by Renoir was sold for more than $80 million.</div>'
        ],
        a:[
            '<div>An <b><i>oil painting</i></b> by Renoir was sold for more than $80 million.</div>'
        ]
    },
    {
        q:[
            '<div>Some mothers believe that their baby in the womb will benefit from listening to cl________ m________.</div>'
        ],
        a:[
            '<div>Some mothers believe that their baby in the womb will benefit from listening to <b><i>classical music</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The local people sell traditional ha________s to tourists.</div>'
        ],
        a:[
            '<div>The local people sell traditional <b><i>handicrafts</i></b> to tourists.</div>'
        ]
    },
    {
        q:[
            '<div>There are a lot of bars nearby where you can listen to l________ m________.</div>'
        ],
        a:[
            '<div>There are a lot of bars nearby where you can listen to <b><i>live music</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>East Nusa Tenggara is renowned for its we________.</div>'
        ],
        a:[
            '<div>East Nusa Tenggara is renowned for its <b><i>weaving</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Van Gogh’s po________ of Dr. Gachet was painted in 1889.</div>'
        ],
        a:[
            '<div>Van Gogh’s <b><i>portrait</i></b> of Dr. Gachet was painted in 1889.</div>'
        ]
    },
    {
        q:[
            '<div>HBO has become famous for te________ dr________s like The Sopranos.</div>'
        ],
        a:[
            '<div>HBO has become famous for <b><i>television dramas</i></b> like The Sopranos.</div>'
        ]
    },
    {
        q:[
            '<div>Most so-called Spaghetti Westerns were actually s________ in Spain</div>'
        ],
        a:[
            '<div>Most so-called Spaghetti Westerns were actually <b><i>shot</i></b> in Spain</div>'
        ]
    },
    {
        q:[
            '<div>Wo________ ca________ is one of Bali’s main traditional arts.</div>'
        ],
        a:[
            '<div><b><i>Wood carving</i></b> is one of Bali’s main traditional arts.</div>'
        ]
    },
    {
        q:[
            '<div>In Stratford we saw a pe________ of Shakespeare’s Othello.</div>'
        ],
        a:[
            '<div>In Stratford we saw a <b><i>performance</i></b> of Shakespeare’s Othello.</div>'
        ]
    },
    {
        q:[
            '<div>Haiku is a form of p________ unique to Japan.</div>'
        ],
        a:[
            '<div>Haiku is a form of <b><i>poetry</i></b> unique to Japan.</div>'
        ]
    },
    {
        q:[
            '<div>Do you generally prefer to read n________-fi________ or fi________?</div>'
        ],
        a:[
            '<div>Do you generally prefer to read <b><i>non-fiction</i></b> or <b><i>fiction</i></b>?</div>'
        ]
    },
    {
        q:[
            '<div>Telenovelas, the s________ o________s of Latin America, have become popular worldwide.</div>'
        ],
        a:[
            '<div>Telenovelas, the <b><i>soap operas</i></b> of Latin America, have become popular worldwide.</div>'
        ]
    },
    {
        q:[
            '<div>Cezanne was famous for his stunning la________s of Mont Saint Victoire.</div>'
        ],
        a:[
            '<div>Cezanne was famous for his stunning <b><i>landscape</i></b> of Mont Saint Victoire.</div>'
        ]
    },
    {
        q:[
            '<div>Indian c________, also known as ‘Bollywood’, is definitely an acquired taste.</div>'
        ],
        a:[
            '<div>Indian <b><i>cinema</i></b>, also known as ‘Bollywood’, is definitely an acquired taste.</div>'
        ]
    },
    {
        q:[
            '<div>The film Schindler’s List is s________ i________ Nazi-occupied Poland.</div>'
        ],
        a:[
            '<div>The film Schindler’s List is <b><i>set in</i></b> Nazi-occupied Poland.</div>'
        ]
    },
    {
        q:[
            '<div>Lennon and McCartney are England’s most famous so________ers.</div>'
        ],
        a:[
            '<div>Lennon and McCartney are England’s most famous <b><i>songwriters</i></b>.</div>'
        ]
    }
]

</script>

<Multiplayer title="The Arts" qa={qa} />
