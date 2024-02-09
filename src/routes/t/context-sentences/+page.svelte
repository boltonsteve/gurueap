<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            'boon',
            'AAS'
        ],
        a:[
            '<div>The AAS program is a <b><i>boon</i></b> for Indonesian scholars who learn a great deal studying in a Western university.</div>'
        ]
    },
    {
        q:[
            'preponderance',
            'Hollywood'
        ],
        a:[
            '<div>A <b><i>preponderance</i></b> of stars attended the Oscars ceremony.</div>'
        ]
    },
    {
        q:[
            'turnover',
            'IALF'
        ],
        a:[
            '<div>IALF has a very low staff <b><i>turnover</i></b> because teachers like working here.</div>'
        ]
    },
    {
        q:[
            'looming',
            'The IELTS test'
        ],
        a:[
            '<div>The IELTS test is <b><i>looming</i></b> and so students are taking their test preparation very seriously.</div>'
        ]
    },
    {
        q:[
            'proponent',
            'Steve'
        ],
        a:[
            '<div>Steve is a <b><i>proponent</i></b> of jazz and Indian music.</div>'
        ]
    },
    {
        q:[
            'enticing',
            'canteen food at IALF'
        ],
        a:[
            '<div>The canteen food at IALF is not particularly <b><i>enticing</i></b> and so many students order GoFood.</div>'
        ]
    },
    {
        q:[
            'routinely',
            'students using the RC'
        ],
        a:[
            '<div>In the RC, students <b><i>routinely</i></b> use quiet spaces for sleeping.</div>'
        ]
    },
    {
        q:[
            'coincide',
            'someone whose birthday is on August 17'
        ],
        a:[
            '<div>His birthday <b><i>coincides</i></b> with Indonesian independence day.</div>'
        ]
    },
    {
        q:[
            'decisive',
            'the bombing of Hiroshima and Nagasaki'
        ],
        a:[
            '<div>The use of nuclear weapons during WWII was <b><i>decisive</i></b> in ending the war.</div>'
        ]
    },
    {
        q:[
            'catch up',
            'a sudent who missed several classes due to illness'
        ],
        a:[
            '<div>He has been ill for a few weeks and is struggling to <b><i>catch up</i></b>.</div>'
        ]
    },
    {
        q:[
            'branch',
            'the bank opposite IALF'
        ],
        a:[
            '<div>Opposite IALF there is a <b><i>branch</i></b> of BNI, and there are other BNI <b><i>branches</i></b> throughout Denpasar.</div>'
        ]
    }
]


</script>

<Multiplayer title="context sentences" qa={qa} />
