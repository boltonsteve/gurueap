<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<div class="mb-3 mw-500">


    <h1>WH Questions</h1>

    <img src="/img/question-mark.png" class="mx-auto" alt="question mark" style="width:130px;float:right;">
    <div class="alert alert-danger font-italic">Excuse me, <span class="font-weight-bold text-danger">why</span> the answer to number 10 <span class="font-weight-bold text-danger">is</span> 'A'?</div>

    <WithIcon icon="flag" position="right">
        <div slot="html">This is a common error made by Indonesian IELTS candidates, who translate directly the question form as it used in Bahasa Indonesia.</div>
    </WithIcon>

    <p>In English you need:</p>

    <div class="alert alert-success">
        <p class="font-italic mt-0">Excuse me, <span class="font-weight-bold text-success">why is</span> the answer to number 10 'A'?</p>
        <p class="small mb-0">Notice that the verb follows immediately after the question word.</p>
    </div>

    <p>It might be an idea to go back to basics:</p>

    <div class="my-grid">

    </div>
    
    <div class="my-grid mb-3">
        <div class="div-left">Positive</div>
        <div class="div-right">The answer to number 10 <b><i>is</i></b> 'A'.</div>
        <div class="div-left">Negative</div>
        <div class="div-right">The answer to number 10 <b><i>is not</i></b> 'A'.</div>
        <div class="div-left">Yes/No question</div>
        <div class="div-right"><b><i>Is</i></b> the answer to number 10 'A'?</div>
        <div class="div-left">Why question</div>
        <div class="div-right"><b><i>Why is</i></b> the answer to number 10 'A'?</div>
        <div class="div-left">Negative why question</div>
        <div class="div-right"><b><i>Why isn't</i></b> the answer to number 10 'B'?</div>
    </div>

    <WithIcon icon="info" position="right">
        <div slot="html">Note that the same rule applies to other question words - <b><i>what</i></b>, <b><i>which</i></b>, <b><i>where</i></b>, <b><i>who</i></b>, <b><i>how</i></b>, <b><i>when</i></b>.</div>
    </WithIcon> 

</div>


<style>
    .my-grid {
        display:grid;
        grid-template-columns: 1fr 2fr;
        gap: 10px;
    }
    h3 {
        margin-bottom:0px;
    }
</style>
