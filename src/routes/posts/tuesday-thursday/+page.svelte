<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
    import Youtube from "svelte-youtube-embed";
</script>

<SvelteSeo
    title="Not Tuesday! Thursday!"
    description="Demonstrating the difference in pronunciation between 'tuesday and 'thursday'"
/>

<div class="mb-3 mw-500">

    <h1>Not tuesday! Thursday!</h1>

    <div class="dialogue mb-2">
        <div>Customer:</div>
        <div>Hi. I’ve come to collect one of the free iPhones.</div>
        <div>Shopkeeper:</div>
        <div>Sorry, we told you to come on Tuesday. Today is Thursday. The phones are all taken!</div>
    </div>

    <WithIcon icon="flag" position="right" msg="Indonesians (and maybe you, too?) find it difficult to hear the difference between ‘Tuesday’ and ‘Thursday’ as spoken by native speakers. That’s because Indonesians do not say these words very well, and if you cannot say it clearly then you cannot hear it clearly." />

    <h3>‘Tuesday’ is easy</h3>

    <p class="pl-3 font-italic">‘Choose’ + ‘Day’ = Chooseday = Tuesday</p>

    <h3>‘Thursday’ is more challenging</h3>

    <p>Try saying ‘Sir’, but change the ‘s’ sound by pressing your tongue against the back of your upper teeth. Keep your tongue pressed against your teeth and just try to blow air between your tongue and your teeth. Keep your tongue in position so that it almost – but not quite – stops the air from getting out.</p>

    <p>As you blow air past your teeth, try not to make any sound in your throat, like when the doctor asks you to say ‘Aaaaaaaaa’. Don’t do that – just blow!</p>

    <p class="pl-3"><i>‘Th…………………’</i></p>

    <p>You should be able to blow out for several seconds, and so you should be able to make a ‘th’ sound for several seconds.</p>

    <p class="pl-3"><i>‘Th…………………………..’</i></p>

    <p>Now add ‘Th’ to ‘Sir’, substituting ‘Th’ for ‘S’ (= ‘Thir!’). And then, as you say ‘ir’, you can add sound in your throat:</p>

    <p class="pl-3"><i>‘Th…….’</i> (lots of breath, no throat sound)… + ‘ir’ (less breath, added throat sound )…</p>

    <p>Finally you can complete the word with ‘..sday’:</p>

    <p class="pl-3"><i>‘Th……….’ + ‘ir…..’ + ‘sday’</i></p>

    <p>Now listen to two students and a teacher pronouncing the words Tuesday and Thursday!</p>

    <Youtube id="6LqPuMKFkz0" />

</div>


<style>
    .dialogue {
        display:grid;
        grid-template-columns: 90px 1fr;
        gap: 10px;
        
    }
</style>
