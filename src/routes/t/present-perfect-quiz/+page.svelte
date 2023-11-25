<script>

    import SvelteSeo from "svelte-seo"
    import McQuiz from '../../components/McQuiz.svelte'

    let qa = [
        {
            question:"Have your parents ______ yet?",
            answers:[
                "arrived",
                "been arriving"
            ]
        },
        {
            question:"You've got white dust all over you! What have you ______?",
            answers:[
                "been doing",
                "done"
            ]
        },
        {
            question:"He's ______ for the party for weeks.",
            answers:[
                "been preparing",
                "prepared"
            ]
        },
        {
            question:"She's ______ three main ways our company can reduce costs.",
            answers:[
                "found",
                "been finding"
            ]
        },
        {
            question:"I've ______ to call the internet company all morning but I can't get through.",
            answers:[
                "been trying",
                "tried"
            ]
        },
        {
            question:"I'm worried about Sam. She's ______ too hard recently.",
            answers:[
                "been working",
                "worked"
            ]
        },
        {
            question:"Thanks for the recipe book! We've ______ two different recipes so far.",
            answers:[
                "tried",
                "been trying"
            ]
        },
        {
            question:"Have you always ______ garlic?",
            answers:[
                "hated",
                "been hating"
            ]
        }
    ]

</script>

<McQuiz title="Present Perfect Quiz" task="Simple or Continuous?!|Select suitable answers, then click 'Check answers'." qa={qa} />



