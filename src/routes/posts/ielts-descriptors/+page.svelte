<script>

    import { slide } from 'svelte/transition';
    import {descriptors} from '$lib/descriptors.js';

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
                let bulls = next.map( next => next )
                return `<p class="mt-0">${bulls.join('</p><p>')}</p>`;
            })
            return cols;
        })
        return criteria;
    })

    const getDescriptors = (skill) => {
        let skillId = skillCodes.indexOf(skill);
        let head = headers[skillId].map( next => `<h3 class="mb-0 px-1">${next}</h3>` );
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
            <h1 class="mt-1 text-center">${headingTexts[skillId]}</h1>
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

<svelte:head>
    <title>IELTS Band Descriptors</title>
</svelte:head>

<div class="mb-3">

    <div class="flex w-100 text-center">
        <h1 class="mb-1">IELTS Band Descriptors</h1>
        <button on:click={showS}>Speaking</button>
        <button on:click={showT}>Task 1</button>
        <button on:click={showTT}>Task 2</button>
    </div>

{#if speaking}
    <div in:slide={{duration:1000}} out:slide={{duration:1000}}>
        {@html sHtml}
    </div>
{/if}
{#if task1}
    <div in:slide={{duration:1000}} out:slide={{duration:1000}}>
    {@html tHtml}
    </div>
{/if}
{#if task2}
    <div in:slide={{duration:1000}} out:slide={{duration:1000}}>
    {@html ttHtml}
    </div>
{/if}


</div>

<style>

</style>
