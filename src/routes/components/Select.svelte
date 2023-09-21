<script>
    import { shuffle } from '$lib/shuffle.js';

    export let count;
    export let options = "";
    export let guess = "";

    let oHtmlArr = [];

    let correct = "";
    let oArr = options.split(',');
    let answer = oArr[0];

    shuffle(oArr);

    oArr.forEach( next => {
        oHtmlArr.push(`<option value="${next}">${next}</option>`);
    });
    let oHtml = oHtmlArr.join('');
    oHtml = oHtml + '<option value="select">select</option>';

</script>

<span>
    <sup class="font-weight-bold">{count}</sup><select id="A{count}" data="{answer}" class="ans">
        {@html oHtml}
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
