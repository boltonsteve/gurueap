<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
    import Youtube from 'svelte-youtube-embed'
</script>

<div class="mb-3 mw-500">

    <h1>When 's' is not enough</h1>

    <WithIcon icon="warning" position="right" msg="When you add an ‘s’ to some spoken words, you may need to do more than simply add ‘s’. Sometimes you have to add ‘Iz’, instead." />

    <div class="my-grid">
        <div>This happens to words that in their normal form end with the sounds to the right.</div>
        <div class="phonemic my-flex">
            <div>/s/</div>
            <div>/ʃ/</div>
            <div>/ʧ/</div>
            <div>/ʤ/</div>
        </div>
    </div>


	<ul class="lh-15">
	    <li>box (<span class="phonemic">/bɒks/)</span> becomes bo<b><i>xes</i></b> (<span class="phonemic">/bɒksɪz/)</span></li>
	    <li>wash (<span class="phonemic">/wɒʃ/)</span> becomes wa<b><i>shes</i></b> (<span class="phonemic">/wɒʃɪz/)</span></li>
	    <li>church (<span class="phonemic">/ʧɜ:ʧ/)</span> becomes chur<b><i>ches</i></b> (<span class="phonemic">/ʧɜ:ʧɪz/)</span></li>
	    <li>language (<span class="phonemic">/læŋwɪʤɪ/)</span> becomes langua<b><i>ges</i></b> (<span class="phonemic">/læŋwɪʤɪz/)</span></li>
	</ul>


Try reading the following sentences aloud!

<ul class="lh-15">
	<li>Bosses sit in offices filling pages with percentages.</li>
	<li>Boxes, faxes and packages are all sent by businesses.</li>
	<li>Nurses apply bandages and cure viruses.</li>
	<li>Sausages and sauces stay fresh in fridges.</li>
	<li>Witches make sandwiches from leeches and eyelashes.</li>
	<li>An artist mixes paint and brushes it onto canvases.</li>
	<li>Oranges grow on branches in the gardens of cottages.</li>
	<li>Men who repair watches wear glasses with thick lenses.</li>
	<li>People enter races to win prizes.</li>
	<li>Foxes hide in bushes to avoid surprises.</li>
	<li>People of both sexes sunbathe on beaches.</li>
	<li>Birds in cages face disadvantages.</li>
	<li>Noses of all shapes and sizes detect gases emerging from ashes.</li>
	<li>When he’s away, he misses her kisses.</li>
	<li>Students in colleges follow classes in the sciences. They write sentences using tenses in different languages.</li>
	<li>People buy cars from garages, then drive inches from the edges of bridges.</li>
	<li>Musicians of all ages appear on stages.</li>
	<li>My friend washes dishes to earn wages and pay taxes.</li>
</ul>

<p>Below is a recording of these statements made by a native English speaker.</p>

<p>Listen, pause, repeat. Try to sound like the speaker in the recording, especially at word endings - /Iz/!</p>

<Youtube id="qlLAh_HfsIQ" />

</div>


    <style>
        .my-grid {
            display:grid;
            grid-template-columns:2fr 1fr;
            gap: 10px;
        }
        .my-flex {
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:10px;
        }

        .my-flex div {
            text-align:center;
            font-size: 1.2rem;
        }
    </style>
