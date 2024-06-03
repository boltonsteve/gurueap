<script>
    import { MusicNoteBeamed, FilePost, FileMusic, Globe, Controller } from "svelte-bootstrap-icons";
    import SvelteSeo from "svelte-seo"
    import { links } from '$lib/links.js';

    let totalPosts = 0;
    let totalGames = 0;
    let totalSongs = 0;

    console.log(links);

    links.forEach( next => {
        totalPosts ++;
        if(next.keywords.includes('song')) {
            totalSongs ++;
        }
        if(next.keywords.includes('games')) {
            totalGames ++;
        }
    })

    console.log('Posts: ' + totalPosts + '; Games: ' + totalGames + '; Songs: ' + totalSongs);

    let hw = 50;

</script>

<SvelteSeo
    title="GuruEAP - Academic English not only for Indonesians"
    description="Academic English and IELTS preparation. Not only for Indonesians."
    keywords="academic english,english for academic purposes,EAP,IELTS,international students,pre-departure,Indonesia"
/>

    <div id="wrapper"><div>
<div id="landing_grid" class="mx-auto">

    <div id="div_top">
        <div id="title">GuruEAP</div>
        <div id="tag">Academic English not only for Indonesians</div>
    </div>

    <div id="div_middle">
        <div class="text-box">GuruEAP was originally conceived as supplementary material for academic English self-study and for EAP classroom teaching (English for Academic Purposes) in Indonesia.</div>
        <div class="text-box">There's something for everybody, but certainly if you're Indonesian and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</div>
    </div>

    <div id="div_bottom">
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

</div>

    </div></div>

<style>

    /* * { */
    /*     border: 1px solid red; */
    /* } */

    #wrapper {
        height: 80vh;
        display: flex;

        justify-content: center;
        align-items: center;
        max-width: 600px
    }

    #landing_grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 30px;
    }

    #div_top {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: center;
    }

    #title {
        font-size:4rem;
        text-align:center;
        font-weight:bold;
        color: #aaaaaa;
    }

    #tag {
        font-size:1.4rem;
        text-align:center;
        font-style:italic;
    }

    #div_middle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .card {
        display:grid;
        justify-content:center;
        font-size:1.2rem;
    }

    #div_bottom {
        display: flex;
        justify-content: space-around;
    }

    a {
        text-decoration:none;
        text-align:center;
    }

    /* @media(max-width:650px) { */
    /*     #div_middle { */
    /*         display: grid; */
    /*         grid-template-columns: 1fr; */
    /*     } */
    /* } */

</style>
