<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>She <span class="text-success font-weight-bold font-italic">wrote</span> books that children <span class="text-success font-weight-bold font-italic">enjoyed</span>.</div>'
        ],
        a:[
            '<div>Children <span class="text-success font-weight-bold font-italic">enjoyed</span> her books.</div>',
            '<div>She <span class="text-success font-weight-bold font-italic">wrote</span> <span class="text-primary font-weight-bold font-italic">books enjoyed by children</span>.</div>'
        ]
    },
    {
        q:[
            '<div>Young girls <span class="text-success font-weight-bold font-italic">are spending</span> increasing amounts on make-up because they <span class="text-success font-weight-bold font-italic">have been influenced by</span> advertising.</div>'
        ],
        a:[
            '<div>Young girls <span class="text-success font-weight-bold font-italic">are spending</span> increasing amounts on make-up due to <span class="text-primary font-weight-bold font-italic">the influence of advertising</span>.</div>'
        ]
    },
    {
        q:[
            '<div>I <span class="text-success font-weight-bold font-italic">failed</span> to get good enough grades to get into university because I <span class="text-success font-weight-bold font-italic">was ill</span> on the day of the exam.</div>'
        ],
        a:[
            '<div>I failed to get good enough grades to get into university due to <span class="text-primary font-weight-bold font-italic">illness</span> on the day of the exam.</div>',
            '<div><span class="text-primary font-weight-bold font-italic">My failure</span> to get good enough grades to get into university <span class="text-success font-weight-bold font-italic">was</span> due to <span class="text-primary font-weight-bold font-italic">illness</span> on the day of the exam.</div>'
        ]
    },
    {
        q:[
            '<div>If you <span class="text-success font-weight-bold font-italic">eat healthily</span> you <span class="text-success font-weight-bold font-italic">can reduce</span> the chances of getting ill.</div>'
        ],
        a:[
            '<div><span class="text-primary font-weight-bold font-italic">Healthy eating</span> <span class="text-success font-weight-bold font-italic">can reduce</span> the chances of getting ill.</div>'
        ]
    },
    {
        q:[
            '<div>If you <span class="text-success font-weight-bold font-italic">use</span> the Internet you <span class="text-success font-weight-bold font-italic">risk</span> getting viruses and losing important information.</div>'
        ],
        a:[
            '<div>Internet use <span class="text-success font-weight-bold font-italic">leads to</span> <span class="text-primary font-weight-bold font-italic">risk of viruses</span> and <span class="text-primary font-weight-bold font-italic">loss of important information</span>.</div>'
        ]
    },
    {
        q:[
            '<div>When people <span class="text-success font-weight-bold font-italic">are</span> content because their lives <span class="text-success font-weight-bold font-italic">are</span> successful they <span class="text-success font-weight-bold font-italic">tend</span> to be easier to communicate with.</div>'
        ],
        a:[
            '<div><span class="text-primary font-weight-bold font-italic">People who are content</span> because of <span class="text-primary font-weight-bold font-italic">success</span> <span class="text-success font-weight-bold font-italic">tend</span> to be easier to communicate with.</div>'
        ]
    },
    {
        q:[
            '<div>In the thirteenth century engineers <span class="text-success font-weight-bold font-italic">developed</span> new ways to construct buildings which <span class="text-success font-weight-bold font-italic">made it possible to build</span> the soaring arches of Salisbury Cathedral.</div>'
        ],
        a:[
            '<div><span class="text-primary font-weight-bold font-italic">New ways to construct buildings developed by thirteenth century engineers</span> <span class="text-success font-weight-bold font-italic">made it possible to build</span> the soaring arches of Salisbury Cathedral.</div>'
        ]
    },
    {
        q:[
            '<div>Academic reading circle discussions <span class="text-success font-weight-bold font-italic">can be</span> challenging because they <span class="text-success font-weight-bold font-italic">feature</span> long texts that contain new and unusual vocabulary.</div>'
        ],
        a:[
            '<div><span class="text-primary font-weight-bold font-italic">Long texts containing new and unusual vocabulary</span> <span class="text-success font-weight-bold font-italic">can make</span> academic reading circle discussions challenging.</div>'
        ]
    },
    {
        q:[
            '<div>If students <span class="text-success font-weight-bold font-italic">do not get</span> plenty of sleep in the lead up to an exam, they may <span class="text-success font-weight-bold font-italic">find it difficult</span> to concentrate and <span class="text-success font-weight-bold font-italic">could</span> even fail.</div>'
        ],
        a:[
            '<div><span class="text-primary font-weight-bold font-italic">Lack of sleep</span> before an exam <span class="text-success font-weight-bold font-italic">can cause</span> <span class="text-primary font-weight-bold font-italic">poor concentration</span> and even <span class="text-primary font-weight-bold font-italic">failure</span>.</div>'
        ]
    }
]

</script>

<Multiplayer title="nominalising verbs" qa={qa} />
