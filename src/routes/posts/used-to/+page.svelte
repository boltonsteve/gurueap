<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Saying what you mean with 'used to'"
    description="Demonstrating the grammatical rules for 'used to'."
/>

<div class="mb-3 mw-500">

    <img src="../img/maag.png" class="img-fluid mx-auto mb-0" alt="maag" style="width:50%;">
    <hr class="mt-0">

    <h1>Saying what you mean with 'used to'</h1>

    <div class="alert alert-danger font-italic mb-2">I’m not <span class="text-danger font-weight-bold">used to</span> eat spicy food.</div>

    <WithIcon icon="warning" position="right" msg="Here there is a problem!<br>There are 3 possible meanings of the statement above.<br>Which one do you mean?" />

    <h3>1. <span class="font-weight-bold font-italic text-success">used to</span> + <span class="font-weight-bold font-italic text-primary">___ing</span></h3>

    <p><b>If you mean</b> that you <i>don't</i> eat spicy food <i>very often</i> and when you do your stomach hurts, then you need:</p>

    <div class="alert alert-success font-italic">I’m not <span class="text-success font-weight-bold">used to</span> <span class="font-weight-bold font-italic text-primary">eating</span> spicy food.</div>

    <h3 class="headroom">2. <span class="font-weight-bold font-italic text-success">used to</span> + <span class="font-weight-bold font-italic text-primary">V1</span></h3>

    <p><b>If you mean</b> you regularly ate spicy food in the past but <i>now you don't</i>, then you need:</p>

    <div class="alert alert-success font-italic">I <span class="text-success font-weight-bold">used to</span> <span class="font-weight-bold font-italic text-primary">eat</span> spicy food.</div>

    <h3 class="headroom">3. <span class="font-weight-bold font-italic text-primary">didn't</span> <span class="font-weight-bold font-italic text-success">use to</span> + <span class="font-weight-bold font-italic text-primary">V1</span></h3>

    <p><b>If you mean</b> you <i>didn't</i> eat spicy food regularly in the past but now you <i>do</i>, then you need:</p>

    <div class="alert alert-success font-italic">I <span class="font-weight-bold font-italic text-primary">didn't</span> <span class="text-success font-weight-bold"> use to</span> <span class="font-weight-bold font-italic text-primary">eat</span> spicy food.<ol style="list-style-type:none;" class="mb-0"><li class="text-danger">Notice there is no <b>d</b> on <b>used</b> in this negative!</li></ol></div>

    <h3 class="mb-0 headroom">Putting it together</h3>

    <p class="mt-0">Let’s see how this might work in a text.</p>

    <div class="alert alert-success font-italic">
        <p class="mt-0">When Europeans visit Bali and eat in a restaurant, the staff assume that these visitors do not want to eat spicy food because they assume that Europeans are not <span class="text-success font-weight-bold">used to</span> eating spicy food.</p>
        <p>On the other hand I have a Javanese friend who <span class="text-success font-weight-bold">used to</span> eat spicy food but had to stop because he developed stomach ulcers.</p>
        <p class="mb-0"><b><i>Ouch!</i></b></p>
    </div>


</div>

<style>
    .headroom {
        margin-top:40px;
    }
</style>
