<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import Card from './components/Card.svelte'
</script>

<SvelteSeo
    title="GuruEAP - Academic English not only for Indonesians"
    description="Academic English and IELTS preparation. Not only for Indonesians."
    keywords="academic english,english for academic purposes,eap,IELTS,international students,pre-departure,Indonesia"
/>
<div id="landing_grid">

    <div id="left_col">
        <div class="mx-auto" style="max-width:400px;">
            <div class="text-center">
                <img src="/img/steve.png" class="mx-auto" alt="Steve" style="max-width:300px;">
                <h1>GuruEAP</h1>
                <h2 class="font-italic">Academic English not only for Indonesians</h2>
            </div>
            <p>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia.</p>
            <p>There's something for everybody here, but certainly if you're Indonesian and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</p>
        </div>
    </div>
    <div id="right_col">
        <div>
            <Card title="Posts" icon="posts" text="Posts deal with the various academic and linguistic challenges faced by all international students preparing for IELTS and for both graduate and postgraduate study abroad." />
        </div>
        <div>
            <Card title="Songs" icon="songs" text= "Often featuring student voices, songs -written and performed by GuruEAP - focus on language challenges faced by Indonesian IELTS candidates. Accompanyied by lyrics, and often video." />
        </div>
        <div>
            <Card title="IELTS" icon="ielts" text="General IELTS issues are already addressed in the posts section. A separate IELTS page is under construction and will feature skills-based practice activities." />
        </div>
        <div>
            <Card title="Games" icon="games" text="Games are currently being transferred and re-coded from a former version of the site. Watch this space!" />
        </div>

    </div>

</div>

<style>

    div {
        /* border:1px solid green; */
    }

    #landing_grid {
        display: grid;
        grid-template-columns: 1fr 2fr;
        justify-content: center;
        /* align-items: center; */
        /* height: 90vh; */
        column-gap: 20px;
        max-width: 1100px;
        margin: auto;
    }

    #left_col {
        min-width: 400px;
    }
    #left_col h1 {
        font-size:5rem;
        margin:0px;
    }
    #left_col h2 {
        font-size:1.5rem;
        margin-top:0px;
    }

    #right_col {
        display:grid;
        /* grid-template-columns: 1fr 1fr; */
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        justify-content: center;
        /* justify-content: space-around; */
        align-items: center;
        gap:20px;
    }

    #right_col div {
        margin: auto;
    }

    @media(max-width:1000px) {
        #right_col {
            grid-template-columns: 1fr;
        }
    }

    @media(max-width:780px) {
        #landing_grid {
            grid-template-columns: 1fr;
        }
    }

</style>
