<script>

import Multiplayer from '../../components/Multiplayer.svelte'

let qa = [
    {
        q:[
            '<div>With the support of key people, Ms Smith could change the organisational culture into a more participative, less hostile workforce.</div>'
        ],
        a:[
            '<div>With the support of key people, Ms Smith <b><i>could</i></b> change the organisational culture into a more participative, less hostile workforce.</div>'
        ]
    },
    {
        q:[
            '<div>This film gave a fairly objective view to the events surrounding the Russian Revolution.</div>'
        ],
        a:[
            '<div>This film gave a <b><i>fairly</i></b> objective view to the events surrounding the Russian Revolution.</div>'
        ]
    },
    {
        q:[
            '<div>Although the work that is being conducted in several areas regarding biological sensors shows significant progress, there is still quite a lot of work to do in order to understand how biological sensors in insects and other animals interact and what effect they have on animal behaviour.</div>'
        ],
        a:[
            '<div>Although the work that is being conducted in several areas regarding biological sensors shows <b><i>significant</i></b> progress, there is still <b><i>quite a lot of</i></b> work to do in order to understand how biological sensors in insects and other animals interact and what effect they have on animal behaviour.</div>'
        ]
    },
    {
        q:[
            '<div>All three types of leg sensors seem to be important for agile locomotion.</div>'
        ],
        a:[
            '<div>All three types of leg sensors <b><i>seem to be</i></b> important for agile locomotion.</div>'
        ]
    },
    {
        q:[
            '<div>Robotic labour will probably be needed for most of our industrial and commercial activities.</div>'
        ],
        a:[
            '<div>Robotic labour will <b><i>probably</i></b> be needed for most of our industrial and commercial activities.</div>'
        ]
    },
    {
        q:[
            '<div>The results of the study suggest that there are considerable benefits to be gained from including writing check lists in the teaching/learning cycle.</div>'
        ],
        a:[
            '<div>The results of the study <b><i>suggest</i></b> that there are <b><i>considerable</i></b> benefits to be gained from including writing check lists in the teaching/learning cycle.</div>'
        ]
    },
    {
        q:[
            '<div>The failure of information systems is rarely due to technological failure. Failure is much more likely to be caused by human and organisational problems.</div>'
        ],
        a:[
            '<div>The failure of information systems is <b><i>rarely</i></b> due to technological failure. Failure is <b><i>much more likely</i></b> to be caused by human and organisational problems.</div>'
        ]
    },
    {
        q:[
            '<div>The results show that, taken together, at least 17 of the 25 items can form a valid scale measuring graduate perceptions of their courses for each of the three data groups.</div>'
        ],
        a:[
            '<div>The results show that, taken together, <b><i>at least</i></b> 17 of the 25 items <b><i>can</i></b> form a valid scale measuring graduate perceptions of their courses for each of the three data groups.</div>'
        ]
    },
    {
        q:[
            '<div>Of the five sub-scales, Good Teaching and Generic Skills are only moderately valid and reliable for use and interpretation separately from the main scale.</div>'
        ],
        a:[
            '<div>Of the five sub-scales, Good Teaching and Generic Skills are <b><i>only moderately</i></b> valid and <b><i>reliable</i></b> for use and interpretation separately from the main scale.</div>'
        ]
    }
]




</script>

<Multiplayer title="Strengthening and/or Weakening" qa={qa} />
