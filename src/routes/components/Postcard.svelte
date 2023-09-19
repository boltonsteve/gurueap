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

<a class="menu-item" href="../posts/{href}">
    {#if showBadge}
        <div class="badge">{@html video}</div>
    {/if}
    {title}
</a>


<style>

.menu-item {
    font-size:1.1rem;
    display:flex;
    justify-content:center;
    align-items:center;
    position:relative;
    min-width:230px;
    width:250px;
    height: 100px;
    border:1px solid var(--teal);
    /* border:1px solid #bbbbbb; */
    border-radius: 5px;
    margin:10px;
    text-align:center;
    background: white;
}

.menu-item:hover {
    background: var(--teal);
    color: var(--light);
    text-decoration: none;
}

.badge{
    display:flex;
    height:30px;
    width:30px;
    justify-content:center;
    align-items:center;
    position: absolute;
    background:var(--teal);
    color:var(--light);
    right:-10px;
    top:-10px;
    border-radius: 30px 30px 30px 30px;
}

</style>
