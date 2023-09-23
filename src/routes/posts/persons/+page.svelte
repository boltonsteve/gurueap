<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
    import Carousel from 'svelte-carousel'

    let images = ['/img/persons1.jpg','/img/persons2.jpg','/img/persons5.jpg','/img/persons6.png','/img/persons9.jpg','/img/persons11.jpg','/img/persons12.jpg'];
</script>

<SvelteSeo
title="People and persons"
    description="Demonstrating the situational use of 'persons' and advocating for the use of 'people'."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,appropriacy"
/> 

<div class="mw-500 mb-3">

    <h1>People or Persons</h1>

    <div class="alert alert-danger font-italic">The event was extremely successful. It was attended by more than a thousand <span class="font-weight-bold text-danger">persons</span>.</div>

    <WithIcon icon="warning" position="right">
        <div slot="html">The only time I ever use this word ('persons') is in the classroom. Outside the classroom - 99.9% of the time - the plural of <b><i>person</i></b> is <b><i>people</i></b>:</div>
    </WithIcon>

    <div class="alert alert-success font-italic">The event was extremely successful. It was attended by more than a thousand <span class="font-weight-bold text-success">people</span>.</div>

    <p>Only use <b><i>persons</i></b> in extremely formal, especially legal situations:</p>

    <Carousel
  let:loaded
>
  {#each images as src, imageIndex (src)}
    <div class="img-container">
      {#if loaded.includes(imageIndex)}
          <img {src} alt="nature" style="max-height:140px;" />
      {/if}
    </div>
  {/each}
  </Carousel>

  <div class="my-2">

    <img src="/img/people-person.png" class="mx-auto" alt="paople person mug" style="max-width:180px;float:right;margin-left:10px;">
    <p>And now, before the music, an idiom. The 'people person' mug! If you're a 'people person' then basically you much prefer to be with other people than to be alone.</p>

    <p>Well, you've had a gallery, and an idiom. Now some music - a song about 'people' from two famous people persons - <a href="https://www.youtube.com/watch?v=L09tOZ-MXA0" target="_blank" rel="noopener">Barbara Streisand and Stevie Wonder</a>!</p>
  </div>

</div>

<style>
.img-container {
    display:flex;
    justify-content:center;
    align-items:center;
}
</style>
