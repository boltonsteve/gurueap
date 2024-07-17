<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo, flagUk } from '$lib/flags.js'
</script>

<SvelteSeo
    title="Make"
    description="Demonstrating collocation using the verb 'make', which is actually the same in Bahasa Indonesia."
/>

<div class="mb-3 mw-500">

    <h1>Make..</h1>

    <div class="alert alert-danger font-italic">Routine activities <span class="font-weight-bold text-danger">make</span> our hearts <span class="font-weight-bold text-danger">are</span> happy.</div>

    <p>I'm not sure why Indonesian students run into problems with make, especially when make is tied to an adjective -  as it is in this example. The Indonesian structure is exactly the same as the English:</p>

    <div class="row-col cols-1222">
    <div>&nbsp;</div>
    <div class="font-weight-bold">verb</div>
    <div class="font-weight-bold">noun</div>
    <div class="font-weight-bold">adjective</div>
    </div>

    <div class="row-col cols-1222">
        <div>{@html flagIndo}</div>
        <div>membuat</div>
        <div>orang</div>
        <div>senang</div>
    </div>

    <div class="row-col cols-1222">
        <div>{@html flagUk}</div>
        <div>make</div>
        <div>someone</div>
        <div>happy</div>
    </div>

<p>Buat orang senang = Make someone happy = <b>Make + noun + adjective</b></p>

<div class="alert alert-success font-italic">Routine activities <span class="font-weight-bold text-success">make</span> our hearts happy.</div>

<p>Of course <b><i>make</i></b> can also be tied to a verb:</p>

<div class="alert alert-success font-italic">She <span class="font-weight-bold text-success">made</span> me <span class="font-weight-bold text-success">do</span> it!</div>

<p>In this case you need the structure:</p>

<p class="font-weight-bold ml-3">subject + make + object + V1</p>

<p>So, <b><i>make</i></b> is actually easier to use than you might think:</p>

<div class="alert alert-success">
    <ul class="font-italic my-0">
        <li>She <span class="font-weight-bold text-success">makes</span> me happy (adj).</li>
        <li>She <span class="font-weight-bold text-success">makes</span> me laugh (v).</li>
    </ul>
</div>

</div>
