<script>
    import { shuffle } from '$lib/shuffle.js';

    export let count;
    export let options = "";
    export let guess = "";

    let oHtmlArr = [];

    let correct = "";
    let optionsArr = options.split(',');

    let answer = optionsArr[0];

    shuffle(optionsArr);

</script>

<span>
    <sup class="font-weight-bold">{count}</sup><select id="A{count}" data="{answer}" class="ans">
        <option value="select">select</option>
        {#each optionsArr as option}
            <option value="{option}">{option}</option>;
        {/each}
    </select>
</span>

<style>
    span {
        white-space: nowrap;
    }
    sup {
        padding-right:3px;
    }
</style>
