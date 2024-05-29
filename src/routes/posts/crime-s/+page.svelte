<script>
    import SvelteSeo from "svelte-seo"
    import { slide } from "svelte/transition";
    import { tooltip } from '$lib/tooltip';
    import ISelect from '../../components/iSelect.svelte';
    import { checkAnswers } from '$lib/checkAnswers.js';

    const runCheck = () => {
        document.getElementById('feedback_div').classList.remove('hide');
        checkAnswers();
    }
</script>

<SvelteSeo
    title="Crime or Crimes"
    description="Contrasting the countable and uncountable versions of 'crime', which is often a topic in IELTS. Includes examples of usage."
/>

<div class="mb-3 mw-500">

    <img src="/img/crime.jpg" class="img-fluid mt-1" alt="crime">

    <h1>Crime or Crimes</h1>

    <p>Several posts on GuruEAP deal with nouns that can be either <b><i>countable</i></b> or <b><i>uncountable</i></b> but with slightly different meanings. Here's a text packed with examples of one such word - <b><i>Crime</i></b>. Select either <b><i>crime</i></b> or <b><i>crimes</i></b> from the dropdown menus and then check the answer key for analysis and explanations!</p>

    <div style="line-height:1.5rem;">The number of violent <ISelect count=1 options="crimes,crime" /> and sex offences recorded by police in England and Wales has risen sharply over the past year, figures show. Knife <ISelect count=2 options="crime,crimes" /> and robbery have also increased in the 12 months to September 2017 compared with the previous year. Overall, recorded <ISelect count=3 options="crimes,crime" /> are up 14%. However, the separate <ISelect count=4 options="Crime,Crimes" /> Survey, based on people's experiences, suggests <ISelect count=5 options="crime,crimes" /> continues to fall. This survey, based on interviews with 35,000 households in England and Wales, includes <ISelect count=6 options="crimes,crime" /> that people do not report to police. The latest police figures from 44 forces show that robbery is up 29%, sex offences are up 23%, knife <ISelect count=7 options="crime,crimes" /> is up 21%, and violent <ISelect count=8 options="crime,crimes" /> is up 20%. There were 37,443 knife <ISelect count=9 options="crimes,crime" /> and 6,694 gun <ISelect count=10 options="crime,crimes" /> offences recorded in the year to September. The number of offences involving a knife or a sharp instrument had been falling since 2011 but started rising again over the past three years. These <ISelect count=11 options="crimes,crime" /> tended to be concentrated in cities, in particular London which saw the largest increase (38%) in knife <ISelect count=12 options="crime,crimes" />.</div>

    <button class="btn btn-outline-dark mx-auto my-1" on:click={runCheck}>check answers</button>

    <div id="feedback_div" class="hide mb-3">
        <div id="feedback"></div>
        <p>Mouse over - or tap on a touchscreen - highlighted items to find out why they are the correct options.</p>
        <div style="line-height:1.5rem;">The number of violent <span class="tooltip" title="'Number' is a statistics word belonging to countable nouns - things that can be counted." use:tooltip>crimes</span> and sex offences recorded by police in England and Wales has risen sharply over the past year, figures show. Knife <span class="tooltip" title="Uncountable - 'knife' simply tells us what kind of crime." use:tooltip>crime</span> and robbery have also increased in the 12 months to September 2017 compared with the previous year. Overall, recorded <span class="tooltip" title="Agrees with the verb 'are' (plural), but this could also have been written 'crime is up 14%!'" use:tooltip>crimes</span> are up 14%. However, the separate <span class="tooltip" title="Noun modifier, so without 's'." use:tooltip>Crime</span> Survey, based on people's experiences, suggests <span class="tooltip" title="Agrees with 'continues'." use:tooltip>crime</span> continues to fall. This survey, based on interviews with 35,000 households in England and Wales, includes <span class="tooltip" title="Separate, countable crimes." use:tooltip>crimes</span> that people do not report to police. The latest police figures from 44 forces show that robbery is up 29%, sex offences are up 23%, knife <span class="tooltip" title="(see earlier example in sentence #1)" use:tooltip>crime</span> is up 21%, and violent <span class="tooltip" title="Could also have been written '..violent crimes are up.' (see earlier example of 'knife crimes'" use:tooltip>crime</span> is up 20%. There were 37,443 knife <span class="tooltip" title="37,443!" use:tooltip>crimes</span> and 6,694 gun <span class="tooltip" title="Modifying the plural count noun 'offences'!" use:tooltip>crime</span> offences recorded in the year to September. The number of offences involving a knife or a sharp instrument had been falling since 2011 but started rising again over the past three years. These <span class="tooltip" title="'These' = plural!" use:tooltip>crimes</span> tended to be concentrated in cities, in particular London which saw the largest increase (38%) in knife <span class="tooltip" title="Could also have been written 'crimes'. (Give yourself an extra point if you chose 'crimes'!)" use:tooltip>crime</span>.</div>
    </div>

</div>
