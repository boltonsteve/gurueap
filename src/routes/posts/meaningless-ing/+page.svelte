<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'

    import { Link45deg, Youtube } from "svelte-bootstrap-icons";

    let size = 45;
</script>

<SvelteSeo
    title="Time and the meaningless __ing"
    description="Reminding Indonesian IELTS candidates in particular that the verb participle (__ing) requires 'to be' in order to communicate 'continuous'"
/>

<div class="mb-3 mw-500">

    <img src="../img/meaningless-ing.png" class="img-fluid mx-auto" alt="meaningless ing">

    <h1>Time and the meaningless __ing</h1>

    <div class="alert alert-danger font-italic">The number of viewers at 11pm <span class="text-danger font-weight-bold">fluctuating</span> greatly.</div>

    <WithIcon icon="flag" position="right" msg="Be careful if your language does not have this grammar. I see this mistake a lot in the writing of Indonesian IELTS candidates." />

    <p>In the opening example, the reader will ask himself <b><i>"What do you mean? What is the time frame?"</i></b></p>
    <p>I imagine that the essay question is some kind of graph, table or chart, showing TV viewing figures. The data might be referring to a day in the past, but is more likely referring to every day. Neither of these meanings are given by the writer.</p>
    <p>Here are some possibilities:</p>

    <h3 class="mb-0 headroom">Happening around now?</h3>
    <p class="mt-0">Use present continuous tense, remembering to use <span class="font-weight-bold font-italic text-primary">to be</span> before the verb <span class="font-weight-bold font-italic text-success">__ing</span>:</p>

    <div class="alert alert-success font-italic">The number of viewers at 11pm <span class="font-weight-bold text-primary">is</span> <span class="font-weight-bold text-success">fluctuating</span> greatly.</div>

    <p>This means that the number is fluctuating <b><i>around now</i></b>.</p>

    <div class="link-grid">
        <Youtube position="left" fill="var(--red)" height={size} width={size} />
        <div><div>In this video you will find <a href="http://gurueap.com/posts/present-tenses" target="_blank">more information and examples of present continuous used to describe <b><i>time around now</i></b></a>.</div></div>
    </div>


    <h3 class="headroom mb-0">Happens regularly?</h3>
    <p class="mt-0">Use present simple tense, remembering to add 's' to the verb if necessary so that the verb (fluctuate) 'agrees' with the subject (number):</p>

    <div class="alert alert-success font-italic">The number of viewers at 11pm <span class="font-weight-bold text-success">fluctuates</span> greatly.</div>

    <p>This means that the number fluctuates <b><i>regularly</i></b>.</p>

    <div class="link-grid">
        <Youtube position="left" fill="var(--red)" height={size} width={size} />
        <div><div>In this video you will find <a href="http://gurueap.com/posts/present-tenses" target="_blank">more information and examples relating to present simple tense and <b><i>regular events in the present</i></b></a>.</div></div>
    </div>

    <div class="link-grid">
        <Link45deg position="left" fill="var(--teal)" height={size} width={size} />
        <div><div>Follow this link to learn more about  <a href="http://gurueap.com/posts/subject-verb" target="_blank">subject/verb agreement</a>.</div></div>
    </div>


    <h3 class="headroom mb-0">Happened in the past and finished?</h3>
    <p class="mt-0">Use past simple tense, taking care to use the correct verb form in the case of irregular verbs:</p>

    <div class="alert alert-success font-italic">The number of viewers at 11pm <span class="font-weight-bold text-success">fluctuated</span> greatly.</div>

    <p>This means that the number fluctuated regularly <b><i>in the past</i></b> but does <b><i>not</i></b> fluctuate regularly <b><i>now</i></b>.</p>

    <div class="link-grid">
        <Youtube position="left" fill="var(--red)" height={size} width={size} />
        <div><div>In this video will find <a href="http://gurueap.com/posts/past-tenses" target="_blank">more information and examples of past simple to describe <b><i>regular events in the past</i></b></a>.</div></div>
    </div>

</div>

<style>
    .headroom {
        margin-top:40px;
    }
    .link-grid {
        display:grid;
        grid-template-columns: 50px 1fr;
        gap:10px;
    }
    .link-grid > div {
        display:grid;
        grid-template-columns: 1fr;
        align-items: center;
        font-size:0.8rem;
    }
</style>
