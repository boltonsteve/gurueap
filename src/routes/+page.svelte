<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import Card from './components/Card.svelte'
    import { students } from '$lib/mugshots.js';
    import { links } from '$lib/links.js';

    let totalLinks = links.length;

    students.sort(() => Math.random() - 0.5);

</script>

<SvelteSeo
    title="GuruEAP - Academic English not only for Indonesians"
    description="Academic English and IELTS preparation. Not only for Indonesians."
    keywords="academic english,english for academic purposes,EAP,IELTS,international students,pre-departure,Indonesia"
/>

<div id="landing_grid">

    <div id="left_col">
        <div id="about">
            <div class="text-center">
                <img src="/img/steve.png" class="mx-auto" alt="Steve" style="max-width:250px;">
                <h1>GuruEAP</h1>
                <h2 class="font-italic">Academic English not only for Indonesians</h2>
            </div>
            <p>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia.</p>
            <p>There's something for everybody here, but certainly if you're Indonesian and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</p>
        </div>
    </div>
    <div id="right_col">
        <div>
            <Card title="{totalLinks} Posts" icon="posts" path="./posts" text="Posts deal with the various academic and linguistic challenges faced by international students preparing for IELTS and study abroad." />
        </div>
        <div>
            <Card title="Songs" icon="songs" path="./songs" text= "Often featuring student voices, songs focus on language challenges faced by Indonesian IELTS candidates. Accompanyied by lyrics, and often video." />
        </div>
        <div>
            <Card title="IELTS" icon="ielts" path="./posts" text="General IELTS issues are already addressed in the posts section. A separate IELTS page is under construction and will feature skills-based practice activities." />
        </div>
        <div>
            <Card title="Games" icon="games" path="./games" text="Games are currently being transferred and re-coded from a former version of the site. Watch this space!" />
        </div>

    </div>

</div>
<div id="students">
    {#each students as student}
        <img src="/img/students/{student}.png">  
    {/each}
</div>


<style>

    .card {
        min-height: 240px;
        
    }

    img {
        -webkit-filter: drop-shadow(-5px 5px 5px #222);
        filter: drop-shadow(-5px 5px 5px #222); 
    }

    #students {
        display:flex;
        flex-wrap:wrap;
        padding-top:30px;
        justify-content: space-between;
        max-width: 1100px;
        margin: auto;
    }

    #students img {
        width: 60px;
        height: 60px;
        padding: 10px;
        opacity: 0.2;
    }

    #students img:hover {
        opacity:1;
        cursor: pointer;
    }

    #landing_grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        /* align-items: center; */
        /* height: 90vh; */
        column-gap: 20px;
        max-width: 1100px;
        margin: 30px auto;
        
    }

    #left_col {
        display: grid;
    }

    #left_col h1 {
        font-size:4rem;
        margin:0px;
    }
    #left_col h2 {
        font-size:1.5rem;
        margin-top:0px;
    }

    #about {
        max-width:400px;
        justify-self: center;
    }

    #right_col {
        display:grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
        gap:20px;
    }

    @media(max-width:1000px) {
        #right_col {
            display: grid;
            grid-template-columns: 1fr;
            justify-content: center;
            align-items: center;
        }

        #right_col div {
            justify-self: center;
        }
    }

    @media(max-width:780px) {
        #landing_grid {
            grid-template-columns: 1fr;
        }
    }

</style>
