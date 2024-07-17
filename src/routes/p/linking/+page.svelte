<script>
import { onMount } from 'svelte';
import SvelteSeo from "svelte-seo"
import Modal from '../../components/Modal.svelte'

let oc,ct,ot;
//let type = 'Elision',
//let type = 'Liaison',
//let type = 'Assimilation',
//let type = 'Juncture',
let type = 'Highlight all links';
let the_id = '';
let input = '';
let output = '';
let modalBody = '';

let showModal = false;
const toggleModal = () => {
    showModal = !showModal;
}

onMount(() => {
    modalBody = document.getElementById('modal').innerHTML;
});

function elision() {
    ot = '<span class="text-danger font-weight-bold font-italic">';
    ct = '</span>';
    // next please, I don’t know, post the letter, old man, you and me, stand there, clean nails, ripe pear, big gun	
    output = output.replace(/(g|^ed|th?|pe)\s(n|th|g|p|kn)/gi, ot + "_ " + ct + "$2")
    .replace(/([aiu]ce)d\s([b])/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(s)k(ed)?\s([t])/gi, "$1" + ot + "_ " + ct + "$3")
    .replace(/(n)g\s([bdfjlmprstvwxyz])/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(n)\s(n)/gi, ot + "_ " + ct + "$2")
    .replace(/(me?)\s(m)/gi, ot + "_ " + ct + "$2")
    .replace(/(n)t\s(y)/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(c)t\s(m)/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(s)\s(s)/gi, ot + "_ " + ct + "$2")
    .replace(/(s)k\s([d])/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(te?)\s(t)/gi, ot + "_ " + ct + "$2")
    .replace(/^.(d)\s(l)/gi, ot + "_ " + ct + "$2")
    .replace(/(ed)\s(r|s)/gi, ot + "_ " + ct + "$2")
    .replace(/(med)\s(m)/gi, "m" + ot + "_ " + ct + "$2")
    .replace(/(n)d\s([bcdfghjklmnprstvwyz])/gi, "$1" + ot + "_ " + ct + "$2")
    .replace(/(x?)t\s([bp])/gi, "$1" + ot + "_ " + ct + "$2"); // (x)t - p
}

function assimilation() {
    ot = '<span class="text-primary font-weight-bold font-italic">';
    ct = '</span>';
    output = output.replace(/(nd?)\s(m|b)/g, ot + "m" + ct + " $2")
    .replace(/(nd?t?)\s(p|m)/g, ot + "m" + ct + " $2")
    .replace(/(o)(f)\s(m|p)/g, "$1" + ot + "b" + ct + " $3")
    .replace(/(c)\s(b|m|p|w)/g, ot + "p" + ct + " $2")
    .replace(/(t)\s(c)/g, ot + "k" + ct + " $2")
    .replace(/([aeiou])(t)\s(w)/g, "$1" + ot + "p" + ct + " $3")
    .replace(/(t)\s(d)/g, ot + "d" + ct + " $2")
    .replace(/(ng)\s(d)/g, "n" + ot + "d" + ct + " $2")
    .replace(/(^me)(d)\s(m)/g, ot + "b" + ct + " $3")
    .replace(/(d)\s(p)/g, ot + "b" + ct + " $2")
    .replace(/(s)\s(sh)/g, ot + "sh" + ct + " $2")
    .replace(/e(d)\s(b)/g, ot + "$2 " + ct + " $2")
    .replace(/(i)(te)\s(m)/g, "$1" + ot + "pe " + ct + " $3")
    .replace(/(n)\s(g)/g, ot + "ng" + ct + " $2");
}

function liaison() {
    ot = '<span class="text-success font-weight-bold font-italic">';
    ct = '</span>';
    output = output
    .replace(/(y|ie|ee|igh)\s([aeiou])/g, "$1 " + ot + "y" + ct + "$2")
    .replace(/([BCDEGIJKPTVY])\b\s([aeiou])/g, "$1 " + ot + "y" + ct + "$2")
    .replace(/(\bthe)\s([aeiou])/gi, "$1 " + ot + "y" + ct + "$2")
    .replace(/(\bb)([ey])\s([aeiou])/gi, "$1$2 " + ot + "y" + ct + "$3")
    .replace(/(who|o[w?u?]|to|[^cgrt]ough|through|where)\s([aeiou]|one)/gi, "$1 " + ot + "w" + ct + "$2")
    .replace(/(no)\s([aeiou])/gi, "$1 " + ot + "w" + ct + "$2")
    .replace(/(aw|[aeiouy]re?|re|a)\s([aeiu]|o[^ne])/gi, "$1 " + ot + "r" + ct + "$2");
}

