<script>
    import { flagIndo, flagUk } from '$lib/flags.js';
    import { ConeStriped, SignpostSplit, ExclamationTriangle, Book } from "svelte-bootstrap-icons";
    export let html = '';
    export let icon = 'cone';
    export let flag = 'indo';
    export let msg = '';
    export let position = 'left';

    let theFlag = flag == 'indo' ? flagIndo : flagUk;

    let showCone,showSign,showWarning,showFlag,showBook,left,right;

    if(icon == 'flag') {
        showFlag = true;
    } else if(icon == 'book') {
        showBook = true;
    } else if(icon == 'sign') {
        showSign = true;
    } else if(icon == 'warning') {
        showWarning = true;
    } else {
        showCone = true;
    }

    if(position == 'left') {
        right = false;
        left = true;
    } else {
        left = false;
        right = true;
    }

</script>

<div class="my-1" class:item-left={right} class:item-right={left}>
    {#if right}
        <div id="html">{msg}<slot name="html"></slot></div>
    {/if}
    <div id="icon">
        {#if showBook}
            <Book fill="#17a2b8" height={54} width={54} />
        {/if}
        {#if showCone}
            <ConeStriped fill="#dc3545" height={54} width={54} />
        {/if}
        {#if showSign}
            <SignpostSplit fill="#17a2b8" height={54} width={54} />
        {/if}
        {#if showWarning}
            <ExclamationTriangle fill="#dc3545" height={54} width={54} />
        {/if}
        {#if showFlag}
            <div style="font-size:2.5rem;">{@html theFlag}</div>
        {/if}
    </div>
    {#if left}
        <div id="html">{msg}<slot name="html"></slot></div>
    {/if}
</div>

<style>

    .item-left {
        display:grid;
        /* grid-template-columns: 1fr 70px; */
        grid-template-columns: 2fr 1fr;
    }

    .item-right {
        display:grid;
        /* grid-template-columns: 70px 1fr; */
        grid-template-columns: 1fr 2fr;
    }

    #icon {
        display:flex;
        justify-content: center;
        /* align-items: center; */
    }

    #html {
        display:flex;
        /* justify-content: center; */
        align-items: center;
    }

    div {
        /* border:1px solid green; */
    }

</style>
