<script>
    import { scale, fade } from 'svelte/transition'
    import { onMount } from 'svelte'

    export let items;

    let item = {}
    let top = "'t' = top"
    let middle = ["'m' = middle"]
    let bottom = ["'b' = bottom; 'n' = next; 'N' = previous"]
    let showTop = true
    let showMiddle = true
    let showBottom = true
    let current = -1

    function redraw() {
        showTop = false
        showMiddle = false
        showBottom = false
        item = items[current]
        top = item.top // str
        middle = doHighlight(item.middle) // arr
        bottom = doHighlight(item.bottom) // arr
    }

    function previous() {
        if(current > 0) {
            current --
            redraw();
        }
    }

    function next() {
        if(current < items.length-1) {
            current ++
            redraw()
        }
    }

    let onKeyUp = (e) => {
        if (e.key == 't') {
            showTop = true
        } else if (e.key == 'm') {
            showMiddle = true
        } else if (e.key == 'b') {
            showBottom = true
        } else if (e.key == 'N') {
            previous()
        } else if (e.key == 'n') {
            next()
        }
    }

    function doHighlight(arr) {
        let arrArr = arr.map( next => {
            let lc = top.toLowerCase()
            return next
                .replace(top, '<b><i>'+top+'</i></b>')
                .replace(lc, '<b><i>'+lc+'</i></b>')
        })
        return arrArr;
    }

    /* onMount(() => { */
    /*     next() */
    /* }) */

</script>


<div id="rows">

    <div id="top">
        {#if showTop}
            <div transition:fade>{top}</div>
        {/if}
    </div>

    <div id="middle">
        {#if showMiddle}
            <div transition:fade>
                {#each middle as next}
                    <div class="text-center">{@html next}</div>
                {/each}
            </div>
        {/if}
    </div>

    <div id="bottom">
        {#if showBottom}
            <div transition:fade>
                {#each bottom as next}
                    <div class="text-center">{@html next}</div>
                {/each}
            </div>
        {/if}
    </div>

    <div id="footer">
        <div><b><i>t</i></b>op/<b><i>m</i></b>iddle/<b><i>b</i></b>ottom; n:next/N:previous</div>
        <div>{(items.length-current)-1}</div>
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

#middle,#bottom {
    font-size:1.3rem;
}

#middle {
    display:flex;
    justify-content:center;
    align-items: center;
    border-bottom:1px dashed black;
}

#middle > div {
    width:100%;
    display:flex;
    justify-content:space-around;
    gap:20px;
}

#left,#right {
    text-align:center;
}

#rows {
    height:100vh;
    display:grid;
    grid-template-rows:1fr 1fr 1fr 20px;
    grid-auto-flow:column;
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
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
}

#footer {
    display:flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color:#cccccc;
}

</style>
