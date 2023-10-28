<script>
    import SvelteSeo from "svelte-seo"
    import { Headphones } from "svelte-bootstrap-icons";
    import { onMount } from 'svelte';

    let audio,id;
    let src = '';

    onMount(() => {
		audio = document.getElementById('myAudio');
	});

    const playAudio = () => {
        audio.src = src;
        audio.play();
    }

    const doSound = (e) => {
        id = e.target.id.replace(/S/,'');
        src = '/audio/phonemes/' + id + '.mp3';
        console.log("src: " + src);
        playAudio();
    }

</script>

<SvelteSeo
title="Phonemic Alphabet"
description="The phonemic alphabet - with sound!"
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,phonology,pronunciation,phonemic script,phonemic alphabet",
 /> 

<audio controls="" id="myAudio" style="display:none;">
    <source src="#">
</audio>

<div class="container mx-auto mb-3" style="max-width:500px;">

    <h1 class="mb-1">Phonemic Alphabet <Headphones height={34} width={34} fill="var(--dark)" /></h1>
    <p class="mt-0 mb-3">Click (or tap) <b><i>phonemes</i></b> to hear what they sound like.</p>

    <div class="row-top">
        <div class="container vowels">
            <div id="S1" class="sound" on:click={doSound}>&#105;&#720;</div>
            <div id="S2" class="sound" on:click={doSound}>&#618;</div>
            <div id="S3" class="sound" on:click={doSound}>&#650;</div>
            <div id="S4" class="sound" on:click={doSound}>&#117;&#720;</div>
            <div id="S5" class="sound" on:click={doSound}>&#101;</div>
            <div id="S6" class="sound" on:click={doSound}>&#601;</div>
            <div id="S7" class="sound" on:click={doSound}>&#604;&#720;</div>
            <div id="S8" class="sound" on:click={doSound}>&#596;&#720;</div>
            <div id="S9" class="sound" on:click={doSound}>&#230;</div>
            <div id="S10" class="sound" on:click={doSound}>&#652;</div>
            <div id="S11" class="sound" on:click={doSound}>&#593;&#720;</div>
            <div id="S12" class="sound" on:click={doSound}>&#594;</div>
        </div>
        <div class="container diphthongs">
            <div id="S13" class="sound" on:click={doSound}>&#618;&#601;</div>
            <div id="S14" class="sound" on:click={doSound}>&#101;&#618;</div>
            <div class="rounded">&nbsp;</div>
            <div id="S15" class="sound" on:click={doSound}>&#650;&#601;</div>
            <div id="S16" class="sound" on:click={doSound}>&#596;&#618;</div>
            <div id="S17" class="sound" on:click={doSound}>&#601;&#650;</div>
            <div id="S18" class="sound" on:click={doSound}>&#101;&#601;</div>
            <div id="S19" class="sound" on:click={doSound}>&#97;&#618;</div>
            <div id="S20" class="sound" on:click={doSound}>&#97;&#650;</div>
        </div>
    </div>

    <div class="row-bottom consonants mb-3">
        <div id="S21" class="sound" on:click={doSound}>&#112;</div>
        <div id="S22" class="sound" on:click={doSound}>&#98;</div>
        <div id="S23" class="sound" on:click={doSound}>&#116;</div>
        <div id="S24" class="sound" on:click={doSound}>&#100;</div>
        <div id="S25" class="sound" on:click={doSound}>&#116;&#643;</div>
        <div id="S26" class="sound" on:click={doSound}>&#100;&#658;</div>
        <div id="S27" class="sound" on:click={doSound}>&#107;</div>
        <div id="S28" class="sound" on:click={doSound}>&#609;</div>
        <div id="S29" class="sound" on:click={doSound}>&#102;</div>
        <div id="S30" class="sound" on:click={doSound}>&#118;</div>
        <div id="S31" class="sound" on:click={doSound}>&#952;</div>
        <div id="S32" class="sound" on:click={doSound}>&#240;</div>
        <div id="S33" class="sound" on:click={doSound}>&#115;</div>
        <div id="S34" class="sound" on:click={doSound}>&#122;</div>
        <div id="S35" class="sound" on:click={doSound}>&#643;</div>
        <div id="S36" class="sound" on:click={doSound}>&#658;</div>
        <div id="S37" class="sound" on:click={doSound}>&#109;</div>
        <div id="S38" class="sound" on:click={doSound}>&#110;</div>
        <div id="S39" class="sound" on:click={doSound}>&#331;</div>
        <div id="S40" class="sound" on:click={doSound}>&#104;</div>
        <div id="S41" class="sound" on:click={doSound}>&#108;</div>
        <div id="S42" class="sound" on:click={doSound}>&#114;</div>
        <div id="S43" class="sound" on:click={doSound}>&#119;</div>
        <div id="S44" class="sound" on:click={doSound}>&#106;</div>
    </div>

</div>


<style>

    body {
        background: #2E4052;
        color: #FDFFF7;
    }

    .sound {
        display:flex;
        justify-content:center;
        align-items:center;
        border-radius:5px;
        height:50px;
        cursor:pointer;
        font-family:Times New Roman;
        font-size:2rem;

    }
    .row-top {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:10px;
        margin-bottom:10px;
    }
    .row-top .vowels {
        display:grid;
        grid-template-columns: repeat(4,1fr);
        gap:10px;
    }
    .row-top .diphthongs {
        display:grid;
        grid-template-columns: repeat(3,1fr);
        gap:10px;
    }
    .row-bottom {
        display:grid;
        grid-template-columns: repeat(8,1fr);
        gap:10px;
    }

    .vowels .sound {
        border:1px solid red;
    }

    .vowels .sound:hover {
        background:red;
        color:white;
    }

    .diphthongs .sound {
        border:1px solid blue;
    }

    .diphthongs .sound:hover {
        background:blue;
        color:white;
    }

    .consonants .sound {
        border:1px solid green;
    }

    .consonants .sound:hover {
        background:green;
        color:white;
    }

</style>

