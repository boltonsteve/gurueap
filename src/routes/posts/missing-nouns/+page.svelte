<script>
    import SvelteSeo from "svelte-seo"
    import {flagIndo} from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
title="Missing Nouns"
description="Warning Indonesian candidates that they cannot leave adjectives hanging without nouns."
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,grammar,Bahasa Indonesia,borrowed word"
 />

<div class="mw-500 mb-3">

    <img src="/img/police-search.jpg" class="img-fluid rounded" alt="police noun search">

    <h1>Missing nouns</h1>

    <div class="alert alert-danger font-italic">Living far away from home improves their ability in money managing, since their parents may not support their <span class="font-weight-bold text-danger">financial</span>.</div>

    <WithIcon icon="flag">
        <div slot="html">OK so the problem here is that the Indonesian version of financial - <b><i>finansial</i></b> - is used informally as a noun, whereas in English it is always an adjective, and this leaves the reader wondering.. <i>financial what</i>?</div>
    </WithIcon>

    <p>The following alternatives use different word forms and also include strong collocation:</p>
    
    <ul>
        <li class="font-italic">their parents may not cover their <b><i>financial</i></b> <span class="uli">commitments</span>.</li>
        <li class="lst-none mb-1 small"><b><i>adjective</i></b> affects and collocates with <span class="uli">commitments</span></li>
        <li class="font-italic">their parents may not <span class="uli">support</span> them <b><i>financially</i></b>.</li>
        <li class="lst-none mb-1 small"><b><i>adverb</i></b> affects and collocates with <span class="uli">support</span></li>
        <li class="font-italic small">their parents may not <span class="uli">cover</span> their <b><i>finances</i></b>.</li>
        <li class="lst-none mb-1 small"><b><i>noun</i></b> collocates with <span class="uli">cover</span></li>
    </ul>

    <p>The only other example I can think of in which a borrowed adjective is used as a noun, might be:</p>
    
    <div class="alert alert-danger font-italic">Taking drugs is not good for your <span class="font-weight-bold text-danger">mental</span>.</div>

    <p>..which should read:</p>

    <div class="alert alert-success font-italic">Taking drugs is not good for your <span class="font-weight-bold text-success">mental</span> health.</div>

    <p>If you can think of any other words that get lost in translation in the same way, please let me know!</p>

</div>
