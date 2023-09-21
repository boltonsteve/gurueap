<script>
    import SvelteSeo from "svelte-seo"
    import {flagIndo} from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Same as or Same with?",
    description="A minor collocation problem caused by first language interference. Same with instead of same as."
/> 

<div class="mw-500 mb-3">

    <img src="/img/same-as.png" class="img-fluid rounded" alt="same as triplets">

    <h1><b><i>Same as</i></b> or <b><i>Same with</i></b></h1>

    <div class="alert alert-danger font-italic">Research has shown that men have <span class="font-weight-bold text-danger">the same</span> kind of emotional problems <span class="font-weight-bold text-danger">with</span> women.</div>

    <WithIcon icon="warning">
        <div slot="html">A collocation issue: <b><i>same...as</i></b> (<span class="uli">not</span> <b><i>same...with</i></b>):</div>
    </WithIcon>

    <div class="alert alert-success font-italic">
        <p class="mt-0">Research has shown that men have <span class="font-weight-bold text-success">the same</span> kind of emotional problems <span class="font-weight-bold text-success">as</span> women.</p>
        <p class="mb-0 small">(Notice the uncountable use of research). </p>
    </div>

    <p>Occasionally you will see <b><i>same</i></b> and <b><i>with</i></b> used together, for example:</p>

    <div class="alert alert-success font-italic">Women's emotional problems are to some extent influenced by hormones, and <span class="font-weight-bold text-success">it's the same with</span> men.</div>

    <p>But in this case you need a particular structure for it to work properly:</p>

    <p class="font-weight-bold">A is like this, and <span class="uli">it is the same with</span> B.</p>

<WithIcon icon="flag">
    <div slot="html">For Indonesians translating <b><i>sama dengan</i></b>, start thinking <b><i>same...as</i></b>!</div>
</WithIcon>

</div>
