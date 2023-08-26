<script>
    import { slide } from 'svelte/transition';
    import {descriptors} from '$lib/descriptors.js';

    let speaking = true;
    let task1 = false;
    let task2 = false;

    let headings = ['speaking','task1','task2'];
    let headingTexts = ['Speaking','Task 1 Writing','Task 2 Writing'];

    let skills = descriptors.map( next => {
        let criteria = next.map( next => {
            let cols = next.map( next => {
                let bulls = next.map( next => next )
                console.log(bulls);
                return `<ul class="mt-0 pl-1"><li class="mb-1">${bulls.join('</li><li class="mb-1">')}</li></ul>`;
            })
            return cols;
        })
        return criteria;
    })

    const getDescriptors = (skill) => {

        let sk = headings.indexOf(skill);
        console.log("sk: " + sk);

        let sRows = [];
        for(let i=9;i>=0;i--) {
            let row = [`<div class="text-center bg-white pl-1" style="font-size:2rem;">${i}</div>`];
            for(let n=0;n<4;n++) {
                let next = skills[sk][n][i];
                row.push(`<div>${next}</div>`);
            }
            sRows.push(row.join(''));
            row = [];
        }

        return `
            <h1 class="mt-1 text-center">${headingTexts[sk]}</h1>
            <div class="flex row-col cols-14444 mb-3">${sRows.join('')}</div>
        `;

    }

    let sHtml = getDescriptors('speaking');
    let tHtml = getDescriptors('task1');
    let ttHtml = getDescriptors('task2');

    console.log(sHtml);

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
    <div transition:slide={{duration:1000}}>
        {@html sHtml}
    </div>
{/if}
{#if task1}
    <div transition:slide={{duration:1000}}>
    {@html tHtml}
    </div>
{/if}
{#if task2}
    <div transition:slide={{duration:1000}}>
    {@html ttHtml}
    </div>
{/if}


</div>
