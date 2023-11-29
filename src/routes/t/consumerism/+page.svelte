<script>

    import SvelteSeo from "svelte-seo";
    import { fade, slide } from 'svelte/transition';
    import ScaffoldSpan from '../../components/ScaffoldSpan.svelte';
    import * as animateScroll from "svelte-scrollto";

    let title = 'Consumerism';

    /* let incoming = 'Jack and [Jill|And who?] went up the [hill|The what?] to fetch a pail of water.'; */

    let incoming = `In modern society, in order to improve the quality of their lives, people [buy a range of items that allow them to live more comfortably|What do they do?]. Some people claim that as a result, we have moved too far away from [established beliefs and conduct|Moved away from what?], and that this is [regrettable|(adjective)]. However, I believe that we should [take full advantage of the money we earn to enrich our lifestyles|What should we do?], and that we should [progress rather than being stuck in outdated traditions|What else should we do?], so there is no cause for regret.

It is claimed that consumerism has done harm to our society because [the morals upheld by previous generations have been steadily eroded as we have become too focused on our own comfort|Why?]. People who hold this opinion contend that [values such as respect for the institution of the family have declined in importance|What have they contended?], and that this is [a shame|What?]. However, it is important to remember that [many of these so-called values disadvantaged substantial numbers of people|Remember that what?]. For example, it used to be believed that women should [stay at home|Should do what?], [clean the house|Do what else?] and [bring up children|And do what else?]. Now, thanks to labour-saving devices bought using salaries of hard-working men and women, families have [more time together|What do people have now?], and surely nobody misses [the unfair old societal norms|What does nobody miss?].

It is further claimed by some that traditional rituals such as those related to family or social events have become overshadowed by [people's desire to acquire new possessions|By what?] and that this is [regrettable|(adjective)]. However, such customs continue to thrive in [so-called consumerist societies|Where?]. Wedding rituals, for example, have remained unchanged, and of course newly-weds now receive more [gifts|More what?] than they did in the past – all bought by the proceeds of people's work. Other customs are enhanced by consumer goods such as [video cameras|Such as what?] and [mobile phones|And what else?] as more people can enjoy traditional events either remotely or after the event. Therefore, [nothing is lost and there is no need for regret|Therefore what?].

In conclusion, [traditions|What?] have not been swept away by the desire of people to buy things that improve their lives. It is true that some [less-desirable societal norms and habits|Some what?] have gone, but their passing is nothing to lament over.`;

    let inStr = incoming.replace(/\n/g,'<br>');
    let inArr = inStr.split(/(\s\[|]\s?)/).filter( next => !next.match(/[\[\]]/) );
    let inObjs = inArr.map( next => {
        let toReturn = '';
        let items;
        if(next.match(/\|/)) {
            let items = next.split(/\|/);
            toReturn = {
                ori: items[0],
                q: items[1],
                user: ''
            }
        } else {
            toReturn = {
                ori: '',
                q: '',
                user: ''
            }
        }
        return toReturn;
    });

    let finished = false;
    let showInstructions = true;
    let instMsg = 'hide instructions';

    const toggleInstructions = () => { 
        showInstructions = !showInstructions
        if(showInstructions) {
            instMsg = 'hide instructions';
        } else {
            instMsg = 'show instructions';
        }
    };

    const doUser = (e) => {
        let id = e.target.attributes.data.nodeValue;
        let edit = prompt(inObjs[id].q);
        inObjs[id].user = edit;
    }

    const finish = () => {
        let empty = 0;
        inObjs.forEach( next => {
            if(next.user == '') {
                empty ++;
            }
        })
        if(empty > 0) {
            alert('Please attempt all text replacements.');
        } else {
            finished = true;
            setTimeout(function() {
                animateScroll.scrollTo({element: '#finished', duration: 1000});
            },500);
        }
    }

</script>

<SvelteSeo
    title="Consumerism - Essay Scaffold"
    description="Replace highlighted items with your own ideas to build an essay."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,writing,scaffold,activity"
 /> 

<div class="container">
    
    <button id="btn_instructions" class="btn btn-outline-dark" on:click={toggleInstructions}>{instMsg}</button>

    {#if showInstructions}
        <div id="instructions" transition:slide>
            <ul>
                <li>Click red items and enter your own ideas.</li>
                <li>Click again to edit.</li>
                <li>Click 'Finished' to see sample text.</li>
            </ul>
        </div>
    {/if} 

    <h1 class="text-center">{title}</h1>

    <div id="activity">

        <div>
            {#each inObjs as next,i}
                {#if next.ori == ''}
                    {@html inArr[i]}&nbsp;
                {:else if next.user == ''}
                    <span class="text-danger" data={i} on:click={doUser}>{next.q}</span>&nbsp;
                {:else}
                    <span class="text-danger" data={i} on:click={doUser}>{next.user}</span>&nbsp;
                {/if} 
            {/each} 

            <button id="check" class="btn btn-next btn-outline-dark mx-auto my-3 d-block" on:click={finish}>Finished!</button>

        </div>

        {#if finished}
            <div id="finished" transition:fade>
                {#each inObjs as next,i}
                    {#if next.ori == ''}
                        {@html inArr[i]}&nbsp;
                    {:else}
                        <span class="text-success">{next.ori}</span>&nbsp;
                    {/if} 
                {/each} 
            </div>
        {/if} 

    </div>

</div>


<style>

    #btn_instructions {
        cursor:pointer;
        border:1px solid black;
        border-radius:5px;
        margin-top:10px;
        font-size:0.8rem;
        padding:3px;
    }

    ul {
        margin-top:5px;
        font-size:0.8rem;
    }

    #activity {
        display:flex;
        justify-content:center;
        gap:20px;
    }

    #activity div {
        max-width:500px;
    }

    @media(min-width:480px) {
        #activity {
            flex-wrap:wrap;
        }
    }

</style>
