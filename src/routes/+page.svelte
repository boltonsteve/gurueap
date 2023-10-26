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

<div id="landing_grid">

    <div id="div_top">
        <div id="title">GuruEAP</div>
        <div id="tag">Academic English not only for Indonesians</div>
    </div>

    <div id="div_middle">

        <div>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia.</div>
        <div>There's something for everybody, but certainly if you're Indonesian and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</div>

    </div>

    <div id="div_bottom">
        <a href="./posts">
            <div class="card">
                <div><FilePost height={hw} width={hw} /></div>
                Posts
            </div>
        </a>
        <a href="./games">
            <div class="card">
                <div><Controller  height={hw} width={hw} /></div>
                Games
            </div>
        </a>
        <a href="./songs">
            <div class="card">
                <div><FileMusic  height={hw} width={hw} /></div>
                Songs
            </div>
        </a>
    </div>

</div>


<style>

    /* @media(max-width:780px) { */
    /*     #landing_grid { */
    /*         grid-template-columns: 1fr; */
    /*     } */
    /* } */

    #title {
        font-size:3rem;
        text-align:center;
    }

    #tag {
        font-size:2rem;
        text-align:center;
        font-style:italic;
    }

    #landing_grid {
        display: flex;
        /* grid-template-columns: 1fr; */
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 80vh;
        column-gap: 20px;
        max-width: 800px;
        max-height: 400px;
        margin: 30px auto;
    }

    #div_top {
        text-align:center;
        display: flex;
        flex-wrap: wrap;
        /* grid-template-columns: 1fr; */
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    #div_middle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
        padding: 20px;
    }

    .card {
        display:grid;
        grid-template-columns: 1fr;
        text-align:center;
        justify-content:center;
        align-items:center;
        width:200px;
        padding:20px;
        border:1px solid #bbbbbb;
        border-radius:10px;
        font-size:1.2rem;
    }

    #div_bottom {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }

    a {
        text-decoration:none;
    }

    /* * { */
    /*     border: 1px solid green; */
    /* } */

</style>
