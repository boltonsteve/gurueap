<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>The official language is Indonesian but my __________ is Balinese.</div>'
        ],
        a:[
            '<div>The official language is Indonesian but my <b><i>mother tongue</i></b> is Balinese.</div>'
        ]
    },
    {
        q:[
            '<div>His pronunciation is very good considering he is not actually a __________ of English.</div>'
        ],
        a:[
            '<div>His pronunciation is very good considering he is not actually a <b><i>native speaker</i></b> of English.</div>'
        ]
    },
    {
        q:[
            '<div>In a face-to-face situation, __________ can be just as important as the words you use.</div>'
        ],
        a:[
            '<div>In a face-to-face situation, <b><i>non-verbal communication</i></b> can be just as important as the words you use.</div>'
        ]
    },
    {
        q:[
            '<div>A successful __________ needs to be willing to take risks.</div>'
        ],
        a:[
            '<div>A successful <b><i>language learner</i></b> needs to be willing to take risks.</div>'
        ]
    },
    {
        q:[
            '<div>__________ accuracy tends to be more important in writing than in speaking.</div>'
        ],
        a:[
            '<div><b><i>Grammatical</i></b> accuracy tends to be more important in writing than in speaking.</div>'
        ]
    },
    {
        q:[
            '<div>Some __________, like Gaelic and Welsh, are in danger of extinction.</div>'
        ],
        a:[
            '<div>Some <b><i>minority languages</i></b>, like Gaelic and Welsh, are in danger of extinction.</div>'
        ]
    },
    {
        q:[
            '<div>__________ and __________ are important features of phonology.</div>'
        ],
        a:[
            '<div><b><i>Stress</i></b> and <b><i>intonation</i></b> are important features of phonology.</div>'
        ]
    },
    {
        q:[
            '<div>Watching movies can be a good way to learn __________ expressions that are not often taught in formal language lessons.</div>'
        ],
        a:[
            '<div>Watching movies can be a good way to learn <b><i>colloquial</i></b> expressions that are not often taught in formal language lessons.</div>'
        ]
    },
    {
        q:[
            '<div>Jono found his lecturer’s Scottish accent __________ to __________.</div>'
        ],
        a:[
            '<div>Jono found his lecturer’s Scottish accent <b><i>difficult</i></b> to <b><i>understand</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>The written word is a __________ of communication unique to humans.</div>'
        ],
        a:[
            '<div>The written word is a <b><i>means</i></b> of communication unique to humans.</div>'
        ]
    },
    {
        q:[
            '<div>Kevin can __________, but he has no knowledge of formal grammar.</div>'
        ],
        a:[
            '<div>Kevin can <b><i>speak fluently</i></b>, but he has no knowledge of formal grammar.</div>'
        ]
    },
    {
        q:[
            '<div>It was easy to identify the kidnapper’s hometown because of his strong __________ accent.</div>'
        ],
        a:[
            '<div>It was easy to identify the kidnapper’s hometown because of his strong <b><i>regional</i></b> accent.</div>'
        ]
    },
    {
        q:[
            '<div>It takes an adult learner a long time to __________ in a language.</div>'
        ],
        a:[
            '<div>It takes an adult learner a long time to <b><i>become fluent</i></b> in a language.</div>'
        ]
    },
    {
        q:[
            '<div>King George VI suffered from a __________ and found it hard to speak in public.</div>'
        ],
        a:[
            '<div>King George VI suffered from a <b><i>speech impediment</i></b> and found it hard to speak in public.</div>'
        ]
    },
    {
        q:[
            '<div>If you want your spoken English to be understood, you need to work on your __________.</div>'
        ],
        a:[
            '<div>If you want your spoken English to be understood, you need to work on your <b><i>pronunciation</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>A key part of mastering a language is learning from __________.</div>'
        ],
        a:[
            '<div>A key part of mastering a language is learning from <b><i>mistakes</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>With a German mother and a Spanish father, she grew up in a __________ environment.</div>'
        ],
        a:[
            '<div>With a German mother and a Spanish father, she grew up in a <b><i>bilingual</i></b> environment.</div>'
        ]
    },
    {
        q:[
            '<div>When you work in Japan, it can be hard to overcome the language __________.</div>'
        ],
        a:[
            '<div>When you work in Japan, it can be hard to overcome the language <b><i>barrier</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Is it possible to just __________ a second language without formal study?</div>'
        ],
        a:[
            '<div>Is it possible to just <b><i>pick up</i></b> a second language without formal study?</div>'
        ]
    },
    {
        q:[
            '<div>If you rely on __________ from Indonesian, you may find your English doesn’t make sense.</div>'
        ],
        a:[
            '<div>If you rely on <b><i>direct translation</i></b> from Indonesian, you may find your English doesn’t make sense.</div>'
        ]
    }
]

</script>

<Multiplayer title="Language and Linguistics" qa={qa} />
