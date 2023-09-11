import * as animateScroll from "svelte-scrollto";

export const checkAnswers = () => {

    // reset background colours
    for (i of document.all) {
        i.removeAttribute('warning','success','danger');
    };

    let fb = '';

    let score = 0;
    let guesses = document.getElementsByClassName("ans");
    for (var i = 0; i < guesses.length; i++) {
        let el = document.getElementById("A"+(i+1));
        el.classList.remove('warning')
        let guess = guesses.item(i).value;
        let correct = guesses.item(i).attributes.data.value;
        if(guess == '') {
            el.classList.add('warning');
        } else {
            if(guess.toLowerCase().trim() == correct.toLowerCase().trim()) {
                el.classList.add('success');
                score ++;
            } else {
                el.classList.add('danger');
            }
        }
    }

    fb = `<h1 class="text-center mb-0">Score: ${score}/${guesses.length}</h1>`;
    if(score < guesses.length) {
        fb += '<p class="text-center mt-0">Keep trying!</p>';
    } else {
        fb += '<p class="text-center mt-0">Excellent!</p>';
    }

    document.getElementById('feedback').innerHTML = fb;

    animateScroll.scrollTo({element: '#feedback', duration: 2000, offset: -50})

}
