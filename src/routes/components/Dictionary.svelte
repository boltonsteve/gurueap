<script>

    import { onMount } from 'svelte';
    export let word = "";
    export let mode = "dictionary"

    onMount(() => {
		/* console.log('the component has mounted'); */
		audio = document.getElementById('myAudio');
	});

    let item,phonetic,audio,filtered,definition;
    let iHtml1 = '';
    let iHtml2 = '';
    let phonemic = '';

    let hasAudio = false;
    let noEntry = false;
    let src = '';
    let example = '';

    let hasError = false;
    let isFetching = false;

    // Make a tCase version
    let tCase = '';
    for(let i=0;i<word.length;i++) {
        if(i==0) {
            tCase += word[i].toUpperCase();
        } else {
            tCase += word[i];
        }
    }

    const playAudio = () => {
        /* audio.src = src; */
        audio.play();
    }

    const getData = async () => {

        if(word == '') {

            noEntry = true;

        } else {

            // Reset stuff
            hasAudio = false;
            hasError = false;
            isFetching = true;
            src = '';

            // Make the API Call here
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                item = data[0];
                /* word = item.word; */

                // Phonemic spelling
                if('phonetic' in item) {
                    phonemic = item.phonetic;
                }

                // Phonemic audio
                if('phonetics' in item) {
                    let filtered = item.phonetics.filter( (next) => {
                        return next.audio !== "";
                    })
                    if(filtered.length > 0) {
                        src = filtered[0].audio;
                        audio.src = src;
                        hasAudio = true;
                    }
                }

                // Alternative phonetic spelling source
                if('phonetics' in item && phonemic == '') {
                    let filtered = item.phonetics.map( (next) => {
                        if('text' in next) {
                            return next.text;
                        }
                    })
                    if(filtered.length > 0) {
                        phonemic = filtered[0].text;
                        src = filtered[0].audio;
                        audio.src = src;
                        hasAudio = true;
                    }
                }

                // meanings
                item.meanings.forEach( meaning => {

                    // partOfSpeech
                    iHtml2 += `<div class="font-weight-bold mt-1">${meaning.partOfSpeech}</div>`;

                    // definitions
                    iHtml2 += '<ol>';
                    meaning.definitions.forEach( nextDefinition => {

                        definition = nextDefinition.definition;

                        if(mode == 'guess') {
                            definition = definition.replace(word,'________');
                            definition = definition.replace(tCase,'________');
                        } else if(mode == 'hangman' || mode == 'dictionary') {
                            definition = definition.replace(word, `<b>${word}</b>`);
                            definition = definition.replace(tCase, `<b>${tCase}</b>`);
                        }

                        iHtml2 += `<li class="mb-1">${definition}</li>`;
                        if('example' in nextDefinition) {
                            example = nextDefinition.example;

                            if(mode == 'guess') {
                                example = example.replace(word,'________');
                                example = example.replace(tCase,'________');
                            } else if(mode == 'hangman' || mode == 'dictionary') {
                                example = example.replace(word, `<b>${word}</b>`);
                                example = example.replace(tCase, `<b>${tCase}</b>`);
                            }

                            iHtml2 += `<ul><li class="mb-1 font-italic">${example}</li></ul>`;

                        }
                    });
                    iHtml2 += '</ol>';

                })

            }).catch(error => {
                hasError = true;
                return [];
            })
            .finally( () => { isFetching = false; });

        }

    }

    getData();

</script>

<audio id="myAudio">
    <source src="{src}" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

{#if hasError}
    <div class="loading-msg">Sorry, error loading dictionary!</div>
{:else if isFetching}
    <div class="loading-msg">Loading dictionary..</div>
{:else}
    {#if mode == 'dictionary' || mode == 'hangman'}
        <div id="word">{word}</div>
        {#if phonemic !== '' && src == ''}
            <div id="phonemic">{phonemic}</div>
        {:else}
            <div id="listen" on:click={playAudio}>{phonemic}</div>
        {/if}
    {/if}
    <div id="iHtml2">{@html iHtml2}</div>
{/if}

<style>

    #word {
        font-size:2rem;
        text-align: center;
        font-weight:bold;
        color: var(--green);
    }

    #phonemic {
        text-align: center;
        font-size: 1.2rem;
    }

    #listen {
        text-align: center;
        color:blue;
        text-decoration:underline;
        cursor:pointer;
        font-size: 1.2rem;
    }

    .loading-msg {
        text-align:center;
        margin-top: 15px;
    }

    /* div { */
    /*     border: 1px solid red; */
    /* } */

</style>
