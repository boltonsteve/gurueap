<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
    import { scale, slide } from 'svelte/transition'
    import Select from '../../components/Select.svelte'
    import { tooltip } from '$lib/tooltip.js'
    import * as animateScroll from "svelte-scrollto";

    let Q13 = false;
    let Q45 = false;
    let feedback = false;
    let showScore = false;
    let showCheckButton = true;
    let showKeyButton = false;
    let score = 0;
    let scoreMsg = '';


    const checkAnswers = () => {
        let guesses = document.querySelectorAll('.ans');
        guesses.forEach( (next,i) => {
            let corr = next.getAttribute('data');
            let guess = next.value;

            if(guess == 'select') {
                document.getElementById('A'+(i+1)).classList.add('bg-warning','text-light');
            } else if(guess == corr) {
                document.getElementById('A'+(i+1)).classList.add('bg-success','text-light');
                score ++;
            } else {
                document.getElementById('A'+(i+1)).classList.add('bg-danger','text-light');
            }

        })

        scoreMsg = 'Score ' + score + '/' + guesses.length;
        showScore = true;
        animateScroll.scrollTo({element: '#scoreDiv', duration: 1000});
        showCheckButton = false;
        showKeyButton = true;

    }

    const showFeedback = () => {
        feedback = true;
        animateScroll.scrollTo({element: '.check-buttons', duration: 1000});
    }

</script>

<SvelteSeo
    title="(A) few, (a) little"
    description="Highlighting the difference in meaning between 'few', 'a few', 'little', 'a little'."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training, vocabulary, quantifiers" 
 /> 

