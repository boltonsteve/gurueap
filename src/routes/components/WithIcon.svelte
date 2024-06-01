<script>
    import { flagIndo, flagUk } from '$lib/flags.js';
    import { ConeStriped, SignpostSplit, ExclamationTriangle, Book, InfoCircle, CircleHalf, HandThumbsUp, HandThumbsDown, Link45deg, Key, MusicNoteBeamed } from "svelte-bootstrap-icons";
    export let html = '';
    export let icon = 'cone';
    export let flag = 'indo';
    export let msg = '';
    export let position = 'left';

    let theFlag = flag == 'indo' ? flagIndo : flagUk;

    let showCone,showSign,showWarning,showFlag,showInfo,showBook,left,right,showThumbUp,showThumbDown, showKey, showMusic;

    if(icon == 'flag') {
        showFlag = true;
    } else if(icon == 'info') {
        showInfo = true;
    } else if(icon == 'book') {
        showBook = true;
    } else if(icon == 'sign') {
        showSign = true;
    } else if(icon == 'key') {
        showKey = true;
    } else if(icon == 'warning') {
        showWarning = true;
    } else if(icon == 'thumbUp') {
        showThumbUp = true;
    } else if(icon == 'thumbDown') {
        showThumbDown = true;
    } else if(icon == 'music') {
        showMusic = true;
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

<div class:item-left={right} class:item-right={left}>
    {#if right}
        <div id="html"><p class="m-0">{@html msg}</p><slot name="html"></slot></div>
    {/if}
    <div id="icon">
        {#if showMusic}
            <MusicNoteBeamed fill="var(--dark)" height={54} width={54} />
        {/if}
        {#if showBook}
            <Book fill="var(--dark)" height={54} width={54} />
        {/if}
        {#if showKey}
            <Key fill="var(--dark)" height={54} width={54} />
        {/if}
        {#if showCone}
            <ConeStriped fill="var(--red)" height={54} width={54} />
        {/if}
        {#if showInfo}
            <InfoCircle fill="var(--teal)" height={54} width={54} />
        {/if}
        {#if showSign}
            <SignpostSplit fill="var(--teal)" height={54} width={54} />
        {/if}
        {#if showWarning}
            <ExclamationTriangle fill="var(--red)" height={54} width={54} />
        {/if}
        {#if showThumbUp}
            <HandThumbsUp fill="var(--green)" height={54} width={54} />
        {/if}
        {#if showThumbDown}
            <HandThumbsDown fill="var(--red)" height={54} width={54} />
        {/if}
        {#if showFlag}
            <div style="font-size:2.5rem;">{@html theFlag}</div>
        {/if}
    </div>
    {#if left}
        <div id="html"><p class="m-0 p-0">{@html msg}</p><slot name="html"></slot></div>
    {/if}
</div>

<style>

    .item-left {
        display:grid;
        grid-template-columns: 3fr 1fr;
    }

    .item-right {
        display:grid;
        grid-template-columns: 1fr 3fr;
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
