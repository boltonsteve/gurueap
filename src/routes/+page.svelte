<script>
    import { MusicNoteBeamed, FilePost, FileMusic, Globe, Controller } from "svelte-bootstrap-icons";
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import Card from './components/Card.svelte'
    import { students } from '$lib/mugshots.js';
    import { links } from '$lib/links.js';

    let totalLinks = links.length;
    let hw = 50;

    students.sort(() => Math.random() - 0.5);

</script>

<SvelteSeo
    title="GuruEAP - Academic English not only for Indonesians"
    description="Academic English and IELTS preparation. Not only for Indonesians."
    keywords="academic english,english for academic purposes,EAP,IELTS,international students,pre-departure,Indonesia"
/>

<div id="landing_grid" class="mx-auto">

    <div id="div_top">
        <div id="title" class="my-0 py-0">GuruEAP</div>
        <div id="tag" class="my-0 py-0">Academic English not only for Indonesians</div>
    </div>

    <div id="div_bottom" class="my-3">
        <div class="card">
            <a href="./posts">
                <div><FilePost height={hw} width={hw} /></div>
                Posts
            </a>
        </div>
        <div class="card">
            <a href="./games">
                <div><Controller  height={hw} width={hw} /></div>
                Games
            </a>
        </div>
        <div class="card">
            <a href="./songs">
                <div><FileMusic  height={hw} width={hw} /></div>
                Songs
            </a>
        </div>
    </div>

    <div id="div_middle">
        <div>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia.</div>
        <div>There's something for everybody, but certainly if you're Indonesian and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</div>
    </div>

</div>


<style>

    /* * { */
    /*     border: 1px solid green; */
    /* } */

    #div_top {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
        text-align:center;
        gap: 10px;
        /* grid-auto-flow: row; */
    }

    #title {
        font-size:4rem;
        text-align:center;
        font-weight:bold;
        color: #aaaaaa;
        margin-bottom:0px;
        padding-bottom:0px;
    }

    #tag {
        font-size:0.9rem;
        text-align:center;
        font-style:italic;
    }

    #landing_grid {
        display: grid;
        grid-template-columns: 1fr;
        /* display: flex; */
        /* flex-wrap: wrap; */
        justify-content: center;
        align-items: center;
        column-gap: 20px;
        max-width: 600px;
        margin: 30px auto;
    }

    #div_middle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        gap: 20px;
    }

    .card {
        display:grid;
        grid-template-columns: 1fr;
        text-align:center;
        justify-content:space-around;
        align-items:center;
        font-size:1.2rem;
    }

    #div_bottom {
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        /* display: flex; */
        justify-content: space-around;
        align-items: center;
        /* gap: 20px; */
    }

    a {
        text-decoration:none;
    }

    @media(max-width:650px) {
        #div_middle {
            display: grid;
            grid-template-columns: 1fr;
        }
    }

</style>
