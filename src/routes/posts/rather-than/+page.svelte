<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo, flagUk } from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<div class="mb-3 mw-500">
    
    <h1>Rather than</h1>

    <div class="alert alert-danger font-italic">Most people currently suffer from anxiety <span class="text-danger font-weight-bold">rather than</span> ancient people in the past.</div>

    <p>Literally this means</p>
    <ol>
        <li>Modern people suffer from anxiety.</li>
        <li>Modern people do not suffer from ancient people.</li>
    </ol>

    <p>First of all I think our writer means to use <b><i>unlike</i></b>:</p>

    <div class="alert alert-success font-italic">Most modern people suffer from anxiety, <span class="text-success font-weight-bold">unlike</span> ancient people in the past.</div>

    <p>Here the meaning is:</p>
    <ol>
        <li>Modern people suffer from anxiety.</li>
        <li>Ancient people in the past did not suffer from anxiety.</li>
        <li>Modern people are not like ancient people.</li>
    </ol>

</div>
