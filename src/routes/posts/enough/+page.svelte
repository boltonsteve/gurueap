<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
</script>

<SvelteSeo
  title="When enough is too much",
  description="Demonstration of first language interference affecting three vocabulary items - 'enough', 'not enough' and 'too much'"
/>

<svelte:head>
    <title>When enough is too much</title>
</svelte:head>

<div class="mb-3 mw-500">

    <img src="/img/lcgc.png" class="img-fluid rounded" alt="LCGC cars - enough expensive">

    <h1>When <b><i>enough</i></b> is too much</h1>

    <p class="font-italic ml-3">Owners of LCGC cars spend additional money on car tax which is expensive <span class="font-weight-bold text-danger">enough</span> for middle income families.</p>

    <p>{@html flagIndo} <b><i>Enough</i></b>, <b><i>not enough</i></b>, and <b><i>too</i></b> often get lost in translation from the Indonesian <b><i>cukup</i></b>, <b><i>tidak cukup</i></b>, and <b><i>terlalu</i></b>.</p>

    <p>In English these words are used to evaluate situations that have either positive or negative outcomes.</p>

    <p>Let's look first at a negative outcome:</p>

    <p class="font-italic ml-3">If you are female and wish to work as a flight attendant with Garuda, then you are required to be at least 163cm tall. If you are less than 163cm tall, then you are <span class="font-weight-bold text-success">not tall enough</span> for the job. What a pity - you are <span class="font-weight-bold text-success">too short</span>!</p>

    <img src="/img/enough.png" class="img-fluid rounded" alt="enough is too much">

    <p>And now a positive outcome:</p>

    <p class="font-italic ml-3">You are female, 164cm tall. You are tall <span class="font-weight-bold text-success">enough</span> to be a flight attendant with Garuda. If you attend interview, they will offer you the job.</p>

    <p>Now lets review the positives and negatives:</p>

    <ul>
        <li><b><i>enough</i></b> - positive</li>
        <li><b><i>not enough</i></b> - negative</li>
        <li><b><i>too</i></b> - negative</li>
    </ul>

    <p>If I say that <i>car tax is expensive <b>enough</b> for middle income families</i> then I'm making a positive evaluation, and yet this situation is clearly negative!</p>

    <p>{@html flagIndo} The problem is that in Bahasa Indonesia, <b><i>enough</i></b> can behave rather like <b><i>very</i></b> as a way to intensify an adjective.</p>

    <p>In the car tax example, <b><i>very</i></b> would create a more negative evaluation of the situation, and that's what we need:</p>

    <p class="font-italic ml-3">Owners of LCGC cars spend additional money on car tax which is <span class="font-weight-bold text-success">very expensive</span> for middle income families.</p>

    <hr>

    <p>If an Indonesian woman says that you are <b><i>handsome enough</i></b> (cukup ganteng), they believe they are paying you a compliment. If you speak Bahasa Indonesia, then you will take this as a compliment. However, a man who does not speak Indonesian will appear confused, because <b><i>handsome enough</i></b> literally means that he meets some minimum requirement for handsomeness. It's not a negative evaluation, but its not particularly flattering either!</p>

<p class="small">Many thanks to Desy and Ratih (photo) for agreeing to be photographed and for filling me in on the rules!</p>

</div>


