<script>

    console.log('redirecting');
    import { onMount } from 'svelte';

    onMount(() => {
        window.location.href = "http://gurueap.com/t/arguline";
    });
</script>

<div id="redirecting">redirecting...</div>

<style>
    #redirecting {
        font-size:2rem;
        height:100dvh;
        display: flex;
        justify-content:center;
        align-items: center;
    }
</style>