function juncture() {
    ot = '<span class="text-warning font-weight-bold font-italic">';
    ct = '</span>';
    output = output
    .replace(/([aeiou])(bb|ll|rr|nn)ed\s([aeiou])/g, "$1$2$3 " + ot + "d" + ct + "$4")
    .replace(/([aeiou][cs]+e)(d)\s([aeiou])/g, "$1 " + ot + "t" + ct + "$3")
    .replace(/([aeiou][r]+e)(d)\s([aeiou])/g, "$1 " + ot + "d" + ct + "$3")
    .replace(/([sl]?t)(ed|ied)\s([aeiou])/g, "$1 " + ot + "ti d" + ct + "$3")
    .replace(/(l)e\s([aeiou])/g, ot + " l" + ct + "$2")
    .replace(/([aeioun])(ce)\s([aeiou])/g, "$1 " + ot + "s" + ct + "$3")
    .replace(/(c|d|f|ch|p|ge|ll)\s([aeiou])/g, ot + " $1" + ct + "$2")
    .replace(/(th)e\s([aeiou])/g, ot + " $1" + ct + "$2")
    .replace(/([st])\s(h)/g, ot + " $1" + ct)
    .replace(/(s)(k)\s([aeiou])/g, "$1 " + ot + " $2" + ct + "$3")
    .replace(/([blmrt]h?)?([\W]s)\s([aeiou])/g, "$1 " + ot + " $2" + ct + "$3")
    .replace(/(th|r|w)(s)\s([aeiou])/g, "$1 " + ot + " $2" + ct + "$3")
    .replace(/(d)(s)\s([aeiou])/g, ot + " $2" + ct + "$3")
    .replace(/(th)\sh([aeiou])/g, ot + " $1" + ct + "$2")
    .replace(/dded\s([aeiou])/g, ot + " di d" + ct + "$1")
    .replace(/([aeiouy])([n])\s([aeiou])/gi, "$1 " + ot + "$2" + ct + "$3")
    .replace(/([aeiouy])(l)e\s([aeiou])/g, "$1 " + ot + "$2" + ct + "$3")
    .replace(/([aeiou])rried\s([aeiou])/g, "$1 " + ot + " ri d" + ct + "$2")
    .replace(/([aeiou]?)(th|ng|m|t)\s(\W?[aeiou])/gi, "$1 " + ot + " $2" + ct + "$3")
    .replace(/([ckntaeiou])s\s([aeiou])/g, "$1" + ot + " s" + ct + "$2")
    .replace(/(ss)\s([aeiou])/g, ot + " $1" + ct + "$2")
    .replace(/([n])d\s([aeiou])/gi, "$1" + ot + " d" + ct + "$2")
    .replace(/([aeiou]d?)(n|s)\s([aeiou])(^ne\b)/g, "$1 " + ot + " $2" + ct + "$3")
    .replace(/([aeiou])(c)(s)(\W?)\s([aeiou])/g, "$1$2$4" + ot + " $3" + ct + "$5")
    .replace(/([aeiou]i?)([l])\s([aeiou])/gi, "$1 " + ot + "$2" + ct + "$3")
    .replace(/([aeiou])([bdfklmnptvwz])e\s([aeiou])/g, "$1 " + ot + "$2" + ct + "$3")
    .replace(/([aeiou])(v)e\s([aeiou])/g, "$1 " + ot + "$2" + ct + "$3")
    .replace(/([aeiuo]r?)[cs]e\s([aeiou])/gi, "$1 " + ot + "s" + ct + "$2") // move and change to 's'
    .replace(/([aeiou])ge\s([aeiou])/gi, "$1 " + ot + "j" + ct + "$2") // move and change to 'j'
    .replace(/([aeiouy])pe\s([aeiou])/gi, "$1 " + ot + "p" + ct + "$2") // move and change to 'j'
    .replace(/([aeiuo])xe?\s([aeiou])/gi, "$1k " + ot + "s" + ct + "$2") // move and change to 'k & s'
    .replace(/([aeiou])(c|dg|ch)es\s([aeiou])/gi, "$1 " + ot + "$2iz " + ct + "$3"); // move and change to 'c'
}

