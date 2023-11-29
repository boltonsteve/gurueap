<script>
    export let done = false;
    export let ori;
    export let sc;

    let color = done ? 'success' : 'primary';
    let msg = done ? ori : sc;

    const toggleDone = () => {
        done = !done
        color = done ? 'success' : 'primary';
        msg = done ? ori : sc;
    };

</script>

    <span class="text-{color}" on:click={toggleDone}>{msg}</span>

<style>
    div {
        white-space:normal;
    }
</style>


