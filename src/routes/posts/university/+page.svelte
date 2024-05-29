<script>
    import SvelteSeo from "svelte-seo"
    import * as animateScroll from "svelte-scrollto";

    let id, guess, correct;

    const lines = [
        {
            line: 'Our son is reading physiology <b><i>at university</i></b>.',
            corr: 'A'
        },
        {
            line: 'Jackson married while <b><i>at university</i></b> in 1966.',
            corr: 'A'
        },
        {
            line: 'She made three other films while <b><i>at university</i></b>.',
            corr: 'A'
        },
        {
            line: 'Richards began writing songs while studying English <b><i>at university</i></b> in 1996.',
            corr: 'A'
        },
        {
            line: 'Previous generations started much younger, perhaps when <b><i>at university</i></b>.',
            corr: 'A'
        },
        {
            line: 'Where does this leave scientists <b><i>at universities</i></b>?',
            corr: 'B'
        },
        {
            line: 'Degrees in mechanical engineering are offered <b><i>at universities</i></b> worldwide.',
            corr: 'B'
        },
        {
            line: 'Jacob has taught and lectured <b><i>at universities</i></b> internationally.',
            corr: 'B'
        },
        {
            line: 'He has lectured <b><i>at universities</i></b> and colleges since he graduated.',
            corr: 'B'
        },
        {
            line: 'Rand was a frequent lecturer <b><i>at universities</i></b> across the country.',
            corr: 'B'
        },
        {
            line: 'Nearly 25 thousand students study were studying <b><i>at the university</i></b>.',
            corr: 'C'
        },
        {
            line: 'There are many student organizations <b><i>at the university</i></b>.',
            corr: 'C'
        },
        {
            line: 'His position <b><i>at the university</i></b> assured him studio space.',
            corr: 'C'
        },
        {
            line: 'Many talented instructors worked <b><i>at the University</i></b> at various times.',
            corr: 'C'
        },
        {
            line: 'Researchers <b><i>at the university</i></b> made several high-profile achievements in recent years.',
            corr: 'C'
        }
    ]

    shuffle(lines);

    function shuffle(array) {
      var currentIndex = array.length,  randomIndex;
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

    let el;

    const doCheck = () => {

        let els = document.querySelectorAll('.ans');

        // Reset colors
        for(el of els){
            el.classList.remove('bg-success','bg-danger','bg-warning','text-light')
        }

        /* console.log(els); */
        els.forEach( next => {
            id = next.id;
            guess = next.value;
            correct = next.attributes.data.value;
            if(guess == 'select') {
                document.getElementById(id).classList.add('bg-warning','text-light');
            } else if(guess == correct) {
                document.getElementById(id).classList.add('bg-success','text-light');
            } else {
                document.getElementById(id).classList.add('bg-danger','text-light');
            }
        })

        animateScroll.scrollToTop({duration: 1000});

    }

</script>

<SvelteSeo
    title="(At) (the) universit(y/ies)"
    description="Different meanings of 'university' - buildings, level of education, etc."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary"
 />

<div class="mb-3 mw-500">

    <img src="/img/university.png" class="img-fluid mt-1" alt="university">

    <h1 class="my-1">At (the) universit(y/ies)</h1>

    <p class="lead mb-3">Select the correct meaning from the menus on the right.<br>Then click 'check'.</p>
    
    <div id="activity" class="my-3">
        {#each lines as next, index}
            <div>{@html next.line}</div>
            <div>
                <select id="S{index}" class="ans form-control" data="{next.corr}">
                    <option value="select">select</option>
                    <option value="A">level of education</option>
                    <option value="B">buildings</option>
                    <option value="C">a building</option>
                </select>
            </div>
        {/each}
    </div>

    <button class="btn btn-outline-primary check mx-auto d-block" on:click={doCheck}>check</button>


</div>


<style>
#activity {
    display:grid;
    grid-template-columns: 2fr 1fr;
    column-gap: 10px;
    row-gap: 20px;
}
    .btn {
        font-size:1.1rem;
    }
</style>
