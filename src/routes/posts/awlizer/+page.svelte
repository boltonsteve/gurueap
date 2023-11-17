<script>
    import SvelteSeo from "svelte-seo"
    import { sublists } from '$lib/sublists.js'
    import { scale } from 'svelte/transition'

    // From original
    let incoming = '';
    let wordObjs = [];
    let heads = [];
    let nonHeads = [];
    let slFeedbacks = [];

    let challengeOn = false;
    let showingOn = false;

    let total_selectable = 0;
    let total_selected = 0;
    let highlight_classes = 'border border-info px-1 rounded';
    // (Multiple classes can be added using spread operator..)
    let highlightClassesArr = ['border','border-info','px-1','rounded'];

    const showInstruction = `<p class="text-center">Words from the AWL are highlighted - <span class="text-success"><i><b>headwords</b></i> green</span>; <span class="text-primary"><i><b>non-headwords</b></i> blue</span>.</p>`;

    const remember = 'Type or paste some text into the box before continuing.';

    // For svelte
    let input = ''
    let output = ''
    let feedback = 'feedback here'
    let stats = 'stats here'
    let statsArr = []
    let midInstruction = 'midInstruction here'
    let showMidInstruction = false
    let showFeedback = false
    let showButtons = true;
    let challengeBtnDisabled = false;
    let showBtnDisabled = false;

    const challengeMe = () => {
        if(input == '') {
            alert(remember);
        } else {
            // Are there any 'academic' words in input?
            total_selectable = get_total_awl();
            if(total_selectable == 0) {
                alert('No AWL words found. Try entering some more text!');
            } else {
                let noun = total_selectable == 1 ? 'word' : 'words';
                let verb = total_selectable == 1 ? 'is' : 'are';
                midInstruction = `<div class="alert alert-info rounded">
                    Your text contains <b>${total_selectable}</b> AWL ${noun}.
                    <ul>
                        <li>Click (or tap) <b>${total_selectable}</b> ${noun} that you think ${verb} in the AWL.</li>
                        <li>Then click 'Show me'</li>
                    </ul>
                </div>`;
                showMidInstruction = true;
                challengeOn = true;
                challengeBtnDisabled = true;
            }
        }
    }

    const showMe = () => {
        if(challengeOn == true && total_selected == 0) {
            alert('You wanted a challenge, right? So select words that you think might be in the AWL before clicking "Show me".');
        } else {
            if(input == '') {
                alert(remember);
            } else {
                midInstruction = showInstruction;
                showMidInstruction = true;
                showingOn = true;
                show_stats();
            }
            challengeOn = false;
            challengeBtnDisabled = true;
        }
    }

    const handleInput = () => {

        let inputStr = input.replace(/\n+/g,' <br><br> ')
        let wordsArr = inputStr.split(' ');

        wordObjs = wordsArr.map(function(next,i) {

            let before = '';
            let after = '';

            // Get before(s)
            if(next.match(/^\W/)) {
                let befores=[];
                for(let wd of next) {
                    if(wd.match(/\W/)) {
                        befores.push(wd);
                    } else {
                        break;
                    }
                }
                before = befores.join('');
            }

            // Get after(s)
            if(next.match(/\W$/)) {
                let afters=[];
                for(let n=next.length-1; n>0; n--) {
                    if(next[n].match(/\W/)) {
                        afters.unshift(next[n]);
                    } else {
                        break;
                    }
                }
                after = afters.join('');
            }

            // Get word without before and after
            let word = next.replace(/^\W*/,'').replace(/\W*$/,'');

            return {
                word: word,
                before: before,
                after: after,
                headword: false,
                nonHeadword: false,
                selected: false
            };

        });

        if(showingOn == true) {
            show_stats();
        } else {
            show_basic();
        }

    }

    function show_basic() {

        let htmlArr = [];
        let id = 0;

        // Output based on sublists (?!)
        wordObjs.forEach(function(next,i) {

            let nextWord = next.word.toLowerCase();
            let {word,before,after,headword,nonHeadword,selected} = next;

            if(word == 'br><br') {
                htmlArr.push('<br><br>');
            } else {
                htmlArr.push(`${before}<span id="${id}">${word}</span>${after}`);
            }
            id++;

        });

        output = htmlArr.join(' ');

    }

    function show_stats() {

        let htmlArr = [];
        heads = [];
        nonHeads = [];
        slFeedbacks = [ [],[],[],[],[],[],[],[],[],[] ];
        let id = 0;

        // Output based on sublists (?!)
        wordObjs.forEach(function(next,i) {

            let nextWord = next.word.toLowerCase();
            let nextWithPunct = next.before + next.word + next.after;
            let spanHtml = '';
            let nextFamilyArr = [];
            let hl_classes = 'font-weight-bold font-italic';
            let selected_classes = '';

            if(next.selected == true) {
                selected_classes = ' ' + highlight_classes;
            }

            sublists.forEach(function(next,i) {

                // Cycle through word families
                for(let n=0; n<next.length; n++) {
                    nextFamilyArr = next[n].split(' ');

                    if(nextFamilyArr.includes(nextWord)) {
                        // Is HEADWORD?
                        if(nextWord == nextFamilyArr[0]) {
                            hl_classes += ' text-success';
                            heads.push(nextWord);
                            wordObjs[id].headword = true;
                        } else {
                            hl_classes += ' text-primary';
                            nonHeads.push(nextWord);
                            wordObjs[id].nonHeadword = true;
                        }
                        slFeedbacks[i].push(nextWord);
                        spanHtml = `<span id="${id}" class="${hl_classes}${selected_classes}">${nextWithPunct}</span>`;
                        htmlArr.push(spanHtml);

                    }

                }

            });

            if(spanHtml == '') {
                if(wordObjs[i].selected == true) {
                    htmlArr.push(`<span id="${id}" class="${selected_classes} text-danger font-weight-bold font-italic">${nextWithPunct}</span>`);
                } else {
                    htmlArr.push(`<span id="${id}" class="${selected_classes}">${nextWithPunct}</span>`);
                }
            }

            // Optional scoring system...
            /* if(challengeOn == true) { */

            /*     let correctly_selected = 0; */
            /*     let inAwl = 0; */

            /*     if(next.selected == true) { */
            /*         // = correctly selected */
            /*         if(next.headword == true || next.nonHeadword == true) { */
            /*             inAwl ++; */
            /*             correctly_selected ++; */
            /*         } */
            /*     } else { */
            /*         if(next.headword == true || next.nonHeadword == true) { */
            /*             inAwl ++; */
            /*         } */
            /*     } */

            /*     let score = 0; */
            /*     if(total_selected > 0) { */
            /*         score = Math.round( (correctly_selected / total_selected) * 100 ); */
            /*     } */

            /*     feedback = 'Score: ' + score + '%'; */
            /*     showFeedback = true; */

            /* } */

            id++;

        });

        output = htmlArr.join(' ');
        let uniqueHeads = [...new Set(heads)];
        let uniqueNonHeads = [...new Set(nonHeads)];
        
        let statsHtml = '<div class="row mt-3 pb-0">';

        // Reset statsArr
        statsArr = [];
        let stat = {};
        let sublist = 0;

        // Output feedbacks
        slFeedbacks.forEach(function(next,i) {

            if(next.length > 0) {

                stat = {
                    sublist: i+1,
                    listItems: []
                };

                let mapped = next.map(function(next) {
                    if(uniqueHeads.includes(next)) {
                        return `<span class="text-success">${next}</span>`;
                    } else {
                        return `<span class="text-primary">${next}</span>`;
                    }
                });

                stat.listItems = [...new Set(mapped)]
                statsArr.push(stat);

            }
        });

        showMidInstruction = true;

    }

    function get_total_awl() {

        const merged = sublists[0]
            .concat(sublists[1])
            .concat(sublists[2])
            .concat(sublists[3])
            .concat(sublists[4])
            .concat(sublists[5])
            .concat(sublists[6])
            .concat(sublists[7])
            .concat(sublists[8])
            .concat(sublists[9]);

        let all_merged = [];
        merged.forEach(function(next) {
            let words = next.split(' ');
            words.forEach(function(next) {
                all_merged.push(next);
            });
        });

        let found = 0;
        wordObjs.forEach(function(next) {
            if(all_merged.includes(next.word.toLowerCase())) {
                found ++;
            }
        });

        return found;

    }

    const handleSpan = (e) => {

        let id = e.target.id;
        let selected = wordObjs[id].selected;

        if(challengeOn == true) {
            if(total_selected == total_selectable && selected == false) {
                alert(`You have already made ${total_selectable} selections.\nDeselect items before continuing.`);
            } else {
                if(selected == false) {
                    selected = true;
                    document.getElementById(id).classList.add(...highlightClassesArr);
                    /* document.getElementById(id).classList.add('border','border-info','border-2','px-1','rounded'); */
                    total_selected ++;
                } else {
                    selected = false;
                    document.getElementById(id).classList.remove(...highlightClassesArr);
                    /* document.getElementById(id).classList.remove('border','border-info','border-2','px-1','rounded'); */
                    total_selected --;
                }
                wordObjs[id].selected = selected;
            }
        } else {
            if(showingOn == false) {
                alert('Click one of the buttons to get started!');
            }
        }

    }

