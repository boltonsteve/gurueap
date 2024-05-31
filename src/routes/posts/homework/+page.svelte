<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Have you done your homework"
    description="Reminding Indonesian IELTS candidates about present perfect tense."
/>

<div class="mb-3 mw-500">

    <img src="/img/homework.png" class="img-fluid mt-1" alt="homework">

    <h3>Have you done your homework?</h3>

    <div class="myGrid">
        <div>Teacher:</div>
        <div><i>Have you all done your homework?</i></div>
        <div>Students:</div>
        <div><i>Already!</i></div>
    </div>
 
    <WithIcon icon="warning" position="right" msg="If you are Indonesian then you’re probably trying to construct <i>present perfect</i> tense. For Indonesians your options are generally <b><i>already</i></b> and <b><i>not yet</i></b>. However, you should think about using more <i>present perfect</i> in your English, especially if you’re preparing for IELTS." />

    <p>Using <i>present perfect</i> accurately and appropriately will increase your score for grammar in IELTS speaking and writing:</p>

    <div class="myGrid">
        <div>Teacher:</div>
        <div><i>Have you all done your homework?</i></div>
        <div>Students:</div>
        <div><i>Yes, <b>we have!</b></i></div>
    </div>

</div>

<style>
    .myGrid {
        display:grid;
        grid-template-columns: 80px 1fr;
        row-gap: 2px;
        padding-left: 30px;
        margin-bottom:15px;
    }
</style>


