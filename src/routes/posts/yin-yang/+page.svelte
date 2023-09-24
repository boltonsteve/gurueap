<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'  
</script>

<SvelteSeo
title="Nominalisation Yin and 'Yang'"
description="Advising Indonesian candidates to avoid relative clauses as a means to postmodify a noun, and thereby avoid error."
keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,nominalisation,first language interference" 
/> 

<div class="mw-500 mb-3">

    <h1>Nominalisation Yin and 'Yang'</h1>

    <div class="my-mini-grid">
        <div>You can easily avoid relative clauses when you're post-modifying nouns. This is especially useful in IELTS Task 1 writing where you have to modify a statistics word (number, amount, etc.) to include information from the axes of a graph, or from the labels attached to a chart, or from the column and row headings of a table.</div>
        <div class="my-right"><img src="/img/yin-yang-nominalisation.png" class="img-fluid" alt="yin yang"></div>
    </div>

    <WithIcon icon="flag">
        <div slot="html">Here I want to appeal to Indonesian students to think again before translating <b><i>yang</i></b> when post-modifying nouns.</div>
    </WithIcon>

    <p>Let's compare a few sentences written by Indonesian students with their likely equivalents written by native English speakers:</p>

    <div class="my-grid">
        <div>Modified noun</div>
        <div><b><i>picture</i></b></div>
        <div>Student sentence with error</div>
        <div>The <b><i>picture</i></b> <span class="font-weight-bold text-danger">that</span> on the wall is from Australia.</div>
        <div>Student sentence without error</div>
        <div>The <b><i>picture</i></b> <span class="font-weight-bold text-success">that is</span> on the wall is from Australia.</div>
        <div>Native speaker</div>
        <div>The <b><i>picture</i></b> <span class="uli">on the wall</span> is from Australia.</div>
        <div>Strategy used</div>
        <div><span class="uli">preposition phrase</span> to post-modify the noun</div>
    </div>

    <div class="my-grid">
        <div>Modified noun</div>
        <div><b><i>person</i></b></div>
        <div>Student sentence with error</div>
        <div>The <b><i>person</i></b> <span class="font-weight-bold text-danger">who teach</span> us is PG.</div>
        <div>Student sentence without error</div>
        <div>The <b><i>person</i></b> <span class="font-weight-bold text-success">who is teaching</span> us is PG.</div>
        <div>Native speaker</div>
        <div>The <b><i>person</i></b> <span class="uli">teaching</span> us is PG.</div>
        <div>Strategy used</div>
        <div><span class="uli">___ing</span> to to post-modify the noun</div>
    </div>

    <div class="my-grid">
        <div>Modified noun</div>
        <div><b><i>department store</i></b></div>
        <div>Student sentence with error</div>
        <div>The <b><i>department store</i></b> <span class="font-weight-bold text-danger">that located</span> in Bridge Street is SOGO.</div>
        <div>Student sentence without error</div>
        <div>The <b><i>department store</i></b> <span class="font-weight-bold text-success">that is located</span> in Bridge Street is SOGO.</div>
        <div>Native speaker</div>
        <div>The <b><i>department store</i></b> <span class="font-weight-bold text-success uli">located</span> in Bridge Street is SOGO.</div>
        <div>Strategy used</div>
        <div><span class="uli">V3</span> to post-modify the noun</div>
    </div>

    <p>In these examples I used three very useful strategies to post-modify nouns:</p>

	<ul class="lh-15">
	    <li>preposition phrases</li>
	    <li>___ing</li>
	    <li>V3</li>
	</ul>

    <WithIcon icon="flag">
        <div slot="html">Notice that when you avoid the relative pronoun <b><i>that</i></b> (YANG!), then you also avoid a common error made by Indonesian students - not adding the verb <b><i>to be</i></b> to the relative clause.</div>
    </WithIcon>

    <p>Try using these strategies instead of relative clauses and see how it increases your score for vocabulary in IELTS writing and speaking!</p>

</div>

<style>
    .my-mini-grid {
        display:grid;
        grid-template-columns:4fr 1fr;
        gap:10px;
    }

    .my-right {
        display:flex;
        justify-content: center;
        align-items: start;
    }

    .my-grid {
        border:1px solid #bbbbbb;
        border-radius:5px;
        padding:20px 10px;
        margin-bottom:20px;
        display:grid;
        grid-template-columns:1fr 2fr;
        gap:20px;
    }

</style>
