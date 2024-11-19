<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Where 'where' shuld be nowhere."
    description="An example of 'where' getting lost in translation from Bahasa Indonesia."
/>

<div class="mb-3 mw-500 pt-1">

    <img src="../img/nowhere.png" class="mx-auto img-fluid mb-2" alt="where">

    <h1 class="mt-0">Where 'where' should be nowhere</h1>

    <div class="alert alert-danger font-italic mb-1">This is in line with his motto of 'think globally, act locally' <span class="text-danger font-weight-bold">where</span> he will learn in another country and implement the result in Indonesia.
    </div>

    <WithIcon icon="flag" msg="I suspect this is an Indonesian speaker translating from 'di mana'. (Indonesian students please correct me if I'm wrong!)" />

    <div class="alert alert-success font-italic my-1">This is in line with his motto of “think globally, act locally”, <span class="text-success font-weight-bold">according to which</span> he will learn in another country and implement the result in Indonesia.</div>

    <p>The structure is:</p>

    <p class="text-center font-weight-bold">independent clause + according to which + independent clause</p>

    <p>It is not easy to find similar examples of this, but try these:</p>

    <ul>
        <li>His diary also perpetuated <b><i>the rumor</i></b> <u>according to which</u> Titulescu was a cocaine addict.</li>
        <li>The problem amounts to isolating <b><i>criteria</i></b> <u>according to which</u> we can identify an aggressive act.</li>
        <li>Instead, he develops the <b><i>thesis</i></b> <u>according to which</u> "all consciousness is perceptual consciousness".</li>
        <li>We have the problem of a bad record - a <b><i>record</i></b> <u>according to which</u> we are guilty.</li>
        <li>Other Finno-Ugric peoples have also <b><i>myths</i></b> <u>according to which</u> the world has emerged from an egg.</li>
        <li>There are some <b><i>accounts</i></b> <u>according to which</u> some of the Roma slaves had been captured during wars.</li>
    </ul>

    <p>In each of these examples <i>according to which</i> is used to introduce a defining characteristic of the words in bold.</p>

    <p>Each of these examples could also be written beginning with <i>according to</i>:</p>
      
    <div class="alert alert-success font-italic my-2">According to <span class="text-success font-weight-bold">the rumour</span>, Titulescu was a cocaine addict.</div>


</div>

<style>
    .myGrid {
        display: grid;
        grid-template-columns: 150px 1fr;
        gap: 10px;
    }
    li {
        margin-bottom: 9px;
    }
</style>
