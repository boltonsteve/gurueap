<script>

    import SvelteSeo from "svelte-seo";
    import { ArrowUpCircle, ArrowDownCircle, ArrowUpCircleFill, ArrowDownCircleFill, ArrowLeftCircle, ArrowRightCircle, PlusCircle, DashCircle, QuestionCircle } from "svelte-bootstrap-icons";
    import { slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    let claims = [
        {
            text:"This is a good tool for outlining texts and visualising arguments (press '?' for instructions).",
            indent:0,
            borderColor:'black',
            bullet:true,
            active:true
        },
        {
            text:"This tool makes it is easy to make a standard outline (press 't' to toggle between <b><i>argument</i></b> and <b><i>outline</i></b> mode).",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can edit selected items.",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can move items up and down.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent items left and right.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can visualise an argument (press 't' to toggle between <b><i>argument</i></b> and <b><i>outline</i></b> mode).",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can edit selected claims.",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can visualise the logical relationships between claims.",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can move claims up and down.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent claims left and right to highlight their logical function.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can set the colour outlines of claims to highlight their logical function.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can include labels with claims that indicate their logical function.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can easily save and load <b><i>outlines</i></b> and <b><i>arguments</i></b> in plain text format.",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        }
    ]

    const indent = 50;
    const borderThickness = 2;
    const size = 30;
    let current = 0;
    let input = claims[0].text;
    let info = false;
    let editing = false;
    let outline = false;
    let label = '';
    let showLabels = true;
    let toSave = '';

    onMount(() => {
        toggleMode();
        toggleMode();
    });

    const toggleType = () => {
        outline = !outline;
        document.getElementById('type').blur();
        redraw();
    }

    const toggleMode = () => {
        if(editing) {
            editing = false;
            document.getElementById('editing').blur();
            document.getElementById('editing').setAttribute("disabled","");
            document.getElementById('editing').classList.remove('bg-yellow');
        } else {
            editing = true;
            document.getElementById('editing').removeAttribute("disabled");
            document.getElementById('editing').classList.add('bg-yellow');
            document.getElementById('editing').focus();
        }
        redraw();
    }

    const handleClick = (e) => {
        let id = Number(e.target.id.replace(/c/,''));
        claims.forEach( next => {
            next.active = false;
        })
        current = id;
        claims[current].active = true;
        claims = [...claims];
        input = claims[current].text;
    }

    const handleInput = (e) => {
        if(editing) {
            input = e.target.value;

            input = input.replace(/\[(\w+)\]/,'<b>$1</b>');

            claims[current].text = input;
            claims = [...claims];
        }
    }

// Movement
    const up = () => {
        if(current > 0) {
            let temp = claims[current-1];
            claims[current-1] = claims[current];
            claims[current] = temp;
            current --;
        }
    }

    const upFocus = () => {
        if(current > 0) {
            current --;
        }
        redraw();
    }

    const down = () => {
        if(current < claims.length-1) {
            let temp = claims[current+1];
            claims[current+1] = claims[current];
            claims[current] = temp;
            current ++;
        }
    }

    const downFocus = () => {
        if(current < claims.length-1) {
            current ++;
        }
        redraw()
    }

    const left = () => {
        if(claims[current].indent > 0) {
            claims[current].indent = claims[current].indent - 1;
        }
    }

    const right = () => {
        claims[current].indent = claims[current].indent + 1;
    }

    let onKeyUp = (e) => {

        if (e.key == 'Enter') {
            toggleMode();
            let str = document.getElementById('editing').value;
            str = str.replace(/\n/g,'');
            document.getElementById('editing').value = str;
        } else if(e.key == 'ArrowUp' && editing == false) {
            if(e.shiftKey) {
                up();
            } else {
                upFocus();
            }
        } else if(e.key == 'ArrowDown' && editing == false) {
            if(e.shiftKey) {
                down();
            } else {
                downFocus();
            }
        } else if(e.key == 'ArrowLeft' && editing == false) {
            let thisIndent = claims[current].indent;
            if(thisIndent > 0) {
                thisIndent --;
                claims[current].indent = thisIndent;
            }
            redraw();
        } else if(e.key == 'ArrowRight' && editing == false) {
            let thisIndent = claims[current].indent;
            thisIndent ++;
            claims[current].indent = thisIndent;
            redraw();
        } else if(e.key == 'b' && editing == false) {
            claims[current].bullet = true;
        } else if(e.key == 'h' && editing == false) {
            claims[current].bullet = false;
        } else if(e.key == 't' && editing == false) {
            toggleType();
        } else if(e.key == '?' && editing == false) {
            toggleInfo();
        } else if(e.key == 'n' && editing == false) {
            newMap();
        } else if(e.key == '+' && editing == false) {
            addClaim();
        } else if(e.key == '-' && editing == false) {
            deleteClaim();
        } else if(e.key == 'H' && editing == false) {
            claims[current].borderColor = 'black';
            redraw();
        } else if(e.key == 'R' && editing == false) {
            claims[current].borderColor = 'red';
            redraw();
        } else if(e.key == 'B' && editing == false) {
            claims[current].borderColor = 'blue';
            redraw();
        } else if(e.key == 'G' && editing == false) {
            claims[current].borderColor = 'green';
            redraw();
        } else if(e.key == 'O' && editing == false) {
            claims[current].borderColor = 'orange';
            redraw();
        } else if(e.key == 'A' && editing == false) {
            claims[current].borderColor = 'grey';
            redraw();
        } else if(e.key == 'l' && editing == false) {
            loadMap();
        } else if(e.key == 'n' && editing == false) {
            newMap();
        }

    }

    const redraw = () => {

        let str = ''
        let arr = [];

        let bigHorses = [false,false,false,false,false,false,false,false,false,false,false];
        claims.forEach( (next,i) => {
            next.active = false;

            // Set list style types
            let ind = claims[i].indent;
            if(ind % 3 == 1) {
                claims[i].lst = 'disc';
            } else if(ind % 2 == 1) {
                claims[i].lst = 'square';
            } else {
                claims[i].lst = 'circle';
            }

            if(showLabels) {
                if(claims[i].borderColor == 'black') {
                    label = '';
                } else if(claims[i].borderColor == 'green') {
                    label = '<b><i>(and) because..</i></b> ';
                } else if(claims[i].borderColor == 'red') {
                    label = '<b><i>but..</i></b> ';
                } else if(claims[i].borderColor == 'orange') {
                    label = '<b><i>however..</i></b> ';
                } else if(claims[i].borderColor == 'blue') {
                    label = '<b><i>in fact..</i></b> ';
                } else if(claims[i].borderColor == 'grey') {
                    label = '<b><i>for example..</i></b> ';
                } else {
                    label = '<b><i>because..</i></b> ';
                }
            } else {
                label = '';
            }
            claims[i].label = label;


            let str = next.text.replace(/\n/,'');
            str = str.replace(/\t/g,'');

            let tabs = '';
            for(let i=0;i<next.indent;i++) {
                tabs += '\t';
            }
            let bulletBH = next.bullet ? 'B' : 'H';

            arr.push(tabs + next.borderColor+'|'+bulletBH+'|' + str)

        })

        claims[current].active = true;
        claims = [...claims];
        input = claims[current].text;

        toSave = arr.join('\r\n');

        /* navigator.clipboard.writeText(str); */

    }

    const addClaim = () => {
        let newClaim = {
            text: "new item..",
            indent: claims[current].indent,
            borderColor: 'green',
            active: false
        }
        claims.splice(current+1, 0, newClaim);
        claims.forEach( next => {
            next.active = false;
        })
        current ++;

        claims[current].active = true;
        claims = [...claims];
        input = claims[current].text;
        toggleMode();
    }

    const deleteClaim = () => {
        claims.splice(current, 1);
        current = 0;
        redraw();
    }

    const changeColor = (e) => {
        let newColor = e.target.id;
        claims[current].borderColor = newColor;
        redraw();
    }

    const newMap = () => {
        claims = [
            {
                text:"next item..",
                indent:0,
                borderColor:'black',
                bullet:true,
                active:true
            }
        ]
        redraw();
    }

    const loadMap = () => {

        let str = '';
        navigator.clipboard.readText().then((copiedText) => {
            str = copiedText;
        });

        setTimeout(function() {

            let lines = str.split(/\n/);
            let newClaims = lines.map( next => {

                if(next !== '') {

                    let indent = countTabs(next);
                    let bullet = '';
                    let borderColor = '';
                    let text = '';

                    if(next.match(/\|/)) {
                        // Has formatting
                        let str = next.replace(/\t/g,'');
                        let arr = str.split(/\|/);
                        text = arr.pop();

                        arr.forEach( next => {
                            if(next == 'B') {
                                bullet = next;
                            } else if(next == 'H') {
                                bullet = next;
                            } else {
                                borderColor = next;
                            }
                        })

                    } else {
                        // No formatting
                        text = next.replace(/\t/g,'');
                        bullet = 'B';
                        borderColor = 'green';
                    }

                    let nObj = {
                        text: text,
                        active: false,
                        indent,
                        bullet,
                        borderColor
                    };

                    return nObj;

                }

            });

            let filtered = newClaims.filter( next => next !== undefined);

            claims = [...filtered];
            current = 0;

            redraw();

        }, 300); // End timeout

    }

    const toggleInfo = () => {
        info = !info;
    }

    const toggleLabels = () => {
        showLabels = !showLabels;
        redraw();
    }

    const saveMap = () => {

        let str = ''
        let arr = [];

        claims.forEach( (next,i) => {
            next.active = false;

            // Set list style types
            let ind = claims[i].indent;
            if(ind % 3 == 1) {
                claims[i].lst = 'disc';
            } else if(ind % 2 == 1) {
                claims[i].lst = 'square';
            } else {
                claims[i].lst = 'circle';
            }


            if(showLabels) {
                if(claims[i].borderColor == 'black') {
                    label = '';
                } else if(claims[i].borderColor == 'green') {
                    label = '<b>[because]</b> ';
                } else if(claims[i].borderColor == 'red') {
                    label = '<b>[but]</b> ';
                } else if(claims[i].borderColor == 'orange') {
                    label = '<b>[however]</b> ';
                } else if(claims[i].borderColor == 'blue') {
                    label = '<b>[in fact]</b> ';
                } else if(claims[i].borderColor == 'grey') {
                    label = '<b>[for example]</b> ';
                } else {
                    label = '<b>[because]</b> ';
                }
            } else {
                label = '';
            }
            claims[i].label = label;


            let str = next.text.replace(/\n/,'');
            str = str.replace(/\t/g,'');

            let tabs = '';
            for(let i=0;i<next.indent;i++) {
                tabs += '\t';
            }
            let bulletBH = next.bullet ? 'B' : 'H';

            arr.push(tabs + next.borderColor+'|'+bulletBH+'|' + str)

        })

        claims[current].active = true;
        claims = [...claims];
        input = claims[current].text;

        toSave = arr.join('\r');

        console.log(toSave);
        navigator.clipboard.writeText(toSave);

    }

    const countTabs = (str) => {
        const re = /\t/g
        return ((str || '').match(re) || []).length
    }

    toggleLabels();

</script>

<SvelteSeo
    title="ArgOut"
/> 

<div id="text_edit">
    <textarea id="editing" rows="5" on:input={handleInput} onkeydown="return (event.keyCode!=13);">{input}</textarea>
</div>

<div id="cols">

    <div id="col_left">
        <div>

            {#if info}
                <div id="info" transition:slide>
                    <div class="mb-1">
                        <p>Activity saves to clipboard automatically after each edit.</p>
                        <p>Press <code>enter</code> to toggle between 'Insert' and 'Arrange' mode.</p>
                    </div>
                    <h3 style="margin-left:30px;">In 'Insert' mode</h3>
                    <div style="margin-left:60px;">
                        <p><code>Type</code> to edit items.</p>
                    </div>
                    <h3 style="margin-left:30px;">In 'Arrange' mode</h3>
                    <div style="margin-left:60px;">
                        <p><code>click</code> or <code>type ?</code> to toggle instructions.</p>
                        <p><code>click</code> <b><i>type</i></b> (or <code>type t</code>) to toggle between outline and argument format.</p>
                        <p><code>click</code> <b><i>new</i></b> (or <code>type n</code>) for new map/outline.</p>
                        <p><code>click</code> <b><i>load</i></b> (or <code>type l</code>) to load map/outline from clipboard.</p>
                        <p><code>click</code> colours to change border colour.</p>
                        <p><code>click</code> or <code>type <PlusCircle /></code> to add an item, <code><DashCircle /></code> to remove an item.</p>
                        <p><code>click</code> or <code>type <ArrowUpCircle /></code> to select next claim up, <code><ArrowDownCircle /></code> to select next claim down.</p>
                        <p><code>click</code> or <code>type shift + <ArrowUpCircle /></code> to move claim up, <code>shift + <ArrowDownCircle /></code> to move claim down.</p>
                        <p><code>click</code> or <code>type <ArrowLeftCircle /></code> to move indent left, <code><ArrowRightCircle /></code> to move indent right.</p>
                    </div>
                </div>
            {/if}

            <div id="map" style="overflow:auto;">
                {#each claims as claim, i}
                    <div style="margin-left:{50 * claim.indent}px;" on:click={handleClick}>

                        {#if claim.active}
                            <div id="c{i}" style="border-color:{claim.borderColor}">
                                {#if outline}
                                    <div id="c{i}" class="outline-item claim-active">
                                        {#if claim.bullet}
                                            <ul style="list-style-type:{claim.lst}">
                                                <li>{@html claim.text}</li>
                                            </ul>
                                        {:else}
                                            {#if claim.indent == 0}
                                                <h1>{@html claim.text}</h1>
                                            {:else if claim.indent == 1}
                                                <h2>{@html claim.text}</h2>
                                            {:else if claim.indent == 2}
                                                <h3>{@html claim.text}</h3>
                                            {:else if claim.indent == 3}
                                                <h4>{@html claim.text}</h4>
                                            {:else}
                                                <p>{@html claim.text}</p>
                                            {/if} 
                                        {/if} 
                                    </div>
                                {:else}
                                    <div class="claim map-item claim-active" style="border-color:{claim.borderColor}">{@html claim.label}{@html claim.text}</div>
                                {/if} 
                            </div>

                        {:else}
                            <div style="border-color:{claim.borderColor}">
                                {#if outline}
                                    <div class="outline-item">
                                        {#if claim.bullet}
                                            <ul style="list-style-type:{claim.lst}">
                                                <li id="c{i}">{@html claim.text}</li>
                                            </ul>
                                        {:else}
                                            <div>
                                                {#if claim.indent == 0}
                                                    <h1 id="c{i}">{@html claim.text}</h1>
                                                {:else if claim.indent == 1}
                                                    <h2 id="c{i}">{@html claim.text}</h2>
                                                {:else if claim.indent == 2}
                                                    <h3 id="c{i}">{@html claim.text}</h3>
                                                {:else if claim.indent == 3}
                                                    <h4 id="c{i}">{@html claim.text}</h4>
                                                {:else}
                                                    <p id="c{i}">{@html claim.text}</p>
                                                {/if} 
                                            </div>
                                        {/if} 
                                    </div>
                                {:else}
                                    <div id="c{i}" class="claim map-item" style="border-color:{claim.borderColor}">{@html claim.label}{@html claim.text}</div>
                                {/if} 
                            </div>
                        {/if} 
                    </div>
                {/each} 
            </div>

        </div>
    </div>

    <div id="col_right">
        <div id="buttons">
            <div title="click for instructions" on:click={toggleInfo}><QuestionCircle width={size} height={size} /></div>
            <button title="toggle argument / outline" id="type" class="btn btn-outline-dark" on:click={toggleType}>type</button>
            <button title="new activity" class="btn btn-outline-dark" on:click={newMap}>new</button>
            <button title="save activity" class="btn btn-outline-dark" on:click={saveMap}>save</button>
            <button title="load from clipboard" class="btn btn-outline-dark" on:click={loadMap}>load</button>
            <button title="toggle labels" class="btn btn-outline-dark" on:click={toggleLabels}>labels</button>
        </div>
        <div id="colors" on:click={changeColor}>
            <div id="green" class="bg-success" title="type 'G'">&nbsp;</div>
            <div id="red" class="bg-danger" title="type 'R'">&nbsp;</div>
            <div id="orange" class="bg-warning" title="type 'O'">&nbsp;</div>
            <div id="blue" class="bg-primary" title="type 'B'">&nbsp;</div>
            <div id="black" class="bg-dark" title="type 'H' (Hitam)">&nbsp;</div>
            <div id="grey" class="bg-secondary" title="type 'A' (Abu2)">&nbsp;</div>
        </div>
        {#if editing == false}
            <div id="controls" transition:slide>
                <div title="add item" on:click={addClaim}><PlusCircle width={size} height={size} /></div>
                <div title="remove selected item" on:click={deleteClaim}><DashCircle width={size} height={size} /></div>
                <div title="select item above (move +Shift)" on:click={up}><ArrowUpCircle width={size} height={size} /></div>
                <div title="select item below (move +Shift)" on:click={down}><ArrowDownCircle width={size} height={size} /></div>
                <div title="tab <" on:click={left}><ArrowLeftCircle width={size} height={size} /></div>
                <div title="tab >" on:click={right}><ArrowRightCircle width={size} height={size} /></div>
            </div>
        {/if} 
    </div>

</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

    #info {
        border-radius:5px;
        padding:10px;
        background:#eeeeee;
        margin-top: 10px;
    }

    .claim {
        border:2px solid;
        padding:5px;
        border-radius:5px;
        margin-top: 10px;
        margin-bottom: 10px;
        cursor:pointer;
    }

    .claim-active {
        background:yellow;
        /* box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.7); */
        /* margin-bottom: 20px; */
    }

    .outline-item {
        max-width:380px;
    }

    .map-item {
        max-width:350px;
    }

    code {
        color:#d63384;
    }

    h1,h2,h3,h4,h5,p {
        margin:5px 0px;
    }

    ul {
        padding:5px 10px 5px 10px;
        margin:10px 10px 10px -5px;
    }

    li {
        padding:2px;
    }

    #cols {
        display:grid;
        grid-template-columns: 1fr 50px;
        gap:10px;
    }

    #col_left {
        height:100dvh;
        display: grid;
        grid-template-rows: 1fr 70px;
        overflow:auto;
    }

    #col_right {
        /* padding-top:10px; */
        display: flex;
        flex-direction:column;
        align-items: center;
        gap:20px;
    }

    #controls {
        text-align:center;
        cursor:pointer;
    }

    #buttons {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:10px;
        margin-top: 10px;
        cursor:pointer;
    }

    button {
        width:100%;
    }
    
    #colors {
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:5px;
        cursor:pointer;
    }

    #colors > div {
        cursor:pointer;
        width:30px;
        height:30px;
        border-radius:15px;
    }

    textarea {
        border-radius: 5px;
        padding:5px;
        width:100%;
    }

    #text_edit {
        position:fixed;
        top:10px;
        right:92px;
        width:350px;
        z-index:2;
    }

</style>
