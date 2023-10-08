<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Cannot, also can"
  description="Demonstrating a word-order difference between English and Bahasa Indonesia"
/>

<div class="mb-3 mw-500">

    <img src="/img/can-choir.jpg" class="img-fluid rounded" alt="can choir">

    <h1>Cannot, also can</h1>

    <p class="alert alert-danger font-italic">In addition to smoking, excessive drinking <span class="font-weight-bold text-danger">also can</span> cause illness.</p>

    <WithIcon icon="flag">
        <div slot="html">This looks like a direct translation from Bahasa Indonesia - <b><i>juga bisa</i></b>.</div>
    </WithIcon>

    <p>Actually the meaning is clear, it's just not good <a href="../posts/collocation">collocation</a>. Don't write <span class="font-weight-bold text-danger">also can</span>, write <span class="font-weight-bold text-success">can also</span> instead:</p>

    <p class="alert alert-success font-italic">In addition to smoking, excessive drinking <span class="font-weight-bold text-success">can also</span> cause illness.</p>

</div>
