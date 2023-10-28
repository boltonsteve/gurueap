<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import { shuffle } from '$lib/shuffle.js'
    import ShuffleSpan from '../../components/ShuffleSpan.svelte'
    import { scale } from 'svelte/transition'

    const raw = `The cause of higher prices was an increase in demand.
The result of an increase in demand was higher prices.
The demand has increased, and as a result the prices are higher.
Because the demand has increased, the prices are higher.
An increase in demand leads to higher prices.
Higher prices are caused by an increase in demand.
The prices are higher because of an increase in demand.
When/If there is an increase in demand, prices rise.`;

    let next = false;
    let left_right = true;

    let sentences = raw.split(/\n/);
    let sentence = '';
    let words = [];
    let corrects = [];
    let moving = '';
    let element,elements;
    let msg = 'Select a word before continuing..'

    let selected = 1000;

    let elWords = document.getElementById('words');

    const setUp = () => {
        selected = 0;
        sentence = sentences.shift();
        words = sentence.split(' ');
        shuffle(words);
    }
    setUp();

    const clearDanger = () => {
        elements=document.getElementsByClassName('span')
        for(element of elements){
            if(element.classList.contains("danger")) {
                element.classList.remove('danger')
            }
        }
    }

    const doWord = (e) => {
        clearDanger();
        selected = e.target.id;
        let word = e.target.textContent;
        document.getElementById(selected).classList.add('danger');
    }

    const check = () => {

        let joined = words.join(' ');

        if(joined == sentence) {
            document.getElementById('words').innerHTML = sentence;
            document.getElementById('words').classList.add('correct');

            corrects.push(`<li>${sentence}</li>`);
            document.getElementById('corrects').innerHTML = `<ol>${corrects.join('')}</ol>`;

            words = [];
            next = true;
            left_right = false;

        }
    }

    const resetWords = () => {
        // sanitation of words
        words = words.map( next => {
            return typeof(next) == 'object' ? next[0] : next;
        })
        clearDanger();
        words = [...words];
        document.getElementById(selected).classList.add('danger');
    }

    const doNext = () => {
        let elWords = document.getElementById('words');
        if(sentences.length == 0) {
            let msg = 'No more sentences!';
            next = false;
            elWords.innerHTML = msg;
            elWords.classList.add('correct');
        } else {
            elWords.innerHTML = '';
            elWords.classList.remove('correct');
            setUp();
            next = false;
            left_right = true;
        }
    }

    const goLeft = () => {
        moving = words.splice(selected,1);
        if(selected > 0) {
            selected--;
            words.splice(selected, 0, moving);
        } else {
            selected = words.length;
            words.splice(selected, 0, moving);
        }
        resetWords();
        check();
    }

    const goRight = () => {
        moving = words.splice(selected,1);
        if(selected < words.length) {
            selected ++
        } else {
            selected = 0;
        }
        words.splice(selected, 0, moving);
        resetWords();
        check();
    }

    function handleKeydown(event) {

        if(!next) {

            let key = event.key;

            if(key == 'ArrowLeft') {
                goLeft()
            } else if(key == 'ArrowRight') {
                goRight()
            } else if(key == 'ArrowDown') {

                if(selected == 1000) {
                    selected = words.length-1;
                    document.getElementById(selected).classList.add('danger');
                } else {
                    if(selected > 0) {
                        selected--;
                    } else {
                        selected = words.length-1;
                    }
                    clearDanger();
                    document.getElementById(selected).classList.add('danger');
                }
            } else if(key == 'ArrowUp') {
                if(selected == 1000) {
                    selected = 0;
                    document.getElementById(selected).classList.add('danger');
                } else {
                    if(selected < words.length-1) {
                        selected ++;
                    } else {
                        selected = 0;
                    }
                    clearDanger();
                    document.getElementById(selected).classList.add('danger');
                }
            }

        }
	}


</script>

<SvelteSeo
    title="Cause/Effect - shuffled"
    description="A range of cause effect structures."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,grammar,cause effect" 
/>

<svelte:window on:keydown={handleKeydown} />

<div class="mb-3 mw-500">

    <img src="/img/cause-effect.png" class="mx-auto" style="width:200px;" alt="work">

    <h1 class="text-center mt-2">Cause effect structures</h1>

    <p>See if you can reconstruct 5 cause effect structures!</p>
    <p>Click on a word to select it.<br>
        Click left-right (or type &larr; &rarr;) to move it around.</p>

    <div id="container">
        <div id="words">
            {#each words as word, index}
                <ShuffleSpan id="{index}" word="{word}" on:click={doWord} />
            {/each}
        </div>
        <div id="buttons" style="touch-action: manipulation;">
            {#if left_right}
                <button id="left" class="btn btn-outline-primary" on:click={goLeft} transition:scale>&larr;</button>
            {/if}
            {#if next}
                <button id="next" class="btn btn-outline-success" on:click={doNext} transition:scale>next</button>
            {/if}
            {#if left_right}
                <button id="right" class="btn btn-outline-primary" on:click={goRight} transition:scale>&rarr;</button>
            {/if}
        </div>
        <div id="corrects"></div>
    </div>

</div>

<style>

    #words {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top:30px;
    }

    button {
        width:60px;
        font-size: 1.1rem;
    }

    #buttons {
        display: flex;
        justify-content:space-around;

        margin:30px;
    }

    #corrects {
        font-size:1.1rem;
    }

</style>
