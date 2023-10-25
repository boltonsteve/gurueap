<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'

    let calculation = 'calculation here';
    let help = 'help here';
    let help_msg = '';
    let help_msg_header = '';
    let help_example = '';
    let help_explanation = '';

    // Svelte
    let cActive = false;
    let sActive = true;
    let pActive = true;
    let tActive = false;
    let oActive = false;
    let aActive = false;

    let labelCountable = 'countable';
    let labelSingular = 'uncountable';
    let labelPlural = 'uncountable';
    let countable = false;

    const doCountUncount = () => {

        labelCountable = countable ? 'countable' : 'uncountable';
        countable = !countable;

        if(countable) {
            labelSingular = 'singular';
            labelPlural = 'plural';
            sActive = true;
            pActive = false;
        } else {
            labelSingular = 'uncountable';
            labelPlural = 'uncountable';
            sActive = true;
            pActive = true;
        }
    }

    const doSingular = () => {
        if(countable) {
            sActive = true;
            pActive = false;
        }
    }

    const doPlural = () => {
        if(countable) {
            sActive = false;
            pActive = true;
        }
    }
    
    const doDefinite = () => {
        tActive = true;
        oActive = false;
        aActive = false;
        calculate();
    }
    
    const doIndefinite = () => {
        tActive = false;
        oActive = true;
        aActive = false;
    }
    
    const doAll = () => {
        tActive = false;
        oActive = false;
        aActive = true;
    }

    const calculate = () => {
    
        if(!countable && tActive) {
            calculation = 'the, don\'t pluralise';
            help_msg = 'Both reader and writer are referring to <span class="hl1">exactly the same</span> <span class="hl2">uncountable stuff</span>';
            help_example = '<span class="hl1">The</span> <span class="hl2">rice</span> <span class="hl1">sold in America</span> is imported from Thailand.';
            help_explanation = '<span class="hl1">Sold in America</span> restricts the meaning of <span class="hl2">rice</span> to <span class="hl1">this</span> <span class="hl2">rice</span> <span class="hl1">exactly</span>.';
        }

    }

    calculate();

/*     } else if(checker(['indefinite','uncountable'], actives) && actives.length == 2) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring <span class="hl1">generic</span> <span class="hl2">uncountable stuff</span>'; */
/*         help_example = '<span class="hl2">Rice</span> is <span class="hl1">a</span> rich source of carbohydrate.'; */
/*         help_explanation = 'We <span class="hl1">don\'t know exactly</span> what kind of <span class="hl2">rice</span>, or where it comes from.'; */

/*     } else if(checker(['all','uncountable'], actives) && actives.length == 2) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">all</span> of this <span class="hl2">uncountable stuff</span>, <span class="hl1">everywhere</span>'; */
/*         help_example = '<span class="hl2">Water</span> is essential for survival!'; */
/*         help_explanation = '<span class="hl1">All</span> <span class="hl2">water</span>. There is no <span class="hl2">water</span> that doesn\'t help us to survive.'; */
/*         // */

/*     } else if(checker(['definite','singular'], actives) && actives.length == 2) { */
/*         advice = 'the, don\'t pluralise'; */
/*         help_msg = 'Both reader and writer are referring to <span class="hl1">exactly the same</span> <span class="hl2">countable thing</span>'; */
/*         help_example = 'Bill works in <span class="hl2">the</span> <span class="hl3">education</span> <span class="hl2">sector</span>.'; */
/*         help_explanation = '<span class="hl3">Education</span> restricts the meaning of <span class="hl2">sector</span> to <span class="hl1">this</span> sector <span class="hl1">exactly</span> (= definite).'; */
/*         // */
    
/*     } else if(checker(['definite','plural'], actives) && actives.length == 2) { */
/*         advice = 'the, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl2">exactly the same</span> <span class="hl3">things</span>'; */
/*         help_example = '<span class="hl2">The</span> <span class="hl3">trees</span> <span class="hl1">in Bill\'s garden</span> look lovely.'; */
/*         help_explanation = '<span class="hl1">In Bill\'s garden</span> tells us <span class="hl2">these</span> <span class="hl3">trees</span> <span class="hl2">exactly</span>.'; */
/*         // */

/*     } else if(checker(['indefinite','singular'], actives) && actives.length == 2) { */
/*         advice = 'a/an, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to a <span class="hl1">generic</span> thing'; */
/*         help_example = 'Let\'s have <span class="hl1">a</span> cup of tea!'; */
/*         help_explanation = '<span class="hl1">We don\'t know what kind</span> of tea, or <span class="hl1">what kind</span> of cup, etc.'; */
/*         // */

/*     } else if(checker(['indefinite','plural'], actives) && actives.length == 2) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl">generic</span> things'; */
/*         help_example = '<span class="hl1">Motorcycles</span> are dangerous, although <span class="hl2">Harley Davidson motorcycles</span> are equipped with special safety features.'; */
/*         help_explanation = 'We might be talking about <span class="hl1">all motorcycles everywhere</span>, or <span class="hl2">some motorcycles</span>.'; */
/*         // */

