<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Why is..?"
    description="Correcting a common error with question forms beginning 'why?'"
/>

<div class="mb-3 mw-500 pt-1">

    <img src="../img/why.png" class="mx-auto w-75" alt="why">

    <h1 class="mt-0">Why is..?</h1>

    <div class="alert alert-danger font-italic">Excuse me, why the answer to number 10 <span class="font-weight-bold text-danger">is</span> ‘A’?</div>

    <p>Excuse me, <b><i>why is</i></b> this grammatically incorrect? Here are some correct sentences:</p>

    <div class="myGrid">
        <div>Positive</div>
        <div>The answer to number 10 is ‘A’.</div>
        <div>Negative</div>
        <div>The answer to number 10 is not ‘A’.</div>
        <div>Yes/No question</div>
        <div>Is the answer to number 10 ‘A’?</div>
        <div>Why question</div>
        <div>Why is the answer to number 10 ‘A’?</div>
        <div>Negative why question</div>
        <div>Why isn’t the answer to number 10 ‘B’?</div>
    </div>

    <p>Study these sentences and then explain the rule in your own words to a friend.</p>


</div>

<style>
    .myGrid {
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 10px;
    }
</style>
