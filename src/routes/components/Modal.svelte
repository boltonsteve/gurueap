<script>
    import { scale, fade } from 'svelte/transition'
    export let msg = 'Please attempt all questions.';
    export let btn_txt = 'OK';
    export let showModal = false;
    export let modalWidth = 300;
</script>


{#if showModal}
<div class="backdrop" transition:fade on:click|self>
    <div class="modal" style="width:{modalWidth}px;">
        <div>{@html msg}</div>
        <div class="btn-div">
            <button class="mt-2" on:click|self>{btn_txt}</button>
        </div>
    </div>
</div>
{/if}

<style>
    .backdrop {
        width:100dvw;
        height:100dvh;
        background: rgba(0,0,0,0.8);
        position: fixed; 
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:50;
        overflow:scroll;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    .modal {
        max-height:100dvh;
        margin-top:30px;
        padding:20px;
        border-radius:10px;
        min-width:200px;
        background:white;
        overflow:auto;
    }
    .btn-div {
        text-align: right;
        margin-left: auto;
    }
</style>
