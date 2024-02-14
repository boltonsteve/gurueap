<script>

    import SvelteSeo from "svelte-seo"
    import { scale,fade } from 'svelte/transition';

    let showButton = true;
    let showName = true;
    let showText = true;
    let name = 'Wh Brainstorming';
    let text = 'press \'n\' for next';
    let classOn = false;

    let texts = [
        "your favourite kind of weather",
        "a sport you would like to learn",
        "a kind of music that is popular in your country",
        "the most polite person you know",
        "a historical event that you think was important",
        "a vacation you would like to go on",
        "a decision you made that you are happy with",
        "a quiet place that you like",
        "a time when you felt proud of someone else",
        "something you bought that you were not happy with",
        "a foreign language you would like to learn",
        "a child that you know",
        "a historical place that you have visited",
        "a part of the world you would like to visit",
        "a memorable conversation you had with a stranger ",
        "a job you would really like to do",
        "an interesting house or apartment that you like",
        "an art gallery, museum or exhibition you have enjoyed ",
        "a building that you like better",
        "a family event that you enjoyed",
        "a TV or radio programme you enjoyed when you were a child",
        "a national holiday that you usually enjoy",
        "your first day at high school or university",
        "a town that you enjoyed visiting",
        "a newspaper or magazine you enjoy reading",
        "a famous person that you particularly like",
        "a subject that you enjoyed at school or college",
        "a film you like",
        "a festival or celebration you have been to",
        "a person that you met recently and liked ",
        "someone who has had an important influence on your life",
        "an old person that you know",
        "a lake, a river or a sea that you have visited",
        "a present you have given someone",
        "a sporting event you attended",
        "a happy childhood event",
        "a photograph that you like",
        "an area of your country that you know and like",
        "an interesting city (not your hometown) that you know and like",
        "something you own that is very important to you",
        "one of your neighbours",
        "your favourite animal",
        "a piece of art that you like",
        "a leader you admire",
        "a teacher you once had who you enjoyed being taught by",
        "a member of your family who you are similar to",
        "an artist or entertainer who is famous in your country",
        "a book you have read recently",
        "some good advice that you have received",
        "a time of day that you like",
        "a useful website that you use often",
        "a journey that you didn't enjoy",
        "some good news that you recently received",
        "a shop that you enjoy going to",
        "a job that you think is useful to society",
        "an important choice you had to make in your life",
        "an area of countryside you know and like",
        "something healthy you enjoy doing",
        "a trip you took by public transport",
        "a street market you have visited",
        "a competition you have entered",
        "your first mobile phone",
        "something useful you learned in elementary school"
    ];

    let names = [
        'Awan',
        'Linda',
        'Bowo',
        'Iin',
        'Ara',
        'Nia',
        'Hafidz',
        'Haz',
        'Yuli',
        'Des'
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
            }, 5000);
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