/*     } else if(checker(['all','plural'], actives) && actives.length == 2) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to all examples of the same countable thing'; */
/*         help_example = '<span class="hj">Cow</span><span class="hl1">s</span> eat grass.'; */
/*         help_explanation = '<span class="hl1">All cows everywhere</span> eat grass!'; */
/*         // */

/*     } else if(checker(['possessive','definite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer know <span class="hl1">exactly</span> which <span class="hl2">uncountable stuff</span> is being referred to'; */
/*         help_example = 'Oh no. Someone has drunk <span class="hl1">my</span> <span class="hl2">wine</span>!'; */
/*         help_explanation = '<span class="hl1">Possessives</span> already communicate <span class="hl1">this exactly</span>, and so we don\'t need to use <span class="hl1">the</span>.'; */
/*         // */

/*     } else if(checker(['demonstrative','definite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer know <span class="hl1">exactly which</span> <span class="hl2">uncountable stuff</span> is being referred to'; */
/*         help_example = 'Excuse me, waiter. <span class="hl1">This</span> <span class="hl2">food</span> is cold!'; */
/*         help_explanation = '<span class="hl1">Demonstratives</span> already communicate <span class="hl1">this exactly</span>, and so we don\'t need to use <span class="hl1">the</span>.'; */
/*         // */

/*     } else if(checker(['quantifier','definite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> <span class="hl2">uncountable stuff</span>'; */
/*         help_example = '<span class="hl1">That much</span> <span class="hl2">wine</span> will probably give you a headache.'; */
/*         help_explanation = 'This is quite rare. We assume that writer and reader are both aware of <span class="hl1">the quantity</span> of the <span class="hl2">wine</span>.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','indefinite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> <span class="hl2">uncountable stuff</span>.'; */
/*         help_example = 'Hey! That\'s <span class="hl1">my</span> <span class="hl2">beer</span> you\'re drinking!'; */
/*         help_explanation = '<span class="hl1">Possessives</span> always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['demonstrative','indefinite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to exactly the same uncountable stuff'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Demonstratives always imply <span class="hl1">definite</span> reference, and so there is no need for <span class="hl1">the</span>.'; */
/*         // */
/*     } else if(checker(['quantifier','indefinite','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are <span class="hl1">not</span> referring to <span class="hl1">exactly the same</span> <span class="hl2">uncountable stuff</span>.'; */
/*         help_example = 'There\'s still <span class="hl1">a little</span> <span class="hl2">water</span> left in the bottle'; */
/*         help_explanation = 'Unless writer and reader both look at the bottle and measure the amount of water, they will have different impressions of the water.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','indefinite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> countable things'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Possessives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['demonstrative','indefinite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> countable things'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Demonstratives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['quantifier','indefinite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are not referring to exactly the same countable things'; */
/*         help_example = 'Can you buy <span class="hl1">a couple of</span> bottles of milk? We\'re running out.'; */
/*         help_explanation = 'We don\'t know exactly which <span class="hl1">2</span> bottles, what kind of milk, or from which shop.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','all','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer both know <span class="hl1">exactly</span> which <span class="hl2">uncountable stuff</span>'; */
/*         help_example = 'My ex-wife took all <span class="hl1">my</span> <span class="hl2">money</span>!'; */
/*         help_explanation = '<span class="hl1">Possessives</span> always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['demonstrative','all','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer both know <span class="hl1">exactly</span> which <span class="hl2">uncountable stuff</span>'; */
/*         help_example = 'I don\'t like any of <span class="hl1">that</span> <span class="hl2">food</span>!'; */
/*         help_explanation = '<span class="hl1">Demonstratives</span> always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['quantifier','all','uncountable'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer both know <span class="hl1">exactly</span> which <span class="hl2">uncountable stuff</span>'; */
/*         help_example = 'What happened to <span class="hl3">the 3 truckloads</span> of <span class="hl2">sand</span> that I bought?'; */
/*         help_explanation = 'A <span class="hl3">quantifier</span> that refers to <span class="hl2">all</span> implies <span class="hl1">definite reference</span>.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','definite','singular'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">the same</span> <span class="hl2">countable thing</span>'; */
/*         help_example = 'I love <span class="hl1">my</span> <span class="hl2">dog</span>.'; */
/*         help_explanation = 'Not <span class="hl1">somebody else\'s</span> <span class="hl2">dog</span>!'; */
/*         // */

/*     } else if(checker(['demonstrative','definite','singular'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to the same countable thing'; */
/*         help_example = 'Look at <span class="hl1">that</span> girl!'; */
/*         help_explanation = 'Not <span class="hl1">this</span> girl!'; */
/*         // */

