<script>
    import SvelteSeo from "svelte-seo"
    import ThreeRows from '../../components/ThreeRows.svelte'

    let items = [
        {
            "top":"Because",
            "middle": [
                "My coffee was too cold",
                "I heated my coffee in the microwave"
            ],
            "bottom":[
                "Because my coffee was too cold, I heated it in the microwave.",
                "I heated my coffee in the microwave because it was too cold."
            ]
        },
        {
            "top":"Though",
            "middle": [
                "He was very rich",
                "He was still very unhappy"
            ],
            "bottom":["Though he was very rich, he was still very unhappy."]
        },
        {
            "top":"After",
            "middle": [
                "She returned the computer",
                "She noticed the computer was damaged"
            ],
            "bottom":[
                "She returned the computer after she noticed it was damaged.",
                "After she noticed the computer was damaged, she returned it."
            ]
        },
        {
            "top":"When",
            "middle": [
                "The cost goes up",
                "Customers buy less clothing"
            ],
            "bottom":[
                "When the cost goes up, customers buy less clothing.",
                "Customers buy less clothing when the cost goes up."
            ]
        },
        {
            "top":"As",
            "middle": [
                "She was bright and ambitious",
                "She became manager in no time"
            ],
            "bottom":[
                "As she was bright and ambitious, she became manager in no time.",
                "She became manager in no time as she was bright and ambitious."
            ]
        },
        {
            "top":"Wherever",
            "middle": [
                "You go",
                "You can always find beauty"
            ],
            "bottom":[
                "Wherever you go, you can always find beauty.",
                "You can always find beauty wherever you go."
            ]
        },
        {
            "top":"Though",
            "middle": [
                "The movie was very long",
                "The movie was still very enjoyable"
            ],
            "bottom":[
                "The movie, though very long, was still very enjoyable.",
                "Though very long, the movie was still very enjoyable."
            ]
        },
        {
            "top":"Because",
            "middle": [
                "Evergreen trees are a symbol of fertility",
                "Evergreen trees do not die in the winter"
            ],
            "bottom":[
                "Evergreen trees are a symbol of fertility because they do not die in the winter.",
                "Because evergreen trees do not die in the winter, they are a symbol of fertility."
            ]
        },
        {
            "top":"Although",
            "middle": [
                "The actor was happy he got a part in a movie",
                "The part in the movie was a small one"
            ],
            "bottom":[
                "The actor was happy he got a part in a movie although the part was a small one.",
                "Although the part was a small one, the actor was happy he got a part."
            ]
        },
        {
            "top":"As",
            "middle": [
                "The museum was very interesting",
                "I expected"
            ],
            "bottom":[
                "The museum was very interesting, as I expected.",
                "As I expected, the museum was very interesting."
            ]
        },
        {
            "top":"Because",
            "middle": [
                "He is rich",
                "People make allowance for his idiosyncrasies"
            ],
            "bottom":[
                "Because he is rich, people make allowance for his idiosyncrasies.",
                "People make allowances for his idiosyncracies because he is rich."
            ]
        },
        {
            "top":"Who",
            "middle": [
                "The professional had been thoroughly trained",
                "The professional was at a loss to explain"
            ],
        "bottom":["The professional, who had been thoroughly trained, was at a loss to explain."]
        },
        {
            "top":"When",
            "middle": [
                "She was younger",
                "She believed in fairy tales"
            ],
            "bottom":[
                "When she was younger, she believed in fairy tales.",
                "She believed in fairy tales when she was younger."
            ]
        },
        {
            "top":"After",
            "middle": [
                "The tornado hit the town",
                "There was little left standing"
            ],
            "bottom":[
                "After the tornado hit the town, there was little left standing.",
                "There was little left standing after the tornado hit the town."
            ]
        },
        {
            "top":"Because",
            "middle": [
                "I have to save this coupon",
                "I don’t have time to shop right now"
            ],
            "bottom":[
                "Because I don't have time to shop right now, I have to save this coupon.",
                "I have to save this coupon because I don’t have time to shop right now."
            ]
        },
        {
            "top":"Where",
            "middle": [
                "Let's go back to the restaurant",
                "We had our first date"
            ],
            "bottom":[
                "Let's go back to the restaurant where we had our first date."
            ]
        },
        {
            "top":"Although",
            "middle": [
                "My cousin invited me",
                "I chose not to go to the reunion"
            ],
            "bottom":[
                "I chose not to go to the reunion although my cousin invited me.",
                "Although my cousin invited me, I chose not to go to the reunion."
            ]
        },
        {
            "top":"As",
            "middle": [
                "Genes change over time",
                "Evolution progresses"
            ],
            "bottom":[
                "As genes change over time, evolution progresses.",
                "Evolution progresses as genes change over time."
            ]
        },
        {
            "top":"Although",
            "middle": [
                "I really didn't like the play",
                "The acting was very good"
            ],
            "bottom":[
                "I really didn't like the play although the acting was very good.",
                "Although the acting was very good, I really didn't like the play."
            ]
        },
        {
            "top":"When",
            "middle": [
                "Everyone laughed",
                "He got a cream pie smashed in his face"
            ],
            "bottom":[
                "Everyone laughed when he got a cream pie smashed in his face.",
                "When he got a cream pie smashed in his face everyone laughed."
            ]
        }
    ]

</script>

<SvelteSeo
title="independent subordinate"
description="Using subordinating conjunctions to join independent clauses."
 />

<ThreeRows {items} />
