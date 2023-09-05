<script>

    import SvelteSeo from "svelte-seo"
    import { slide, blur, scale } from 'svelte/transition';
    import { descriptors } from '$lib/descriptors.js';

    let skillCodes = [
        'speaking',
        'task1',
        'task2'
    ];

    let headingTexts = [
        'Speaking',
        'Task 1 Writing',
        'Task 2 Writing'
    ];

    let sHead = [
        '&nbsp;',
        'Fluency and Coherence',
        'Lexical Resource',
        'Grammatical Range and Accuracy',
        'Pronunciation'
    ];

    let tHead = [
        '&nbsp;',
        'Task Achievement',
        'Coherence and Cohesion',
        'Lexical Resource',
        'Grammatical Range and Accuracy'
    ];

    let ttHead = [
        '&nbsp;',
        'Task Response',
        'Coherence and Cohesion',
        'Lexical Resource',
        'Grammatical Range and Accuracy'
    ];

    let headers = [sHead, tHead, ttHead];

    let skills = descriptors.map( next => {
        let criteria = next.map( next => {
            let cols = next.map( next => {
                let bulls = next.map( next => {

                    let toReturn = next.replace(/(cohesive features|cohesive devices|coherently|coherence|connectives|discourse markers)/g,`
                        <a href="../posts/coherence-cohesion" target="_blank">$1</a>
                    `);
                    toReturn = toReturn.replace(/(collocation)/g,`
                        <a href="../posts/collocation" target="_blank">$1</a>
                    `);
                    toReturn = toReturn.replace(/(idiomatic vocabulary|idiomatic language)/g,`
                        <a href="../posts/idioms" target="_blank">$1</a>
                    `);
                    toReturn = toReturn.replace(/(less common|uncommon lexical items)/g,`
                        <a href="../posts/less-common" target="_blank">$1</a>
                    `);

                    return toReturn;

                })
                return `<p class="mt-0">${bulls.join('</p><p>')}</p>`;
            })
            return cols;
        })
        return criteria;
    })

    const getDescriptors = (skill) => {
        let skillId = skillCodes.indexOf(skill);
        let head = headers[skillId].map( next => `<h3 class="mb-0 px-1 pb-1 pt-0" style="border-bottom:1px solid black;">${next}</h3>` );
        let rows = [];
        rows.push(head.join(''));
        for(let i=9;i>=0;i--) {
            let row = [`<div class="text-center pl-1 " style="font-size:2rem;">${i}</div>`];
            for(let n=0;n<4;n++) {
                let next = skills[skillId][n][i];
                row.push(`<div class="px-1" style="border-bottom:1px solid black;">${next}</div>`);
            }
            rows.push(row.join(''));
            row = [];
        }
        return `
            <div class="flex row-col cols-14444 mb-3" style="grid-column-gap:0px;>${rows.join('')}</div>
        `;
    }

    let sHtml = getDescriptors('speaking');
    let tHtml = getDescriptors('task1');
    let ttHtml = getDescriptors('task2');


    function showS() {
        speaking = true;
        task1 = false;
        task2 = false;

    }

    function showT() {
        speaking = false;
        task1 = true;
        task2 = false;
    }

    function showTT() {
        speaking = false;
        task1 = false;
        task2 = true;
    }

    let speaking = true;
    let task1 = false;
    let task2 = false;

</script>

<SvelteSeo
  title="IELTS Public Band Descriptors",
  description="An interactive version of the IELTS public band descriptors for IELTS Speaking, Task 1 and Task 2 Writing."
/>


<div class="mb-3">

    <div class="flex w-100 text-center">

        <h1 class="mb-1">IELTS Band Descriptors</h1>

        <div class="btn-group">
            <button class="btn-group-item btn-group-item-dark btn-group-left" class:btn-group-item-active-dark={speaking} on:click={showS}>Speaking</button><button class="btn-group-item btn-group-item-dark" class:btn-group-item-active-dark={task1} on:click={showT}>Task 1</button><button class="btn-group-item btn-group-item-dark btn-group-right" class:btn-group-item-active-dark={task2} on:click={showTT}>Task 2</button>
        </div>

    </div>

{#if speaking}
    <div transition:slide={{duration:1000}}>
        <h1>Speaking</h1>
        {@html sHtml}
    </div>
{/if}
{#if task1}
    <div transition:slide={{duration:1000}}>
        <h1>Task 1</h1>
        {@html tHtml}
    </div>
{/if}
{#if task2}
    <div transition:slide={{duration:1000}}>
        <h1>Task 2</h1>
        {@html ttHtml}
    </div>
{/if}


</div>

<style>
h1 {
    text-align:center;
}
</style>
