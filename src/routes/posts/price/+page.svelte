<script>
    import { flagIndo } from '$lib/flags.js';
</script>

<svelte:head>
    <title>Price</title>
</svelte:head>

<div class="mb-3 mw-500">

    <img src="/img/price.jpg" class="img-fluid rounded" alt="price">

    <h1>The Price is not Expensive</h1>

    <p class="font-italic ml-3">Because of the recent increase in fuel prices, the <span class="font-weight-bold text-danger">price</span> of food is <span class="font-weight-bold text-danger">more expensive</span> than before.</p>

    <p>{@html flagIndo} This is obviously a direct translation of <b><i>harganya lebih mahal</i></b>.</p>

    <p>This is really a collocation problem. The IELTS examiner will understand what you mean, but you will not receive a good score for vocabulary. A <i><b>product or service</b></i> can be <i><b>expensive</b></i>, but the <i><b>price</b></i> of the product or service is either <i><b>high</b></i> or <i><b>low</b></i>.</p>

    <p>More correct collocation is as follows:</p>

    <p class="font-italic ml-3">Because of the recent increase in fuel prices, the <span class="font-weight-bold text-success">price</span> of food is <span class="font-weight-bold text-success">higher</span> than before.</p>

    <p class="font-italic ml-3">Because of the recent increase in fuel prices, <span class="font-weight-bold text-success">food</span> is more <span class="font-weight-bold text-success">expensive</span> than before.</p>

    <p>Hope that helps!</p>

</div>
