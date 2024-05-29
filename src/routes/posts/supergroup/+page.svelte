<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
</script>

<SvelteSeo
  title="Supergroups and Percentages"
  description="Stating subgroups and supergroups when describing percentages in IELTS Task 1 Writing"
/>

<div class="mb-3 mw-500">

    <div class="pie mb-3 mt-1">
        <img src="/img/british-vegetarian.png" class="w-50" alt="vegetarian pie chart">
        <h3>British People</h3>
    </div>

    <div class="alert alert-danger font-italic">As we can see from the chart, vegetarians <span class="font-weight-bold text-danger">have</span> 7%.</div>

    <p>The first time you mention a percentage in IELTS Task 1 writing, make sure that you include <span class="uli">both</span> the <span class="font-weight-bold text-primary">subgroup</span> <span class="uli">and</span> the <span class="font-weight-bold text-success">supergroup</span>:</p>

    <div class="alert alert-success font-italic">As we can see from the chart, <span class="font-weight-bold text-primary">vegetarians</span> account for 7% of <span class="font-weight-bold text-success">British people</span>.</div>

    <p>Or..</p>

    <div class="alert alert-success font-italic">As we can see from the chart, 7% of <span class="font-weight-bold text-success">British people</span> are <span class="font-weight-bold text-primary">vegetarian</span>.</div>

    <h3 class="mb-0">How to identify the supergroup</h3>
    <p class="mt-0">If the Task 1 question is a pie chart, the supergroup will be given as a label above or below the chart. The pie chart at the top of the page is labelled <b><i>British people</i></b>, and so <b><i>British people</i></b> are the supergroup.</p>

    <h3 class="mb-0">What if there's more than one supergroup?</h3>
    <p class="mt-0">If there is more than one supergroup, just make sure you mention the name of the next supergroup when you introduce it:</p>

    <div class="pie mb-3">
        <div class="row-col cols-11">
            <img src="/img/british-vegetarian.png" class="w-75 mx-auto" alt="vegetarian pie chart">
            <img src="/img/indonesian-vegetarian.png" class="w-75 mx-auto" alt="vegetarian pie chart">
        </div>

        <div class="row-col cols-11 mb-2">
            <div class="text-center mt-1">British People</div>
            <div class="text-center mt-1">Indonesian People</div>
        </div>
    </div>

    <div class="alert alert-success font-italic">7% of <span class="font-weight-bold text-success">British people</span> are <span class="font-weight-bold text-primary">vegetarian</span>, whereas only 1% of <span class="font-weight-bold text-success">Indonesians</span> are <span class="font-weight-bold text-primary">vegetarian</span>.</div>

    <p>If you want to avoid repetition, you can do this:</p>

    <div class="alert alert-success font-italic">7% of <span class="font-weight-bold text-success">British people</span> are <span class="font-weight-bold text-primary">vegetarian</span>, whereas <span class="uli">the figure</span> for <span class="font-weight-bold text-success">Indonesians</span> is only 1%.</div>

    <p>Or this:</p>

    <div class="alert alert-success font-italic"><span class="font-weight-bold text-primary">Vegetarians</span> account for 7% of <span class="font-weight-bold text-success">people in Britain</span> and only 1% <span class="font-weight-bold text-success">in Indonesia</span>.</div>

    <p>If there are 3 or more supergroups, it can be convenient to put numbers in brackets:</p>

    <div class="alert alert-success font-italic">7% of <span class="font-weight-bold text-success">British people</span> are <span class="font-weight-bold text-primary">vegetarian</span>. This is much higher than the figure in <span class="font-weight-bold text-success">Indonesia</span> (1%), <span class="font-weight-bold text-success">Malaysia</span> (1.5%), and <span class="font-weight-bold text-success">Thailand</span> (1.2%).</div>

    <p>Notice that all of these examples include <span class="uli">both</span> the <span class="font-weight-bold text-primary">subgroup</span> <span class="uli">and</span> the <span class="font-weight-bold text-success">supergroup(s)</span>!</p>

    <h3 class="mb-0">How this affects your IELTS score</h3>
    <p class="mt-0">If you don't mention the <span class="font-weight-bold text-success">supergroup</span> at least once in your writing, then the reader does not know which group the percentages refer to, and you will receive low scores for <a href="../posts/ielts-descriptors" target="_blank">Task Achievement</a> and for <a href="../posts/ielts-descriptors" target="_blank">Coherence and Cohesion</a>.</p>

</div>

<style>
.pie {
    border:1px solid #bbbbbb;
    border-radius:5px;
    text-align: center;
    padding-top: 20px;
}
    .pies {
        display:flex;
        justify-content: space-around;
    }
</style>
