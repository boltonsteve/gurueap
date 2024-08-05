<script>
    import SvelteSeo from "svelte-seo"
    import { slide } from "svelte/transition";

    let show = false;

    const showKey = () => {
        show = true;
    }

</script>

<SvelteSeo
    title="Experience or Experiences?"
    description="Demonstrating the sifference in meaning between the countable and uncountable use of 'experience'."
/>

<div class="mb-3 mw-500">

    <h1>Experience or experiences?</h1>

    <h2>‘Experience’ has two (main) meanings.</h2>

    <h3>Meaning #1 (the countable experience)</h3>

    <p class="indent">I had <b><i>an</i></b> interesting <b><i>experience</i></b> at school today.</p>

    <p>In this sentence, an experience is an <i>event</i> or <i>incident</i>. It is an event that you were a part of and the event made an impression on you (it's something you will remember). These type of experiences are <b>countable</b>, just like events. If you had an interesting experience at school today, that means one interesting thing happened to you. For example, you achieved band 7 in writing for the first time.</p>

    <p>Here are some other examples of the countable form of the word experience:</p>

    <p class="indent">Climbing Mount Everest was <b><i>an experience</i></b> that I'll never forget.</p>
    <p>(This is one event that happened in the past).</p>

    <p class="indent">I've had <b><i>some</i></b> bad <b><i>experiences</i></b> with taxi drivers.</p>
    <p>(The speaker has had two or three unpleasant stories about taxi drivers that she has experienced herself. Each of these stories, or events, was a bad experience.)</p>


    <h3>Meaning #2 (the uncountable experience)</h3>
        
    <p class="indent">I have <b><i>experience</i></b> with computers.</p>

    <p>In this sentence, experience means <i>familiarity</i>.You have used computers for many years, so you are <i>familiar</i> with them, you have <i>knowledge</i> of them, and you have <i>skill</i> using them. This 'experience' is the familiarity and knowledge you have of something because you have used it for a period of time. This ‘experience’ is non-countable; it is not one event that happened to you. It is something you have gained over a period of time by doing something. Just like knowledge, understanding, or familiarity, you cannot count it.</p>

    <p>Here are some other examples of the uncountable form of the word experience:</p>

    <p class="indent"><i>I have 8 years of teaching <b><i>experience</i></b>.</i> (This means I have taught, in practice, for 8 years.)</p>

    <p class="indent"><i>Mike has just graduated college. He doesn’t have any work <b><i>experience</i></b>.</i> (He has never worked; he has no familiarity with working and no knowledge of what working is like.)</p>

    <h3>Experience: Set Expressions & Idioms</h3>

    <p>We always say:</p>

    <ul>
        <li>In my <b><i>experience</i></b>, Steve is a good teacher.</li>
        <li>Based on my <b><i>experience</i></b>, Steve is a good teacher.</li>
        <li>Speaking from <b><i>experience</i></b>, Steve is a good teacher.</li>
    </ul>

    <p>Meaning: You have learned that Steve is a good teacher from the knowledge you have gained from studying with him personally.</p>

    <p>Here is one useful idiom:</p>

    <p class="indent"><b><i>Experience</i></b> is the best teacher.</p>

    <p>Meaning: We learn best by doing things and getting direct experience. For example, people learn more about surfing by going to the beach and trying to surf; this is a better than reading about surfing on the Internet.</p>

    <h3>Experience(s)</h3>

    {#if show}
        <div class="key" in:slide>
            <h4>Answer key</h4>
            <ol>
                <li>Sarah gave birth to a baby boy last week. It was <b><i>a hard</i></b> experience.</li>
                <li>The doctor who helped her at the hospital had been a doctor for 20 years. He had <b><i>a lot of experience</i></b>. Sarah was happy that he was her doctor.</li>
        <li>Yesterday, there was a fire in Sarah's apartment building. Everyone had to leave the building. It was <b><i>a scary</i></b> experience.</li>
                <li>Sarah's husband, Tom, has worked as a policeman for 5 years. Based on his <b><i>experience</i></b>, being a policeman is a good job.</li>
        <li>Last year, he saved a boy who fell into the river. That was <b><i>an experience</i></b> he will never forget.</li>
            </ol>
            <hr>
        </div>
    {/if}

    <p>Select the appropriate words:</p>

    <ol>
        <li>Sarah gave birth to a baby boy last week. It was 
<select>
    <option value="select">select</option>
    <option value="hard">hard</option>
    <option value="a hard">a hard</option>
</select>
            experience.</li>
        <li>The doctor who helped her at the hospital had been a doctor for 20 years. He had 
<select>
    <option value="select">select</option>
    <option value="a lot of experience">a lot of experience</option>
    <option value="many experiences">many experiences</option>
</select>
    . Sarah was happy that he was her doctor.</li>
<li>Yesterday, there was a fire in Sarah's apartment building. Everyone had to leave the building. It was 
<select>
    <option value="select">select</option>
    <option value="scary">scary</option>
    <option value="a scary">a scary</option>
</select>
 experience.</li>
        <li>Sarah's husband, Tom, has worked as a policeman for 5 years. Based on his 
<select>
    <option value="select">select</option>
    <option value="experience">experience</option>
    <option value="experiences">experiences</option>
</select>
    , being a policeman is a good job.</li>
<li>Last year, he saved a boy who fell into the river. That was 
<select>
    <option value="select">select</option>
    <option value="experience">experience</option>
    <option value="an experience">an experience</option>
</select>
he will never forget.</li>
    </ol>

    <button on:click={showKey}>answer key</button>

</div>

<style>
    button {
        display:block;
        margin:5px auto;
    }
    select, button {
        border-radius:3px;
        cursor:pointer;
    }
    .indent {
        margin-left:30px;
        font-style:italic;
    }
    ul li {
        margin-bottom:10px;
        font-style:italic;
    }
    ol li {
        margin-bottom:10px;
    }
</style>
