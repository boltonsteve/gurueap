<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'

    let calculation = 'click items to articleate';
    let msg = '';
    let example = '';
    let explanation = '';

    // Svelte
    let countability = false;
    let countable = true;
    let singular = false;
    let plural = true;
    let definite = false;
    let indefinite = false;
    let all = true;

    let labelCountable = 'uncountable';
    let labelSingular = 'singular';
    let labelPlural = 'plural';
    let labelAll = 'all of them';

    const doCountUncount = () => {

        labelCountable = countable ? 'countable' : 'uncountable';
        labelAll = countable ? 'all of it' : 'all of them';
        countable = !countable;

        if(countable) {
            labelSingular = 'singular';
            labelPlural = 'plural';
            if(all) {
                singular = false;
                plural = true;
            } else {
                singular = true;
                plural = false;
            }
        } else {
            labelSingular = 'uncountable';
            labelPlural = 'uncountable';
            singular = true;
            plural = true;
        }

        calculate();
    }

    const doSingular = () => {
        if(countable) {
            if(all) {
                all = false;
                definite = true;
            }
            singular = true;
            plural = false;
        }
        calculate();
    }

    const doPlural = () => {
        if(countable) {
            singular = false;
            plural = true;
        }
        calculate();
    }
    
    const doDefinite = () => {
        definite = true;
        indefinite = false;
        all = false;
        calculate();
    }
    
    const doIndefinite = () => {
        definite = false;
        indefinite = true;
        all = false;
        calculate();
    }
    
    const doAll = () => {
        definite = false;
        indefinite = false;
        all = true;
        if(countable) {
            singular = false;
            plural = true;
        }
        calculate();
    }

    const calculate = () => {
    
        if(!countable && definite) {

            calculation = 'the, don\'t pluralise';
            msg = 'Both reader and writer are referring to <span class="text-primary font-weight-bold">exactly the same</span> <span class="text-success font-weight-bold">uncountable stuff</span>.';
            example = '<span class="text-primary font-weight-bold">The</span> <span class="text-success font-weight-bold">rice</span> <span class="text-primary font-weight-bold">sold in America</span> is imported from Thailand.';
            explanation = '<span class="text-primary font-weight-bold">Sold in America</span> restricts the meaning of <span class="text-success font-weight-bold">rice</span> to <span class="text-primary font-weight-bold">this</span> <span class="text-success font-weight-bold">rice</span> <span class="text-primary font-weight-bold">exactly</span>.';

        } else if(!countable && indefinite) {

            calculation = 'no article, don\'t pluralise';

            msg = 'Reader and writer are referring to a <span class="text-primary font-weight-bold">generic</span> subset of <span class="text-success font-weight-bold">uncountable stuff</span>.';

            example = '<span class="font-weight-bold text-success">Rice</span> is the main ingredient in nasi goreng.';

            explanation = '<span class="font-weight-bold text-primary">We don\'t know exactly..</span><ul><li>what kind of rice</li><li>where it comes from</li><li>how much is being used</li></ul>';


        } else if(!countable && all) {

            calculation = 'no article, don\'t pluralise';
            msg = 'Reader and writer are referring to <span class="text-primary font-weight-bold">all</span> of this <span class="text-success font-weight-bold">uncountable stuff</span>, <span class="text-primary font-weight-bold">everywhere</span>.';
            example = '<span class="text-success font-weight-bold">Water</span> is comprised of one hydrogen atom and two oxygen atoms.';
            explanation = '<span class="text-primary font-weight-bold">All</span> <span class="text-success font-weight-bold">water</span>, <span class="font-weight-bold text-primary">everywhere</span>.';

        } else if(countable && singular && definite) {

            calculation = 'the, don\'t pluralise';
            msg = 'Both reader and writer are referring to <span class="text-primary font-weight-bold">exactly the same</span> <span class="text-success font-weight-bold">countable thing</span>';
            example = 'Bill works in <span class="text-success font-weight-bold">the</span> <span class="text-danger font-weight-bold">education</span> <span class="text-success font-weight-bold">sector</span>.';
            explanation = '<span class="text-danger font-weight-bold">Education</span> restricts the meaning of <span class="text-success font-weight-bold">sector</span> to <span class="text-primary font-weight-bold">this</span> sector <span class="text-primary font-weight-bold">exactly</span> (= definite).';
    
        } else if(countable && singular && indefinite) {

            calculation = 'a/an, don\'t pluralise';
            msg = 'Reader and writer are referring to <span class="text-primary font-weight-bold">a generic thing</span>.';
            example = 'Would you like <span class="font-weight-bold text-primary">a</span> <span class="font-weight-bold text-success">cup</span> of <span class="font-weight-bold text-danger">tea</span>?'
            explanation = 'We don\'t know <span class="font-weight-bold text-primary">what kind</span> of <span class="font-weight-bold text-success">cup</span>, or <span class="font-weight-bold text-primary">what kind</span> of <span class="font-weight-bold text-danger">tea</span>.';

        } else if(countable && plural && definite) {

            calculation = 'the, pluralise';
            msg = 'Reader and writer are referring to <span class="text-success font-weight-bold">exactly the same</span> <span class="text-danger font-weight-bold">things</span>';
            example = '<span class="text-success font-weight-bold">The</span> <span class="text-danger font-weight-bold">trees</span> <span class="text-primary font-weight-bold">in Bill\'s garden</span> look lovely.';
            explanation = '<span class="text-primary font-weight-bold">In Bill\'s garden</span> tells us <span class="text-success font-weight-bold">these</span> <span class="text-danger font-weight-bold">trees</span> <span class="text-success font-weight-bold">exactly</span>.';

        } else if(countable && plural && indefinite) {

            calculation = 'no article, pluralise';
            msg = 'Reader and writer are referring to a subset of <span class="font-italic">generic</span> things';
            example = '<span class="font-weight-bold text-primary">Harley Davidson</span> <span class="font-weight-bold text-success font-weight-bold">motorcycles</span> are very expensive.';
            explanation = '= <span class="font-weight-bold text-primary">some of many</span> <span class="font-weight-bold text-success font-weight-bold">motorcycles</span>.';

        } else if(countable && plural && all) {

            calculation = 'no article, pluralise';
            msg = 'Reader and writer are referring to all examples of the same countable thing';
            example = '<span class="hj">Cow</span><span class="text-primary font-weight-bold">s</span> eat grass.';
            explanation = '<span class="text-primary font-weight-bold">All cows everywhere</span> eat grass!';

        }

    }

    calculate();


