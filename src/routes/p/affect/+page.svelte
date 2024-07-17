<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
title="Affected by 'Affect to'"
description="Demonstrating the correct use of 'affect'"
/> 

<div class="mw-500 mb-3">

    <img src="/img/affect.png" class="img-fluid mx-auto mb-0 mt-1" alt="affect">

    <h1>Affected by 'Affect to'</h1>

    <div class="alert alert-danger font-italic">These days children see far too much violence on TV and this can <span class="font-weight-bold text-danger">affect to</span> their emotional development.</div>

    <p><i>Oops!</i></p>

    <p class="text-center"><b><i><span class="font-weight-bold text-warning">X</span> affects <span class="font-weight-bold text-danger">Y</span> (without ‘to’)</i></b></p>

    <div class="alert alert-success font-italic">These days children see far too much violence on TV and <span class="font-weight-bold text-warning">this</span> can <span class="font-weight-bold text-success">affect</span> <span class="font-weight-bold text-danger">their emotional development</span>.</div>

    <WithIcon icon="flag" position="right">
        <div slot="html"></div>
    </WithIcon>

</div>


<style>
    .myGrid {
        display:grid;
        grid-template-columns: 65px 1fr;
        column-gap: 7px;
        row-gap:12px;
    }
</style>
