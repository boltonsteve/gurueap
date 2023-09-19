<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
  title="When enough is too much",
  description="Demonstration of first language interference affecting three vocabulary items - 'enough', 'not enough' and 'too much'"
/>

<div class="mb-3 mw-500">

    <img src="/img/lcgc.png" class="img-fluid rounded" alt="LCGC cars - enough expensive">

    <h1>When <b><i>enough</i></b> is too much</h1>

    <div class="alert alert-danger font-italic">Owners of LCGC cars spend additional money on car tax which is <span class="font-weight-bold text-danger">expensive enough</span> for middle income families.</div>

    <WithIcon icon="flag">
        <div slot="html"><b><i>Enough</i></b>, <b><i>not enough</i></b>, and <b><i>too</i></b> often get lost in translation from the Indonesian <b><i>cukup</i></b>, <b><i>tidak cukup</i></b>, and <b><i>terlalu</i></b>.</div>
    </WithIcon>

    <p>In English these words are used to evaluate situations that have either <b><i>positive</i></b> or <b><i>negative</i></b> outcomes, as shown in the examples below.</p>

    <h3>Negative Outcome</h3>

    <div class="alert alert-success font-italic mb-2">If you are female and wish to work as a flight attendant with Garuda, then you are required to be at least 163cm tall. If you are less than 163cm tall, then you are <span class="font-weight-bold text-success">not tall enough</span> for the job. What a pity - you are <span class="font-weight-bold text-success">too short</span>!</div>

    <img src="/img/enough.png" class="img-fluid rounded" alt="enough is too much">

    <h3>Positive Outcome</h3>

    <div class="alert alert-success font-italic">You are female, 164cm tall. You are tall <span class="font-weight-bold text-success">enough</span> to be a flight attendant with Garuda. If you attend interview, they will offer you the job.</div>

    <p>Now lets review the positives and negatives:</p>

    <ul>
        <li><b><i>enough</i></b> - positive</li>
        <li><b><i>not enough</i></b> - negative</li>
        <li><b><i>too</i></b> - negative</li>
    </ul>

    <p>If I say that <i>car tax is <b>expensive enough</b> for middle income families</i> then I'm making a positive evaluation about a negative situation.</p>

    <WithIcon icon="flag">
        <div slot="html">The problem is that in Bahasa Indonesia, <b><i>enough</i></b> can behave rather like <b><i>very</i></b> as a way to intensify an adjective.</div>
    </WithIcon>

    <p>In the car tax example, <b><i>very</i></b> would create a more negative evaluation of the situation, and that's what we need:</p>

    <div class="alert alert-success font-italic">Owners of LCGC cars spend additional money on car tax which is <span class="font-weight-bold text-success">very expensive</span> for middle income families.</div>

    <hr class="my-2">

<p class="small">Many thanks to Desy and Ratih (photo) for agreeing to be photographed and for filling me in on the rules!</p>

</div>


