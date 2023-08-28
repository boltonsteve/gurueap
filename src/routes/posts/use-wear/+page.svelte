<script>
    import { flagIndo, flagUk } from '$lib/flags.js'
</script>

<svelte:head>
    <title>Use or Wear</title>
</svelte:head>

<div class="mb-3 mw-500">

    <img src="/img/shoes.jpg" class="mx-auto img-fluid rounded" alt="shoes" style="border:1px solid #333333;">

    <h1>Use or Wear</h1>


<div class="flex row-col cols-16 mb-2">
    <div>Candidate {@html flagIndo}</div>
    <div>
        <p class="font-italic">I always <span class="font-weight-bold text-danger">use</span> special shoes when I'm working in the laboratory.</p>
        <p class="mt-0">Ya ya ya Mr IELTS Examiner. I should say <i><b>wear</b></i> special shoes!  But the context is perfectly clear and you understand what I mean, right? I mean, you can easily picture <a href="https://www.google.com/search?q=lab+shoes&amp;client=safari&amp;rls=en&amp;tbm=isch&amp;tbo=u&amp;source=univ&amp;sa=X&amp;ved=0ahUKEwjYt9-g8Z7LAhXTCo4KHTRLDa8QsAQIHA" target="_blank" rel="noopener">the shoes I'm talking about,</a> right?</p>
    </div>
</div>

<div class="flex row-col cols-16">
    <div>Examiner: {@html flagUk}</div>
    <div><p class="mt-0">Yes, I understand. But you're using weak <i><b>verb/noun collocation, </b></i>and so I have to give you a low score for vocabulary. Next time you want to translate 'pake baju', or 'pake sepatu', please 'pake' <i><b>wear. </b></i>OK?</p>

        <p class="font-italic">I always <span class="font-weight-bold text-success">wear</span> special shoes when I'm working in the laboratory.</p>
    </div>
</div>


</div>

    <style>
h3 {
    margin-bottom:0px;
    padding-bottom:0px;
}
.strategy {
    margin-top:0px;
    padding-top:0px;
}
    </style>
