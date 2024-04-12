<script>

    import SvelteSeo from "svelte-seo"
    import McQuiz from '../../components/McQuiz.svelte'

    let qa = [
        {
            question: "a drink",
            answers: [ "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "a bath",
            answers: [ "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "a good time",
            answers: [ "have", "do", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "a rest",
            answers: [ "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "your homework",
            answers: [ "do", "have", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "nothing",
            answers: [ "do", "have", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "the cooking",
            answers: [ "do", "have", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "your hair",
            answers: [ "do", "have", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "the dishes",
            answers: [ "do", "have", "go", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "home",
            answers: [ "go", "do", "have", "take", "make", "come", "let me" ]
        },
        {
            question: "bankrupt",
            answers: [ "go", "have", "do", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "crazy",
            answers: [ "go", "have", "do", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "shopping",
            answers: [ "go", "have", "do", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "abroad",
            answers: [ "go", "have", "do", "get", "take", "make", "come", "let me" ]
        },
        {
            question: "married",
            answers: [ "get", "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "lost",
            answers: [ "get", "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "ready",
            answers: [ "get", "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "started",
            answers: [ "get", "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "a job",
            answers: [ "get", "have", "do", "go", "take", "make", "come", "let me" ]
        },
        {
            question: "a break",
            answers: [ "take", "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "a look",
            answers: [ "take", "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "an exam",
            answers: [ "take", "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "a seat",
            answers: [ "take", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "a chance",
            answers: [ "take", "have", "do", "go", "get", "make", "come", "let me" ]
        },
        {
            question: "a mess",
            answers: [ "make", "have", "do", "go", "get", "take", "come", "let me" ]
        },
        {
            question: "a difference",
            answers: [ "make", "have", "do", "go", "get", "take", "come", "let me" ]
        },
        {
            question: "an effort",
            answers: [ "make", "have", "do", "go", "get", "take", "come", "let me" ]
        },
        {
            question: "money",
            answers: [ "make", "do", "go", "get", "take", "come", "let me" ]
        },
        {
            question: "the bed",
            answers: [ "make", "have", "do", "go", "get", "take", "come", "let me" ]
        },
        {
            question: "to life",
            answers: [ "come", "have", "do", "go", "get", "take", "make", "let me" ]
        },
        {
            question: "close",
            answers: [ "come", "have", "do", "go", "take", "make", "let me" ]
        },
        {
            question: "early",
            answers: [ "come", "have", "do", "go", "get", "take", "make", "let me" ]
        },
        {
            question: "last",
            answers: [ "come", "have", "do", "go", "get", "take", "make", "let me" ]
        },
        {
            question: "to a decision",
            answers: [ "come", "have", "do", "go", "get", "take", "make", "let me" ]
        },
        {
            question: "know",
            answers: [ "let me", "have", "do", "go", "get", "take", "make", "come", ]
        },
        {
            question: "think",
            answers: [ "let me", "have", "do", "go", "get", "take", "make", "come" ] },
        {
            question: "help you",
            answers: [ "let me", "have", "do", "go", "get", "take", "make", "come" ]
        },
        {
            question: "go",
            answers: [ "let me", "have", "do", "go", "get", "take", "make", "come" ]
        },
        {
            question: "see",
            answers: [ "let me", "have", "do", "go", "get", "take", "make", "come" ]
        }
    ]

</script>

<div style="max-width:400px;margin:0px auto;">
    <img src="/img/go-shopping.png" class="img-fluid rounded" alt="go shopping">
</div>

<McQuiz title="Common verb collcates" task="Select suitable verbs, then click 'Check answers'." qa={qa} />



