<script>
    import SvelteSeo from "svelte-seo"
    import { collocations } from '$lib/collocations.js'
    import { shuffle } from '$lib/shuffle.js'

    shuffle(collocations);

    let elements,coll,colls,corr;
    let score = 0;
    let outof = 0;

    const getColl = () => {
        coll = collocations.shift();
        colls = coll.colls;
        corr = colls[0];
        shuffle(colls);
    }

    let showNext = false;

    const check = (e) => {
        let guess = e.target.textContent;
        let btnId = e.target.id.replace(/b/,'');
        if(guess == corr) {
            document.getElementById('b'+btnId).classList.add('bg-success','text-light');
            showNext = true;
            score ++;
        } else {
            document.getElementById('b'+btnId).classList.add('bg-danger','text-light');
        }

        outof++;

        document.getElementById('score').innerText = 'Score ' + score + '/' + outof;
    }

    let getNext = () => {

        for(var i=0; i<4; i++) {
            document.getElementById('b'+i).classList.remove('bg-success','bg-danger','text-light');
        }

        getColl();

        showNext = false;

    }

    getColl();

</script>

<SvelteSeo
    title="Collocations Quiz"
    description="A quiz looking at various common - and less-so-common - collocations."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,collocation,vocabulary" 
 /> 

<div class="mb-3 mw-500">

    <h1 class="text-center">Collocations Quiz</h1>

    <div id="score">Score 0/0</div>

    <div id="coll">{@html coll.gap}</div>

    <div class="my-grid">
        <div id="b0" class="btnDiv" on:click={check}>{coll.colls[0]}</div>
        <div id="b1" class="btnDiv" on:click={check}>{coll.colls[1]}</div>
        <div id="b2" class="btnDiv" on:click={check}>{coll.colls[2]}</div>
        <div id="b3" class="btnDiv" on:click={check}>{coll.colls[3]}</div>
    </div>

    {#if showNext}
        <button class="btn btn-outline-primary mx-auto my-3" on:click={getNext}>next</button>
    {/if}

</div>


<style>

#score {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 25px;
}

#coll {
    text-align: center;
    font-size: 1.4rem;
    margin-bottom: 25px;
}

.my-grid {
    display:grid;
    grid-template-columns:1fr 1fr;
    gap: 20px;
}

.my-grid div {
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    padding: 3px;
    text-align:center;
    cursor:pointer;
    font-size:1.1rem;

}

.btn {
    width:100px;
    font-size:1.2rem;
}
</style>
