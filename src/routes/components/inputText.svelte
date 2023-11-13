<script>
    export let count;
    export let size = 12;
    export let answer = "";
    export let guess = "";

</script>

<span><sup class="font-weight-bold">{count}</sup><input id="A{count}" type="text" class="ans" size="{size}" data="{answer}" placeholder="{count}" bind:value={guess} on:input={console.log(guess)} autocomplete="off" /></span>

<style>
    span {
        white-space: nowrap;
    }
    input {
        text-align: center;
        margin-bottom: 3px;
    }
    sup {
        padding-right:3px;
    }
</style>
