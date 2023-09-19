<script>
    import { scale } from 'svelte/transition'
    export let msg = 'Please attempt all questions.';
    export let btn_txt = 'OK';
    export let showModal = false;
</script>


{#if showModal}
<div class="backdrop" transition:scale on:click|self>
    <div class="modal">
        <div>{msg}</div>
        <button class="mt-2" on:click|self>{btn_txt}</button>
    </div>
</div>
{/if}

<style>
    .backdrop {
        width:100%;
        height:100%;
        background: rgba(0,0,0,0.8);
        position: fixed; 
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .modal {
        padding:20px;
        border-radius:10px;
        max-width:400px;
        margin:10% auto;
        text-align:center;
        background:white;
    }
</style>
