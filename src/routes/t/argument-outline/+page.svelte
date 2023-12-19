<script>

    import SvelteSeo from "svelte-seo";
    import { ChevronUp, ChevronDown, ChevronDoubleUp, ChevronDoubleDown, ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight, PlusCircle, DashCircle, Plus, Dash, QuestionCircle } from "svelte-bootstrap-icons";
    import { slide, scale } from 'svelte/transition';
    import { onMount } from 'svelte';

    /* let claims = [ */
    /*     { */
    /*         text:"a", */
    /*         indent:0, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:true */
    /*     }, */
    /*     { */
    /*         text:"b", */
    /*         indent:1, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"c", */
    /*         indent:2, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"d", */
    /*         indent:3, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"e", */
    /*         indent:3, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"f", */
    /*         indent:2, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"g", */
    /*         indent:3, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"h", */
    /*         indent:3, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"i", */
    /*         indent:3, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"j", */
    /*         indent:2, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     }, */
    /*     { */
    /*         text:"k", */
    /*         indent:1, */
    /*         borderColor:'green', */
    /*         bullet:true, */
    /*         active:false */
    /*     } */
    /* ] */

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
            text:"With this tool you can move selected items up and down.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent selected items left and right.",
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
            text:"With this tool you can move selected claims up and down.",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent claims (nodes) left and right to highlight their logical function.",
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

    let currIndent = 0;

    let input = claims[0].text;
    let info = false;
    let editing = false;
    let outline = false;
    let label = '';
    let showLabels = true;
    let toSave = '';

    onMount(() => {
        toggleEditArrange();
        toggleEditArrange();
    });

    const toggleMode = () => {
        outline = !outline;
        document.getElementById('type').blur();
        redraw();
    }

    const toggleEditArrange = () => {
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
    const upBlock = () => {

        let currIndent = 0;

        if(current > 0) {

            currIndent = claims[current].indent;

            // Find out how many UP we need to go to find the next node with the same indent
            let upCount = 1;
            let upArr = [];
            /* while(claims[currentupCount) { */
            while(current - upCount > 0 && claims[current-upCount].indent > currIndent) {
                upCount ++;
                /* console.log("upCount: " + upCount); */
            }

            // Find out how many DOWN we need to go to find the next node with the same indent
            let downCount = 1;
            while(current + downCount < claims.length && claims[current+downCount].indent > currIndent) {
                downCount ++;
                /* console.log("downCount: " + downCount); */
            }

            let beingMoved = claims.splice(current,downCount);
            /* console.log("beingMoved: " , beingMoved); */

            let newPos = current - upCount;
            // Reset current
            current = newPos;

            for(let i=0; i<downCount;i++) {
                /* console.log("newPos: " + newPos); */
                claims.splice(newPos,0,beingMoved[i]);
                newPos ++;
            }


        }

        redraw();

    }

    const downBlock = () => {

        if(current < claims.length-1) {

            currIndent = claims[current].indent;

            // Find out how many DOWN we need to go to find the next node with the same indent
            let downCount = 1;
            while(current + downCount < claims.length && claims[current+downCount].indent > currIndent) {
                downCount ++;
            }

            if(current + downCount < claims.length) {

                // Remove BLOCK from claims array and store in memory
                let beingMoved = claims.splice(current,downCount);

                if(claims[current].indent < currIndent) {
                    current ++; // Increment current to next position
                    let nextPos = current;
                    beingMoved.forEach( (next,i) => {
                        claims.splice(nextPos,0,next);
                        nextPos ++;
                    })
                } else {

                    let downCount = 1;
                    while(current + downCount < claims.length && claims[current+downCount].indent > currIndent) {
                        downCount ++;
                    }

                    current = current + downCount;

                    let nextPos = current;
                    beingMoved.forEach( (next,i) => {
                        claims.splice(nextPos,0,next);
                        nextPos ++;
                    })

                }

            }

        }

        redraw();

    }

    const upFocus = () => {
        if(current > 0) {
            current --;
        }
        redraw();
    }

    const downFocus = () => {
        if(current < claims.length-1) {
            current ++;
        }
        redraw()
    }

    const leftFocus = () => {
        if(claims[current].indent > 1 && current !== 0) {
            claims[current].indent = claims[current].indent - 1;
        }
        redraw();
    }

    const rightFocus = () => {
        if(current > 0) {
            claims[current].indent = claims[current].indent + 1;
        }
        redraw();
    }

    const leftBlock = () => {
        let currIndent = claims[current].indent;
        // STOP lefts if indent same as previous
        if(claims[current-1].indent !== currIndent) {
            if(currIndent > 0 && (currIndent-1) > 0 && current < claims.length-1) { // (Block is already at hard left!)
                let downCount = 1;
                while(claims[current+downCount].indent > currIndent && downCount < claims.length -1) {
                    downCount ++;
                }
                for(let i=0; i<downCount; i++) {
                    claims[current + i].indent --;
                }
            } else {
                if(currIndent > 1) {
                    claims[current].indent --;
                }
            }
        }
        redraw();
    }

    const rightBlock = () => {
        let currIndent = claims[current].indent;
        if(current > 0 && current < claims.length-1) { // (DO NOT move contention block > right!)
            let downCount = 1;
            while(claims[current+downCount].indent > currIndent) {
                downCount ++;
            }
            for(let i=0; i<downCount; i++) {
                claims[current + i].indent ++;
            }
        } else {
            claims[current].indent ++;
        }
        redraw();
    }

    let onKeyUp = (e) => {

        if (e.key == 'Enter') {
            toggleEditArrange();
            let str = document.getElementById('editing').value;
            str = str.replace(/\n/g,'');
            document.getElementById('editing').value = str;
        } else if(e.key == 'ArrowUp' || e.key == 'k' && editing == false) {
            if(e.shiftKey) {
                upBlock();
            } else {
                upFocus();
            }
        } else if(e.key == 'K' && editing == false) {
            upBlock();
        } else if(e.key == 'ArrowDown' || e.key == 'j' && editing == false) {
            if(e.shiftKey) {
                downBlock();
            } else {
                downFocus();
            }
        } else if(e.key == 'J' && editing == false) {
            downBlock();
        } else if(e.key == 'ArrowLeft' || e.key == 'h' && editing == false) {
            if(e.shiftKey) {
                leftBlock();
            } else {
                leftFocus();
            }
        } else if(e.key == 'H' && editing == false) {
            leftBlock();
        } else if(e.key == 'ArrowRight' || e.key == 'l' && editing == false) {
            if(e.shiftKey) {
                rightBlock();
            } else {
                rightFocus();
            }
        } else if(e.key == 'L' && editing == false) {
            rightBlock();
        } else if(e.key == 'b' && editing == false) {
            claims[current].bullet = true;
        } else if(e.key == 'h' && editing == false) {
            claims[current].bullet = false;
        } else if(e.key == 't' && editing == false) {
            toggleMode();
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
        } else if(e.key == 'n' && editing == false) {
            newMap();
        }

    }

    const getLabel = (i) => {

        if(showLabels) {

            if(claims[i].borderColor == 'black') {
                label = '';
            } else if(claims[i].borderColor == 'green') {

                let thisIndent = claims[i].indent;
                let lastIndent = claims[i-1].indent;


                if(claims[i-1].borderColor == 'green' && thisIndent == lastIndent) {
                    label = '<b><i>and..</i></b> ';
                } else if(claims[i-1].borderColor == 'blue' || claims[i-1].borderColor == 'grey') {
                    label = '<b><i>and..</i></b> ';
                } else {
                    label = '<b><i>because..</i></b> ';
                }


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


        return label;

    }

    const redraw = () => {

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

            claims[i].label = getLabel(i);

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
            text: "",
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
        toggleEditArrange();
    }

    const deleteClaim = () => {
        claims.splice(current, 1);
        current --;
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

            let lines = str.split(/[\r\n]/);
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

            claims[i].label = getLabel(i);

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

    /* toggleLabels(); */

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
                        <p><code>click</code> <b><i>help</i></b> or <code>type ?</code> to toggle instructions.</p>
                        <p><code>click</code> <b><i>mode</i></b> (or <code>type t</code>) to toggle between outline and argument mode.</p>
                        <p><code>click</code> <b><i>new</i></b> (or <code>type n</code>) for new map/outline.</p>
                        <p><code>click</code> <b><i>load</i></b> (or <code>type l</code>) to load map/outline from clipboard.</p>
                        <p><code>click</code> colours to change border colour.</p>
                        <p><code>click</code> or <code>type <Plus /></code> to add an item, <code><Dash /></code> to remove an item.</p>
                        <p><code>type &uarr;</code> or <code>click <ChevronUp /></code> to select next claim up, <code>&darr;</code> or <code><ChevronDown /></code> to select next claim down.</p>
                        <p><code>type shift &uarr;</code> or <code>click <ChevronDoubleUp /></code> to move block up, <code>shift &darr;</code> or <code><ChevronDoubleDown /></code> to move block down.</p>
                        <p><code>type &larr;</code> or <code>click <ChevronLeft /></code> to indent left, <code>&rarr;</code> or <code><ChevronRight /></code> to indent right.</p>
                        <p><code>type shift &larr;</code> or <code>click <ChevronDoubleLeft /></code> to move block left, <code>shift &rarr;</code> or <code><ChevronDoubleRight /></code> to move block right.</p>
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
            <button title="toggle help" class="btn btn-outline-dark" on:click={toggleInfo}>help</button>
            <button title="toggle argument / outline" class="btn btn-outline-dark" on:click={toggleMode}>mode</button>
            <button title="new activity" class="btn btn-outline-dark" on:click={newMap}>new</button>
            <button title="save activity" class="btn btn-outline-dark" on:click={saveMap}>save</button>
            <button title="load from clipboard" class="btn btn-outline-dark" on:click={loadMap}>load</button>
            <button title="toggle labels" class="btn btn-outline-dark" on:click={toggleLabels}>labels</button>
        </div>
        <div id="colors" on:click={changeColor}>
            <button id="green" title="" class="btn btn-outline-success bg-success">&nbsp;</button>
            <button id="red" title="" class="btn btn-outline-danger bg-danger">&nbsp;</button>
            <button id="orange" title="" class="btn btn-outline-warning bg-warning">&nbsp;</button>
            <button id="blue" title="" class="btn btn-outline-primary bg-primary">&nbsp;</button>
            <button id="black" title="" class="btn btn-outline-dark bg-dark">&nbsp;</button>
            <button id="grey" title="" class="btn btn-outline-secondary bg-secondary">&nbsp;</button>
        </div>
        {#if editing == false}
            <div id="controls" transition:slide>
                <div title="add item" on:click={addClaim}><Plus width={size} height={size} /></div>
                <div title="remove selected item" on:click={deleteClaim}><Dash width={size} height={size} /></div>
                <div title="tab <" on:click={leftFocus}><ChevronLeft width={size} height={size} /></div>
                <div title="tab <" on:click={leftBlock}><ChevronDoubleLeft width={size} height={size} /></div>
                <div title="tab >" on:click={rightFocus}><ChevronRight width={size} height={size} /></div>
                <div title="tab >" on:click={rightBlock}><ChevronDoubleRight width={size} height={size} /></div>
                <div title="select item above (move +Shift)" on:click={upFocus}><ChevronUp width={size} height={size} /></div>
                <div title="select item above (move +Shift)" on:click={upBlock}><ChevronDoubleUp width={size} height={size} /></div>
                <div title="select item below (move +Shift)" on:click={downFocus}><ChevronDown width={size} height={size} /></div>
                <div title="select item below (move +Shift)" on:click={downBlock}><ChevronDoubleDown width={size} height={size} /></div>
            </div>
        {/if} 
    </div>

</div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

    #colorss {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:5px;
    }
    #colorss > div {
        border-radius:5px;
    }

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
        grid-template-columns: 1fr 100px;
        gap:10px;

    }

    #col_left {
        height:100dvh;
        overflow:auto;
    }

    #col_right {
        display: flex;
        flex-direction:column;
        align-items: center;
        gap:5px;
        padding-top:120px;
    }

    #controls {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
        text-align:center;
        cursor:pointer;
    }

    #buttons {
        display:grid;
        grid-template-columns: 1fr 1fr;
        align-items:center;
        gap:5px;
        margin-top: 10px;
        cursor:pointer;
    }

    #buttons > div {
        display:grid;
        grid-template-columns: 1fr 1fr;
        align-items:center;
        gap:5px;
        margin-top: 10px;
        cursor:pointer;
    }

    button {
        width:45px;
        /* width:100%; */
    }
    
    #colors {
        display:grid;
        grid-template-columns: 1fr 1fr;
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
        width:350px;
        /* width:100%; */
    }

    #text_edit {
        position:fixed;
        top:10px;
        right:20px;
        width:350px;
        z-index:2;
    }

    /* * { */
    /*     border:1px solid pink; */
    /* } */

</style>
