<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
</script>

<SvelteSeo
  title="GuruEAP - EAP and IELTS",
  description="Academic English and IELTS preparation. Not only for Indonesians."
/>

<svelte:head>
    <title>GuruEAP - Academic English not only for Indonesians</title>
</svelte:head>
<div class="mw-500 mb-3">
    <div>
        <img src="/img/gurueap.jpg" class="img-fluid rounded" alt="GuruEAP">
        <h2>Academic English not only for Indonesians</h2>
        <p>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia. Posts deal with the various academic and linguistic challenges faced by all international students preparing for IELTS and for both graduate and postgraduate study abroad.</p>
        <p>{@html flagIndo} I like to think there's something for everybody here, but certainly if you're Indonesian and you're preparing for IELTS and/or study abroad, then you've come to the right place!</p>
    </div>
</div>
