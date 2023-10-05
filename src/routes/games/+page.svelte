<script>
    import SvelteSeo from "svelte-seo"
    import { games } from '$lib/games.js';
    import Card from '../components/Card.svelte'

    /* games.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)); */

    let gamesCount = games.length;

    import { base } from '$app/paths';

    const menuDivs = games.map( next => {
        return `<div class="mb-0 text-center">
            <a class="song-title" href="${base}/games/${next.href}">${next.title}</a>
        </div>
        <p class="mt-0 mb-2 song-desc text-center">${next.description}</p>`
    })

    const menu = menuDivs.join('');

</script>

<SvelteSeo
  title="GuruEAP - Games",
  description=""
/>

<div class="mb-3 pt-2 mw-500">

    <div class="card mb-3">
        <Card title="Hangman" icon="games" path="./games/hangman" text="A version of the classic game hangman, featuring vocabulary taken at random from the Academic Word List (AWL)" />
    </div>

    <div class="card mb-3">
        <Card title="Guess the word!" icon="games" path="./games/guess-the-word" text="Read the definitions and examples and guess the word - also featuring vocabulary taken at random from the Academic Word List (AWL)" />
    </div>

    <div class="card">
        <Card title="Look it up!" icon="games" path="./games/look-it-up" text="A dictionary game. Guess words selected from the Academic Word List (AWL). Follow feedback from the app and keep guessing!" />
    </div>



</div>

<style>
    .card {
        display: flex;
        justify-content: center;
    }

</style>

