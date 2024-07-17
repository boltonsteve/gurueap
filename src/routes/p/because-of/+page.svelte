<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Inaccurate due to 'because of'"
    description="Demonstrating the grammatical use of 'because of' and 'due to'"
/>

<div class="mb-3 mw-500 pt-1">

    <img src="../img/greenhouse-effect.png" class="img-fluid mx-auto" alt="greenhouse-effect">

    <h1>Inaccurate due to <b><i>because of</i></b></h1>

    <div class="alert alert-danger font-italic">These problems have become more serious <span class="font-weight-bold text-danger">because of</span> the government have failed to end corruption.</div>

    <p>Ok, so there’s a problem here due to <b><i>because of!</i></b></p>

    <p>More accurately, the sentence <i>should</i> read:</p>

    <div class="alert alert-success font-italic mb-2">These problems have become more serious <span class="font-weight-bold text-success">because</span> the government have failed to end corruption.</div>

    <WithIcon icon="warning"> 
        <div slot="html">Exactly the same problem occurs with <b><i>due to</i></b>. My theory is that students have seen <b><i>because of</i></b> and <b><i>due to</i></b> in texts but they haven't noticed the surrounding grammar.</div>
    </WithIcon>

    <p>Just follow this rule:</p>

<ul>
    <li><b><i>because</i></b> + cause sentence</li>
    <li><b><i>because of / due to</i></b> + <span class="font-weight-bold text-primary">cause noun</span></li>
</ul>

<p>If you really want to use <b><i>because of / due to</i></b> then you might write:</p>

<div class="alert alert-success font-italic mb-2">These problems have become more serious <span class="font-weight-bold text-success">because of / due to</span> <span class="font-weight-bold text-primary">the government’s failure to end corruption</span>.</div>

    <hr>

    <h3 class="mb-0">Challenge!</h3>
    <p class="mt-0">Use <b><i>because of / due to</i></b> to make sentences about the image at the top of the page.</p>

</div>


<style>
    img {
        width:50%;
    }
</style>
