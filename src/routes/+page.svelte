<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import { students1, students2, students3, students4 } from '$lib/mugshots.js';

    let students = [...students1, ...students2, ...students3];

    students.sort(() => Math.random() - 0.5);
    let studentsLHtmlArr = students.map( next => `<img class="mugshot" src="/img/students/${next}.png" alt="${next}">` );
    let studentsLHtml = studentsLHtmlArr.join('');

    students.sort(() => Math.random() - 0.5);
    let studentsRHtmlArr = students.map( next => `<img class="mugshot" src="/img/students/${next}.png" alt="${next}">` );
    let studentsRHtml = studentsRHtmlArr.join('');
</script>

<SvelteSeo
  title="GuruEAP - Academic English not only for Indonesians",
  description="Academic English and IELTS preparation. Not only for Indonesians."
/>

<div id="landing_grid">

    <div class="img-col img-col-l">{@html studentsLHtml}</div>

    <div id="center_column">
        <img src="/img/gurueap.jpg" class="img-fluid rounded" alt="GuruEAP">
        <h2>Academic English not only for Indonesians</h2>
        <p>GuruEAP was originally conceived as supplementary material for EAP classroom teaching (English for Academic Purposes) in Indonesia. Posts deal with the various academic and linguistic challenges faced by all international students preparing for IELTS and for both graduate and postgraduate study abroad.</p>
        <p>I like to think there's something for everybody here, but certainly if you're {@html flagIndo}Indonesian{@html flagIndo} and you're preparing for IELTS and/or study in an English-speaking university, then you've come to the right place!</p>
        <img src="/img/responsive.png" alt="responsive design" style="width:220px;float:right;">
        <p>GuruEAP uses a 'mobile first' design, making content easy to access on any device.</p>
        <p>If there are any special requests for additional content, or any questions about what you see here, please contact <a href="mailto:gurueap@gmail.com">gurueap@gmail.com</a>.</p>
    </div>

    <div class="img-col img-col-r">{@html studentsRHtml}</div>

</div>


<style>

    .img-col {
        display:grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        grid-auto-rows: 80px;
        gap: 30px;
    }

    #landing_grid {
        display:grid;
        grid-template-columns: 1fr minmax(auto, 500px) 1fr;
        gap:25px;
        height:90vh;
    }

@media(max-width:500px) {
    #landing_grid {
        grid-template-columns: 1fr;
    }
    .img-col-l {
        display:none;
    }
}

</style>
