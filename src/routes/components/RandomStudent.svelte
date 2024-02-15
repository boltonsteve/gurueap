<script>

    export let texts;

    import { scale,fade } from 'svelte/transition';
    let showActivity = false;
    let showTeacherSelect = true;
    let showName = true;
    let showText = true;
    let name = 'IZ';

    let text = 'press \'n\' for next';
    let names = 'Steve'; // (students's names)

    const teachers = {
        Steve: ['Dave','Sue','John'],
        Des: [
            'Des',
            'Awan',
            'Bowo',
            'Iin',
            'Yuli',
            'Ara',
            'Haz',
            'Hafidz',
            'Linda',
            'Nia'
        ]
    }

    const setTeacher = (e) => {
        let name = e.target.textContent;
        names = teachers[name];
        showActivity = true;
        showTeacherSelect = false;
    }

    const tNames = Object.keys(teachers);
    const tNamesLinksArr = tNames.map( next => {
            return `<span>${next}</span>`;
    });
    const tNamesLinksStr = tNamesLinksArr.join('&nbsp;-&nbsp;');

    function doNext() {

        showName = false;
        showText = false;

        if(texts.length) {

            names = shuffle(names);
            texts = shuffle(texts);

            name = names[0];
            text = texts.pop();

        } else {
            name = '<a href="../posts/s-iz">listen here</a>';
            text = 'No more texts!';
        }

        setTimeout(function() {
            showText = true;
            setTimeout(function() {
                showName = true;
            }, 4000);
        }, 500);

    }

    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let onKeyUp = (e) => {
        if (e.key == 'n') {
            doNext();
        } else if (e.key == 'N') {
            doPrevious();
        }
    }


</script>

{#if showTeacherSelect}
    <div id="teacher_select" on:click={setTeacher} transition:fade>
        <div>Click your name..</div>
        <h2>{@html tNamesLinksStr}</h2>
        <div>Your name not here?<br>Give Steve a list of your students' names.</div>
    </div>
{/if}

{#if showActivity}
    <div class="activity" transition:fade>
        <div>
            {#if showName}
                <div id="name" transition:scale>{@html name}</div>
            {/if}
        </div>
        <div>
            {#if showText}
                <div id="text" transition:fade>{@html text}</div>
            {/if}
        </div>
    </div>
{/if}

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

#teacher_select div {
    text-align:center;
}

#teacher_select {
    background:#eeeeee;
    height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

}

.activity {
    background:#eeeeee;
    height:100vh;
    display: flex;
    flex-direction:column;
}

.activity div {
    height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
}

#name {
    font-size:5rem;
}

#text {
    font-size:3rem;
}
</style>
