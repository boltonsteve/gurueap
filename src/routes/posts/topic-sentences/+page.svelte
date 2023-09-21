<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo, flagUk } from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Opinion in topic sentences"
    description="Demonstrating an alternative to topic sentences in argument body paragraphs."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,writing,opinion,argument,topic sentences" 
/>

<div class="mb-3 mw-500">

    <h1>Opinion in topic sentences</h1>

    <p>Many students have read about 'topic sentences' and believe that it's essential to make a separate sentence to introduce the topic before making any kind of argumentative claim:</p>

    <div class="box">
        <p>(sample body paragraph #1)</p>
        <p>The first issue to discuss relates to the use of police time in the enforcement of marijuana laws.If marijuana is legalised then valuable police time will be saved. First of all, supporting idea one blah blah blah blah blah. In addition, supporting idea two blah blah blah blah blah. Furthermore, supporting idea three blah blah blah blah blah. Finally, supporting idea four blah blah blah blah blah.</p>
    </div>

    <ul>
        <li>sentence 1: topic only (<i><b>saving police time)</b></i>, no opinion</li>
        <li>sentence 2: topic (<i><b>saving police time) </b></i>plus opinion (<i><b>valuable police time will be saved)</b></i></li>
    </ul>

    <p>This is unnecessary repetition. The second sentence already contains the topic AND the main claim of the paragraph, and so it already behaves like a topic sentence:</p>

    <div class="box">
        <p>(sample body paragraph #2)</p>
        <p>If marijuana is legalised then valuable police time will be saved. First of all, supporting idea one blah blah blah blah blah. In addition, supporting idea two blah blah blah blah blah. Furthermore, supporting idea three blah blah blah blah blah. Finally, supporting idea four blah blah blah blah.</p>
    </div>

    <p>In academic writing it is generally a good idea to <i><b>get to the point </b></i>as quickly and concisely as possible. This kind of writing is much easier to read and is more likely to result in a good score in IELTS Task 2 for <i><b>task response</b></i> and <i><b>coherence and cohesion</b></i>.</p>

</div>

<style>
    .box {
        border:1px solid var(--dark);
        padding:15px;
        border-radius:5px;
    }
</style>
