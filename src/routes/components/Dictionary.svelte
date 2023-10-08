<script>

    import { onMount } from 'svelte';
    export let word = "";
    export let mode = "dictionary"

    onMount(() => {
		/* console.log('the component has mounted'); */
		audio = document.getElementById('myAudio');
	});

    let iHtml1 = '';
    let iHtml2 = '';
    let item,phonetic,phonemic,audio,filtered,definition;
    let hasAudio = false;
    let noEntry = false;
    let src = '';
    let example = '';

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
        audio.src = src;
        audio.play();
    }

    const getData = async () => {

        if(word == '') {

            noEntry = true;

        } else {

            // Reset stuff
            hasAudio = false;
            src = '';

            // Make the API Call here
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            .then(response => response.json())
            .then(data => {
                item = data[0];
                iHtml1 += `<h2 class="mb-0">${item.word}</h2>`;

                // Phonemic spelling
                if('phonetic' in item) {
                    phonemic = item.phonetics[0].text;
                    iHtml1 += `<span onclick="playAudio()">${phonemic}</span>`;
                }

                // Phonemic audio
                if('phonetics' in item) {
                    filtered = item.phonetics.filter( (next) => {
                        return next.audio !== "";
                    })
                    if(filtered.length > 0) {
                        src = filtered[0].audio;
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
                        }

                        iHtml2 += `<li class="mb-1">${definition}</li>`;
                        if('example' in nextDefinition) {
                            example = nextDefinition.example;

                            if(mode == 'guess') {
                                example = example.replace(word,'________');
                                example = example.replace(tCase,'________');
                            }

                            iHtml2 += `<ul><li class="mb-1 font-italic">${example}</li></ul>`;

                        }
                    });
                    iHtml2 += '</ol>';

                })

            }).catch(error => {
                console.log(error);
                return [];
            });

        }

    }

    getData();

</script>

<audio id="myAudio">
    <source src="{src}" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>

{#if mode == 'dictionary'}
    {@html iHtml1}
    {#if hasAudio}
        <sup id="phonemic" on:click={playAudio}>listen</sup>
    {/if}
{/if}
{@html iHtml2}

{#if noEntry}
    <p>No dictionary entry</p>
{/if}

<style>
#phonemic {
    color:blue;
    text-decoration:underline;
    cursor:pointer;
}
</style>
