<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'

    let calculation = 'click items to articleate';
    let msg = '';
    let example = '';
    let explanation = '';

    // Svelte
    let countability = false;
    let singular = true;
    let plural = true;
    let definite = false;
    let indefinite = false;
    let all = false;

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
            msg = 'Both reader and writer are referring to <span class="text-primary">exactly the same</span> <span class="text-success">uncountable stuff</span>.';
            example = '<span class="text-primary">The</span> <span class="text-success">rice</span> <span class="text-primary">sold in America</span> is imported from Thailand.';
            explanation = '<span class="text-primary">Sold in America</span> restricts the meaning of <span class="text-success">rice</span> to <span class="text-primary">this</span> <span class="text-success">rice</span> <span class="text-primary">exactly</span>.';

        } else if(!countable && indefinite) {

            calculation = 'no article, don\'t pluralise';
            msg = 'Reader and writer are referring <span class="text-primary">generic</span> <span class="text-success">uncountable stuff</span>.';
            example = '<span class="text-success">Rice</span> is <span class="text-primary">a</span> rich source of carbohydrate.';
            explanation = 'We <span class="text-primary">don\'t know exactly</span> what kind of <span class="text-success">rice</span>, or where it comes from.';

        } else if(!countable && all) {

            calculation = 'no article, don\'t pluralise';
            msg = 'Reader and writer are referring to <span class="text-primary">all</span> of this <span class="text-success">uncountable stuff</span>, <span class="text-primary">everywhere</span>.';
            example = '<span class="text-success">Water</span> is essential for survival!';
            explanation = '<span class="text-primary">All</span> <span class="text-success">water</span>. There is no <span class="text-success">water</span> that doesn\'t help us to survive.';

        } else if(countable && singular && definite) {

            calculation = 'the, don\'t pluralise';
            msg = 'Both reader and writer are referring to <span class="text-primary">exactly the same</span> <span class="text-success">countable thing</span>';
            example = 'Bill works in <span class="text-success">the</span> <span class="text-danger">education</span> <span class="text-success">sector</span>.';
            explanation = '<span class="text-danger">Education</span> restricts the meaning of <span class="text-success">sector</span> to <span class="text-primary">this</span> sector <span class="text-primary">exactly</span> (= definite).';
    
        } else if(countable && singular && indefinite) {

            calculation = 'a/an, don\'t pluralise';
            msg = 'Reader and writer are referring to a <span class="text-primary">generic</span> thing';
            example = 'Let\'s have <span class="text-primary">a</span> cup of tea!';
            explanation = '<span class="text-primary">We don\'t know what kind</span> of tea, or <span class="text-primary">what kind</span> of cup, etc.';

        } else if(countable && plural && definite) {

            calculation = 'the, pluralise';
            msg = 'Reader and writer are referring to <span class="text-success">exactly the same</span> <span class="text-danger">things</span>';
            example = '<span class="text-success">The</span> <span class="text-danger">trees</span> <span class="text-primary">in Bill\'s garden</span> look lovely.';
            explanation = '<span class="text-primary">In Bill\'s garden</span> tells us <span class="text-success">these</span> <span class="text-danger">trees</span> <span class="text-success">exactly</span>.';

        } else if(countable && plural && indefinite) {

            calculation = 'no article, pluralise';
            msg = 'Reader and writer are referring to <span class="font-italic">generic</span> things';
            example = '<span class="text-primary">Motorcycles</span> are dangerous, although <span class="text-success">Harley Davidson motorcycles</span> are equipped with special safety features.';
            explanation = 'We might be talking about <span class="text-primary">all motorcycles everywhere</span>, or <span class="text-success">some motorcycles</span>.';

        } else if(countable && plural && all) {

            calculation = 'no article, pluralise';
            msg = 'Reader and writer are referring to all examples of the same countable thing';
            example = '<span class="hj">Cow</span><span class="text-primary">s</span> eat grass.';
            explanation = '<span class="text-primary">All cows everywhere</span> eat grass!';

        }

    }

    calculate();


</script>

<div id="output" class="container" style="max-width:600px;">

    <h1 class="text-center">Articleator</h1>
    <p class="lead my-3">Locate a noun in some text and click the buttons to check if it needs an article and/or needs to be plural.</p>  

    <div class="grid-container">
        <div class="btn" class:countability on:click={doCountUncount}>{labelCountable}</div>
        <div class="btn" class:singular on:click={doSingular}>{labelSingular}</div>
        <div class="btn" class:plural on:click={doPlural}>{labelPlural}</div>
        <div class="btn" class:definite on:click={doDefinite}>definite</div>
        <div class="btn" class:indefinite on:click={doIndefinite}>indefinite</div>
        <div class="btn" class:all on:click={doAll}>all</div>
    </div>

    <div id="calculation" class="alert alert-secondary text-center">{calculation}</div>

    <img src="/img/terminator.png" alt="terminator" style="height:200px;float:right;margin:10px;">

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

