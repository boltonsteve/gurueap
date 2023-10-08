<script>
    import Flipcard from '../../components/flipcard.svelte';
    import SvelteSeo from "svelte-seo";

    let idioms = [
        {
            front: "Living in a large city can be expensive and so sometimes students struggle to <b><i>make ends meet</i></b>.",
            back: "Pay for food, pay the bills, etc."
        },
        {
            front: "The design <b><i>ticks the right boxes</i></b>. It's elegant, cheap to make, and doesn't harm the environment!",
            back: "Satisfies important criteria."
        },
        {
            front: "She recreated the recommended essay structure <b><i>to a tee</i></b>.",
            back: "Faithfully and accurately."
        },
        {
            front: "He's such an idealist. He always <b><i>sees</i></b> the world <b><i>through rose-tinted glasses</i></b>.",
            back: "To be excessively optimistic in a given situation."
        },
        {
            front: "My brother is very good at English. For him the IELTS test will be <b><i>a piece of cake</i></b>.",
            back: "Very easy."
        },
        {
            front: "iPhones are great, but they <b><i>cost an arm and a leg</i></b>!",
            back: "They're very expensive!"
        },
        {
            front: "I've actually been feeling <b><i>under the weather</i></b> for the past few days and I wasn't sure I'd be ble to attend the test.",
            back: "Feeling ill."
        },
        {
            front: "Yes I've been studying hard and, well, <b><i>so far so good</i></b>!",
            back: "Everything is going well, at least for now."
        },
        {
            front: "My boss told me I was being demoted, but she was only <b><i>pulling my leg</i></b>. She gave me a promotion.",
            back: "Give someone misinformation, as a joke."
        },
        {
            front: "I really hope I get a score this time. I don't want to <b><i>miss the boat</i></b> again!",
            back: "Miss an opportunity."
        },
        {
            front: "It was late and I was ready to <b><i>hit the sack</i></b>, but I decided to finish the assignment.",
            back: "Go to bed."
        },
        {
            front: "I know that if I want a good IELTS score I'll need to <b><i>get my act together</i></b>.",
            back: "Stop being lazy, focus carefully and work hard."
        },
        {
            front: "There's no <b><i>cutting corners</i></b> with IELTS preparation. Anything less than 100% effort is just not enough!",
            back: "Avoiding effort or spending less in order to finish something quickly."
        },
        {
            front: "I was about to <b><i>call it a day</i></b> with the scholarship applications, but then I got this offer from AAS!",
            back: "Stop trying, or stop doing something that's not worth the effort."
        },
        {
            front: "I disagreed, but since he's my boss I decided to <b><i>eat humble pie</i></b>.",
            back: "Pretend that you agree with someone so as to avoid negative consequences."
        },
        {
            front: "Stop <b><i>beating around the bush</i></b>! Just say what you want to say!",
            back: "Avoiding the main point in an argument."
        },
        {
            front: "I <b><i>drew the short straw</i></b> when it came to job placement. My colleagues went to tropical countries but they sent me to Iceland!",
            back: "To receive something that is not as attractive than the things other people receive."
        },
        {
            front: "Please keep <b><i>me in the loop</i></b>, John. I need to know all the latest developments!",
            back: "If you are <i>in the loop</i>, you are aware of the latest details relating to an ongoing situation."
        },
        {
            front: "Banning hooliganism by banning football is like <b><i>throwing out the baby with the bath water</i></b>!",
            back: "Taking extreme steps to solve a problem so that the overall effect is worse than the original problem."
        },
        {
            front: "Farming is their <b><i>bread and butter</i></b>. It's their only source of income.",
            back: "Main means of earning money."
        },
        {
            front: "When she told me she loved me I felt like I was <b><i>on cloud nine</i></b>.",
            back: "Extremely happy!"
        },
        {
            front: "Samsung and Apple are <b><i>neck and neck</i></b> in terms of sales.",
            back: "Competing at an equal level."
        },
        {
            front: "I don't want to make all those people redundant, but I suppose I'll have to <b><i>bite the bullet</i></b>.",
            back: "When you do something you don't really want to do, but you have to."
        },
        {
            front: "I go to the cinema <b><i>once in a blue moon</i></b> - maybe once every five years!",
            back: "You do something very infrequently."
        },
        {
            front: "Innovation starts to happen when people <b><i>think outside the box</i></b>.",
            back: "Using original thought to think about a problem."
        },
        {
            front: "He gave me a hard time when he was my boss, but <b><i>now the shoe is on the other foot</i></b>. I'm his boss!",
            back: "When the roles of leader and follower are reversed, unfortunately for the new follower!"
        },
        {
            front: "The gig economy is <b><i>a grey area</i></b> in terms of taxation and employment benefits.",
            back: "A situation in which meanings are less clear and often ignored."
        },
        {
            front: "When people complain about the public sector, they're <b><i>barking up the wrong tree</i></b>. The private sector is much worse!",
            back: "Looking in the wrong place for something, or talking about something irrelevant"
        }
    ]

</script>


<SvelteSeo
    title="Idiom Flipcards"
  description="Some examples of English idioms. Using these occasionally helps to increase your IELTS score for vocabulary, or Lexical Resource (LR), especially in IELTS Speaking."
/>

<h1 class="text-center mb-0">Idioms</h1>

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
