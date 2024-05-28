<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Using grammar to communicate 'Which one(s)?'"
    description="Using grammar to communicate 'Which one(s)?'"
/>

<div class="mb-3 mw-500">

    <img src="../img/edge-of-space.png" class="img-fluid mx-auto mb-0" alt="edge of space">

    <h1>Using grammar to communicate <i>'Which one(s)?'</i></h1>

    <div class="alert alert-danger font-italic">Many countries are spending a lot of money on space exploration in order to reach <span class="font-weight-bold text-danger">edge of</span> the universe.</div>

    <p>In English, nouns need some grammar in front of them in order to answer at least one of the following questions:</p>

    <ol>
        <li>Which one(s)?</li>
        <li>Whose?</li>
        <li>How many?</li>
    </ol>

    <p>So let’s apply these questions to each of the five nouns in our example and make sure we have the right grammar attached to the noun. Here’s the example with the nouns highlighted:</p>

    <div class="border rounded p-1">Many <b><i>countries</i></b> are spending a lot of <b><i>money</i></b> on space <b><i>exploration</i></b> in order to reach <b><i>edge</i></b> of the <b><i>universe</i></b>.</div>

    <h3>countries</h3>
    <div class="myGrid">
        <div>Which ones?</div><div>It doesn’t matter.</div>
        <div>Whose?</div><div>Doesn’t matter.</div>
        <div>How many?</div><div><b><i>many</i></b> answers this question. The number is not exact, but it doesn’t need to be exact. It’s enough to know that more than one country is being referred to.</div>
    </div>

    <p>So far, so good!</p>

    <h3>money</h3>
    <div class="myGrid">
        <div>Which?</div><div>It doesn’t matter.</div>
        <div>Whose?</div><div>We can assume the money is being spent by the countries.</div>
        <div>How much?</div><div><b><i>a lot of</i></b> serves the same function as <b><i>many</i></b>.</div>
    </div>

    <h3>exploration</h3>
    <div class="myGrid">
        <div>Which?</div><div>We don’t need any grammar to tell us which <b><i>exploration</i></b>. The word space already answers that question. We know that it's <b><i>space exploration</i></b>, and NOT <b><i>jungle exploration</i></b> or <b><i>ocean exploration</i></b>.</div>
        <div>Whose?</div><div>We can assume the countries.</div>
        <div>How much?</div><div>Not important at this stage.</div>
    </div>

    <h3>edge</h3>
    <div class="myGrid">
        <div>Which one?</div><div>There is some text immediately after <b><i>edge</i></b> that tells us exactly which edge - <b><i>the edge <span class="uli">of the universe</span></i></b> (NOT the edge <span class="uli">of the table</span>). However, if it’s clear to both writer and reader exactly which noun is being referred to then in English we have to use the definite article <b><i>the</i></b> in front of the noun. This was the grammatical error in the sentence - <span class="font-weight-bold text-danger">a missing 'the':</span> <b><i>the edge <span class="uli">of the universe</span></i></b>.</div>
        <div>Whose?</div><div>Irrelevant.</div>
        <div>How many?</div><div>Also irrelevant.</div>
    </div>

    <h3>universe</h3>
    <div class="myGrid">
        <div>Which one?</div><div>This is a special use of <b><i>the</i></b> to tell us which one - when there is only one in the writer and reader’s shared context of reference! (Like the moon, the kitchen, etc.)</div>
        <div>Whose?</div><div>Irrelevant, although it would make for an interesting philosophical discussion!</div>
        <div>How many?</div><div>Irrelevant, but also interesting from a scientific / philosophical perspective!</div>
    </div>

    <hr>

    <WithIcon icon="flag" position="right" msg="Indonesian students are generally clear about <b><i>whose</i></b> and <b><i>how many</i></b>. However, they often forget to use grammar to communicate <b><i>which one(s)</i></b>." />

    <hr>

    <p>Note that when a noun is followed by a preposition phrase (e.g. <i>of the universe</i>), that phrase usually tells exactly which noun you’re talking about. Next time you write a preposition phrase after a noun, especially one beginning <b><i>of</i></b>, think about using <b><i>the</i></b> in front of the noun!</p>

    <p>There is an idiom – <b><i>Close to the edge</i></b> whose idiomatic meaning is perhaps best communicated in the song <b>The Message</b> by <b>Grandmaster Flash</b>:</p>

    <div class="px-3 font-italic">
        Don’t push me, coz I’m close to the edge<br>
        I’m tryin’ not to lose my head<br>
        It’s like a jungle sometimes<br>
        It makes me wonder how I keep from goin' under
    </div>

    <p>You can listen to The Message <a href="https://www.youtube.com/watch?v=PobrSpMwKk4" target="_blank">here</a> and follow the lyrics, but be warned – it’s full of other less useful idioms!</p>

    <p>And while we’re talking about music, back in 1972 British prog rock band <b>Yes</b> made an album called <a href="https://www.youtube.com/watch?v=WRSugblInEY" target="_blank" class="font-weight-bold">Close to the edge</a>!</p>

</div>


<style>
h3 {
    margin-bottom: 5px;
}
ol {
    margin-top:0px;
}
    li {
        margin-bottom:5px;
    }
    .myGrid {
        display:grid;
        grid-template-columns: 110px 1fr;
        gap:7px;
    }
</style>
