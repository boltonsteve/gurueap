<script>

    import SvelteSeo from "svelte-seo"
    import { collocations } from '$lib/collocations.js'
    import { shuffle } from '$lib/shuffle.js'
    import { onMount } from 'svelte';

    shuffle(collocations);

    console.log(collocations.length + ' collocations');

    let elements,nextColl,words,correct,sentence,guess,btnId;
    let isGreen = false;
    let score = 0;
    let outof = 0;

    const getColl = () => {
        nextColl = collocations.shift();
        sentence = nextColl.sentence;
        words = nextColl.words;
        correct = words[0];
        shuffle(words);
    }

    let showNext = false;

    const incrementScore = () => {
        outof++;
        document.getElementById('score').innerText = 'Score ' + score + '/' + outof;
    }

    const check = (e) => {

        guess = e.target.textContent;
        btnId = e.target.id.replace(/b/,'');
        if(guess == correct) {
            if(isGreen !== true) {
                document.getElementById('b'+btnId).classList.add('bg-success','text-light');
                sentence = sentence.replace(/_+/,`<span class="text-success font-weight-bold font-italic">${correct}</span>`);
                showNext = true;
                score ++;
                isGreen = true;
                incrementScore();
            }
        } else {
            document.getElementById('b'+btnId).classList.add('bg-danger','text-light');
        }

        if(isGreen !== true) {
            incrementScore();
        }

    }

    const getNext = () => {

        for(var i=0; i<4; i++) {
            document.getElementById('b'+i).classList.remove('bg-success','bg-danger','text-light');
        }
        getColl();
        showNext = false;
        isGreen = false;
    }

    onMount(() => {
        /* elements = document.querySelectorAll('btnDiv'); */
        getNext();
	});

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

    <div id="coll">{@html sentence}</div>

    <div class="my-grid">
        <div id="b0" class="btnDiv" on:click={check}>{words[0]}</div>
        <div id="b1" class="btnDiv" on:click={check}>{words[1]}</div>
        <div id="b2" class="btnDiv" on:click={check}>{words[2]}</div>
        <div id="b3" class="btnDiv" on:click={check}>{words[3]}</div>
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
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #bbbbbb;
    border-radius: 5px;
    padding: 3px;
    cursor:pointer;
    font-size:1.1rem;
    min-height: 30px;

}

.btn {
    width:100px;
    font-size:1.2rem;
}

</style>
