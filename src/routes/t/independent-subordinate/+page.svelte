<script>
    import SvelteSeo from "svelte-seo"
    import { fade } from 'svelte/transition'
    import { onMount } from 'svelte';

    let items = [
        {
            "bottom":[
                "Because my coffee was too cold, I heated it in the microwave.",
                "I heated my coffee in the microwave because it was too cold."
                ],
            "top":"Because",
            "left":"My coffee was too cold",
            "right":"I heated my coffee in the microwave"
        },
        {
            "bottom":["Though he was very rich, he was still very unhappy."],
            "top":"Though",
            "left":"He was very rich",
            "right":"He was still very unhappy"
        },
        {
            "bottom":[
                "She returned the computer after she noticed it was damaged.",
                "After she returned the computer, she noticed it was damaged."
                ],
            "top":"After",
            "left":"She returned the computer",
            "right":"She noticed the computer was damaged"
        },
        {
            "bottom":[
                "When the cost goes up, customers buy less clothing.",
                "The cost goes up when customers buy less clothing."
                ],
            "top":"When",
            "left":"The cost goes up",
            "right":"Customers buy less clothing"
        },
        {
            "bottom":[
                "As she was bright and ambitious, she became manager in no time.",
                "She became manager in no time as she was bright and ambitious."
                ],
            "top":"As",
            "left":"She was bright and ambitious",
            "right":"She became manager in no time"
        },
        {
            "bottom":[
                "Wherever you go, you can always find beauty.",
                "You can always find beauty wherever you go."
                ],
            "top":"Wherever",
            "left":"You go",
            "right":"You can always find beauty"
        },
        {
            "bottom":[
                "The movie, though very long, was still very enjoyable.",
                "Though very long, the movie was still very enjoyable."
                ],
            "top":"Though",
            "left":"The movie was very long",
            "right":"The movie was still very enjoyable"
        },
        {
            "bottom":[
                "Evergreen trees are a symbol of fertility because they do not die in the winter.",
                "Because they do not die in the winter, evergreen trees are a symbol of fertility."
                ],
            "top":"Because",
            "left":"Evergreen trees are a symbol of fertility",
            "right":"Evergreen trees do not die in the winter"
        },
        {
            "bottom":[
                "The actor was happy he got a part in a movie although the part was a small one.",
                "Although the part was a small one, the actor was happy he got a part."
                ],
            "top":"Although",
            "left":"The actor was happy he got a part in a movie",
            "right":"The part in the movie was a small one"
        },
        {
            "bottom":[
                "The museum was very interesting, as I expected.",
                "As i expected, the museum was very interesting."
                ],
            "top":"As",
            "left":"The museum was very interesting",
            "right":"I expected"
        },
        {
            "bottom":[
                "Because he is rich, people make allowance for his idiosyncrasies.",
                "People make allowances for his idiosyncracies because he is rich."
                ],
            "top":"Because",
            "left":"He is rich",
            "right":"People make allowance for his idiosyncrasies"
        },
        {
            "bottom":["The professional, who had been thoroughly trained, was at a loss to explain."],
            "top":"Who",
            "left":"The professional had been thoroughly trained",
            "right":"The professional was at a loss to explain"
        },
        {
            "bottom":[
                "When she was younger, she believed in fairy tales.",
                "She believed in fairy tales when she was younger."
                ],
            "top":"When",
            "left":"She was younger",
            "right":"She believed in fairy tales"
        },
        {
            "bottom":[
                "After the tornado hit the town, there was little left standing.",
                "There was little left standing after the tornado hit the town."
                ],
            "top":"After",
            "left":"The tornado hit the town",
            "right":"There was little left standing"
        },
        {
            "bottom":[
                "Because I don't have time to shop right now, I have to save this coupon.",
                "I have to save this coupon because I don’t have time to shop right now."
                ],
            "top":"Because",
            "left":"I have to save this coupon",
            "right":"I don’t have time to shop right now"
        },
        {
            "bottom":[
                "Let's go back to the restaurant where we had our first date."
                ],
            "top":"Where",
            "left":"Let's go back to the restaurant",
            "right":"We had our first date"
        },
        {
            "bottom":[
                "I chose not to go to the reunion although my cousin invited me.",
                "Although my cousin invited me, I chose not to go to the reunion."
                ],
            "top":"Although",
            "left":"My cousin invited me",
            "right":"I chose not to go to the reunion"
        },
        {
            "bottom":[
                "As genes change over time, evolution progresses.",
                "Evolution progresses as genes change over time."
                ],
            "top":"As",
            "left":"Genes change over time",
            "right":"Evolution progresses"
        },
        {
            "bottom":[
                "I really didn't like the play although the acting was very good.",
                "Although the acting was very good, I really didn't like the play."
                ],
            "top":"Although",
            "left":"I really didn't like the play",
            "right":"The acting was very good"
        },
        {
            "bottom":[
                "Everyone laughed when he got a cream pie smashed in his face.",
                "When he got a cream pie smashed in his face everyone laughed."
                ],
            "top":"When",
            "left":"Everyone laughed",
            "right":"He got a cream pie smashed in his face"
        }
    ];

    // 3 rows
    // Central row items load first
    // 't' shows top row (e.g. 'conjunction')
    // 'b' shows bottom row - answer

    let showTop, showLeft, showRight, showBottom = false;
    let top,left,right,bottomStr = '';
    let item = {};
    let ansArr = [];
    let bottom = [];

    let onKeyUp = (e) => {
        top = item.top;
        bottom = item.bottom;
        ansArr = bottom.map( (next) => {
            let lc = top.toLowerCase();
            next = next.replace(top, '<b><i>'+top+'</i></b>').replace(lc, '<b><i>'+lc+'</i></b>');
            return `<div>${next}</div>`;
        })
        if (e.key == 't') {
            showTop = true;
        } else if (e.key == 'b') {
            bottomStr = ansArr.join('');
            showBottom = true;
        } else if (e.key == 'n') {
            next();
        }
    }

    function next() {

        showTop = false;
        showLeft = false;
        showRight = false;
        showBottom = false;

        if(items.length) {
            item = items.shift()
            top = item.top;
            left = item.left;
            right = item.right;
            bottom = item.bottom;
        } else {
            left = 'empty';
            right = 'empty';
            top = ":'(";
        }

        showLeft = true;
        showRight = true;

    }

    onMount(() => {
        console.log('Mounting..');
        next();
    });

