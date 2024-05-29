<script>
    import SvelteSeo from "svelte-seo"
    import { slide } from "svelte/transition";
    import WithIcon from '../../components/WithIcon.svelte'

    let show = false;

    const showAnswer = () => {
        show = true;
    }
</script>

<SvelteSeo
    title="When 'existence' should not exist"
    description="Demonstrating the redundant use of 'existence' in Indonesian IELTS candidate writing."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,Bhs Indonesia Interference" 
/>

<div class="mb-3 mw-500">

    <img src="/img/existentialists.png" class="img-fluid rounded mt-1" alt="existentialists">

    <h1>When 'existence' should not exist</h1>

    <p class="font-italic alert alert-danger">Some people believe that <span class="font-weight-bold text-danger">the existence of</span> machines helps to generate more profit than loss.</p>

    <WithIcon icon="flag">
        <div slot="html">This is a common translation problem for Indonesians: <b><i>Keberadaan!</i></b></div>
    </WithIcon>

    <p>In English it is automatically assumed that things and people exist, unless otherwise stated.</p>

    <ul class="lst-none lh-15 font-italic alert alert-success">
        <li>Some people believe that <span class="font-weight-bold text-success">machines</span> help to generate more profit than loss.</li>
        <li>Some people believe that <span class="font-weight-bold text-success">the absence of</span> machines can result in losses.</li>
    </ul>

    <p>By the way, can you guess the names of the couple in the cover photo for this post. Why do you think they were they chosen?</p>

    {#if show}
        <div id="answer" in:slide>
            <div>The photo shows French philosophers Jean Paul Sartre and Simone de Beauvoir. The pair were mainly responsible for devoloping the branch of philosophy known as <b><i>existentialism</i></b>.</div>
            <div><img src="/img/existentialists.png" class="rounded img-fluid" style="width:180px;" alt="existentialists"></div>
        </div>
    {/if}

    <button class="btn btn-outline-dark mx-auto my-2" on:click={showAnswer}>I have no idea..</button>


</div>

<style>
#answer {
    display:flex;

}
</style>
