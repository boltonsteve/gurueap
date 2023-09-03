<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
</script>

<SvelteSeo
  title="Memorising and remembering memories",
  description="Demonstration of first language interference affecting three vocabulary items - 'memorise', 'remember' and 'recall'"
/>

<div class="mb-3 mw-500">

    <img src="/img/sydney-students.png" class="img-fluid rounded" alt="EAP IELTS students in Sydney, Australia">

    <h1>Memorising and remembering memories</h1>

    <p class="font-italic ml-3">I take photographs so that I can <span class="font-weight-bold text-danger">memorise</span> the occasion.</p>

    <p>Here an Indonesian IELTS candidate is confusing the different forms of the Indonesian words <b><i>ingat</i></b> and <b><i>hafal</i></b>.</p>

    <p>I'm going to need to check with an Indonesian native speaker, but I'm pretty sure this is right:</p>

    <ul>
        <li>{@html flagIndo} <b><i>ingat</i></b> > remember (something)</li>
        <li>{@html flagIndo} <b><i>ingatkan</i></b> > remind (someone)</li>
        <li>{@html flagIndo} <b><i>hafal</i></b> > memorise (something)</li>
    </ul>

    <p>When we <b><i>memorise</i></b> something, we devote a great deal of cognitive effort to it. We often do this when we are preparing for an exam:</p>

    <p class="font-italic ml-3">I have my maths test tomorrow. I need to <span class="font-weight-bold text-success">memorise</span> the equations we learned in class.</p>

    <p>For an event that you're recording with a photograph, there is unlikely to be an exam, and so the following is more appropriate:</p>

    <p class="font-italic ml-3">I take photographs so that I can <span class="font-weight-bold text-success">remember</span> the occasion.</p>

    <p>As for remind, this might also be part of the preparation for a test or an exam:</p>

    <p class="font-italic ml-3">I take photographs of my lecture notes to <span class="font-weight-bold text-success">remind myself</span> about the formulae used by Feldman.</p>


</div>


