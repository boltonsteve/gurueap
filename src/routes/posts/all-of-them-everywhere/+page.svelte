<script>
    import SvelteSeo from "svelte-seo"
    import { ConeStriped } from "svelte-bootstrap-icons";
    import WithIcon from '../../components/WithIcon.svelte';
</script>

<SvelteSeo
    title="All of them everywhere",
    description="Demonstrating the function of the plural 's' to communicate 'all of them everywhere'."
/>

<div class="mb-3 mw-500">

    <img src="/img/domestic-appliances.jpg" class="img-fluid rounded border mb-0" alt="domestic appliances">

    <h1>All of them everywhere</h1>

    <p class="alert alert-danger font-italic">Domestic work is made easier with the use of <span class="font-weight-bold text-danger">dishwasher</span>, <span class="font-weight-bold text-danger">vacuum cleaner</span>, and <span class="font-weight-bold text-danger">washing machine</span>.</p>

    <p>It doesn't matter <b><i>which</i></b> dishwasher, <b><i>which</i></b> vacuum cleaner, or <b><i>which</i></b> washing machine, they <span class="uli">all</span> make domestic work easier, or at least so this claim seems to suggest.</p>

    <p class="alert alert-success font-italic">Domestic work is made easier with the use of <span class="font-weight-bold text-success">dishwasher<i>s</i></span>, <span class="font-weight-bold text-success">vacuum cleaner<i>s</i></span>, and <span class="font-weight-bold text-success">washing machine<i>s</i></span>.</p>

    <p>If your claim applies to <b><i>all of them</i></b> everywhere, add an <b><i>s</i></b> to your noun!</p>

    <WithIcon icon="sign"> 
        <div slot="html">Learn more about <a href="../posts/article-s">articles and <b><i>s</i></b></a> and the meanings that they enable you to communicate.</div>
    </WithIcon>

</div>
