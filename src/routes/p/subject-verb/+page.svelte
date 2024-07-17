<script>
    import SvelteSeo from "svelte-seo";
    import { flagIndo } from '$lib/flags.js';
    import { fade, scale } from "svelte/transition";
    import WithIcon from '../../components/WithIcon.svelte';
    import Modal from '../../components/Modal.svelte';

    let activity = '';

    let items = [
        "Hanging out with friends at the weekend",
        "is:are:'is' (v) agrees with 'hanging' (n)",
        "lots of fun. On a typical Saturday, we go to the beach. Swimming when the waves are high",
        "is:are:'is' (v) agrees with 'swimming' (n)",
        "one of our favourite activities. Towards the end of the day, if it's really hot, drinking a few beers with friends",
        "is:are:'is' (v) agrees with 'drinking' (n)",
        "not unusual. Budi and Simon sometimes",
        "drink:drinks:'drink' (v) agrees with 'Budi and Simon' (n, plural)",
        "too much. Simon sometimes",
        "drinks:drink:'drinks' (v) agrees with 'Simon' (n, singular)",
        "5 beers before heading home!"
    ]

    let corrects = [];
    let feedbacks = [];
    let numbering = 1;
    let fb = '';

    let feedback = false;
    let allAttempted = true;
    let showModal = false;


    let menuedArr = items.map( (next) => {
        if(next.match(/:/)) {
            let parts = next.split(/:/);
            let data = parts.pop();
            feedbacks.push(data);
            corrects.push(parts[0]);

            // Shuffle parts
            /* parts.sort(() => Math.random() - 0.5); */
            shuffle(parts);

            let menu = `<span style="white-space:nowrap;"><b>${numbering}.</b> <select id="s${numbering-1}" class="ans">
                <option value="select">select</option>`;

            let options = parts.map( (next) => `<option value="${next}">${next}</option>` );
            menu += options.join('') + `</select></span>`;
            numbering ++;
            return menu;
        } else {
            return next;
        }
    });

    console.log('Corrects: ', corrects)
    console.log('Feedbacks: ', feedbacks)

    activity = menuedArr.join(' ');

    function shuffle(array) {
      let currentIndex = array.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      return array;
    }

    const checkAns = () => {

        let answers = document.querySelectorAll('.ans');

        answers.forEach( (next,i) => {
            if(next.value == 'select') {
                allAttempted = false;
            }
        });


        if(!allAttempted) {
            toggleModal();
        } else {

            answers.forEach( (next,i) => {
                let menu = document.getElementById('s'+i);
                if(next.value == corrects[i]) {
                    menu.classList.add('bg-success','text-white');
                } else {
                    menu.classList.add('bg-danger','text-white');
                }
            });

            fb = `<div class="mb-2"><ol><li>${feedbacks.join('</li><li>')}</li></ul></div>`;

            feedback = true;
        }
    }

    const toggleModal = () => {
        showModal = !showModal;
    }


</script>

<SvelteSeo
    title="Subject/Verb"
    description="Demonstrating the importance of subject/verb agreement in IELTS speaking and writing."
/>

<Modal {showModal} on:click={toggleModal} />

<div class="mb-3 mw-500">

    <h1>Subject-Verb Agreement</h1>

    <div class="alert alert-danger font-italic">It could also be argued that <i><b>removing</b></i> individual animals from the wild <span class="font-weight-bold text-danger">are</span> potentially threatening the population of wild species.</div>
    
    <p>In this sentence, the subject <i><b>removing individual animals from the wild</b></i> does not 'agree' with the verb <i><b>are</b></i>.</p>

    <p>Subject/verb <i><b>disagreement</b></i> happens when..</p>

    <ul class="font-italic">
        <li>the subject is singular and the verb is plural<br><span class="small">e.g. 'He go..'</span></li>
            <li>the subject is plural and the verb is singular<br><span class="small">e.g. 'They goes..'</span></li>
    </ul>

    <p>It's possible that the writer was trying to make <i><b>animals</b></i> (plural) agree with the verb, and that's why he or she chose <i><b>are</b></i> (also plural). However, the main noun in the subject is <i><b>removing</b></i> (singular), and so the sentence should read:</p>

    <div class="alert alert-success font-italic">..<span class="font-weight-bold text-success">removing</span> individual animals from the wild <span class="font-weight-bold text-success">is</span> potentially threatening..</div>

    <WithIcon icon="flag">
        <div slot="html">I've noticed that - at least among Indonesians - this error is extremely common when the main noun of a noun phrase is constructed using <i><b>__ing</b></i>, which is quite common in much academic writing.</div>
    </WithIcon>

    <p>When you're deciding how to make verbs agree with nouns, first of all identify which noun in the subject is the main noun. Then select your verb accordingly.</p>

    <h3>Practice</h3>

    {#if feedback}
        <div id="feedback" in:scale out:fade>{@html fb}</div>
    {/if}

    {@html activity}

    <button class="btn btn-outline-primary my-1 d-block mx-auto" on:click={checkAns}>Check answers</button>

</div>
