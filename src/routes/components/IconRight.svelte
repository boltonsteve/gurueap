<script>
    import { flagIndo, flagUk } from '$lib/flags.js';
    import { ConeStriped, SignpostSplit, ExclamationTriangle } from "svelte-bootstrap-icons";
    export let html = '';
    export let icon = 'cone';
    export let flag = 'indo';

    let theFlag = flag == 'indo' ? flagIndo : flagUk;

    let cone,sign,warning,showFlag;

    if(icon == 'flag') {
        showFlag = true;
    } else if(icon == 'sign') {
        sign = true;
    } else if(icon == 'warning') {
        warning = true;
    } else {
        cone = true;
    }


</script>

<div id="item" class="my-1">
    <div id="icon">
        {#if cone}
            <ConeStriped fill="#dc3545" height={54} width={54} />
        {/if}
        {#if sign}
            <SignpostSplit fill="#0d6efd" height={54} width={54} />
        {/if}
        {#if warning}
            <ExclamationTriangle fill="#dc3545" height={54} width={54} />
        {/if}
        {#if showFlag}
            <div style="font-size:2.5rem;">{@html theFlag}</div>
        {/if}
    </div>
    <div id="html"><slot name="html"></slot></div>
</div>

<style>
#item {
    display:grid;
    grid-template-columns: 70px 1fr;
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
