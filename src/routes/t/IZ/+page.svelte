<script>

    import SvelteSeo from "svelte-seo"
    import { scale,fade } from 'svelte/transition';

    let showButton = true;
    let showName = true;
    let showText = true;
    let name = 'IZ';
    let text = 'IZ';
    let classOn = false;

    let texts = [
        'Bosses sit in offices filling pages with percentages.',
        'Boxes, faxes and packages are all sent by businesses.',
        'Nurses apply bandages and cure viruses.',
        'Sausages and sauces stay fresh in fridges.',
        'Witches make sandwiches from leeches and eyelashes.',
        'An artist mixes paint and brushes it onto canvases.',
        'Oranges grow on branches in the gardens of cottages.',
        'Men who repair watches wear glasses with thick lenses.',
        'People enter races to win prizes.',
        'Foxes hide in bushes to avoid surprises.',
        'People of both sexes sunbathe on beaches.',
        'Birds in cages face disadvantages.',
        'Noses of all shapes and sizes detect gases emerging from ashes.',
        'When he’s away, he misses her kisses.',
        'Students in colleges follow classes in the sciences. They write sentences using tenses in different languages.',
        'People buy cars from garages, then drive inches from the edges of bridges.',
        'Musicians of all ages appear on stages.',
        'My friend washes dishes to earn wages and pay taxes.'
    ];

    let names = [
        'Fakhri',
        'Lana',
        'Lina',
        'Rifqa',
        'Jose',
        'Didi',
        'Dede',
        'Alisha',
        'Novel',
        'Vega',
        'Safira',
        'Septi'
    ];

    function doNext() {

        showName = false;
        showText = false;

        if(texts.length) {

            names = shuffle(names);
            texts = shuffle(texts);

            name = names[0];
            text = texts.pop();

        } else {
            name = '<a href="../posts/s-iz">listen here</a>';
            text = 'No more texts!';
        }

        setTimeout(function() {
            showText = true;
            setTimeout(function() {
                showName = true;
            }, 4000);
        }, 500);

    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let onKeyUp = (e) => {
        if (e.key == 'n') {
            doNext();
        } else if (e.key == 'N') {
            doPrevious();
        }
    }

</script>

<SvelteSeo
title="IZ Plurals"
 /> 

<div class="container">
    <div>
        {#if showName}
            <div id="name" transition:scale>{@html name}</div>
        {/if}
    </div>
    <div>
        {#if showText}
            <div id="text" transition:fade>{@html text}</div>
        {/if}
    </div>
</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

/* :global(body){ */
/*     background:#eeeeee; */
/* } */

.container {
    background:#eeeeee;
    height:100vh;
    display: flex;
    flex-direction:column;
}

.container div {
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
}

#name {
    font-size:5rem;
}

#text {
    font-size:3rem;
}

</style>
