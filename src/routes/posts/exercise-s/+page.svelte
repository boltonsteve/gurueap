<script>
    import SvelteSeo from "svelte-seo"
    import IconRight from '../../components/IconRight.svelte'
</script>

<SvelteSeo
  title="Exercise(s)",
  description="Examples of the countable and uncountable forms of the noun 'exercise'."
/>

<div class="mb-3 mw-500">

    <div id="math_grid">
        <div class="soal">5 - 2 = <span>?</span></div>
        <div class="soal">3 - 1 = <span>?</span></div>
        <div class="soal">9 - 5 = <span>?</span></div>
        <div class="soal">6 - 4 = <span>?</span></div>
        <div class="soal">7 - 3 = <span>?</span></div>
        <div class="soal">5 - 5 = <span>?</span></div>
        <div class="soal">4 - 1 = <span>?</span></div>
        <div class="soal">3 - 2 = <span>?</span></div>
        <div class="soal">4 - 2 = <span>?</span></div>
        <div class="soal">6 - 3 = <span>?</span></div>
        <div class="soal">8 - 4 = <span>?</span></div>
        <div class="soal">1 - 1 = <span>?</span></div>
    </div>

    <h1>Exercise(s)</h1>

    <div class="alert alert-danger font-italic">
        The obesity problem can be resolved through <span class="font-weight-bold text-danger">exercises</span> and calorie limitation.
    </div>

    <IconRight icon="warning">
        <div slot="html">
            <b><i>Exercise</i></b> is one of those words that can be countable or uncountable, depending on what you mean!
        </div>
    </IconRight>

    <h3 class="mb-0">Exercise to stay healthy</h3>
    <p class="mt-0">Here you need the <span class="uli">uncountable</span> form of <b><i>exercise</i></b>:</p>

    <div class="alert alert-success font-italic">
        The obesity problem can be resolved through <span class="font-weight-bold text-success">exercise</span> and calorie limitation.
    </div>

    <img src="/img/jogging.png" class="rounded w-75 mx-auto" alt="maths exercise">
        <div class="text-center small mt-1">jogging is good exercise (uncountable) for losing weight and keeping fit</div>

    <h3 class="mb-0">Exercises to improve ability (including physical ability!)</h3>
    <p class="mt-0">Here you need the <span class="uli">countable</span> form of <b><i>exercise</i></b> (don't forget to <b><i>add s</i></b> if plural!):</p>

    <div class="alert alert-success font-italic">
        Polynom is an app that helps students to get higher scores by solving and explaining math <span class="font-weight-bold text-success">exercises</span>.
    </div>

    <img src="/img/exercise-maths.png" class="rounded w-75 mx-auto" alt="maths exercise">
    <div class="text-center small mt-1">doing maths exercises (countable)</div>

    <div class="alert alert-success font-italic">
        Stretching <span class="font-weight-bold text-success">exercises</span> help to strengthen muscles and improve overall strength and agility.
    </div>

    <img src="/img/stretching-exercises.png" class="rounded w-50 mx-auto" alt="maths exercise">
    <div class="text-center small mt-1">stretching exercises (countable)</div>

</div>

<style>
#math_grid {
    padding-top:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
    column-gap: 10px;
    row-gap: 20px;
}

.soal {
    width: 100px;
}

#math_grid span {
    border: 1px solid #000;
    border-radius:3px;
    padding: 2px;
    width:70px;
}
</style>

