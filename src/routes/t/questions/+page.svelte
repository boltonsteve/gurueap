<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>The price of mangoes falls during the mango season.</div>'
        ],
        a:[
            '<div>Does the price of mangoes fall during the mango season?</div>'
        ]
    },
    {
        q:[
            '<div>I play golf <b><i>two or three times a week</i></b>.</div>'
        ],
        a:[
            '<div>How often do you play golf?</div>'
        ]
    },
    {
        q:[
            '<div>The President was born <b><i>in a small log cabin in Kentucky</i></b>.</div>'
        ],
        a:[
            '<div>Where was the president born?</div>'
        ]
    },
    {
        q:[
            '<div>The article about French 19th century art is now available online.</div>'
        ],
        a:[
            '<div>Is the article about French 19th century art available (online) now?</div>'
        ]
    },
    {
        q:[
            '<div>The finest silk in the world is made <b><i>in a region of Southern China</i></b>.</div>'
        ],
        a:[
            '<div>Where is the finest silk in the world made?<br>Where in the world is the finest silk made?</div>'
        ]
    },
    {
        q:[
            '<div>We played tennis with <b><i>Carlo</i></b>.</div>'
        ],
        a:[
            '<div>Who did you play tennis with?<br>With whom did you play tennis?</div>'
        ]
    },
    {
        q:[
            '<div>Thomas Edison invented <b><i>the phonograph and the electric light</i></b>.</div>'
        ],
        a:[
            '<div>What did Thomas Edison invent?</div>'
        ]
    },
    {
        q:[
            '<div>Both of Lady Gaga’s parents have Italian ancestry.</div>'
        ],
        a:[
            '<div>Do both of Lady Gaga’s parents have Italian ancestry?</div>'
        ]
    },
    {
        q:[
            '<div>The government of the city should construct a new bridge over the river.</div>'
        ],
        a:[
            '<div>Should the government of the city construct a new bridge over the river?</div>'
        ]
    },
    {
        q:[
            '<div>Martial arts like Kendo and Karate are often compulsory in Japanese schools.</div>'
        ],
        a:[
            '<div>Are martial arts like Kendo and Karate compulsory in Japanese schools?</div>'
        ]
    },
    {
        q:[
            '<div>The population of California is <b><i>33 million</i></b>.</div>'
        ],
        a:[
            '<div>What is the population of California?</div>'
        ]
    },
    {
        q:[
            '<div>Sukarno’s mother came from <b><i>Buleleng Regency in Bali</i></b>.</div>'
        ],
        a:[
            '<div>Where did Sukarno’s mother come from?</div>'
        ]
    },
    {
        q:[
            '<div>Some people are allergic to coriander leaves or seeds.</div>'
        ],
        a:[
            '<div>Are some people allergic to coriander leaves or seeds?</div>'
        ]
    },
    {
        q:[
            '<div>If you live outside the city border, you are eligible for a train pass.</div>'
        ],
        a:[
            '<div>If you live outside the city border, are you eligible for a train pass?<br>Are you eligible for a train pass if you live outside the city?</div>'
        ]
    },
    {
        q:[
            '<div>Snoop Dogg’s third album, The Doggfather, was recorded <b><i>in 1996</i></b>.</div>'
        ],
        a:[
            '<div>When was Snoop Dogg’s third album, The Doggfather, recorded?</div>'
        ]
    },
    {
        q:[
            '<div>The Sar-e-Sang mine deposits have been worked <b><i>for more than 6,000 years</i></b>.</div>'
        ],
        a:[
            '<div>(For) How long have the Sar-e-Sang mine deposits been worked?</div>'
        ]
    },
    {
        q:[
            '<div>We met <b><i>Fraser’s</i></b> sister in the Sunshine Diner.</div>'
        ],
        a:[
            '<div>Whose sister did you meet in the Sunshine Diner?</div>'
        ]
    },
    {
        q:[
            '<div>The second book by Norma Wyatt is available now.</div>'
        ],
        a:[
            '<div>Is the second book by Norma Wyatt available now?</div>'
        ]
    },
    {
        q:[
            '<div>Joseph McMurray’s high school friends had all died before him.</div>'
        ],
        a:[
            '<div>Had Joseph McMurray’s high school friends all died before him?</div>'
        ]
    },
    {
        q:[
            '<div>George did not seek medical treatment <b><i>because he didn’t believe in modern Open medicine</i></b>.</div>'
        ],
        a:[
            '<div>Why didn\'t George seek medical treatment?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>Jim</i></b> loves Janice.</div>'
        ],
        a:[
            '<div>Who(m) does Jim love?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>The Boeing 737</i></b> had some design problems a few years ago.</div>'
        ],
        a:[
            '<div>What had some design problems a few years ago?</div>','<div>Which aircraft had some design problems a few years ago?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>Something terrible</i></b> happened to Danny’s sister on the trip to Alice Springs.</div>'
        ],
        a:[
            '<div>What happened to Danny’s sister on the trip to Alice Springs?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>A Mediterranean</i></b> diet is reported to be good for cardiovascular health.</div>'
        ],
        a:[
            '<div>What kind of diet is reported to be good for cardiovascular health?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>The Prime Minister</i></b> lives in Number Ten, Downing Street.</div>'
        ],
        a:[
            '<div>Who lives in Number Ten, Downing Street?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>Geraldine</i></b> has been expelled from the school.</div>'
        ],
        a:[
            '<div>Who has been expelled from the school?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>Robert’s</i></b> ruler fell on the floor during the exam.</div>'
        ],
        a:[
            '<div>Whose ruler fell on the floor during the exam?</div>'
        ]
    },
    {
        q:[
            '<div><b><i>The Edinburgh</i></b> train is arriving at platform 3.</div>'
        ],
        a:[
            '<div>Which train is arriving at platform 3?</div>'
        ]
    }
]

</script>

<Multiplayer title="Question Forms" qa={qa} />
