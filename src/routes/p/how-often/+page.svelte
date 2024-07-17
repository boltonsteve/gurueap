<script>
    import SvelteSeo from "svelte-seo";
    import { flagIndo } from '$lib/flags.js';
    import { slide } from 'svelte/transition';
    let show = false;
</script>

<SvelteSeo
    title="How often in IELTS Speaking"
    description="When to use vague adverbs of frequency, and when to be more specific."
/>

<div class="mb-3 mw-500">

    <img src="/img/how-often.jpg" class="img-fluid rounded mt-1" alt="How often?">

    <h1>How often in IELTS speaking</h1>

    <div class="alert alert-danger row-col cols-15">
        <div class="font-weight-bold">Examiner</div>
        <div class="font-italic">How often do you go to the cinema?</div>
        <div class="font-weight-bold">Candidate</div>
        <div class="font-italic">Er.. <span class="font-weight-bold text-danger">Sometimes</span>.</div>
        <div class="font-weight-bold">Examiner</div>
        <div class="font-italic">Yes, but how often?</div>
    </div>

    <p>Although it is grammatically correct to respond to the question <b><i>How often?</i></b> with <b><i>sometimes</i></b>, you still haven't answered the question. When asked <b><i>how often</i></b>, try to give more information - no matter how infrequently you do something.</p>

    <p>After 'How often' try to respond with <i><b>a number + times + and a period</b></i>:</p>

<ul>
 	<li class="font-italic">Three times a week.</li>
 	<li class="small mb-1 lst-none"> = Quite often.</li>
 	<li class="font-italic">Four times a year.</li>
 	<li class="small mb-1 lst-none"> = Not very often.</li>
 	<li class="font-italic">Once every 10 years.</li>
 	<li class="small mb-1 lst-none"> = Hardly ever. ('once' = 1 time)</li>
</ul>

<p>Adverbs of frequency - <b><i>sometimes</i></b>, <b><i>always</i></b>, <b><i>seldom</i></b>, etc - are more common in response to the question <b><i>do/are you ever?</i></b></p>

<div class="alert alert-success row-col cols-15">
    <div class="font-weight-bold">Examiner</div>
    <div class="font-italic"><b><i>Do you ever</i></b> feel lonely?</div>
    <div class="font-weight-bold">Candidate</div>
    <div class="font-italic">Sometimes.</div>
    <div class="font-weight-bold">Examiner</div>
    <div class="font-italic"><b><i>Are you ever</i></b> bored in your job?</div>
    <div class="font-weight-bold">Candidate</div>
    <div class="font-italic">Rarely.</div>
</div>

<p>But even in these situations it's a good idea to give additional information. Why only <b><i>sometimes</i></b>? Why <b><i>rarely</i></b>? etc.</p>

<h3 class="mb-0">Challenge</h3>
<p class="mt-0">In the box below, try and complete the question from this post's featured image. Then click for possible questions!</p>

{#if show}
    <div class="alert alert-info mb-2 pb-0" id="possibles" in:slide={{duration: 1000}}>
        <div class="row-col cols-11">
            <div>
                <ul class="lh-15 mt-0 pt-0 pl-2">
                    <li>How often do you exercise?</li>
                    <li>How often do you go to the gym?</li>
                    <li>How often do you drink beer?</li>
                </ul>
            </div>
            <div>
                <img src="/img/how-often.jpg" class="img-fluid rounded" alt="How often?">
            </div>
        </div>

    </div>
{/if}

<textarea class="form-control rounded p-1 mr-3" rows="5" placeholder="How often.."></textarea>

<button class="btn btn-outline-dark mx-auto my-1" on:click={() => {show=true;}}>show possible questions</button>

</div>
