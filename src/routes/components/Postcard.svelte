<script>

    import { Film } from "svelte-bootstrap-icons";
    /* export let title = ''; */
    /* export let href = ''; */
    /* export let badge = ''; */
    export let postcard;
    let title = postcard.title;
    let href = postcard.href;
    let badge = postcard.badge;
    /* export let {title, href, keywords, badge} = postcard; */

    /* console.log('postcard: ', postcard); */

    let showBadge = badge !== '' ? true : false;

</script>

<a class="menu-item" href="../posts/{href}" style="padding:0px 10px 0px 10px;">
    {#if showBadge}
        <div class="badge"><Film /></div>
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
