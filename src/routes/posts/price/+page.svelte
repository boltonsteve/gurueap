<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Price"
    description="Demonstrating collocation using the noun 'price'."
/>

<div class="mb-3 mw-500">

    <img src="/img/price.jpg" class="img-fluid rounded" alt="price">

    <h1>The price is NOT expensive</h1>

    <div class="alert alert-danger font-italic">Because of the recent increase in fuel prices, the <span class="font-weight-bold text-danger">price</span> of food is <span class="font-weight-bold text-danger">more expensive</span> than before.</div>

    <WithIcon icon="flag">
        <div slot="html">This is obviously a direct translation of <b><i>harganya lebih mahal</i></b>.</div>
    </WithIcon>

    <p>This is really a collocation problem. The IELTS examiner will understand what you mean, but you will not receive a good score for vocabulary. A <i><b>product or service</b></i> can be <i><b>expensive</b></i>, but the <i><b>price</b></i> of the product or service is either <i><b>high</b></i> or <i><b>low</b></i>.</p>

    <p>More correct <a href="../posts/collocation" target="_blank">collocation</a> is as follows:</p>

    <div class="alert alert-success font-italic">Because of the recent increase in fuel prices, the <span class="font-weight-bold text-success">price</span> of food is <span class="font-weight-bold text-success">higher</span> than before.</div>

    <div class="alert alert-success font-italic">Because of the recent increase in fuel prices, <span class="font-weight-bold text-success">food</span> is more <span class="font-weight-bold text-success">expensive</span> than before.</div>

    <p>Hope that helps!</p>

</div>
