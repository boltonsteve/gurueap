<script>
    export let data;
    /* console.log(data); */
    let rows = data.data;
</script>

<div>

    <h1>Get MySql Result Data</h1>
    {#each rows as row}
        <li>{row.name} - {row.email}</li>
    {/each}

</div>

<style>
</style>
