<script>
    import SvelteSeo from "svelte-seo"
    import { tooltip } from '$lib/tooltip';
    import { scale } from 'svelte/transition'
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
                    document.getElementById(i).classList.add('success');
                } else {
                    document.getElementById(i).classList.add('danger');
                }

            })

            showKey = true;

        } else {
            toggleModal();
            allTried = true;
        }

    }
</script>

<SvelteSeo
  title="When risk is risky"
  description="Demonstrating that 'risk' can be a risky word, at least in terms of collocation."
  keywords="EAP,IELTS,English for Academic Purposes,vocabulary,collocation,academic english,Indonesia"
/>

<Modal {showModal} on:click={toggleModal} />

<div class="mb-3 mw-500">

    <img src="/img/callum.jpg" class="img-fluid rounded" alt="risk">

    <h1>When risk is risky</h1>

    <div class="alert alert-danger font-italic">40% of people living with HIV have <span class="font-weight-bold text-danger">risk</span> to develop tuberculosis.</div>

    <p><b><i>Risk</i></b> can be a <b><i>risky</i></b> word in English!</p>

    <p>If there's a <b><i>risk</i></b>, then there is some kind of situation where a <b><i>bad or undesirable thing</i></b> might happen, as in the example above - HIV and tuberculosis.</p>

    <h3 class="mb-0">Risk - verb phrase</h3>
    <p class="mt-0">Here there are basically three options.</p>

<div class="alert alert-success mb-2">
    <p class="font-italic my-0">40% of people living with HIV <span class="font-weight-bold text-success">are at risk of</span> developing tuberculosis.</p>
<p class="mb-0 mt-1 small font-weight-bold">subject + to be + at risk of + of bad thing</p>
</div>

<div class="alert alert-success mb-2">
    <p class="font-italic my-0">A weak immune system can make it easier to contract tuberculosis, and people living with HIV <span class="font-weight-bold text-success">are</span> <b><i>particularly</i></b> <span class="font-weight-bold text-success">at risk</span>.</p>
<p class="mb-0 mt-1 small font-weight-bold">clause mentioning the bad thing + people who might experience the bad thing + to be + (adverb) + at risk</p>
</div>

<div class="alert alert-success">
    <p class="font-italic my-0">40% of people living with HIV <span class="font-weight-bold text-success">risk</span> <b><i>develop</i></b><span class="font-weight-bold text-success">ing</span> tuberculosis.</p>
<p class="mb-0 mt-1 small font-weight-bold">people who might experience the bad thing + risk + name of bad thing</p>
</div>

<h3 class="mb-0">Risk - noun</h3>
<p class="mt-0">Here the 'bad thing' is not mentioned.</p>

<div class="alert alert-success mb-2">
    <p class="font-italic my-0">People who have unprotected sex are taking a risk.</p>
    <p class="small font-weight-bold mb-0 mt-1">subject + take + a risk/risks</p>
    <p class="small mb-0">Notice the <a href="../posts/collocation">collocation</a>: <b><i>take a risk!</i></b></p>
</div>

<p>Risk as noun is also often used as a noun modifier:</p>

<div class="alert alert-success">
    <p class="font-italic my-0">Unprotected sex is a high risk activity.</p>
    <p class="small font-weight-bold mb-0 mt-1">subject + to be + a + high risk + noun</p>
</div>

<h3 class="mb-0">Risky - adjective</h3>
<p class="mt-0">Here again, the 'bad thing' is not mentioned.</p>

<div class="alert alert-success">
    <p class="font-italic my-0">Unprotected sex is risky.</p>
    <p class="small mb-0 mt-1 font-weight-bold">subject + to be + risky</p>
</div>


<h3 class="mb-0">Practice</h3>
<p class="mt-0">Now try this short practice activity (inspired by my nephew - see featured image!).</p>

{#if showKey}
    <div id="key" class="wrapper" in:scale>
        <p class="mt-0 small">Mouse over (or tap) highlighted items for tooltips:</p>
People who go skydiving are <span class="tooltip" title="The 'bad thing' is not mentioned" use:tooltip>taking a risk</span>. Skydiving is <span class="tooltip" title="adjective after 'to be'" use:tooltip>risky</span>. It's a <span class="tooltip" title="modifying the noun 'sport'" use:tooltip>high risk</span> sport. If your parachute fails to open you <span class="tooltip" title="Collocation: 'to be' + 'at risk of'" use:tooltip>are at risk of</span> death as your body will hit the ground at very high speed.
    </div>
{/if}

<div id="activity">
    People who go skydiving are 
    <select id="0" class="ans" data="taking a risk">
        <option value="select">select</option>
        <option value="risk">risk</option>
        <option value="risky">risky</option>
        <option value="taking a risk">taking a risk</option>
    </select>
    . Skydiving is 
    <select id="1" class="ans" data="risky">
        <option value="select">select</option>
        <option value="risk">risk</option>
        <option value="risky">risky</option>
        <option value="at risk">at risk</option>
    </select>
    . It's a 
    <select id="2" class="ans" data="high risk/risky">
        <option value="select">select</option>
        <option value="risk">risk</option>
        <option value="high risk/risky">high risk/risky</option>
    </select>
     sport. If your parachute fails to open you 
     <select id="3" class="ans" data="risk/are at risk of">
        <option value="select">select</option>
        <option value="risk/are at risk of">risk/are at risk of</option>
        <option value="risky">risky</option>
    </select>
     death as your body will hit the ground at very high speed.
</div>

{#if !showKey}
    <button class="btn btn-outline-primary mx-auto my-1" on:click={doCheck} out:scale>check</button>
{/if}


</div>

<style>

    .wrapper {
        border:1px solid #bbbbbb;
        border-radius:5px;
        padding:5px 10px 5px 10px;
    }

    #activity {
        line-height: 1.5rem;
    }

    #key {
        margin: 10px auto;
    }

</style>
