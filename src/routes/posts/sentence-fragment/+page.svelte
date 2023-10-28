<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
    import { tooltip } from '$lib/tooltip';
</script>

<div class="mb-3 mw-500">

    <img src="/img/fragments.png" class="img-fluid rounded" alt="fragments">

    <h1>Sentence Fragments</h1>

    <div class="alert alert-danger font-italic">There are many instances of working conditions in the craft industry that are not economically sustainable. <span class="font-weight-bold text-danger">For example, having a monthly income lower than the national minimum wage average.</span></div>

    <p>This may appear harmless, but it is grammatically incorrect. It is generally referred to as a <b><i>sentence fragment</i></b>. The sentence is incomplete because it does not have <b><i>a subject</i></b> and <b><i>a verb</i></b>.</p>

    <WithIcon icon="flag">
        <div slot="html">Indonesian IELTS candidates often introduce examples in this way. Perhaps that's how it's done in Bahasa Indonesia?</div>
    </WithIcon>

    <p>The safest way to introduce an example, and to maintain correct grammar, is following a comma:</p>

    <div class="alert alert-success font-italic">There are many instances of working conditions in the craft industry that are not economically sustainable, <span class="font-weight-bold text-success">for example having a monthly income lower than the national minimum wage average.</span></div>

    <p>Alternatively you can follow <b><i>For example</i></b> with an <span class="tooltip" title="A clause that can stand alone as a sentence, with a subject + verb, etc." use:tooltip>independent clause</span>:</p>

    <div class="alert alert-success font-italic">There are many instances of working conditions in the craft industry that are not economically sustainable. For example, <span class="font-weight-bold text-success">having a monthly income lower than the national minimum wage average is not sustainable.</span></div>

    <WithIcon icon="sign" position="right">
        <div slot="html">For more information about clauses, check out the video <a href="../posts/conjunctions" target="_blank">conjunction sandwich</a>.</div>
    </WithIcon>

</div>