</script>

<div id="frame">
    <div id="top">
        {#if showTop}
            <div transition:fade>{top}</div>
        {/if}
    </div>
    <div id="middle">
        {#if showLeft}
            <div id="left" transition:fade>{left}</div>
        {/if}
        {#if showRight}
            <div id="right" transition:fade>{right}</div>
        {/if}
    </div>
    <div id="bottom">
        {#if showBottom}
            <div transition:fade>
                {#each ansArr as next}
                    {@html next}
                {/each}
            </div>
        {/if}
    </div>
</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />


<style>

/* div { */
/*     border:1px solid red; */
/* } */

#top {
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    font-size:3.5rem;
    font-weight:bold;
    border-bottom:1px dashed black;
}

#left,#right,#bottom {
    font-size:1.3rem;
}

#middle {
    display:grid;
    grid-template-columns: 1fr 1fr;
    justify-content:space-around;
    align-items: center;
    gap:20px;
    padding:10px;
    border-bottom:1px dashed black;
}

#left,#right {
    text-align:center;
}

#frame {
    height:100vh;
    display:flex;
    flex-direction: column;
}

#frame > div {
    height: 33.3vh;
}

#bottom {
    display:grid;
    gap:20px;
    grid-template-columns: 1fr;

    text-align:center;
    justify-content:center;
    align-items:center;
}

#bottom > div {
    /* display:grid; */
    /* grid-template-columns: 1fr; */
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    /* padding:10px; */
}

</style>