function update_output() {

    input = document.getElementById('input').value;
    output = input;
    output = output.replace(/\n\n/, "<br><br>")

    switch(type) {
        case 'Elision':
            elision();
            break;
        case 'Assimilation':
            assimilation();
            break;
        case 'Liaison':
            liaison();
            break;
        case 'Juncture':
            juncture();
            break;
        case 'Highlight all links':
            assimilation();
            elision();
            liaison();
            juncture();
            break;
        default:
        // code block

    }

    document.getElementById('output').innerHTML = output;

}

const linkType = (e) => {
    let id = e.target.id;
    type = e.target.textContent;
    updateOutput();
    console.log(type);
}

const clearInput = () => {
    console.log('Clearing input..');
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
    document.getElementById('output').textContent = '';
}

const updateOutput = () => {
    update_output();
}

</script>

<SvelteSeo
    title="Linkin' Text"
    description="App that highlights four types of linking in English pronunciation."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,pronunciation,linking"
 />

<div id="modal" style="display:none;">
    <p>Native English speakers use the following 4 strategies to link words together when they speak.</p>
    <p class="text-dark mb-0">Removing a sound - <span class="text-danger font-weight-bold font-italic">Elision</span></p>
    <ul>
        <li>
            <b><i>fast car</i></b> becomes <b><i>fas<span class="text-danger">_</span> car</i></b>
        </li>
    </ul>
    <p class="text-dark mb-0">Changing a sound - <span class="text-primary font-weight-bold font-italic">Assimilation</span></p>
    <ul>
        <li>
            <b><i>that man</i></b> becomes <b><i>tha<span class="text-primary">p</span> man</i></b>
        </li>
    </ul>
    <p class="text-dark mb-0">Adding a sound - <span class="text-success font-weight-bold font-italic">Liaison</span></p>
    <ul>
        <li>
            <b><i>two apples</i></b> becomes <b><i>two <span class="text-success">w</span>apples</i></b>
        </li>
    </ul>
    <p class="text-dark mb-0">Moving a sound - <span class="text-warning font-weight-bold font-italic">Juncture</span></p>
    <ul>
        <li>
            <b><i>not at all</i></b> becomes <b><i>no <span class="text-warning">t</span>a <span class="text-warning">t</span>all</i></b>
        </li>
    </ul>
</div>

<Modal {showModal} msg={modalBody} on:click={toggleModal} />

<div class="container">

    <h1>Pronunciation: Linking Strategies</h1>

    <div class="flex2">
        <div class="lead">When listening to an English native speaker, do you sometimes find it difficult to hear where one word ends and another begins?</div>
        <div>It's probably because native speakers join or link words when they speak so that it's easier to speak quickly. And to achieve this linking they may have to remove sounds, modify sounds, add sounds or move sounds. For an explanation of the 4 linking strategies, <a href="#" on:click={toggleModal}>click here</a>.</div>
    </div>

    <div class="my-flex my-2">
        <button id="btn-danger" class="btn btn-outline-danger btn-block link-type" title="Removing a sound" on:click={linkType}>Elision</button>
        <button id="btn-primary" class="btn btn-outline-primary link-type" on:click={linkType}>Assimilation</button>
        <button id="btn-success" class="btn btn-outline-success link-type" on:click={linkType}>Liaison</button>
        <button id="btn-warning" class="btn btn-outline-warning link-type" on:click={linkType}>Juncture</button>

        <button class="btn btn-outline-dark clear-input" on:click={clearInput}>Clear input</button>
        <button id="btn-dark" class="btn btn-outline-dark link-type" on:click={linkType}>Highlight all links</button>
    </div>

    <div class="grid-tboxes">
        <div>
            <textarea id="input" class="form-control border border-secondary rounded" style="height:250px;" on:input={updateOutput}>For a visualisation of spoken linking, type or paste text into this box and your text will appear with links in the next box. Use the buttons to focus on individual linking strategies. Click 'Clear input' to empty this box!
            </textarea>
        </div>
        <div id="output" class="border border-secondary rounded" style="height:250px;overflow:auto;"></div>
    </div>

</div>

<style>
    /* div { */
    /*     border: 1px solid red; */
    /* } */
    .my-flex {
        display:flex;
        flex-wrap:wrap;
        justify-content:space-around;
        gap:10px;
    }
    .flex2, .grid-tboxes {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:20px;
    }
    .container {
        max-width:800px;
        margin:0px auto;
    }
    a:hover {
        text-decoration:none;
    }
    span {
        font-size: 1.1em;
    }
    @media (max-width: 480px) {
    /* @media screen and (min-width: 480px) { */
        .flex2 {
            display:grid;
            grid-template-columns: 1fr;
        }
    }
</style>

