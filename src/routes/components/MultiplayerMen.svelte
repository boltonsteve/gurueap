<script>
    import { PeopleFill } from "svelte-bootstrap-icons"
    export let players = 2;
    let peopleSize = 50;

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

</script>

<div id="men">
    {#each {length: players} as _, i}
        <div id="{men[i].id}">
            <PeopleFill fill="{men[i].color}" width={peopleSize} height={peopleSize} />
            <div>{men[i].score}</div>
        </div>
    {/each}
</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>
#men {
    display:flex;
    justify-content:space-around;
    height: 80px;
    text-align:center;
    font-size:1.2rem;
}
</style>
