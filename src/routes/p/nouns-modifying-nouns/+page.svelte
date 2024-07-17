<script>
    import SvelteSeo from "svelte-seo"
    import {flagIndo} from '$lib/flags.js'
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
title="Nouns modifying nouns"
description="Showing that countable nouns that modify other nouns are always singular."
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,grammar,nouns" 
/> 

<div class="mw-500 mb-3">

    <h1>Nouns modifying nouns</h1>

    <div class="alert alert-danger font-italic">Zoos are good places for <span class="uli"><span class="font-weight-bold text-danger">animals</span> conservation.</span></div>

    <WithIcon icon="warning">
        <div slot="html">When a noun <b><i>modifies</i></b> another noun you need to think about the grammar of each noun. The following dialogue explains all.</div>
    </WithIcon>

    <div id="dialogue" class="pt-2" style="margin-top:20px;">

    <div class="left">
        <div>This is an example of a noun (animal) <b>pre-modifying</b> another noun (conservation).</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>Say what?!</div>
    </div>

    <div class="left">
        <div>Well, sometimes we have to consider how nouns function within a larger noun phrase.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>Come again?!</div>
    </div>

    <div class="left">
        <div>Well, <b>animal</b> is a noun, and <b>conservation</b> is a noun, but together they form a noun phrase: <b>animal conservation</b>.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>So what's the problem then?</div>
    </div>

    <div class="left">
        <div>Well, in this example, the <b>main noun</b> is conservation.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>What do you mean <b>main noun</b>?</div>
    </div>

    <div class="left">
        <div>Well, in this example, are you saying that zoos are good for animals or good for conservation?</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>For.. conservation!</div>
    </div>

    <div class="left">
        <div>Right, so conservation is the <b>main noun</b>.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>I see, so what's wrong with animals?</div>
    </div>

    <div class="left">
        <div>OK, well in the example animals is pre-modifying conservation. 'Pre' means 'before' - the word <b>animals</b> comes before the word <b>conservation</b>, right?</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>Wait. Did you say <b>modifying</b>? What's that?!</div>
    </div>

    <div class="left">
        <div>Well, the word animals changes (modifies) the word conservation - it tells us exactly what kind of conservation.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>OK. But I still don't see what is wrong with the original sentence.</div>
    </div>

    <div class="left">
        <div>The problem is.. If you use a countable noun to pre-modify another noun, then that <b>modifying noun</b> (in this case animal) must be singular.</div>
        <div>&nbsp;</div>
    </div>

    <div class="right">
        <div>&nbsp;</div>
        <div>I see. Like <b>computer scientist</b>?</div>
    </div>

    <div class="left">
        <div>Correct!</div>
        <div>&nbsp;</div>
    </div>

    </div>

</div>


<style>
#dialogue {
    border:1px solid #bbbbbb;
    border-radius:10px;
    padding:10px 20px;;
}
.left,.right {
    display:grid;
    gap: 10px;
    margin: 20px auto;
    font-style: italic;
}
.left {
    grid-template-columns: 3fr 1fr;
}
.right {
    grid-template-columns: 1fr 3fr;
}
.right div {
    text-align:right;
    
}
</style>
