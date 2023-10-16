<script>
    import SvelteSeo from "svelte-seo"
    import { checkAnswers } from '$lib/checkAnswers.js';
    import Select from '../../components/Select.svelte';
    import Modal from '../../components/Modal.svelte'

    let showKey = false;
    let showModal = false;
    let allTried = true;

    const toggleModal = () => {
        showModal = !showModal;
    }

    const checkAllTried = (tries) => {
        tries.forEach( (e) => {
            if(e.value == 'select') {
                allTried = false;
            }
        })
    }

    const doCheck = () => {

        let tries = document.querySelectorAll('.ans');

        checkAllTried(tries);

        if(allTried) {

            tries.forEach( (e,i) => {

                let coba = e.value;
                let ans = e.getAttribute('data');
                let fb = e.title;

                if(coba == ans) {
                    document.getElementById("A"+(i+1)).classList.add('success');
                } else {
                    document.getElementById("A"+(i+1)).classList.add('danger');
                }

            })

            showKey = true;

        } else {
            toggleModal();
            allTried = true;
        }

    }


</script>

<Modal {showModal} on:click={toggleModal} />
<div class="mb-3 mw-500">

<h3>it and this / theme and rheme (cohesion)</h3>

<p class="font-weight-bold">Examine the following text and complete the following rule below.</p>

<p>The Alexander Technique can be an expensive hobby to learn. <b><i>This</i></b> causes many people to give up before they have enjoyed its benefits. Studying AT takes time. <b><i>It</i></b> also requires patience. <b><i>This</i></b> makes it an unsuitable hobby for today’s younger generation who want everything now!</p>

<p>The so-called Alexander Position is excellent therapy for the back. <b><i>It</i></b> allows for the replacement of fluid between the vertebrae in the spine. <b><i>This</i></b> effectively makes people slightly taller by a few millimetres. In the long term <b><i>it</i></b> can help to prevent injury and back pain caused by years of bad posture.</p>

<p>Alexander Technique also helps to prevent injury when performing repetitive tasks. <b><i>This</i></b> is especially useful for musicians, who have to hold their instruments in unnatural positions for long periods of time. Projecting the head forward while keeping the neck free is also important for singers. <b><i>It</i></b> helps them to make their voices louder, and <b><i>this</i></b> is important for opera singers who sing without electronic amplification.</p>

<ul>
    <li><b><i>it</i></b> is generally used to refer back to <Select count="1" options="themes,rhemes" /></li>
    <li><b><i>this</i></b> is generally used to refer back to <Select count="2" options="rhemes,themes" /></li>
    <li><b><i>it</i></b> <span class="uli">and</span> <b><i>this</i></b> both behave as <Select count="3" options="themes,rhemes" /></li>
</ul>

<p class="font-weight-bold">In the following two paragraphs, circle it or this as appropriate.</p>

<p>The head-neck-back relationship is an important part if Alexander Technique. In children <Select count="4" options="it,this" /> remains the same when the child is sitting or standing, whereas in adults <Select count="5" options="it,this" /> changes as the adult moves from a standing to a sitting position. Alexander hypothesised that <Select count="6" options="this,it" /> might cause back problems in adult humans.</p>

<p>Another important feature of Alexander Technique is inhibition. <Select count="7" options="This,It" /> is the attempt to 'forget' bad use of the body before exercising 'correct' use. <Select count="8" options="It,This" /> involves, for example, telling yourself to ‘not stand’ before standing. Not surprisingly, <Select count="9" options="this,it" /> is usually quite confusing for Alexander Technique beginners!</p>

    <button class="btn btn-outline-primary mx-auto my-1" on:click={doCheck} out:scale>check</button>

</div>
