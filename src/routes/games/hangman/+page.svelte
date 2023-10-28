<script>
    import SvelteSeo from "svelte-seo"
    import { PersonArmsUp, HeartFill, EmojiSmile, EmojiFrown, EmojiNeutral, EmojiGrimace } from "svelte-bootstrap-icons";
    import { sublists } from '$lib/sublists.js';
    import { shuffle } from '$lib/shuffle.js';
    import Dictionary from '../../components/Dictionary.svelte';

    let joinedArrs = sublists.map( next => next.join(' ') );
    let fullJoined = joinedArrs.join(' ');
    let words = fullJoined.split(' ');
    shuffle(words);

    let blanks = '';
    let iconSize = 30;
    let done = false;
    let cats;
    let word;
    let wordArr;
    let gapsArr;
    let showDictionary = false;

    const nextWord = () => {
        showDictionary = false;
        let letters = document.querySelectorAll('.letter');
        letters.forEach((element) => {
            element.classList.remove('danger','success');
        });
        let gapsEl = document.querySelector('.gaps');
        gapsEl.classList.remove('success','danger');
        gapsEl.textContent = '';
        setUp();
        done = false;
    }

    let setUp = () => {

        cats = [
            'cat',
            'cat',
            'cat',
            'cat',
            'cat',
            'cat',
            'cat',
            'cat',
            'cat'
        ];

        word = words.pop();
        wordArr = word.split('');
        gapsArr = wordArr.map( (next,i) => {
            return `&bull;`;
        })
        blanks = gapsArr.join('');

    }

    setUp();

    const tryLetter = (e) => {

        if(done == false) {
            let letter = e.target.textContent;
            let found = false;
            wordArr.forEach( (next,i) => {
                if(next == letter) {
                    gapsArr[i] = letter;
                    blanks = gapsArr.join('');
                    found = true;
                }
            })

            if(found) {
                document.getElementById(letter).classList.add('success');
                if(gapsArr.join('') == word) {
                    console.log('Solved!');
                    let gapsEl = document.querySelector('.gaps');
                    gapsEl.classList.add('success');
                    done = true;
                    showDictionary = true;
                }
            } else {
                document.getElementById(letter).classList.add('danger');
                cats.pop();
                cats = [...cats];

                if(cats.length == 0) {
                    let gapsEl = document.querySelector('.gaps');
                    gapsEl.classList.add('danger');
                    gapsEl.textContent = word;
                    done = true;
                }
            }
        }
    }

</script>

<SvelteSeo
title="AWL Hangman"
description="A version of the classic game - hangman. Featuring vocabulary from the Academic Word List (AWL)."
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,games,Academic Word List"
 />

<div class="container">

<h1 class="text-center my-1">AWL Hangman</h1>

<div class="gaps">{@html blanks}</div>

{#if done}
    <button class="btn btn-outline-dark" on:click={nextWord}>next</button>
{/if}

    {#if showDictionary}
        <Dictionary bind:word="{word}" mode="hangman" />
    {/if}

<div class="gallows">
    {#each cats as cat, index}
        <div style="margin:0px 2px;">
            {#if cats.length < 2}
                <EmojiGrimace width={iconSize} height={iconSize} />
            {:else if cats.length < 4}
                <EmojiFrown width={iconSize} height={iconSize} />
            {:else if cats.length < 6}
                <EmojiNeutral width={iconSize} height={iconSize} />
            {:else}
                <EmojiSmile width={iconSize} height={iconSize} />
            {/if}
        </div>
    {/each}
</div>

<div class="letters">
    <div class="letter" id="a" on:click={tryLetter}>a</div>
    <div class="letter" id="b" on:click={tryLetter}>b</div>
    <div class="letter" id="c" on:click={tryLetter}>c</div>
    <div class="letter" id="d" on:click={tryLetter}>d</div>
    <div class="letter" id="e" on:click={tryLetter}>e</div>
    <div class="letter" id="f" on:click={tryLetter}>f</div>
    <div class="letter" id="g" on:click={tryLetter}>g</div>
    <div class="letter" id="h" on:click={tryLetter}>h</div>
    <div class="letter" id="i" on:click={tryLetter}>i</div>
    <div class="letter" id="j" on:click={tryLetter}>j</div>
    <div class="letter" id="k" on:click={tryLetter}>k</div>
    <div class="letter" id="l" on:click={tryLetter}>l</div>
    <div class="letter" id="m" on:click={tryLetter}>m</div>
    <div class="letter" id="n" on:click={tryLetter}>n</div>
    <div class="letter" id="o" on:click={tryLetter}>o</div>
    <div class="letter" id="p" on:click={tryLetter}>p</div>
    <div class="letter" id="q" on:click={tryLetter}>q</div>
    <div class="letter" id="r" on:click={tryLetter}>r</div>
    <div class="letter" id="s" on:click={tryLetter}>s</div>
    <div class="letter" id="t" on:click={tryLetter}>t</div>
    <div class="letter" id="u" on:click={tryLetter}>u</div>
    <div class="letter" id="v" on:click={tryLetter}>v</div>
    <div class="letter" id="w" on:click={tryLetter}>w</div>
    <div class="letter" id="x" on:click={tryLetter}>x</div>
    <div class="letter" id="y" on:click={tryLetter}>y</div>
    <div class="letter" id="z" on:click={tryLetter}>z</div>
</div>

</div>

<style>

    .container {
        max-width:500px;
        margin: 30px auto;
    }

    .gaps {
        text-align:center;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-size: 2rem;
        height: 40px;
        /* border: 1px solid black; */
    }

    .gallows {
        font-size: 1.2rem;
        width: 350px;
        margin: 0px auto;
        text-align: center;
        margin-top:20px;
        margin-bottom:20px;
        display:flex;
        justify-content: center;
    }

    .letters {
        max-width: 400px;
        margin: 0px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

    }

    .letters div {
        margin:5px;
        width:50px;
        height:50px;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid black;
        border-radius: 5px;
        cursor: pointer;
    }

    button {
        display:block;
        margin: auto;
        font-size: 1.2rem;
        width:100px;
        height:50px;
    }

</style>
