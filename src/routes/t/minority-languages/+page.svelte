<script>


    import { PeopleFill } from "svelte-bootstrap-icons"
    import { scale, fade } from 'svelte/transition'
    import { onMount } from 'svelte'

    let players = 2;
    let title = 'minority languages';

    let peopleSize = 50;

    let t = 'Minority languages all over the world are in danger of extinction. Every year, as their last remaining speakers pass away, a few languages die out. Should the governments of those countries that harbour minority languages take steps to preserve them, or should they merely let them die out naturally?';

    let spans = t.replace(/(\b\w+\b)/g,'|$1|');
    let spanArr = spans.split('|');

    let count = 1;
    let spanned = spanArr.map( (next,i) => {
        let toReturn = '';
        if(next.match(/[a-zA-Z0-9]/)) {
            toReturn = `<span id="s${i}" class="uli">&nbsp;&nbsp;&nbsp;${count}&nbsp;&nbsp;&nbsp;</span>`;
            count ++;
        } else {
            toReturn = `<span id="s${i}">${next}</span>`;
        }
        return toReturn;
    })

    let activity = spanned.join(' ');

    let men = [
        {
            color:'var(--green)',
            score: 0
        },
        {
            color:'var(--blue)',
            score: 0
        },
        {
            color:'var(--red)',
            score: 0
        },
        {
            color:'var(--orange)',
            score: 0
        }
    ]
   
    let onKeyUp = (e) => {
        if (e.key == 'g') {
            men[0].score ++
        } else if (e.key == 'G') {
            men[0].score --
        } else if (e.key == 'b') {
            men[1].score ++
        } else if (e.key == 'B') {
            men[1].score --
        } else if (e.key == 'r') {
            men[2].score ++
        } else if (e.key == 'R') {
            men[2].score --
        } else if (e.key == 'o') {
            men[3].score ++
        } else if (e.key == 'O') {
            men[3].score --
        } else if (e.key == '1') {
            players = 1;
        } else if (e.key == '2') {
            players = 2;
        } else if (e.key == '3') {
            players = 3;
        } else if (e.key == '4') {
            players = 4;
        }
    }

    function doSpan(e) {
        console.log(e);
        let id = Number(e.target.id.replace(/s/,''));
        spanned[id] = `<span id="s${id}">${spanArr[id]}</span>`;
        activity = spanned.join(' ');
    }

</script>

<div id="container">

    <div id="header">
        {#each {length: players} as _, i}
            <div id="{men[i].id}">
                <PeopleFill fill="{men[i].color}" width={peopleSize} height={peopleSize} />
                <div>{men[i].score}</div>
            </div>
        {/each}
    </div>

    <div id="title">{title}</div>

    <div id="activity">
        <div on:click={doSpan}>{@html activity}</div>
    </div>

    <div id="footer">
        <div>1234 players</div>
        <div>rgboRGBO points</div>
    </div>

</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

/* div { */
/*     border:1px solid red */
/* } */

    #activity {
        font-size:1.8rem;
        max-width:800px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0px auto;
        line-height:3rem;
    }

#container {
    height:100vh;
    display:grid;
    grid-auto-flow: column;
    grid-template-rows: 100px 40px 1fr 25px;
}

#header {
    display:flex;
    justify-content:space-around;
    padding-top:10px;
}

#header > div {
    text-align:center;
    font-size:1.5rem;
}

#title {
    display:flex;
    justify-content:center;
    align-items:center;
    font-size: 2rem;
    color: var(--light);
    background: var(--grey);
}

#question {
    text-align:center;
    font-size:1.5rem;
    align-items:center;
    gap:20px;
}

#footer {
    color: #aaaaaa;
    font-size:1rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

</style>

