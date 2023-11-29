<script>

    import SvelteSeo from "svelte-seo"
    import MultiplayerMen from '../../components/MultiplayerMen.svelte'

</script>

<SvelteSeo
title="Men"
 /> 

<div class="activity">
    <MultiplayerMen />
    <div class="flex-cc">Something else</div>
    <div class="flex-cc">Something else</div>
</div>

<style>

    /* * { */
    /*     border:1px solid red; */
    /* } */

    .activity {
        height:100vh;
        display:grid;
        grid-auto-flow:column;
        grid-template-rows:80px 1fr 1fr;
    }

</style>
