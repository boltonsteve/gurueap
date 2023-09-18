<script>
    import SvelteSeo from "svelte-seo"
    import { fade, scale } from "svelte/transition";
    let show = false;

    const showOriginal = () => {
        show = true;
    }

</script>

<SvelteSeo
    title="Articles - General Rules",
    description="A system for determining whether or not an article is needed with a noun and which article (and/or 's') is needed."
/>

<div class="mb-3 mw-500">

    <h1>Article and/or 's'</h1>

    <div class="alert alert-danger">This post includes grammar rules!<br>There's also a writing practice task.</div>

<p style="padding-top:0px;">For every noun you speak or write, you need to use grammar to communicate one of the meanings in the ‘meaning’ column in the table below.</p>
<p>When you’re trying to decide which article to use, and whether or not to add ‘s’, you must first of all decide:</p>

<ol class="lh-15">
 	<li>What <b><i>meaning</i></b> do I want to communicate?</li>
 	<li>Is the noun <b><i>countable</i></b> or <b><i>uncountable</i></b>?</li>
 	<li>If it’s countable is it <b><i>singular</i></b> or <b><i>plural</i></b>?</li>
</ol>
<p>Then you can choose an article and/or add ‘s’ accordingly.</p>

<div class="articles-grid">

    <div>&nbsp;</div>
    <div class="font-weight-bold">meaning</div>
    <div class="font-weight-bold">singular</div>
    <div class="font-weight-bold">plural</div>

    <div class="font-weight-bold">countable</div>
    <div>all of them everywhere</div>
    <div style="background:black;">&nbsp;</div>
    <div>add 's'</div>

    <div>&nbsp;</div>
    <div>one of many<sup>1</sup></div>
    <div>a(n)</div>
    <div>add 's'</div>

    <div>&nbsp;</div>
    <div>this one exactly<sup>2</sup></div>
    <div>the</div>
    <div>the + add 's'</div>

    <div class="font-weight-bold">uncountable</div>
    <div>all of it everywhere</div>
    <div>no article</div>
    <div>&nbsp;</div>

    <div>&nbsp;</div>
    <div>some of much</div>
    <div>no article<sup>3</sup></div>
    <div>&nbsp;</div>

    <div>&nbsp;</div>
    <div>this exactly</div>
    <div>the</div>
    <div>&nbsp;</div>

</div>

<ol class="lh-15 small" style="margin-top:15px;">
 	<li>Plural: <b><i>some of many</i></b> - often with a different determiner, for example <i>several</i>, <i>various</i>, <i>certain</i>, <i>a number of</i></li>
 	<li>Plural: <b><i>these exactly</i></b></li>
 	<li>A determiner other than an article might be appropriate, for example <i>some</i>.</li>
</ol>

<h3 class="mb-0">Practice</h3>
<p class="mt-0">All articles and plural 's' have been removed from the text below. Add articles and 's' into the text where you think they should appear, then click 'Compare with original!' for answers and analysis.</p>

{#if show}
    <div class="my-2 border rounded border-dark px-1 py-1" in:scale out:fade>Being found on social media is important to building <b><i>a</i></b> career, establishing <b><i>a</i></b> presence as <b><i>an</i></b> expert in your field, and keeping in touch. But sharing too much personal information online is always <b><i>a</i></b> mistake. Over-posting can be problematic, too, since it can make you appear unproductive. Having too little information in <b><i>an</i></b> online profile can be interpreted as trying to hide something or as <b><i>a</i></b> sign you aren’t well-established in <b><i>a</i></b> career or <b><i>a</i></b> community. <b><i>The</i></b> key, say experts, is striking <b><i>the</i></b> right balance.</div>
{/if}

<textarea class="form-control rounded p-1" rows="8">Being found on social media is important to building career, establishing presence as expert in your field and keeping in touch. But sharing too much personal information online is always mistake. Over-posting can be problematic, too, since it can make you appear unproductive. Having too little information in online profile can be interpreted as trying to hide something or as sign you aren’t well-established in career or community. Key, say experts, is striking right balance.</textarea>

<button class="btn my-1 mx-auto" on:click={showOriginal}>Compare with original</button>

</div>


<style>
    .articles-grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr 1fr;
        gap:0px;
    }
    .articles-grid div {
        border-bottom:1px solid #bbbbbb;
        padding:5px;
    }
    sup {
        font-weight: bold;
    }
</style>