</script>

<div id="output" class="container" style="max-width:600px;">

    <img src="/img/steve-terminator-500.png" class="mx-auto border rounded" alt="Steve Terminator" style="width:180px;">

    <h1 class="text-center">Articleator</h1>
    <p class="lead mb-3">Locate a noun in some text and click the buttons to check if it needs an article and/or needs to be plural.</p>  

    <div class="grid-container">
        <div class="btn" class:countability on:click={doCountUncount}>{labelCountable}</div>
        <div class="btn" class:singular on:click={doSingular}>{labelSingular}</div>
        {#if countable}
            <div class="btn" class:plural on:click={doPlural}>{labelPlural}</div>
        {/if}
        {#if !countable}
            <div>&nbsp;</div>
        {/if}
        <div class="btn" class:definite on:click={doDefinite}>definite</div>
        <div class="btn" class:indefinite on:click={doIndefinite}>indefinite</div>
        <div class="btn" class:all on:click={doAll}>{labelAll}</div>
    </div>

    <div id="calculation" class="alert alert-info text-center rounded my-2">{calculation}</div>

    <div id="msg">{@html msg}</div>

    <div id="example">{@html example}</div>

    <div id="explanation">{@html explanation}</div>

</div>

<style>

    #msg, #example, #explanation {
        font-size:1.2rem;
    }

    #example {
        margin: 20px 0px 20px 30px;
        font-style: italic;
        font-size: 1.5rem;
    }

    .grid-container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }

    #calculation {
        font-size:1.8em;
    }

    .container {
        margin: 0px auto;
    }

    .countability, .singular, .plural, .definite, .indefinite, .all {
        background: var(--dark);
        color: var(--light);
    }

    .btn {
        display: flex;
        justify-content: center;
        border: 1px solid #bbbbbb;
    }

</style>

