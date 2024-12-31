<script>
import Multiplayer from '../../components/Multiplayer.svelte'
let qa = [
    {
        q:[
            "<div>The u________ r________ remains at 6.5%, although the number of job opportunities is likely to rise.</div>"
        ],
        a:[
            "<div>The <b><i>unemployment rate</i></b> remains at 6.5%, although the number of job opportunities is likely to rise.</div>"
        ]
    },
    {
        q:[
            "<div>To be a successful e________ you need initiative, drive and self-confidence.</div>"
        ],
        a:[
            "<div>To be a successful <b><i>entrepreneur</i></b> you need initiative, drive and self-confidence.</div>"
        ]
    },
    {
        q:[
            "<div>Capitalists believe that the p________ s________ is the main engine of economic growth.</div>"
        ],
        a:[
            "<div>Capitalists believe that the <b><i>private sector</i></b> is the main engine of economic growth.</div>"
        ]
    },
    {
        q:[
            "<div>G________ d________ p________ is the total value of goods and services produced in a year.</div>"
        ],
        a:[
            "<div><b><i>Gross domestic product</i></b> is the total value of goods and services produced in a year.</div>"
        ]
    },
    {
        q:[
            "<div>If wages don’t keep up with the r________ of i________ people feel poorer.</div>"
        ],
        a:[
            "<div>If wages don’t keep up with the <b><i>rate</i></b> of <b><i>inflation</i></b> people feel poorer.</div>"
        ]
    },
    {
        q:[
            "<div>A d________ s________ is often regarded as the most important factor in job satisfaction.</div>"
        ],
        a:[
            "<div>A <b><i>decent salary</i></b> is often regarded as the most important factor in job satisfaction.</div>"
        ]
    },
    {
        q:[
            "<div>Young people with few commitments often engage in j________-h________ in order to experience a variety of possible careers.</div>"
        ],
        a:[
            "<div>Young people with few commitments often engage in <b><i>job-hopping</i></b> in order to experience a variety of possible careers.</div>"
        ]
    },
    {
        q:[
            "<div>M________ w________s are often paid just as well as those in desk jobs.</div>"
        ],
        a:[
            "<div><b><i>Manual workers</i></b> are often paid just as well as those in desk jobs.</div>"
        ]
    },
    {
        q:[
            "<div>The days of l________ e________, when you could work for the same organization all your life, are over.</div>"
        ],
        a:[
            "<div>The days of <b><i>lifelong employment</i></b>, when you could work for the same organization all your life, are over.</div>"
        ]
    },
    {
        q:[
            "<div>The r________ a________ is likely to rise from 65 to 70 years old over the coming decades.</div>"
        ],
        a:[
            "<div>The <b><i>retirement age</i></b> is likely to rise from 65 to 70 years old over the coming decades.</div>"
        ]
    },
    {
        q:[
            "<div>The distinction between w________ c________ workers and b________ c________ workers is no longer useful.</div>"
        ],
        a:[
            "<div>The distinction between <b><i>white collar</i></b> workers and <b><i>blue collar</i></b> workers is no longer useful.</div>"
        ]
    },
    {
        q:[
            "<div>When Lehman Bros went bust, thousands of employees were m________ r________.</div>"
        ],
        a:[
            "<div>When Lehman Bros went bust, thousands of employees were <b><i>made redundant</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Not everyone can envisage a clear c________ p________ when they are still at school.</div>"
        ],
        a:[
            "<div>Not everyone can envisage a clear <b><i>career path</i></b> when they are still at school.</div>"
        ]
    },
    {
        q:[
            "<div>Working in the p________ sector, civil servants tend to have a high level of j________ s________.</div>"
        ],
        a:[
            "<div>Working in the <b><i>private</i></b> sector, civil servants tend to have a high level of <b><i>job security</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>While the senior management remains in place, there are no o________s for p________.</div>"
        ],
        a:[
            "<div>While the senior management remains in place, there are no <b><i>opportunities</i></b> for <b><i>promotion</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Workers’ rights often ignore the needs of p________-t________ w________s.</div>"
        ],
        a:[
            "<div>Workers’ rights often ignore the needs of <b><i>part-time workers</i></b>.</div>"
        ]
    },
    {
        q:[
            "<div>Being s________-e________, you have the advantage of being your own boss.</div>"
        ],
        a:[
            "<div>Being <b><i>self-employed</i></b>, you have the advantage of being your own boss.</div>"
        ]
    },
    {
        q:[
            "<div>The forces of s________ and d________ generally determine the price of goods.</div>"
        ],
        a:[
            "<div>The forces of <b><i>supply</i></b> and <b><i>demand</i></b> generally determine the price of goods.</div>"
        ]
    },
    {
        q:[
            "<div>S________ and m________-s________ enterprises tend to be more dynamic than large multinational companies.</div>"
        ],
        a:[
            "<div><b><i>Small</i></b> and <b><i>medium-sized</i></b> enterprises tend to be more dynamic than large multinational companies.</div>"
        ]
    },
    {
        q:[
            "<div>Due to technology, w________ f________ h________ is now a more practical option.</div>"
        ],
        a:[
            "<div>Due to technology, <b><i>working from home</i></b> is now a more practical option.</div>"
        ]
    }
]
    
</script>
<Multiplayer title="Work and Business" qa={qa} />
