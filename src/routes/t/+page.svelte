<script>
    import SvelteSeo from "svelte-seo"

</script>

<SvelteSeo
  title="GuruEAP Teachers"
  description="Classroom activities for use by teachers."
/>

<nav>
    <div class="logo">
        <a href="/">GuruEAP</a>
    </div>
    <div class="menu">
        <a href="/posts">posts</a> | 
        <a href="/songs">songs</a> | 
        <a href="/games">games</a>
    </div>
</nav>

<div id="activity">

<div id="box">

    <div id="intro">
        <h1>Teachers</h1>
        <p>Classroom activities using projector and whiteboard.</p>
    </div>

    <div id="cols">

        <div>

            <h3>Boardwork</h3>
            <ul>
                <li><a href="../t/independent-subordinate" target="_blank">independent subordinate</a><br><span class="penjelasan">using subordinating conjunctions to join independent clauses</span>
            </ul>

            <h3>Speaking</h3>
            <ul>
                <li><a href="../t/part2" target="_blank">Wh Brainstorming</a><br><span class="penjelasan">Speaking Part 2 - Brainstorming with WH</span>
                <li><a href="../t/IZ" target="_blank">IZ</a><br><span class="penjelasan">Plurals that end in 'IZ'</span>
            </ul>

            <h3>Guided paraphrasing - Analysis</h3>
            <ul>
                <li>
                    <a href="../t/paraphrasing-1" target="_blank">1</a>
                    <a href="../t/paraphrasing-2" target="_blank">2</a>
                    <a href="../t/paraphrasing-3" target="_blank">3</a>
                    <a href="../t/paraphrasing-4" target="_blank">4</a>
                    <a href="../t/paraphrasing-5" target="_blank">5</a>
                    <a href="../t/paraphrasing-6" target="_blank">6</a>
                    <a href="../t/paraphrasing-7" target="_blank">7</a>
                    <a href="../t/paraphrasing-8" target="_blank">8</a>
                </li>
            </ul>

            <h3>Writing scaffolds</h3>
            <ul>
                <li>
                    <a href="../t/consumerism" target="_blank">consumerism</a>
                </li>
            </ul>

        </div>

        <div>

            <h3>Essay planning</h3>
            <ul>
                <li><a href="../t/arguline" target="_blank">ArguLine</a><br><span class="penjelasan">essay outlining and argument mapping</span>
            </ul>

            <h3>Multiplayer games</h3>
            <ul>
                <li><a href="../t/definitions" target="_blank">definitions</a><br><span class="penjelasan">improving 'bad' definitions</span>
            </ul>
            <ul>
                <li><a href="../t/art-of-which" target="_blank">art of 'which'</a><br><span class="penjelasan">joining independent clauses using 'yang'</span>
            </ul>
            <ul>
                <li><a href="../t/two-verbs" target="_blank">nominalising verbs</a><br>
                    <span class="penjelasan">modifying sentences containing multiple verbs</span>
            </ul>
            <ul>
                <li><a href="../t/dependent-prepositions" target="_blank">dependent prepositions</a></li>
            </ul>
            <ul>
                <li><a href="../t/minority-languages" target="_blank">minority languages</a><br><span class="penjelasan">Yes/no questions to reconstruct a text (total cloze)</span>
            </ul>

        </div>

    </div>

</div>

</div>

<style>

/* div, nav { */
/*     border: 1px solid red; */
/* } */

    h1,h3 {
        margin-bottom:0px;
    }

    ul {
        margin:7px auto;
    }

    .penjelasan {
        font-style: italic;
        font-size:0.9rem;
    }

    #activity {
        padding-top:2%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    #box {
        max-width:650px;
        display:grid;
        grid-template-columns: 1fr;
    }

    #cols {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        column-gap:10px;

    }

    #cols > div {
        max-width:300px;
    }
    
</style>

