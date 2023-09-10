<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js';
    import InputText from '../../components/inputText.svelte';

    const checkAnswers = () => {
        
    }

</script>

<SvelteSeo
    title="Being economical with the economy",
    description="Demonstrating various collocations with the word 'economy' and its different forms."
/>

<div class="mb-3 mw-500">

    <h1>Being economical with the economy</h1>

    <p>Study the following text.</p>

    <div class="border rounded p-1">Edi studied <b><i>economics</i></b> at university because he was concerned about <b><i>the economy</i></b> in his country. He knew that the Indonesian <b><i>economy</i></b> was not a healthy <b><i>economy</i></b>. At the same time, he understood the <b><i>economic value</i></b> of education, and he knew there were good <b><i>economics faculties</i></b> in Australia, so he went to study there and was soon able to compare the Indonesian <b><i>economy</i></b> with healthier <b><i>economies</i></b> in other countries.</div>

    <p>Now use these terms - <b><i>economy</i></b>, <b><i>the</i></b>, <b><i>a</i></b>, <b><i>economies</i></b>, <b><i>economic</i></b>, <b><i>economics</i></b> - to complete the rules below.</p>

    <p><InputText count=1 answer="Economy" /> is a countable noun, and like any other countable noun it needs a determiner (usually <a href="../posts/article-s" target="_blank">an article and/or 's'</a>).</p>
    <p><InputText count=2 answer="Economy" /> may be modified, but it always has a determiner (again, usually an article and/or 's'):</p>
        <p class="ml-3"><InputText count=3 answer="the" /> Indonesian <InputText count=4 answer="economy" /></p>
        <p class="ml-3"><InputText count=5 answer="a" /> healthy <InputText count=6 answer="economy" /></p>
        <p class="ml-3">healthier <InputText count=7 answer="economies" /></p>

    <p><InputText count=7 answer="Economic" /> is an adjective and so it can modify a noun.</p>

        <p class="font-italic ml-3">..the <InputText count=8 answer="economic" /> value of education.</p>

    <p>When I say <InputText count=9 answer="the economy" />, I'm usually talking about the economy of my own country.</p>

    <p><InputText count=10 answer="Economics" /> is a noun. It can be..</p>

    <p>..an academic discipline:</p>

    <p class="font-italic ml-3">Edi studied <InputText count=11 answer="economics" /> at university.</p>

    <p>..a broad professional area:</p>

    <p class="font-italic ml-3">If I'm a teacher, I work in education. A doctor works in health. An economist is someone who works in <InputText count=12 answer="economics" />.</p>

    <p>..a discussion topic:</p>

    <p class="font-italic ml-3">Let's not discuss <InputText count=13 answer="economics" />. It's so boring!</p>

    <p>The noun '<InputText count=14 answer="economics" />' can be used to pre-modify another noun:</p>

        <p class="font-italic ml-3">..good <InputText count=15 answer="economics" /> faculties in Australia.</p>
    
    <p>{@html flagIndo} Indonesians often write <i>I studied</i> <InputText count=16 answer="economy" />. But they mean <i>I studied</i> <InputText count=17 answer="economics" />.</p>

    <button class="btn btn-outline-dark mx-auto" on:click={checkAnswers}>check</button>


</div>

<style>
</style>
