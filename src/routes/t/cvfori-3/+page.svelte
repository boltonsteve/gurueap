<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>Doctors recommend a __________ which includes suitable proportions of protein, fruit, vegetables and carbohydrates.</div>'
        ],
        a:[
            '<div>Doctors recommend a <b><i>balanced diet</i></b> which includes suitable proportions of protein, fruit, vegetables and carbohydrates.</div>'
        ]
    },
    {
        q:[
            '<div>__________, such as swimming, jogging or stair-climbing, burns calories and improves overall health.</div>'
        ],
        a:[
            '<div><b>Aerobic exercise</b>, such as swimming, jogging or stair-climbing, burns calories and improves overall health.</div>'
        ]
    },
    {
        q:[
            '<div>Heart disease, asthma and diabetes are examples of __________, permanent or long-lasting in their effects.</div>'
        ],
        a:[
            '<div>Heart disease, asthma and diabetes are examples of <b><i>chronic ailments</i></b>, permanent or long-lasting in their effects.</div>'
        ]
    },
    {
        q:[
            '<div>Lifestyle diseases are illnesses caused by __________ such as smoking or alcohol consumption.</div>'
        ],
        a:[
            '<div>Lifestyle diseases are illnesses caused by <b><i>risky behaviour</i></b> such as smoking or alcohol consumption.</div>'
        ]
    },
    {
        q:[
            '<div>Walter has joined a gym in order to __________ .</div>'
        ],
        a:[
            '<div>Walter has joined a gym in order to <b><i>keep fit</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Unfortunately, some medicines can have __________.</div>'
        ],
        a:[
            '<div>Unfortunately, some medicines can have <b><i>harmful side-effects</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Sadly, since I gave up smoking, I have __________.</div>'
        ],
        a:[
            '<div>Sadly, since I gave up smoking, I have <b><i>put on weight</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>In the long run, __________ is more economical than treatment.</div>'
        ],
        a:[
            '<div>In the long run, <b><i>disease prevention</i></b> is more economical than treatment.</div>'
        ]
    },
    {
        q:[
            '<div>The prevalence of sugary drinks is one cause of this __________ epidemic.</div>'
        ],
        a:[
            '<div>The prevalence of sugary drinks is one cause of this <b><i>childhood obesity</i></b> epidemic.</div>'
        ]
    },
    {
        q:[
            '<div>HIV/AIDS, Ebola and rabies are extremely dangerous __________.</div>'
        ],
        a:[
            '<div>HIV/AIDS, Ebola and rabies are extremely dangerous <b><i>infectious diseases</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Some patients believe __________, such as acupuncture and hypnotherapy, is more effective than __________.</div>'
        ],
        a:[
            '<div>Some patients believe <b><i>alternative medicine</i></b>, such as acupuncture and hypnotherapy, is more effective than <b><i>conventional medicine</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>If you already lead an __________, you don’t really need to work out at the gym.</div>'
        ],
        a:[
            '<div>If you already lead an <b><i>active lifestyle</i></b>, you don’t really need to work out at the gym.</div>'
        ]
    },
    {
        q:[
            '<div>Alzheimer’s, schizophrenia and kleptomania are all examples of __________.</div>'
        ],
        a:[
            '<div>Alzheimer’s, schizophrenia and kleptomania are all examples of <b><i>mental disorders</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Obesity and general lack of physical fitness may be results of a __________.</div>'
        ],
        a:[
            '<div>Obesity and general lack of physical fitness may be results of a <b><i>sedentary lifestyle</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>He was a bit tubby; his doctor told him to __________.</div>'
        ],
        a:[
            '<div>He was a bit tubby; his doctor told him to <b><i>lose weight</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>Fruit and vegetables provide __________ without which we soon get sick.</div>'
        ],
        a:[
            '<div>Fruit and vegetables provide <b><i>essential nutrients</i></b> without which we soon get sick.</div>'
        ]
    },
    {
        q:[
            '<div>Kamal decided to go jogging every morning so as to get __________.</div>'
        ],
        a:[
            '<div>Kamal decided to go jogging every morning so as to get <b><i>regular exercise</i></b>.</div>'
        ]
    },
    {
        q:[
            '<div>It is not known whether __________, such as bulimia and anorexia, are more common today than in the past.</div>'
        ],
        a:[
            '<div>It is not known whether eating disorders, such as bulimia and anorexia, are more common today than in the past.</div>'
        ]
    },
    {
        q:[
            '<div>Most people would like government to __________free at point of use.</div>'
        ],
        a:[
            '<div>Most people would like government to <b><i>provide healthcare</i></b> at point of use.</div>'
        ]
    },
    {
        q:[
            '<div>In this company, you need to produce a medical certificate if you want to claim __________.</div>'
        ],
        a:[
            '<div>In this company, you need to produce a medical certificate if you want to claim <b><i>sick leave</i></b>.</div>'
        ]
    }
]


</script>

<Multiplayer title="Keeping Fit" qa={qa} />
