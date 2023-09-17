<script>
    import SvelteSeo from "svelte-seo"
    import { flagIndo } from '$lib/flags.js'
    import { shuffle } from '$lib/shuffle.js'
    import ShuffleSpan from '../../components/ShuffleSpan.svelte'
    import { scale } from 'svelte/transition'

    let next = false;
    let LR = true;

    const raw = `A man should never neglect his family for business.
A professional is someone who can do his best work when he doesn't feel like it.
The problem with the rat race is that even if you win, you’re still a rat.
Far and away the best prize that life offers is the chance to work hard at work worth doing.
Instead of wondering when your next vacation is, you ought to set up a life you don't need to escape from.`;

    let sentences = raw.split(/\n/);
    let sentence = '';
    let words = [];
    let corrects = [];
    let moving = '';
    let element,elements;
    let msg = 'Select a word before continuing..'

    let selected;

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
        console.log(joined);
        if(joined == sentence) {
            document.getElementById('words').innerHTML = sentence;
            document.getElementById('words').classList.add('correct');

            corrects.push(`<li>${sentence}</li>`);
            document.getElementById('corrects').innerHTML = `<ol>${corrects.join('')}</ol>`;

            words = [];
            next = true;
            LR = false;

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
            elWords.innerHTML = msg;
            elWords.classList.add('correct');
        } else {
            elWords.innerHTML = '';
            elWords.classList.remove('correct');
            setUp();
            next = false;
            LR = true;
        }
    }

    const goLeft = () => {
        selected = Number(selected);
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
        console.log("moving: " + moving);
        console.log("selected: " + selected);
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
		let key = event.key;
        console.log('Key: ' + key);
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

    const button = document.querySelector('.btn');
    button.addEventListener('dblclick', function(el) {
        el.preventDefault();
    });

);

</script>

<SvelteSeo
    title=""
    description=""
/>

<svelte:window on:keydown={handleKeydown} />

<div class="mb-3 mw-500">

    <img src="/img/work.png" class="img-fluid rounded border" alt="work">

    <h1>Work Quotes</h1>

    <p>Here we have 5 work quotes from famous people.<br>
    See if you can reconstruct them!</p>
    <p>Click on a word to select it.<br>
        Click left-right (or type &larr; &rarr;) to move it around.</p>

    <div id="container">
        <div id="words">
            {#each words as word, index}
                <ShuffleSpan id="{index}" word="{word}" on:click={doWord} />
            {/each}
        </div>
        <div id="buttons">
            {#if LR}
                <button id="left" class="btn btn-outline-dark" on:click={goLeft} transition:scale>left</button>
            {/if}
            {#if next}
                <button id="next" class="btn btn-outline-dark" on:click={doNext} transition:scale>next</button>
            {/if}
            {#if LR}
                <button id="right" class="btn btn-outline-dark" on:click={goRight} transition:scale>right</button>
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
        font-size: 1.2rem;
    }

    #buttons {
        display: flex;
        justify-content:center;
        margin:30px;
    }

    #corrects {
        font-size:1.1rem;
    }

</style>
