<script>
    import { flagIndo } from '$lib/flags.js';
    import { slide } from "svelte/transition";
    import * as animateScroll from "svelte-scrollto";

    document.title = "Past Perfect";

    let show = false;


    const showSample = () => {
        show = true;
        animateScroll.scrollToBottom({duration: 3000});
    }


</script>

<div class="mb-3 mw-500">
    
    <h1>Beware of Past Perfect!</h1>

    <p><i><b>Past perfect</b></i> tense needs to be handled with care. It is most useful in the narrative genre and is <span class="text-danger">seldom needed in <b>Task 2</b> writing</span>.</p>

    <p>However, <span class="font-weight-bold text-success">Task 1</span> essays occasionally present an opportunity to use <i><b>past perfect</b></i>.</p>

    <p>Let's try an exercise! Follow my instructions carefully and attempt the tasks before reading the sample texts.</p>

    <p>Look at the following graph and describe it in two short paragraphs. The first paragraph will focus on general trends and will begin:</p>

    <p class="ml-3 font-italic">In general..</p>

    <p>The second paragraph will describe details and will begin:</p>

    <p class="ml-3 font-italic">In detail..</p>

    <p>When you're happy with your writing, you can read my sample text.</p>

    <img src="/img/twt-chart1.jpg" class="mx-auto border border-dark rounded" alt="twt chart" />

	<p>Finished writing? OK now take a look at the sample text and analysis.</p>

    <button id="show_sample" class="mx-auto" on:click={showSample}>Sample + Analysis</button>

    {#if show}

        <div id="sample" in:slide={{ duration:2000 }}>

            <h3>Sample text</h3>

            <p>In general, Facebook had by far the highest number of active users per month, and this number increased by more than 50% during the period. Despite having far fewer users per month, Twitter experienced a similar increase in numbers, but was overtaken half way through the period by Instagram.</p>

            <p>In detail, Facebook already had a billion active users in 2012, but <span class="font-weight-bold text-warning">by</span> <span class="font-weight-bold text-success">2015</span> <span class="font-weight-bold text-info">this figure</span> <span class="font-weight-bold text-danger">had</span> <span class="font-weight-bold text-primary">increased</span> to more than 1.5 billion. Twitter was in second place until 2014 when the monthly number of active Instagram users began to exceed that of Twitter users, and <span class="font-weight-bold text-warning">by</span> <span class="font-weight-bold text-success">2015</span> <span class="font-weight-bold text-info">Instagram</span> <span class="font-weight-bold text-danger">had</span> <span class="font-weight-bold text-primary">taken</span> a 0.1 billion user lead over Twitter, forcing Twitter into third position. Similarly, <span class="font-weight-bold text-warning">by</span> <span class="font-weight-bold text-success">2015</span> <span class="font-weight-bold text-info">Snapchat</span> <span class="font-weight-bold text-danger">had</span> <span class="font-weight-bold text-primary">attracted</span> only half as many active users per month as Instagram.</p>

            <h3>Analysis</h3>

            <p>Notice the structural use of <i><b>past perfect</b></i> in the detail section. I admit that I went a bit mad with it, but I strongly recommend this structure:</p>

            <p class="ml-3 font-weight-bold"><span class="font-weight-bold text-warning">By</span> + <span class="font-weight-bold text-success">past time expression</span> + <span class="font-weight-bold text-info">subject</span> + <span class="font-weight-bold text-danger">had</span> + <span class="font-weight-bold text-primary">V3</span></p>

            <h3>Final task</h3>
            <p>Take another look at your own text. Did you use the <b><i>past perfect</i></b> structure that I recommended? If not, can you edit your text so as to include <b><i>past perfect</i></b> in at least one sentence?</p>

        </div>

    {/if}

</div>
