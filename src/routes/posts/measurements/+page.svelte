<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Measurements"
    description="Explaining when to and when not to mention the thing being measured"
/>

<div class="mb-3 mw-500">

    <img src="/img/australian-woman-2.png" class="img-fluid mx-auto" alt="australian-woman" style="width:75%;">

    <h1 class="mt-1">Measurements</h1>

    <div class="alert alert-danger font-italic">Just like their male counterparts, many Australian women earn <span class="font-weight-bold text-danger">money</span> 2,000 dollars per month.</div>

    <WithIcon icon="flag" position="right" msg="Bahasa Indonesia has this kind of labelling: <i>dapat uang 2,000 dolar per bulan.</i>" />

    <h3 class="mb-0 mt-0">Units used to measure many different things</h3>
    <p class="mt-0">If a <b><i>unit</i></b> like <b><i>kg</i></b> can be used as a measurement of more than one <i>thing</i>, then you need to specify the <i>thing</i>:</p>

    <div class="myGrid">
        <div>Shopkeeper</div>
        <div><i>Good morning. Can I help you?</i></div>
        <div>Customer</div>
        <div><i>I’d like 2kg of <b>rice</b>, please.</i></div>
    </div>

    <p>In this example, <b><i>kg</i></b> can be used to measure many other things: <i>potatoes</i>, <i>chocolate</i>, etc, and so it is necessary to be specific about <i>rice</i>.</p>

    <h3 class="mb-0">Units used to measure only one thing</h3>
    <p class="mt-0">On the other hand if the <b><i>unit</i></b> can only be used to measure a single thing, unambiguously, for example <b><i>dollars</i></b>, then there’s no need to mention that thing:</p>

    <div class="myGrid">
        <div>Bank teller</div>
        <div><i>Good morning. Can I help you?</i></div>
        <div>Customer</div>
        <div><i>I’d like to withdraw 1,000 dollars, please.</i></div>
    </div>

    <p>In this example, <b><i>dollars</i></b> is a label used only for <b><i>money</i></b>, and so the word <b><i>money</i></b> is redundant in the phrase <i>1,000 dollars of money</i>.</p>

    <p>If we apply this to the original problem then we get:</p>

    <img src="/img/australian-woman.png" class="img-fluid mx-auto" alt="australian-woman" style="width:25%;float:right;">
    <div class="alert alert-success font-italic">Just like their male counterparts, many Australian women earn 2,000 dollars per month.</div>
    
</div>


<style>
    .myGrid {
        display:grid;
        grid-template-columns: 90px 1fr;
        column-gap: 10px;
        padding-left: 30px;
    }
</style>
