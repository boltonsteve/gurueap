<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>is interesting about job your what</div>'
        ],
        a: [
            '<div>What is interesting about your job?</div>'
        ]
    },
    {
        q: [
            '<div>bored are your ever in you job</div>'
        ],
        a: [
            '<div>Are you ever bored in your job?</div>'
        ]
    },
    {
        q: [
            '<div>job your what does responsibility of require degree</div>'
        ],
        a: [
            '<div>What degree of responsibility does your job require?</div>'
        ]
    },
    {
        q: [
            '<div>the your when applied for job application what was you procedure</div>'
        ],
        a: [
            '<div>What was the application procedure when you applied for your job?</div>'
        ]
    },
    {
        q: [
            '<div>fair the is system appointment how</div>'
        ],
        a: [
            '<div>How fair is the appointment system?</div>'
        ]
    },
    {
        q: [
            '<div>hours work do you what</div>'
        ],
        a: [
            '<div>What hours do you work?</div>'
        ]
    },
    {
        q: [
            '<div>happy with you environment your are working</div>'
        ],
        a: [
            '<div>Are you happy with your working environment?</div>'
        ]
    },
    {
        q: [
            '<div>competitive your field your is in salary</div>'
        ],
        a: [
            '<div>Is your salary competitive in your field?</div>'
        ]
    },
    {
        q: [
            '<div>your is how challenging job</div>'
        ],
        a: [
            '<div>How challenging is your job?</div>'
        ]
    },
    {
        q: [
            '<div>would you how describe your workload</div>'
        ],
        a: [
            '<div>How would you describe your workload?</div>'
        ]
    },
    {
        q: [
            '<div>associated your with any risks work there are</div>'
        ],
        a: [
            '<div>Are there any risks associated with your work?</div>'
        ]
    },
    {
        q: [
            '<div>your job aspects unpleasant are to there any</div>'
        ],
        a: [
            '<div>Are there any unpleasant aspects to your job?</div>'
        ]
    },
    {
        q: [
            '<div>are under what kind of your pressure you job in</div>'
        ],
        a: [
            '<div>What kind of pressure are you under in your job?</div>'
        ]
    },
    {
        q: [
            '<div>you do stress from suffer work-related</div>'
        ],
        a: [
            '<div>Do you suffer from work-related stress?</div>'
        ]
    },
    {
        q: [
            '<div>you whereabouts do work</div>'
        ],
        a: [
            '<div>Whereabouts do you work?</div>'
        ]
    },
    {
        q: [
            '<div>your do you do in job what</div>'
        ],
        a: [
            '<div>What do you do in your job?</div>'
        ]
    },
    {
        q: [
            '<div>employer policy does a development professional your have</div>'
        ],
        a: [
            '<div>Does your employer have a professional development policy?</div>'
        ]
    },
    {
        q: [
            '<div>you to get travel your do job much in</div>'
        ],
        a: [
            '<div>Do you get to travel much in your job?</div>'
        ]
    },
    {
        q: [
            '<div>you job other to would people recommend your</div>'
        ],
        a: [
            '<div>Would you recommend your job to other people?</div>'
        ]
    },
    {
        q: [
            '<div>description find job you included what yourself to doing do extent in your not work</div>'
        ],
        a: [
            '<div>To what extent do you find yourself doing work not included in your job description?</div>'
        ]
    }
]


</script>

<Multiplayer title="20 questions about work" qa={qa} />
