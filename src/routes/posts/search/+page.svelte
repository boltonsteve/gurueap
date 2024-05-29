<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<SvelteSeo
    title="Search / Search for"
    description="Demonstrating the difference in meaning between 'search' and 'search for'"
/>

<div class="mb-3 mw-500">

    <img src="/img/search.png" class="img-fluid border mt-1" alt="search (for)">

    <h1>Search / Search for</h1>

    <div class="alert alert-danger font-italic">Now I am <span class="text-danger font-weight-bold">searching</span> ways to make the Lombok community aware of mental health.</div>

    <WithIcon icon="flag" position="right" msg="Indonesian candidates often use <b><i>search</i></b> (memeriksa) when they mean <b><i>search for</i></b> (mencari)." />

    <h3 class="mt-0">Search</h3>

    <p>In the photograph at the top of the page, a policewoman is <b><i>searching</i></b> a car. She is not <b><i>searching for</i></b> the car - she has already found the car!</p>

    <h3>Search for</h3>

    <p>In the photograph at the top of the page, a policewoman is <b><i>searching for</i></b> something inside the car, possibly a weapon or drugs.</p>

    <p>In our opening example - mental health in Lombok - our writer probably meant to write:</p>

    <div class="alert alert-success font-italic mb-2">Now I am <span class="text-success font-weight-bold">searching for</span> ways to make the Lombok community aware of mental health.</div>

    <p>Look at <a href="https://skell.sketchengine.eu/#result?lang=en&query=searching&f=concordance" target="_blank">these examples</a> and notice the difference between <b><i>search</i></b> and <b><i>search for</i></b>.</p>

</div>


<style>
h3 {
    margin-bottom:0px;
}
p {
    margin-top:0px;
}
</style>
