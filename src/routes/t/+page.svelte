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

<div class="container">

    <div id="content">

        <div>
            <h1>GuruEAP Teachers</h1>
        </div>

        <div class="cols">

            <div>
                <h3>Boardwork</h3>
                <ul>
                    <li><a href="../t/independent-subordinate" target="_blank">independent subordinate</a></li>
                    <li class="penjelasan">using subordinating conjunctions to join independent clauses</li>
                </ul>
            </div>

            <div>
                <h3>Multiplayer games</h3>
                <ul>
                    <li><a href="../t/art-of-which" target="_blank">art of 'which'</a></li>
                    <li class="penjelasan">joining independent clauses using 'yang'</li>
                </ul>
                <ul>
                    <li><a href="../t/two-verbs" target="_blank">nominalising verbs</a></li>
                    <li class="penjelasan">modifying sentences containing multiple verbs</li>
                </ul>
            </div>

        </div>

    </div>

</div>

<style>

/* div { */
/*     border: 1px solid red; */
/* } */

h1,h3 {
    margin-top:0px;
}

.container {
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.penjelasan {
    list-style-type:none;
    font-style: italic;
    font-size:0.9rem;
}
    
.cols {
    display: flex;
    flex-wrap: wrap;
    gap:20px;
}

.cols div {
    max-width:300px;
}

</style>

