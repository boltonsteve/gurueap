<script>
    export let count;
    export let size = 12;
    export let answer = "";
    export let guess = "";

</script>

<span><input type="text" class="ans" size="{size}" data="{answer}" placeholder="{count}" bind:value={guess} on:input={console.log(guess)} /><sup class="font-weight-bold">{count}</sup></span>

<style>
    span {
        white-space: nowrap;
    }
    input {
        text-align: center;
        margin-bottom: 3px;
    }
    sup {
        padding-left:3px;
    }
</style>
