<script>
    import WithIcon from '../../components/WithIcon.svelte'  
    import Select from '../../components/Select.svelte'  
    import Modal from '../../components/Modal.svelte'  
    import SvelteSeo from "svelte-seo"
    import { scale } from 'svelte/transition'
    import { tooltip } from '$lib/tooltip'

    let showModal = false;
    let showFeedback = false;
    let showActivity = true;
    let fb = '';

    let toggleModal = () => {
        showModal = !showModal;
    }

    let check = () => {

        let score = 0;
        let els = document.querySelectorAll('.ans');

        let allDone = true;

        for(let i=0; i<els.length; i++) {
            let el = document.querySelector("#A"+(i+1));
            if(el.value == 'select') {
                allDone = false;
            }
        }


        if(!allDone) {
            toggleModal();
        } else {
            for(let i=0; i<els.length; i++) {
                let el = document.querySelector("#A"+(i+1));
                let coba = el.value;
                let ans = el.getAttribute('data');

                if(coba == ans) {
                    score++;
                    el.classList.add('success');
                } else {
                    el.classList.add('danger');
                }
            }
            
            showFeedback = true;
            console.log("score: " + score);
            fb = 'Score: ' + score + '/' + els.length;
        }

    }
    
</script>

<SvelteSeo
    title="IELTS Speaking Recount"
    description="A common text genre in IELTS Speaking - Recount."
/> 

<Modal {showModal} on:click={toggleModal} />

<div class="mb-3 mw-500">

    <h1>IELTS Speaking - Recount</h1>

    <p>In IELTS speaking part 2 you are required to speak for between 1 and 2 minutes about a topic given by the examiner.</p>
    <p>Although it is difficult to predict the topic, the generic features of your spoken text are likely to follow one of two types. Here I demonstrate one of these types - <b><i>recount</i></b>.</p>

    <p>First I'll talk you through the predictable features of <i><b>recount</b></i> and then we'll look at an example.</p>

    <p><b><i>Recount</i></b> has a predictable structure:</p>

    <ul>
        <li><i><b>Orientation</b></i></li>
        <li class="lst-none mb-1">Background information explaining when, where, with whom, etc.)</li>
        <li><i><b>Events</b></i></li>
        <li class="lst-none mb-1">A string of action verbs</li>
        <li><i><b>Re-orientation</b></i> (Optional)</li>
        <li class="lst-none">Relating events to the present somehow</li>
    </ul>

    <h3>1. Orientation</h3>

    <p>In the <i><b>orientation</b></i> you are likely to use a lot of past continuous tense to 'set the scene':</p>

    <ul class="lh-15 font-italic">
        <li>I was wearing warm clothes..</li>
        <li>I was driving very fast..</li>
    </ul>

    <p>The exception to this is state verbs, which of course cannot be continuous:</p>

    <ul class="lh-15 font-italic">
        <li>It was summer.</li>
        <li>I was in my third semester at university.</li>
    </ul>

    <h3>2. Events</h3>

    <p>The <i><b>events</b></i> are all likely to feature past simple verbs, unless there are <i>interrupted actions</i>, in which case the first verb will be <i>continuous</i> and the second <i>simple</i>:</p>

    <p style="padding-left: 30px;"><i>I <b>was driving</b> very fast when suddenly a cat <b>ran</b> in front of the car!</i></p>

    <p>Notice that vocabulary is often predictable: <i><b>suddenly</b>, <b>As</b>.., <b>While</b>.., etc.</i></p>

    <h3>3. Re-orientation</h3>
    <p>Again, this third section is optional. Here you're likely to use present tenses and present time expressions, or <i><b>will</b></i>:</p>

    <ul class="lh-15 font-italic">
        <li>These days <b><i>I'm careful</i></b> not to drive so fast.</li>
        <li><b><i>I'll</i></b> never do anything so stupid again!</li>
    </ul>

    <img src="/img/mangkunegaran.jpg" class="img-fluid rounded border" alt="Mangkunegaran">

    <h3>Example</h3>
    <p>So, now that you know something about the predictable structure and language of <i>recount</i> try to complete the text below with correct forms of the verbs shown in brackets. Then click 'Check your answers' for feedback.</p>

