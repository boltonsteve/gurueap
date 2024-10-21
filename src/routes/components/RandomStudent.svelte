<script>

    export let texts;
    export let student;

    import { scale,fade } from 'svelte/transition';
    let showActivity = true;
    let showTeacherSelect = false;
    let showName = true;
    let showText = true;

    let text = 'press \'n\' for next';
    let students = 'Steve'; // (students)

    const teachers = {
        Steve: [
            'Faqih',
            'Helena',
            'Sri',
            'Ghulam',
            'Didik',
            'Mia',
            'Shintia',
            'Inara',
            'Ismi',
            'Petrus',
            'Sol',
            'Wawan',
            'Roy',
            'Yasmeen',
            'Yansu',
            'Arekha'
        ],
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

    /* const setTeacher = (e) => { */
        let teacher = 'Steve';
        /* let teacher = e.target.textContent; */
        students = teachers[teacher];
        showActivity = true;
        showTeacherSelect = false;
    /* } */

    const tNames = Object.keys(teachers);
    const tNamesLinksArr = tNames.map( next => {
            return `<span>${next}</span>`;
    });
    const tNamesLinksStr = tNamesLinksArr.join('&nbsp;-&nbsp;');

    function doNext() {

        showName = false;
        showText = false;

        if(texts.length) {

            students = shuffle(students);
            texts = shuffle(texts);

            student = students[0];
            text = texts.pop();

        } else {
            student = 'No more texts..!';
            /* text = 'No more texts!'; */
            text = '<a href="https://www.gurueap.com/posts/s-iz" target="_blank">IZ: examples!</a>';
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
                <div id="student" transition:fade>{@html student}</div>
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

#student {
    font-size:5rem;
}

#text {
    font-size:3rem;
}
</style>