<div class="mb-3 mw-500">

    <img src="/img/few-little.jpg" class="img-fluid rounded" alt="few - little">

    <h1>(A) few, (a) little</h1>

    <div class="alert alert-danger font-italic"><span class="font-weight-bold text-danger">Only some</span> students hand in their homework on time.</div>

    <WithIcon icon="flag" position="right">
        <div slot="html">Elsewhere on GuruEAP we've looked at <a href="../posts/some" target="_blank" rel="noopener">alternatives to <b><i>some</i></b></a>, which tends to be overused by Indonesians translating from <b><i>beberapa</i></b>, or, in the example above - <b><i>hanya beberapa</i></b>.</div>
    </WithIcon>

    <p>In this post we look at other alternatives to some that are also problematic for Indonesians because they are awkward to translate: <b><i>few</i></b>, <b><i>a few</i></b>, <b><i>little</i></b>, <b><i>a little</i></b>. And as with all quantifiers, we need to begin by deciding whether the noun we're quantifying is countable or uncountable.</p>

    <h3>(a) few</h3>

    <p>Look at these two statements made by a teacher featuring the <i><b>countable</b></i> noun 'student':</p>

    <div class="eg-grid">
        <div class="numbering">A</div>
        <div><b><i>Few</i></b> students hand in their homework on time.</div>
        <div class="numbering">B</div>
        <div><b><i>A few</i></b> students forgot to hand in their homework.</div>
    </div>

    <p>Now answer these questions based on examples <b><i>A</i></b> &amp; <b><i>B</i></b>:</p>

    <div class="q-grid">
        <div class="numbering">1</div>
        <div>Which statement implies <b><i>not enough</i></b>?</div>
        <div>
            <select class="form-control" id="Q1">
                <option value="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
        <div class="numbering">2</div>
        <div>Which statement implies <b><i>some</i></b>?</div>
        <div>
            <select class="form-control" id="Q2">
                <option value="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
        <div class="numbering">3</div>
        <div>Which situation is most disappointing for the teacher?</div>
        <div>
            <select class="form-control" id="Q3">
                <option value="select">select</option>
                <option value="A">A</option>
                <option value="B">B</option>
            </select>
        </div>
    </div>

    <div class="buttons">
        <button class="btn btn-outline-primary" on:click={() => {Q13 = true}}>Key</button>
    </div>

    {#if Q13}
        <ol in:scale>
            <li>A. <b><i>Few</i></b> means 'not enough'.</li>
            <li>B. <b><i>A few</i></b> means 'some'.</li>
            <li>A. <b><i>Few</i></b> tends to be negative.</li>
        </ol>
    {/if}

    <h3>(a) little</h3>

    <p>Now look at these two statements made by a student featuring the <i><b>uncountable</b></i> noun 'time':</p>
    
    <div class="eg-grid">
        <div class="numbering">C</div>
        <div>We had <b><i>little</i></b> time to prepare for the test. That's why our grades are low!</div>
        <div class="numbering">D</div>
        <div>The teacher gave us <b><i>a little</i></b> time to prepare before the test. That's why nobody failed!</div>
    </div>

    <p>Now answer these questions based on examples <b><i>C</i></b> &amp; <b><i>D</i></b>:</p>
    
    <div class="q-grid">
        <div class="numbering">4</div>
        <div>Which statement implies <b><i>not enough</i></b>?</div>
        <div>
            <select class="form-control" id="Q4">
                <option value="select">select</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
        <div class="numbering">5</div>
        <div>Which statement implies <b><i>some</i></b>?</div>
        <div>
            <select class="form-control" id="Q5">
                <option value="select">select</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
        <div class="numbering">6</div>
        <div>Which situation is disappointing for the students?</div>
        <div>
            <select class="form-control" id="Q6">
                <option value="select">select</option>
                <option value="C">C</option>
                <option value="D">D</option>
            </select>
        </div>
    </div>

    <div class="buttons">
        <button class="btn btn-outline-primary" on:click={() => {Q45 = true}}>Key</button>
    </div>

    {#if Q45}
        <ol start="4" in:scale>
            <li>C. <b><i>Little</i></b> means 'not enough'.</li>
            <li>D. <b><i>A little</i></b> means 'some'.</li>
            <li>C. <b><i>Little</i></b> tends to be negative.</li>
        </ol>
    {/if}

    <h3 class="mb-0">Practice!</h3>

    <div id="scoreDiv">
        {#if showScore}
            <span>{scoreMsg}</span>
        {/if}
    </div>

    <div id="activity">
        In terms of accommodation there are <Select count="1" options="few,a few,little,a little" /> options off campus. <Select count="2" options="A few,Few,Little,A little" /> students have found boarding houses downtown, but these can be expensive. We recommend living on campus. Our halls of residence contain plenty of affordable rooms. <Select count="3" options="A few,Few,Little,A little" /> rooms have ensuite bathrooms, but <Select count ="4" options ="few,a few,little,a little" /> have cooking facilities. However, most people don’t mind sharing a kitchen. During the day students have <Select count="5" options="little,a little,few,a few" /> time for socialising, and the kitchen is a good place to share <Select count="6" options="a little,little,a few,few" /> conversation in the evenings. You can also go to the student bar for <Select count ="7" options="a few,few,little,a little" /> drinks at the weekend. And <Select count="8" options="few,a few,little,a little" /> students can stay away from the bar when major sports events are on TV! Finally, if you feel that you’re doing too <Select count="9" options="little,a little,few,a few" /> exercise, the fitness centre is open 24 hours a day!
    </div>

    <div class="buttons check-buttons">
        {#if showCheckButton}
            <button class="btn btn-outline-primary" on:click={checkAnswers}>Check answers</button>
        {/if}
        {#if showKeyButton}
            <button class="btn btn-outline-primary" on:click={showFeedback}>Key</button>
        {/if}
    </div>

    {#if feedback}
        <div id="feedback" in:slide>
            <WithIcon icon="key">
                <div slot="html">In terms of accommodation there are <span class="tooltip" title="The writer is negative about the accommodation options off-campus!" use:tooltip>few</span> options off campus. <span class="tooltip" title="Despite the quantity being small, a positive synonym for 'some' + countable noun." use:tooltip>A few</span> students have found boarding houses downtown, but these can be expensive. We recommend living on campus. Our halls of residence contain plenty of affordable rooms. <span class="tooltip" title="Despite the quantity being small, a positive synonym for 'some' + countable noun." use:tooltip>A few</span> rooms have ensuite bathrooms, but <span class="tooltip" title="The writer is negative, suggesting that there might not be enough cooking facilities." use:tooltip>few</span> have cooking facilities. However, most people don’t mind sharing a kitchen. During the day students have <span class="tooltip" title="The writer is negative about the amount of time available for socialising." use:tooltip>little</span> time for socialising, and the kitchen is a good place to share <span class="tooltip" title="Despite the quantity being small, a positive synonym for 'some' + uncountable noun." use:tooltip>a little</span> conversation in the evenings. You can also go to the student bar for <span class="tooltip" title="Despite the quantity being small, a positive synonym for 'some' + countable noun." use:tooltip>a few</span> drinks at the weekend. And <span class="tooltip" title="Synonym for 'not many' + countable noun (= negative!)" use:tooltip>few</span> students can stay away from the bar when major sports events are on TV! Finally, if you feel that you’re doing too <span class="tooltip" title="Synonym for 'not enough' + uncountable noun!" use:tooltip>little</span> exercise, the fitness centre is open 24 hours a day!</div>
            </WithIcon>
        </div>
    {/if}

</div>

<style>
    .eg-grid {
        display: grid;
        grid-template-columns: 1fr 11fr;
        gap: 10px;
        margin-bottom:15px;
    }
    .q-grid {
        display: grid;
        grid-template-columns: 1fr 8fr 3fr;
        gap: 10px;
        margin-bottom:15px;
    }
    .numbering {
        display:flex;
        justify-content: end;
        font-weight:bold;
        font-size: 1rem;
    }
    .buttons {
        display:flex;
        justify-content: center;
        gap:10px;
        /* font-weight:bold; */
        /* font-size: 1rem; */
    }
    #activity, #feedback {
        margin: 15px auto;
        line-height:1.5rem;
    }
    #scoreDiv {
        text-align:center;
        font-size: 1.2rem;
    }

</style>
