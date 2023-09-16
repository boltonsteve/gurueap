<script>
    import { FilePost, FileMusic, Globe, Controller } from "svelte-bootstrap-icons";
    export let title = "No title";
    export let text = "No text";
    export let icon = 'post';

    let posts = false;
    let songs = false;
    let ielts = false;
    let games = false;

    if(icon == 'posts') {
        posts = true;
    } else if(icon == 'songs') {
        songs = true;
    } else if(icon == 'ielts') {
        ielts = true;
    } else if(icon == 'games') {
        games = true;
    }

    let iconSize = 50;
</script>


<div class="card">
    <div class="text">
        {text}
    </div>
    <div class="icon-title">
        <div class="icon">
            {#if posts}
                <FilePost width={iconSize} height={iconSize} />
            {/if}
            {#if songs}
                <FileMusic width={iconSize} height={iconSize} />
            {/if}
            {#if ielts}
                <Globe width={iconSize} height={iconSize} />
            {/if}
            {#if games}
                <Controller width={iconSize} height={iconSize} />
            {/if}
        </div>
        <div class="title">
            <a href="./{icon}" class="btn btn-outline-dark">{title}</a>
        </div>
    </div>
</div>


<style>

    a {
        margin: 20px;
        width: 80px;
        font-size: 1.1rem;
    }

    .card {
        display:grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: space-between;

        max-width: 270px;
        min-width: 180px;
        min-height: 210px;

        padding: 10px 10px 20px 10px;
        border:1px solid black;
        border-radius:5px;
    }

    .card .title {
        font-size:1.5rem;
        font-weight: bold;
        text-align:center;
    }

    .icon-title {
        margin-top:auto;
        padding-top: 10px;
    }

    .icon {
        text-align: center;
        padding-bottom:0px;
        margin-bottom: 10px;
    }

</style>
