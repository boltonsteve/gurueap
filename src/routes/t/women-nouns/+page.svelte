<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q: [
            '<div>19% of women in 2008</div>'
        ],
        a: [
            '<div><b><i>19% of women in 2008</i></b> in the 20-24 age group gave birth for the first time.</div>'
        ]
    },
    {
        q: [
            '<div>15% of women in 2018</div>'
        ],
        a: [
            '<div><b><i>15% of women in 2018</i></b> in the 20-24 age group gave birth for the first time.</div>'
        ]
    },
    {
        q: [
            '<div>an average of 3 children</div>'
        ],
        a: [
            '<div><b class="i">An average of 3 children</b> were born to each woman in 1989.</div>'
        ]
    },
    {
        q: [
            '<div>first birth in the 20-24 age group</div>'
        ],
        a: [
            '<div><b><i>First birth in the 20-24 age group</i></b> also declined</div>'
        ]
    },
    {
        q: [
            '<div>the most common age to have a first child</div>'
        ],
        a: [
            '<div>In both 2008 and 2018 <b><i>the most common age to have a first child</i></b> was 25-29.</div>'
        ]
    },
    {
        q: [
            '<div>the number of children born to each woman</div>'
        ],
        a: [
            '<div><b><i>The number of children born to each woman</i></b> has declined since 1976.</div>'
        ]
    },
    {
        q: [
            '<div>almost 10% of mothers in the 15-19 age group</div>'
        ],
        a: [
            '<div>In 2008 <b><i>almost 10% of mothers in the 15-19 age group</i></b> gave birth for the first time.</div>'
        ]
    },
    {
        q: [
            '<div>the statistics for age at birth of first child</div>'
        ],
        a: [
            '<div>Looking at <b><i>the statistics for age at birth of first child</i></b>, these varied considerably.</div>'
        ]
    },
    {
        q: [
            '<div>the average age at which they had their first child</div>'
        ],
        a: [
            '<div>The second chart shows <b><i>the average age at which they had their first child</i></b>.</div>'
        ]
    },
    {
        q: [
            '<div>the percentage for women having first babies in their late thirties</div>'
        ],
        a: [
            '<div><b><i>The percentage for women having first babies in their late thirties</i></b> doubled from 5% to 10%</div>'
        ]
    },
    {
        q: [
            '<div>a slight decline in the percentage of women having their first child</div>'
        ],
        a: [
            '<div>In the 25-29 age group too there was a slight decline in the percentage of women having their first child.</div>'
        ]
    },
    {
        q: [
            '<div>the percentage of women waiting until their early thirties to have a baby</div>'
        ],
        a: [
            '<div><b><i>The percentage of women waiting until their early thirties to have a baby</i></b> rose dramatically</div>'
        ]
    },
    {
        q: [
            '<div>the average number of children 40-44 year-old women in Australia gave birth to in four different decades from 1989 to the present</div>'
        ],
        a: [
            '<div><b><i>The first bar chart compares</i></b> the average number of children 40-44 year-old women in Australia gave birth to in four different decades from 1989 to the present</div>'
        ]
    }
]

</script>

<Multiplayer title="women and births - nouns" qa={qa} />
