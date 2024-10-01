<script>
    import Flipcard from '../../components/flipcard.svelte';
    import SvelteSeo from "svelte-seo";

    let idioms = [
        {
            front: "He worked hard but the design was <b><i>an abortion</i></b>!",
            back: "Something somebody produces - pretty much anything - that turns out to be bad/ugly/disappointing."
        },
        {
            front: "If you <b><i>raise your head above the parapet</i></b>, expect to get your head blown off!",
            back: "Arrogant behaviour can get you into trouble!"
        },
        {
            front: "The project was over-ambitious! He <b><i>bit off more than his portion</i></b>!",
            back: "To attempt more than one is capable of, possibly too quickly."
        },
        {
            front: "The audience enjoyed the show and <b><i>drowned the artist in applause</i></b>.",
            back: "Give high praise to somebody."
        },
        {
            front: "<b><i>Strap your colt on</i></b> - here comes the boss!",
            back: "Prepare for a confrontation with someone. (Colt 45 handgun)"
        },
        {
            front: "Yeah he's a terrible politician. No wonder he <b><i>gets so much crap</i></b>!",
            back: "Receive criticism"
        },
        {
            front: "Ya I tried hard to landscape the garden but it turned into a bit of a <b><i>chop suey</i></b>.",
            back: "A confused mess!"
        },
        {
            front: "The conference was <b><i>a meeting of great minds</i></b>.",
            back: "A successful joint effort, because of the high standard of the people involved."
        },
        {
            front: "What have you done to my mother's house?! She'll be <b><i>turning in her grave!</i></b>",
            back: "Upsetting someone who is already dead because what you've done is so bad!"
        },
        {
            front: "If I get a promotion next year I'll <b><i>eat my hat!</i></b>",
            back: "Not literally! You'll just be extremely surprised because it's so unlikely!"
        },
        {
            front: "Hi guys, John can't make it tonight. He has a <b><i>rendezvous</i></b>!",
            back: "A hot date, possibly in secret."
        },
        {
            front: "They've <b><i>pulled the plug on</i></b> the project, so we'll need to find other jobs.",
            back: "Stop funding or supporting an activity."
        },
        {
            front: "Ok <b><i>the gloves are off</i></b>! I mean business this time!",
            back: "Planning a serious fight usually non-physical, often because you have been wronged by someone."
        },
        {
            front: "<b><i>Lay off</i></b> Tom, guys. He didn't mean to offend.",
            back: "Stop teasing or tormenting someone."
        },
        {
            front: "Don't <b><i>start on</i></b> me. I'm only doing my job!",
            back: "Begin teasing or tormenting someone, often because you feel they have wronged you."
        },
        {
            front: "It's <b><i>open season</i></b> now <b><i>on</i></b> Bill. he's made so many mistakes it's ridiculous!",
            back: "A time for everyone to criticise a person or an idea, because he/she/it has done bad or stupid things."
        },
        {
            front: "If he says he'll quit that's <b><i>an idle threat</i></b>. He needs the money.",
            back: "Threatening to take action when you know that such action would cause you harm."
        },
        {
            front: "I was in a restaurant and suddenly the sound of violins <b><i>came wafting through</i></b>.",
            back: "Passed through, rather like the way the smell of food passes through a room from the kitchen."
        }
    ]

</script>


<SvelteSeo
    title="Idioms - Kenny G"
  description="Idioms used in the song 'I agree with Pat Metheny'"
/>

<h1 class="text-center mb-0">Idioms - Kenny G</h1>

<p class="text-center mt-0">Mouse over (or tap) cards to flip them.</p>

<div id="main">

{#each idioms as idiom}
    <Flipcard front="{idiom.front}" back="{idiom.back}" />
{/each}

</div>

<style>
#main {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
}
</style>
