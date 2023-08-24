<script>
    import { fade, scale } from "svelte/transition";
    let show = false;

    const showOriginal = () => {
        show = true;
    }

    document.title = "Article and/or 's'";
</script>

<div class="mb-3 mw-500">

    <h1>Article and/or 's'</h1>
<div class="alert">This post includes dangerous grammar rules! (There's also a writing practice task!)</div>

<p style="padding-top:0px;">For every noun you speak or write, you need to use grammar to communicate one of the meanings in the ‘meaning’ column in the table below.</p>
<p>When you’re trying to decide which article to use, and whether or not to add ‘s’, you must first of all decide:</p>

<ol>
 	<li>What <b><i>meaning</i></b> do I want to communicate?</li>
 	<li>Is the noun <b><i>countable</i></b> or <b><i>uncountable</i></b>?</li>
 	<li>If it’s countable is it <b><i>singular</i></b> or <b><i>plural</i></b>?</li>
</ol>
<p>Then you can choose an article and add ‘s’ accordingly.</p>

<table style="font-size:90%;" border="1" width="100%">
<tbody>
<tr>
<td>&nbsp;</td>
<td style="padding:3px;" valign="top"><b>meaning</b></td>
<td style="padding:3px;" valign="top"><b>singular</b></td>
<td style="padding:3px;" valign="top"><b>plural</b></td>
</tr>
<tr>
<td style="padding:3px;" rowspan="3" valign="top"><b>countable</b></td>
<td style="padding:3px;" valign="top">all of them everywhere</td>
<td style="background-color:black;">&nbsp;</td>
<td style="padding:3px;" valign="top">add ‘s’</td>
</tr>
<tr>
<td style="padding:3px;" valign="top">one of many<sup>1</sup></td>
<td style="padding:3px;" valign="top">a(n)</td>
<td style="padding:3px;" valign="top">add ‘s’</td>
</tr>
<tr>
<td style="padding:3px;" valign="top">this one exactly<sup>2</sup></td>
<td style="padding:3px;" valign="top">the</td>
<td style="padding:3px;" valign="top">the + add ‘s’</td>
</tr>
<tr>
<td style="padding:3px;" rowspan="3" valign="top"><b>uncountable</b></td>
<td style="padding:3px;" valign="top">all of it everywhere</td>
<td style="padding:3px;" colspan="2"  valign="top">no article</td>
</tr>
<tr>
<td style="padding:3px;" valign="top">some of much</td>
<td style="padding:3px;" colspan="2" valign="top">no article<sup>3</sup></td>
</tr>
<tr>
<td style="padding:3px;" valign="top">this exactly</td>
<td style="padding:3px;" colspan="2"  valign="top">the</td>
</tr>
</tbody>
</table>

<ol style="margin-top:15px;">
 	<li>Plural: ‘some of many’ - often with a different determiner, for example ‘several’, ‘various’, ‘certain’, ‘a number of’</li>
 	<li>Plural: ‘these exactly’</li>
 	<li>A determiner other than an article might be appropriate, for example ‘some’.</li>
</ol>

<h3>Practice</h3>

<p>All articles and plural 's' have been removed from the text below. Add articles and 's' into the text where you think they should appear, then click 'Compare with original!' for answers and analysis.</p>

{#if show}
    <div class="my-2 border rounded border-dark px-1 py-1" in:scale out:fade>Being found on social media is important to building a career, establishing a presence as an expert in your field, and keeping in touch. But sharing too much personal information online is always a mistake. Over-posting can be problematic, too, since it can make you appear unproductive. Having too little information in an online profile can be interpreted as trying to hide something or as a sign you aren’t well-established in a career or a community. The key, say experts, is striking the right balance.</div>
{/if}

<textarea class="form-control rounded p-1" rows="8">
Being found on social media is important to building career, establishing presence as expert in your field and keeping in touch. But sharing too much personal information online is always mistake. Over-posting can be problematic, too, since it can make you appear unproductive. Having too little information in online profile can be interpreted as trying to hide something or as sign you aren’t well-established in career or community. Key, say experts, is striking right balance.
</textarea>

<button class="btn my-1" on:click={showOriginal}>Compare with original</button>

</div>