/*     } else if(checker(['quantifier','definite','singular'], actives) && actives.length == 3) { */
/*         advice = 'the, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly</span> the same <span class="hl1">single thing</span>'; */
/*         help_example = 'That was <span class="hl1">the</span> <span class="hl2">one time</span> I regretted doing what I did.'; */
/*         help_explanation = 'This is usually like saying \'<span class="hl1">the</span> <span class="hl2">only time</span>..\''; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','definite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer both know exactly which <span class="hl2">plural things</span>'; */
/*         help_example = 'I love <span class="hl1">my</span> <span class="hl2">kids</span>.'; */
/*         help_explanation = 'I\'m not talking about <span class="hl1">anyone else\'s</span> <span class="hl2">kids</span>!'; */
/*         // */

/*     } else if(checker(['demonstrative','definite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> plural countable things'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Demonstratives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['quantifier','definite','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to the same plural countable things'; */
/*         help_example = '<span class="hl2">The</span> <span class="hl1">three</span> best-selling albums this month were..'; */
/*         help_explanation = 'Other albums were sold, but we\'re talking about <span class="hl2">these exactly</span>.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','indefinite','singular'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> countable thing'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Possessives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['demonstrative','indefinite','singular'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> countable thing'; */
/*         help_example = 'There is no example to illustrate this combination.'; */
/*         help_explanation = 'Demonstratives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['quantifier','indefinite','singular'], actives) && actives.length == 3) { */
/*         advice = 'no article, don\'t pluralise'; */
/*         help_msg = 'Reader and writer are <span class="hl1">not</span> referring to <span class="hl1">exactly the same</span> <span class="hl2">countable thing</span>'; */
/*         help_example = 'I\'d like to buy <span class="hl2">one</span> apple, please.'; */
/*         help_explanation = 'We don\'t know exactly which apple. However, note that in English <span class="hl1">one</span> + noun = \'<span class="hl1">a/an</span>\' + noun.'; */
/*         // */
/*         // */
/*         // */

/*     } else if(checker(['possessive','all','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> instances of a <span class="hl2">countable thing</span>'; */
/*         help_example = '<span class="hl1">Bill\'s</span> <span class="hl2">potatoes</span> are looking good this year.'; */
/*         help_explanation = 'Not someone else\'s <span class="hl2">potatoes</span>! <span class="hl1">Possessives</span> always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['demonstrative','all','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> <span class="hl2">plural countable things</span>'; */
/*         help_example = '<span class="hl1">These</span> <span class="hl2">apples</span> are rotten. Yuch!'; */
/*         help_explanation = 'Not <span class="hl1">those</span> apples! Demonstratives always imply <span class="hl1">definite</span> reference.'; */
/*         // */

/*     } else if(checker(['quantifier','all','plural'], actives) && actives.length == 3) { */
/*         advice = 'no article, pluralise'; */
/*         help_msg = 'Reader and writer are referring to <span class="hl1">exactly the same</span> examples of a <span class="hl2">countable thing</span>'; */
/*         help_example = '<span class="hl1">All four</span> <span class="hl2">men</span> were found guilty.'; */
/*         help_explanation = '<span class="hl1">None</span> of <span class="hl2">them</span> were found not guilty!'; */
/*         // */

/*     } else { */
/*         advice = 'select items'; */
/*     } */

/* } */



    
</script>

<div id="output" class="container" style="max-width:600px;">

    <h1 class="text-center mt-3">Articleator</h1>
    <p class="lead my-3">Locate a noun in some text and click the buttons to check if it needs an article and/or needs to be plural.</p>  

    <div class="grid-container">
        <div id="countable" class="btn" class:cActive on:click={doCountUncount}>{labelCountable}</div>
        <div id="singular" class="btn" class:sActive on:click={doSingular}>{labelSingular}</div>
        <div id="plural" class="btn" class:pActive on:click={doPlural}>{labelPlural}</div>
        <div id="toe" class="btn" class:tActive on:click={doDefinite}>definite</div>
        <div id="oom" class="btn" class:oActive on:click={doIndefinite}>indefinite</div>
        <div id="aote" class="btn" class:aActive on:click={doAll}>all</div>
    </div>

    <div id="calculation" class="alert alert-secondary text-center mx-1 mt-1 mb-3">{calculation}</div>
    <div id="help_msg">{@html help_msg}</div>
    <div id="help_example">{@html help_example}</div>
    <div id="help_explanation">{@html help_explanation}</div>

</div>

<style>
    .cActive, .sActive, .pActive, .tActive, .oActive, .aActive {
        background: var(--dark);
        color: var(--light);
    }
    .btn {
        display: flex;
        justify-content: center;
        border: 1px solid #bbbbbb;
    }

    .container {
        margin: 0px auto;
    }

#calculation {
    font-size:1.8em;
}
.hl {
    font-style:italic;
    /* font-weight:bold; */
}
.hl1 {
    color:#007BFF; /* blue */
    /* font-weight:bold; */
}
.hl2 {
    color:#28A745; /* green */
    /* font-weight:bold; */
}
.hl3 {
    color:#DC3545; /* red */
    /* font-weight:bold; */
}
.grid-container {
    display: grid;
    /* grid-template-columns: auto auto auto; */
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
}
.bq-light {
    border-left: 1px solid #FDFFF7;
}
.bq-dark {
    border-left: 1px solid #212529;
}

</style>