</script>

<SvelteSeo
    title="Awlizer"
    description="An app that highights words in a text that are contained in the Academic Word List (AWL)"
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,vocabulary,academic word list,AWL"
 /> 

<div class="container mb-3 mx-auto" style="max-width:600px;">

    <h1>Academic Word List (AWL) Highlighter</h1>

    <p class="lead">Type or paste some text into the box below.</p>

    <textarea id="incoming" rows="4" class="form-control border rounded p-1" bind:value={input} on:input={handleInput} placeholder="input here.."></textarea>

    {#if showButtons}
        <div id="buttons" class="my-grid my-2">
            <button id="btn_challenge" class="btn w-100 btn-outline-info" on:click={challengeMe} disabled={challengeBtnDisabled}>Challenge me</button>
            <button id="btn_show" class="btn w-100 btn-outline-info" on:click={showMe} disabled={showBtnDisabled}>Show me</button>
        </div>
    {/if}

    {#if showMidInstruction}
        <div id="mid_instruction" transition:scale>{@html midInstruction}</div>
    {/if}

    <div id="stats" class="my-2">
        {#each statsArr as stat}
            <div>
                <h4 style="margin:0px;">Sublist {stat.sublist}</h4>
                <div id="list">{@html stat.listItems.join('<br>')}</div>
            </div>
        {/each}
    </div>

    {#if showFeedback}
        <div id="feedback">{@html feedback}</div>
    {/if}

    <div id="text" class="mb-3 mt-0 pt-0" on:click={handleSpan}>{@html output}</div>

</div>

<style>

    /* div { */
    /*     border:1px solid red; */
    /* } */

    ul {
        margin:0px;
        padding-left:0px;
        list-style-type:none;
    }

    #list {
        font-size: 0.9rem;
    }

    #stats {
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
        gap: 20px;
    }

    #feedback {
        font-size: 1.5rem;
        padding:10px;
        text-align:center;
    }

    .my-grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:20px;
    }

</style>
