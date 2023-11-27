<script>

import Multiplayer from '../../components/Multiplayer.svelte'

/* let qa = [ */
/*     { */
/*         q:[ */
/*             'Much effort went into the project.', */
/*             'The results of the project were amazing.' */
/*         ], */
/*         a:[ */
/*             'Much effort went into the project, the results of which were amazing.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'The hotel has seven bedrooms.', */
/*             'Three of them are en suite.' */
/*         ], */
/*         a:[ */
/*             'The hotel has seven bedrooms, three of which are en suite.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'The city underwent many changes.', */
/*             'Some were major changes and others were minor.' */
/*         ], */
/*         a:[ */
/*             'The city underwent many changes, some of which were major, others minor.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'The total amounts were 55, 67 and 88.', */
/*             'These are all impressive numbers.' */
/*         ], */
/*         a:[ */
/*             'The total amounts were 55, 67 and 88, all of which are impressive numbers.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'Twenty islands in Orkney are inhabited.', */
/*             'Altogether there are 70 islands.' */
/*         ], */
/*         a:[ */
/*             'Altogether there are 70 islands in Orkney, 20 of which are inhabited.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'IALF has over a thousand GE students.', */
/*             'More than 50% live in Denpasar.' */
/*         ], */
/*         a:[ */
/*             'IALF has over a thousand GE students, more than 50% of whom live in Denpasar.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'There are several possible solutions.', */
/*             'None of the solutions are ideal.' */
/*         ], */
/*         a:[ */
/*             'There are several possible solutions, none of which are ideal.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'Children used to engage in outdoor activities.', */
/*             'These activities are now mostly in decline.' */
/*         ], */
/*         a:[ */
/*             'Children used to engage in outdoor activities, most of which are now in decline.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'Ten passengers were seriously injured.', */
/*             'One later died.' */
/*         ], */
/*         a:[ */
/*             'Ten passengers were seriously injured, one of whom later died.' */
/*         ] */
/*     }, */
/*     { */
/*         q:[ */
/*             'The company employs 48 skilled engineers.', */
/*             'Eight are Indonesian.' */
/*         ], */
/*         a:[ */
/*             'The company employs 48 skilled engineers, eight of whom are Indonesian.' */
/*         ] */
/*     } */
/* ] */


    let qa = [
        {
            q:['What are the advantages _____ shopping online?'],
            a:['<div>What are the <span class="font-weight-bold text-primary">advantages</span> <span class="font-weight-bold text-success">of</span> shopping online?</div>']
        },
        {
            q:['I have changed my attitude _____ the use of plastic bags.'],
            a:['<div>I have changed my <span class="font-weight-bold text-primary">attitude</span> <span class="font-weight-bold text-success">to</span> the use of plastic bags.</div>']
        },
        {
            q:['Judicial corruption can destroy our belief _____ the legal system. '],
            a:['<div>Judicial corruption can destroy our <span class="font-weight-bold text-primary">belief</span> <span class="font-weight-bold text-success">in</span> the legal system. </div>']
        },
        {
            q:['The causes _____ the riots have not been determined yet. '],
            a:['<div>The <span class="font-weight-bold text-primary">causes</span> <span class="font-weight-bold text-success">of</span> the riots have not been determined yet. </div>']
        },
        {
            q:['Gina made a complaint _____ the lack of assistance for the disabled.'],
            a:['<div>Gina made a <span class="font-weight-bold text-primary">complaint</span> <span class="font-weight-bold text-success">about</span> the lack of assistance for the disabled.</div>']
        },
        {
            q:['Congratulations _____ your success in the civil service examination.'],
            a:['<div><span class="font-weight-bold text-primary">Congratulations</span> <span class="font-weight-bold text-success">on</span> your success in the civil service examination.</div>']
        },
        {
            q:['The hurricane caused damage _____ infrastructure in Puerto Rico.'],
            a:['<div>The hurricane caused <span class="font-weight-bold text-primary">damage</span> <span class="font-weight-bold text-success">to</span> infrastructure in Puerto Rico.</div>']
        },
        {
            q:['The demand _____ flights always rises during the holiday season. '],
            a:['<div>The <span class="font-weight-bold text-primary">demand</span> <span class="font-weight-bold text-success">for</span> flights always rises during the holiday season. </div>']
        },
        {
            q:['Please provide us with details _____ your previous employment. '],
            a:['<div>Please provide us with <span class="font-weight-bold text-primary">details</span> <span class="font-weight-bold text-success">of</span> your previous employment. </div>']
        },
        {
            q:['I had a terrible dream _____ my grandfather and a ghost. '],
            a:['<div>I had a terrible <span class="font-weight-bold text-primary">dream</span> <span class="font-weight-bold text-success">about</span> my grandfather and a ghost. </div>']
        },
        {
            q:['Could you give me an example _____ the benefits of socialism? '],
            a:['<div>Could you give me an <span class="font-weight-bold text-primary">example</span> <span class="font-weight-bold text-success">of</span> the benefits of socialism? </div>']
        },
        {
            q:['In 2016, there was a fall _____ the rate of inflation. '],
            a:['<div>In 2016, there was a <span class="font-weight-bold text-primary">fall</span> <span class="font-weight-bold text-success">in</span> the rate of inflation. </div>']
        },
        {
            q:['The recession was caused by an increase _____ the price of oil. '],
            a:['<div>The recession was caused by an <span class="font-weight-bold text-primary">increase</span> <span class="font-weight-bold text-success">in</span> the price of oil. </div>']
        },
        {
            q:['Did you receive an invitation _____ Kelly\'s party? '],
            a:['<div>Did you receive an <span class="font-weight-bold text-primary">invitation</span> <span class="font-weight-bold text-success">to</span> Kelly\'s party? </div>']
        },
        {
            q:['Some graduates showed an interest _____ further study. '],
            a:['<div>Some graduates showed an <span class="font-weight-bold text-primary">interest</span> <span class="font-weight-bold text-success">in</span> further study. </div>']
        },
        {
            q:['There is a need _____ more research in this field. '],
            a:['<div>There is a <span class="font-weight-bold text-primary">need</span> <span class="font-weight-bold text-success">for</span> more research in this field. </div>']
        },
        {
            q:['Janice always carried a photo _____ her beloved husband. '],
            a:['<div>Janice always carried a <span class="font-weight-bold text-primary">photo</span> <span class="font-weight-bold text-success">of</span> her beloved husband. </div>']
        },
        {
            q:['Unless there is proof _____ guilt, you must acquit the defendant '],
            a:['<div>Unless there is <span class="font-weight-bold text-primary">proof</span> <span class="font-weight-bold text-success">of</span> guilt, you must acquit the defendant </div>']
        },
        {
            q:['Some patients experience an adverse reaction _____ the medicine.'],
            a:['<div>Some patients experience an adverse <span class="font-weight-bold text-primary">reaction</span> <span class="font-weight-bold text-success">to</span> the medicine.</div>']
        },
        {
            q:['Did she have a good reason _____ stealing the washing powder? '],
            a:['<div>Did she have a good <span class="font-weight-bold text-primary">reason</span> <span class="font-weight-bold text-success">for</span> stealing the washing powder? </div>']
        },
        {
            q:['Stan\'s relationship _____ his brother broke down. '],
            a:['<div>Stan\'s <span class="font-weight-bold text-primary">relationship</span> <span class="font-weight-bold text-success">with</span> his brother broke down.</div>']
        },
        {
            q:['The local police have responsibility _____ this district. '],
            a:['<div>The local police have <span class="font-weight-bold text-primary">responsibility</span> <span class="font-weight-bold text-success">for</span> this district.</div>']
        },
        {
            q:['We expect a significant rise _____ sea levels this century. '],
            a:['<div>We expect a significant <span class="font-weight-bold text-primary">rise</span> <span class="font-weight-bold text-success">in</span> sea levels this century.</div>']
        },
        {
            q:['The solution _____ the problem is obvious, Craig!'],
            a:['<div>The <span class="font-weight-bold text-primary">solution</span> <span class="font-weight-bold text-success">to</span> the problem is obvious, Craig!</div>']
        }
    ]

</script>

<Multiplayer title="dependent prepositions" qa={qa} />
