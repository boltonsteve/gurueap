<script>
    import SvelteSeo from "svelte-seo"
    import { scale, slide } from 'svelte/transition'
    import WithIcon from '../../components/WithIcon.svelte'
    import * as animateScroll from "svelte-scrollto"

    let showFeedback = false;

    let check = () => {
        showFeedback = true;
        /* animateScroll.scrollTo({element: '#feedback', duration: 1000, offset: -50}) */
    }
</script>

<SvelteSeo
    title="Performance and Appearance"
    description="Demonstrating the differences in meaning between performance and appearance in their countable and uncountable forms."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,borrowed word,countable uncountable,vocabulary" 
/>

<div class="mb-3 mw-500">

    <img src="/img/clown.png" class="img-fluid mt-1" alt="clown" style="border-bottom:3px solid red;">

    <h1>Performance and Appearance</h1>

    <div class="alert alert-danger font-italic">My friends advised me change my <span class="font-weight-bold text-danger">performance</span>, so I went to the salon, bought some new clothes and smart shoes. My friends agree that my <span class="font-weight-bold text-danger">performance</span> is much better now.</div>

<WithIcon icon="flag">
    <div slot="html">This looks like an Indonesian student trying to translate <b><i>penampilan</i></b>!</div>
</WithIcon>

<h3 class="mb-0">Appearance</h3>
<p class="mt-0">Before a clown goes on stage, he must first of all change his <b><i>appearance</i></b>. This usually involves changing clothes and applying makeup. When he goes on stage, the audience will laugh at the clown because he looks funny.</p>

<h3 class="mb-0">Performance</h3>
<p class="mt-0">When the clown is on stage, the audience might also laugh at the clown because of his <a href="https://en.wikipedia.org/wiki/Performance">performance</a>. For example he might walk in a funny way, or he might do funny things, like <a href="https://www.youtube.com/watch?v=NuDP7toFCZM" target="_blank">throw custard pies at people</a>.</p>

Notice also that <i><b>appearance</b></i> and <i><b>performance </b></i>have different meanings in their countable and uncountable forms:
<ol style="list-style-type:lower-alpha;" class="lh-15">
 	<li><b>appearance uncountable</b>: clothing, makeup, grooming, etc.</li>
 	<li><b>appearance countable</b>: If he's famous, the clown might make <b><i>an appearance</i></b> in London tonight, and in Jakarta tomorrow night. That's two <b><i>appearances</i></b>.</li>
 	<li><b>performance uncountable</b>: This is usually for machines, in particular cars. If we say a Ferrari can accelerate very quickly and has a top speed of 300kmh, we're talking about its <b><i>performance</i></b>.</li>
 	<li><b>performance countable</b>: Let's say the clown goes on stage in London tonight, and in Jakarta tomorrow night. That's two <b><i>performances</i></b>.</li>
</ol>

<p>You can see that in their countable forms, <i><b>appearance</b></i> and <i><b>performance</b></i> generally have the same meaning. However, you need to be careful with the uncountable forms of <i><b>appearance</b></i> and <i><b>performance</b></i>!</p>

<WithIcon icon="flag">
    <div slot="html">Indonesians usually write <b><i>performance</i></b> when they mean <b><i>appearance</i></b>.</div>
</WithIcon>

<img src="/img/clown-unicycle.png" alt="clown on unicycle" style="width:160px;float:right;padding:10px;">
<p>I'll give you a text that features these different meanings. For each example, can you guess which meaning I'm using? (a-d)</p>

<p>Clowns are not usually interested in the <b><i>performance</i></b> (1) of cars because that's not funny. Instead they ride unicycles as part of their on-stage <b><i>performances</i></b> (2). They also change their physical <b><i>appearance</i></b> (3) before they go on stage to make sure they look funny. A travelling clown makes up to 100 <b><i>appearances</i></b> (4) a year in different locations.</p>

{#if showFeedback}
<div id="feedback">
    <div>1.</div>
    <div>c</div>
    <div>performance uncountable (cars are machines)</div>
    <div>2.</div>
    <div>d</div>
    <div>performance countable</div>
    <div>3.</div>
    <div>a</div>
    <div>appearance uncountable (clowns like to wear red noses, for example!)</div>
    <div>4.</div>
    <div>b</div>
    <div>appearance countable</div>
</div>
{/if}

<button class="btn btn-outline-primary mx-auto" on:click={check}>check</button>

</div>

<style>
#feedback {
    display:grid;
    grid-template-columns: 1fr 1fr 6fr;
    gap: 10px;
    margin: 20px;
        line-height:1rem;
}
</style>
