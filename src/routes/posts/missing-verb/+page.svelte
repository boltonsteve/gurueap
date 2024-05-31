<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
title="Missing Verb"
description="Recommending the use of at least one verb in a sentence in order to make a sentence."
/> 

<div class="mw-500 mb-3 pt-1">

    <img src="/img/missing.png" class="img-fluid mx-auto mb-0" alt="missing" style="max-width:200px;">

    <h1 class="mt-0 mb-2">Missing Verb</h1>

    <div class="alert alert-danger font-italic mb-2">First of all, the problem of humans using too many of the world’s resources.</div>

    <h3>Problem</h3>

    <div class="myGrid">
        <div>Trainer:</div>
        <div>Obviously this is not good because it’s not a sentence; there’s no verb.</div>
        <div>Student:</div>
        <div>What about <b><i>using</i></b>? Isn’t that a verb?</div>
        <div>Trainer:</div>
        <div><p class="mt-0">Sometimes yes, but here it functions as a noun modifier, <i>not</i> as a verb. It’s telling you something about the noun <b><i>humans</i></b>. It’s part of one long noun phrase: <span class="uli">the problem of humans using too many of the world’s resources</span>. If you like you can use this long noun phrase as a <span class="font-weight-bold text-success">subject</span> followed by <span class="font-weight-bold text-primary">a verb</span>, or a verb followed by something else:</p>

        </div>
    </div>

    <h3 class="mb-0">Solutions</h3>
 
    <div class="alert alert-success font-italic">First of all, <span class="font-weight-bold text-success">the problem of humans using too many of the world’s resources</span> <span class="font-weight-bold text-primary">is</span> a difficult problem to solve.</div>

    <p>..or as an <span class="font-weight-bold text-danger">object</span> following <span class="font-weight-bold text-primary">a verb</span>:</p>

    <div class="alert alert-success font-italic mb-2">The government <span class="font-weight-bold text-primary">is striving to solve</span> <span class="font-weight-bold text-danger">the problem of humans using too many of the world’s resources</span>.</div>

<WithIcon icon="flag" position="right">
    <div slot="html">Indonesian IELTS candidates often neglect to include a verb, because that's OK in Bahasa Indonesia. Often this happens after phrases like <i>'First of all..'</i> and <i>'For example..'</i>. When writing in English, make sure that your sentences all contain at least a subject and <span class="font-weight-bold text-primary">a verb</span>!"</div>
</WithIcon>

</div>


<style>
    .myGrid {
        display:grid;
        grid-template-columns: 65px 1fr;
        column-gap: 7px;
        row-gap:12px;
    }
</style>
