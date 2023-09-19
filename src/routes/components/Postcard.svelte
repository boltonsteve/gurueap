<script>

    import { video, music } from '$lib/emojis.js';
    export let href;
    export let title;
    export let badge = '';

    let icon = '';
    let showBadge = false;

    if(badge == 'song') {
        icon = music;
        showBadge = true;
    } else if(badge == 'video') {
        icon = video;
        showBadge = true;
    }

</script>

<a class="grid-post item" href="../posts/{href}" style="display:block;">
    {#if showBadge}
        <div class="badge">{@html video}</div>
    {/if}
    {title}
</a>


<style>

.item {
    font-size:1.1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    min-width:230px;
    width:250px;
    height: 60px;
    padding-top:30px;
    border:1px solid #bbbbbb;
    border-radius: 5px;
    margin:10px;
    text-align:center;
    z-index:-1;
}

.badge{
    display:flex;
    height:30px;
    width:30px;
    justify-content:center;
    align-items:center;
    position: absolute;
    background: var(--teal);
    color:var(--light);
    right:-10px;
    top:-10px;
    text-align: center;
    border-radius: 30px 30px 30px 30px;
    padding:3px 3px;
    font-size:20px;
}

</style>
