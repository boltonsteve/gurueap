<script>
    import SvelteSeo from "svelte-seo"
    import { countries } from '$lib/countries.js'
    import { shuffle } from '$lib/shuffle.js'

    let ans = [];
    let country = [];
    let rand = 0;
    let random = 0;
    let i1,i2,i3,i4 = false;
    let guess = '';
    let correct = [];
    let next = false;

    let sName = false;
    let sNat = false;
    let sPer = false;
    let sLang = false;

    let dName = false;
    let dNat = false;
    let dPer = false;
    let dLang = false;

    const doCheck = () => {

            i1 = false;
            i2 = false;
            i3 = false;
            i4 = false;

            next = true;


        if(correct.includes(guess)) {

            if(rand == 0) {
                sName = true;
            } else if(rand == 1) {
                sNat = true;
            } else if(rand == 2) {
                sPer = true;
            } else if(rand == 3) {
                sLang = true;
            }

        } else { // Incorrect..

            if(rand == 0) {
                dName = true;
            } else if(rand == 1) {
                dNat = true;
            } else if(rand == 2) {
                dPer = true;
            } else if(rand == 3) {
                dLang = true;
            }

        }

    }

    const doUpdate = (e) => {
        let data = e.target.getAttribute('data').toLowerCase();
        correct = data.split('<br>');
        guess = e.target.value.toLowerCase();
    }

    const getCountry = () => {
        random = Math.floor(Math.random() * countries.length) + 1;
        return countries[random];
    }

    let showing = true;
    let testName,testNationality,testPerson,testLanguage;

    let doTest = () => {

        rand = Math.floor(Math.random() * 3) + 0;
        showing = false;
        country = getCountry();

        if(rand == 0) {
            i1 =  true;
        } else if(rand == 1) {
            i2 =  true;
        } else if(rand == 2) {
            i3 =  true;
        } else {
            i4 = true;
        }

    }

    let doNext = () => {

        i1 = false;
        i2 = false;
        i3 = false;
        i4 = false;
        sName = false;
        sNat = false;
        sPer = false;
        sLang = false;
        dName = false;
        dNat = false;
        dPer = false;
        dLang = false;

        doTest();

        next = false;
        guess = '';
    }

    let doShow = () => {
        i1 = false;
        i2 = false;
        i3 = false;
        i4 = false;
        showing = true;
    }

</script>

<div class="container mb-3">

    <img src="/img/countries.png" class="img-fluid mt-1" alt="countries - world map">

    {#if showing}
        <button class="btn btn-outline-primary mx-auto my-2" on:click={doTest}>test me</button>
    {/if}

    {#if !showing}
        <button class="btn btn-outline-primary mx-auto my-2" on:click={doShow}>show me</button>
    {/if}

    {#if showing}
        <div class="countries">
            <div class="heading">Country</div>
            <div class="heading">Nationality</div>
            <div class="heading">Person</div>
            <div class="heading">Language</div>
            {#each countries as country}
                <div class="name">{@html country.name}</div>
                <div class="nationality">{@html country.nationality}</div>
                <div class="person">{@html country.person}</div>
                <div class="language">{@html country.language}</div>
            {/each}
        </div>
    {/if}

    {#if !showing}
        <div class="countries">
            <div class="heading">Country</div>
            <div class="heading">Nationality</div>
            <div class="heading">Person</div>
            <div class="heading">Language</div>
            {#if i1}
                <input type="text" class="form-control" autofocus data="{country.name}" on:input={doUpdate} />
            {:else}
                <div class="name" class:sName class:dName>{@html country.name}</div>
            {/if}
            {#if i2}
                <input type="text" class="form-control" autofocus data="{country.nationality}" on:input={doUpdate} />
            {:else}
                <div class="nationality" class:sNat class:dNat>{@html country.nationality}</div>
            {/if}
            {#if i3}
                <input type="text" class="form-control" autofocus data="{country.person}" on:input={doUpdate} />
            {:else}
                <div class="person" class:sPer class:dPer>{@html country.person}</div>
            {/if}
            {#if i4}
                <input type="text" class="form-control" autofocus data="{country.language}" on:input={doUpdate} />
            {:else}
                <div class="language" class:sLang class:dLang>{@html country.language}</div>
            {/if}

        </div>

        {#if next}
            <button class="btn btn-outline-primary mx-auto my-2" on:click={doNext}>next</button>
        {:else}
            <button class="btn btn-outline-primary mx-auto my-2" on:click={doCheck}>check</button>
        {/if}

    {/if}

</div>


<style>
.container {
    max-width:550px;
    margin: 20px auto;
}
.heading {
    font-weight: bold;
    font-size: 1.2rem;
}
.headings, .countries {
    display:grid;
    grid-template-columns:1fr 1fr 1fr 1fr;
    column-gap:10px;
    row-gap:20px;
}

.btn {
    font-size: 1.1rem;
    width:120px;
}

.sName,.sNat,.sPer,.sLang {
    color: green;
    font-weight: bold;
}

.dName,.dNat,.dPer,.dLang {
    color: red;
    font-weight: bold;
}

</style>
