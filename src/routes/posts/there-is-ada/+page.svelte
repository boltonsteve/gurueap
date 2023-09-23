<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
  title="There is ada",
  description="Demonstrating the redundance of 'there is/there are' when a sentence or clause already includes a subject."
/>

<div class="mb-3 mw-500">

    <h1>There is Ada</h1>

    <div class="alert alert-danger font-italic">In Australia <span class="text-danger font-weight-bold">there are</span> many women receive the same salary as men.</div>

    <WithIcon icon="flag">
        <div slot="html">A common mistake made by Indonesian native speakers is to include the 'introductory subject' <b><i>there is/there are</i></b> as well as another subject - next to each other before the verb in a sentence.</div>
    </WithIcon>

    <p>This is ok in Bahasa Indonesia, but in English you must choose <b><i>either</i></b> this:</p>

    <div class="alert alert-success font-italic"><span class="font-italic">In Australia <span class="text-success font-weight-bold">many women</span> receive the same salary as men.</span><br>(subject: many women)</div>

    <p>..<b><i>or</i></b> this:</p>

    <div class="alert alert-success font-italic"><span class="font-italic">In Australia <span class="text-success font-weight-bold">there are</span> many women.</span><br>(subject: there are)</div>

    <p>Next time your head is telling you <b><i>ada..</i></b>, stop and ask yourself whether you really need to use <b><i>there is/there are</i></b>.</p>

    <p>If you already have a subject, <span class="uli">do not use</span> <b><i>there is/there are</i></b>!</p>

</div>