{#if showFeedback}
    <div id="feedback" in:scale><h1 class="text-center">{fb}</h1>
        <p class="text-center">Hover over (or tap) underlined items for tooltips.</p>
        It <span class="tooltip" title="background - 'to be' cannot be continuous, so: past simple" use:tooltip>was</span> a few months ago. I <span class="tooltip" title="background - 'to be' cannot be continuous, so: past simple" use:tooltip>was</span> in Solo on holiday with my wife. We <span class="tooltip" title="background - action verb (visit) - past continuous" use:tooltip>were visiting</span> Mangkunegaran because once a week they <span class="tooltip" title="a regular event - present simple" use:tooltip>have</span> a gamelan rehearsal and I <span class="tooltip" title="want - state verb - past simple" use:tooltip>wanted</span> to see it. While I <span class="tooltip" title="background to the main event - action verb - past continuous" use:tooltip>was taking</span> photographs of the gongs, suddenly I <span class="tooltip" title="event - past simple" use:tooltip>recognised</span> in the audience somebody I <span class="tooltip" title="permanent state - past simple" use:tooltip>knew</span> from England. I first <span class="tooltip" title="event in the remote past - past simple" use:tooltip>met</span> Claudia about 10 years ago when she <span class="tooltip" title="background to 'met' - action verb - past continuous" use:tooltip>was attending</span> a course in Balinese gamelan that I <span class="tooltip" title="background to 'met' - action verb - past continuous" use:tooltip>was teaching</span> at a music summer school. I <span class="tooltip" title="background - reference to previous past event - past perfect" use:tooltip>hadn't seen</span> her since that time in England. It<span class="tooltip" title="event - past simple" use:tooltip>was</span> an amazing coincidence that we <span class="tooltip" title="event - past simple" use:tooltip>met</span> in Solo! We <span class="tooltip" title="background - state verb - past simple" use:tooltip>were</span> both on holiday. It <span class="tooltip" title="background - state verb - past simple" use:tooltip>was</span> my first ever visit to Mangkunegaran and only my third visit to Solo. Claudia, meanwhile, <span class="tooltip" title="background - reference to previous event - past perfect" use:tooltip>hadn't been</span> to Solo for 22 years.
    </div>
{/if}

{#if showActivity}
    <div id="activity">
        It <Select count="1" options="was,be" /> a few months ago. I <Select count="2" options="was,be" /> in Solo on holiday with my wife. We <Select count="3" options="were visiting,visit" /> Mangkunegaran because once a week they <Select count="4" options="have,are having,had" /> a gamelan rehearsal and I <Select count="5" options="wanted,want" /> to see it. While I <Select count="6" options="was taking,take,took" /> photographs of the gongs, suddenly I <Select count="7" options="recognised,recognise,was recognising" /> in the audience somebody I <Select count="8" options="knew,was knowing" /> from England. I first <Select count="9" options="met,meet,was meeting" /> Claudia about 10 years ago when she <Select count="10" options="was attending,attend,attended" /> a course in Balinese gamelan that I <Select count="11" options="was teaching,teach,taught" /> at a music summer school. I <Select count="12" options="hadn't seen,haven't seen" /> her since that time in England. It<Select count="13" options="was,be,'s,is" /> an amazing coincidence that we <Select count="14" options="met,meet,were meeting" /> in Solo! We <Select count="15" options="were,be" /> both on holiday. It <Select count="16" options="was,be" /> my first ever visit to Mangkunegaran and only my third visit to Solo. Claudia, meanwhile, <Select count="17" options="hadn't been,hasn't been" /> to Solo for 22 years.
    </div>
{/if}

<button class="btn btn-outline-primary mx-auto my-2" on:click={check}>check</button>

</div>

    <style>
#feedback {
    line-height:1.5rem;
    margin: 10px auto;
}
    </style>
