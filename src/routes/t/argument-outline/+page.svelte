<script>

    import SvelteSeo from "svelte-seo";
    import { ChevronUp, ChevronDown, ChevronDoubleUp, ChevronDoubleDown, ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight, Plus, Dash, ArrowCounterclockwise, ArrowClockwise, Copy, Clipboard, FileEarmarkPlus, TagsFill, QuestionCircle, Toggles, NodePlus, NodeMinus, SignpostSplit, FileText, Diagram2, WrenchAdjustableCircle, Clipboard2Plus, Clipboard2Minus, ZoomIn, ZoomOut, PlusSquare, DashSquare, BoxArrowInDown, ListNested, ListUl } from "svelte-bootstrap-icons";
    import { slide, scale } from 'svelte/transition';
    import Modal from '../../components/Modal.svelte'
    import { onMount } from 'svelte';

    let claims_dev = [
        {
            text:"a",
            indent:0,
            borderColor:'black',
            bullet:true,
            active:true
        },
        {
            text:"b",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"c",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"d",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"e",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"f",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"g",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"h",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"i",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"j",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"k",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        }
    ]

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
            text:"With this tool you can include signal words with claims that indicate their logical function.",
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

    const borderThickness = 2;
    const size = 30;
    let indent = 50;
    let current = 0;
    let currIndent = 0;
    let input = claims[0].text;
    let editing = false;
    let outline = false;
    let label = '';
    let showLabels = true;
    let showTools = true;
    let showInfo = false;
    let highlightNode = true;
    let toSave = '';

    let undos = [];
    let redos = [];

    let history = [claims];
    let toHistory = [];
    let now = 0;
    let borderStyle = 'solid';
    let borderColor = 'green';
    let borderWidth = 2;
    let zoom = 1;

    let modalBody = '';

    let showModal = false;
    const toggleModal = () => {
        showModal = !showModal;
    }

    let helpHtml = '';

    onMount(() => {
        redraw();
        current = 0;
        now = 0;
        editing = false;
        let elEdit = document.getElementById('editing');
        modalBody = document.getElementById('modal').innerHTML;
        elEdit.blur();
        elEdit.setAttribute("disabled","");
        elEdit.classList.remove('bg-yellow');
        redraw();
    });

    // Toggles

    const toggleEditArrange = () => {
        if(editing) {
            editing = false;
            document.getElementById('editing').blur();
            document.getElementById('editing').setAttribute("disabled","");
            document.getElementById('editing').classList.remove('bg-yellow');

            /* document.getElementById('c'+current).contentEditable = false; */

        } else {
            editing = true;
            document.getElementById('editing').removeAttribute("disabled");
            document.getElementById('editing').classList.add('bg-yellow');
            document.getElementById('editing').focus();

            /* document.getElementById('c'+current).contentEditable = true; */

        }
        redraw();
    }

    const toggleMode = () => {
        outline = !outline;
        document.getElementById('type').blur();
        redraw();
    }

    const toggleSignals = () => {
        showLabels = !showLabels;
        redraw();
    }

    const toggleHighlightNode = () => {
        highlightNode = !highlightNode;
        redraw();
    }

    const toggleTools = () => {
        showTools = !showTools;
        redraw();
    }

    const toggleInfo = () => {
        showInfo = !showInfo;
        toggleModal();
    }

    const handleClick = (e) => {
        if(!editing) {
            let id = Number(e.target.id.replace(/c/,''));
            claims.forEach( next => {
                next.active = false;
            })
            current = id;
            claims[current].active = true;
            claims = [...claims];
            input = claims[current].text;
        }
        redraw();
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

    const upFocus = (e) => {
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
        }
        redraw();
    }

    let onKeyUp = (e) => {

        if (e.key == 'Enter') {
            toggleEditArrange();
            let str = document.getElementById('editing').value;
            str = str.replace(/\n/g,'');
            document.getElementById('editing').value = str;
        }

        if(!editing) {
            if(e.key == 'H') {
                leftBlock();
            } else if(e.key == 'J') {
                downBlock();
            } else if(e.key == 'K') {
                upBlock();
            } else if(e.key == 'L') {
                rightBlock();
            } else if(e.key == 'ArrowUp' || e.key == 'k') {
                e.shiftKey ? upBlock() : upFocus();
            } else if(e.key == 'ArrowDown' || e.key == 'j') {
                e.shiftKey ? downBlock() : downFocus();
            /* } else if(e.key == 'ArrowLeft' || e.key == 'h') { */
            } else if(e.key == 'ArrowLeft') {
                e.shiftKey ? leftBlock() : leftFocus();
            } else if(e.key == 'ArrowRight' || e.key == 'l') {
                e.shiftKey ? rightBlock() : rightFocus();
            } else if(e.key == 'b') {
                claims[current].bullet = true;
            } else if(e.key == 'h') {
                claims[current].bullet = false;
            } else if(e.key == 't') {
                toggleMode();
            } else if(e.key == '?') {
                toggleInfo();
            } else if(e.key == '+') {
                addClaim();
            } else if(e.key == '-') {
                deleteClaim();
            } else if(e.key == 'K') {
                claims[current].borderColor = 'black';
            } else if(e.key == 'R') {
                claims[current].borderColor = 'red';
            } else if(e.key == 'B') {
                claims[current].borderColor = 'blue';
            } else if(e.key == 'G') {
                claims[current].borderColor = 'green';
            } else if(e.key == 'O') {
                claims[current].borderColor = 'orange';
            } else if(e.key == 'A') {
                claims[current].borderColor = 'grey';
            } else if(e.key == 'c') {
                loadMap();
            } else if(e.key == 'n') {
                newMap();
            } else if(e.key == 'u') {
                undo();
            } else if(e.key == 'r') {
                redo();
            } else if(e.key == 's') {
                toggleSignals();
            } else if(e.key == 'Z') {
                zoomOut();
            } else if(e.key == 'z') {
                zoomIn();
            } else if(e.key == '0') {
                zoom = 1;
            }
        }
    }

    const getLabel = (i) => {

        let becauses = [false,false,false,false,false,false,false,false,false,false];
        let currentColor = claims[i].borderColor;

        if(showLabels) {

            if(currentColor == 'green') {

                /* let previous = i-1; */
                let thisIndent = claims[i].indent;
                let lastIndent = claims[i-1].indent;
                let previousColor = claims[i-1].borderColor;


                if(previousColor == 'green' && thisIndent == lastIndent) {
                    label = '<b><i>and..</i></b> ';

                } else if(previousColor == 'green' && thisIndent > lastIndent) {
                    label = '<b><i>because..</i></b> ';
                    becauses[thisIndent] = true;

                } else if(previousColor == 'green' && thisIndent == lastIndent-1) {

                    if(becauses[thisIndent]) {
                        label = '<b><i>and because..</i></b> ';
                        becauses[thisIndent] = false;
                    } else {
                        label = '<b><i>because..</i></b> ';
                        becauses[thisIndent] = true;
                    }

                } else if(previousColor == 'blue' && thisIndent == lastIndent) {
                    /* currentColor = 'blue'; */
                    label = '<b><i>and..</i></b> ';
                } else if(previousColor == 'blue' && thisIndent > lastIndent) {
                    label = '<b><i>because..</i></b> ';
                } else if(previousColor == 'grey' && thisIndent == lastIndent) {
                    label = '<b><i>and..</i></b> ';
                } else {
                    // indents not =
                    label = '<b><i>because..</i></b> ';
                }


            } else if(currentColor == 'red') {
                label = '<b><i>but..</i></b> ';
            } else if(currentColor == 'orange') {
                label = '<b><i>however..</i></b> ';
            } else if(currentColor == 'blue') {
                label = '<b><i>in fact..</i></b> ';
            } else if(currentColor == 'grey') {
                label = '<b><i>for example..</i></b> ';
            } else { // black
                label = '';
            }

        } else {
            // Showing labels disabled
            label = '';
        }


        return label;

    }

    const redraw = () => {

        // Get array for current node block
        let blockArr = [];
        if(current > 0 && highlightNode) {
            blockArr.push(current);
            if(current < claims.length-1) {
                let n = current+1;
                while(claims[n].indent > claims[current].indent && n < claims.length) {
                    blockArr.push(n);
                    n ++;
                }
            }
        }

        let str = ''
        let arr = [];

        toHistory = [];

        claims.forEach( (next,i) => {

            next.active = false;

            if(blockArr.includes(i)) {
                /* claims[i].borderStyle = 'dotted'; */
                claims[i].borderStyle = 'solid';
                claims[i].borderWidth = 4;
            } else {
                claims[i].borderStyle = 'solid';
                claims[i].borderWidth = 2;
            }

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

            /* borderColor = i==0 ? 'black' : next.borderColor; */

            arr.push(tabs + next.borderColor + '|' + bulletBH + '|' + str)

            toHistory.push({
                text:next.text,
                indent:next.indent,
                borderColor:next.borderColor,
                borderStyle:next.borderStyle,
                borderWidth:next.borderWidth,
                bullet:next.bullet,
                active:next.active
            });

        })

        // Add latest redraw to history (working!)
        history.splice(now,1,toHistory);
        // ..and increment place in history
        now ++;

        claims[current].active = true;
        input = claims[current].text;
        toSave = arr.join('\r\n');

        /* document.getElementById('c'+current).scrollIntoView(); */

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
                text:"",
                indent:0,
                borderColor:'black',
                bullet:true,
                active:true
            }
        ]
        toggleEditArrange()
        redraw();
    }

    const loadMap = () => {

        let str = '';
        navigator.clipboard.readText().then((copiedText) => {
            str = copiedText;
        });

        setTimeout(function() {

            let lines = str.split(/[\r\n]/);
            let newClaims = lines.map( (next,i) => {

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
                        borderColor = i==0 ? 'black' : 'green';
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

    const undo = () => {
        if(now > 1) {
            now = now-2;
            claims = [...history[now]];
            redraw();
        }
    }

    const redo = () => {
        if(now < history.length) {
            claims = [...history[now]];
            redraw();
        }
    }

    const zoomIn = () => {
        zoom += 0.1;
        indent += 5;
    }

    const zoomOut = () => {
        zoom -= 0.1;
        indent -= 5;
    }

</script>

<SvelteSeo
    title="ArguLine"
/> 

<div id="modal" style="display:none;">
    <div class="mb-1">
        <p>Press <code>enter</code> to toggle between 'Insert' and 'Arrange'.</p>
    </div>
    <h3 style="margin-left:30px;">In 'Insert' mode</h3>
    <div style="margin-left:60px;">
        <p><code>Type</code> to edit items.</p>
    </div>
    <h3 style="margin-left:30px;">In 'Arrange' mode</h3>
    <div style="margin-left:60px;">
        <p><code>click</code> <QuestionCircle /> or <code>type ?</code> to toggle instructions.</p>
        <p><code>click</code> <FileEarmarkPlus /> (or <code>type n</code>) for new map/outline.</p>
        <p><code>click</code> <Clipboard2Plus /> (or <code>type s</code>) to save map/outline to clipboard.</p>
        <p><code>click</code> <Clipboard2Minus /> (or <code>type l</code>) to load map/outline from clipboard.</p>
        <p><code>click</code> <ArrowCounterclockwise /> or <code>type u</code> to undo arrange.</p>
        <p><code>click</code> <ArrowClockwise /> or <code>type r</code> to redo arrange.</p>
        <p><code>click</code> or <code>type</code> <NodePlus /> to add an item, <NodeMinus /> to remove an item.</p>
        <p><code>click</code> <Toggles /> (or <code>type t</code>) to toggle between outline and argument mode.</p>
        <p><code>click</code> <SignpostSplit /> (or <code>type l</code>) to toggle signal words on/off.</p>
        <p><code>type &uarr;</code> or <code>click <ChevronUp /></code> to select next claim up, <code>&darr;</code> or <code><ChevronDown /></code> to select next claim down.</p>
        <p><code>type shift &uarr;</code> or <code>click <ChevronDoubleUp /></code> to move block up, <code>shift &darr;</code> or <code><ChevronDoubleDown /></code> to move block down.</p>
        <p><code>type &larr;</code> or <code>click <ChevronLeft /></code> to indent left, <code>&rarr;</code> or <code><ChevronRight /></code> to indent right.</p>
        <p><code>type shift &larr;</code> or <code>click <ChevronDoubleLeft /></code> to move block left, <code>shift &rarr;</code> or <code><ChevronDoubleRight /></code> to move block right.</p>
        <p><code>click</code> colours to change border colour.</p>
    </div>
</div>

<Modal {showModal} msg={modalBody} modalWidth={600} on:click={toggleModal} />

<div id="text_edit">
    <textarea id="editing" rows="5" on:input={handleInput} onkeydown="return (event.keyCode!=13);" placeholder="start typing..">{input}</textarea>
</div>

<div id="activity">

    <div id="map" style="overflow:auto;">
        {#each claims as claim, i}
            <div style="margin-left:{indent * claim.indent}px;" on:click={handleClick}>
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
                            <div class="claim map-item claim-active" style="border-width:{claim.borderWidth}px;border-style:{claim.borderStyle};border-color:{claim.borderColor};zoom:{zoom};">{@html claim.label}{@html claim.text}</div>
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
                            <div id="c{i}" class="claim map-item" style="border-width:{claim.borderWidth}px;border-style:{claim.borderStyle};border-color:{claim.borderColor};zoom:{zoom};">{@html claim.label}{@html claim.text}</div>
                        {/if} 
                    </div>

                {/if} 
            </div>

        {/each} 
    </div>

</div>

<div id="navbar">

    <div id="controls">
        <div title="help" on:click={toggleInfo}><QuestionCircle width={size} height={size} /></div>
        <div title="new activity" on:click={newMap}><FileEarmarkPlus width={size} height={size} /></div>
        <div title="copy to clipboard" on:click={saveMap}><Copy width={size} height={size} /></div>
        <div title="load from clipboard" on:click={loadMap}><BoxArrowInDown width={size} height={size} /></div>
        <div title="undo arrange" on:click={undo}><ArrowCounterclockwise width={size} height={size} /></div>
        <div title="redo arrange" on:click={redo}><ArrowClockwise width={size} height={size} /></div>
        <div title="zoom out" on:click={zoomOut}><ZoomOut width={size} height={size} /></div>
        <div title="zoom in" on:click={zoomIn}><ZoomIn width={size} height={size} /></div>
        <div title="add item" on:click={addClaim}><PlusSquare width={size} height={size} /></div>
        <div title="remove selected item" on:click={deleteClaim}><DashSquare width={size} height={size} /></div>
        <div title="create text"><FileText width={size} height={size} /></div>

        {#if outline}
            <div title="argument mode" on:click={toggleMode}><ListNested width={size} height={size} /></div>
        {:else}
            <div title="outline mode" on:click={toggleMode}><ListUl width={size} height={size} /></div>
        {/if}

        <div title="show/hide signal words" on:click={toggleSignals}><SignpostSplit width={size} height={size} /></div>
        <div title="toggle highlight node" on:click={toggleHighlightNode}><Diagram2 width={size} height={size} /></div>
        <div title="tab <" on:click={leftFocus}><ChevronLeft width={size} height={size} /></div>
        <div title="tab >" on:click={rightFocus}><ChevronRight width={size} height={size} /></div>
        <div title="tab <" on:click={leftBlock}><ChevronDoubleLeft width={size} height={size} /></div>
        <div title="tab >" on:click={rightBlock}><ChevronDoubleRight width={size} height={size} /></div>
        <div title="select item above (move +Shift)" on:click={upFocus}><ChevronUp width={size} height={size} /></div>
        <div title="select item below (move +Shift)" on:click={downFocus}><ChevronDown width={size} height={size} /></div>
        <div title="select item above (move +Shift)" on:click={upBlock}><ChevronDoubleUp width={size} height={size} /></div>
        <div title="select item below (move +Shift)" on:click={downBlock}><ChevronDoubleDown width={size} height={size} /></div>
    </div>

    <div id="colors" on:click={changeColor}>
        <button id="green" title="" class="btn btn-outline-success">&nbsp;</button>
        <button id="red" title="" class="btn btn-outline-danger">&nbsp;</button>
        <button id="orange" title="" class="btn btn-outline-warning">&nbsp;</button>
        <button id="blue" title="" class="btn btn-outline-primary">&nbsp;</button>
        <button id="black" title="" class="btn btn-outline-dark">&nbsp;</button>
        <button id="grey" title="" class="btn btn-outline-secondary">&nbsp;</button>
    </div>

</div>


<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

    #navbar {
        position:fixed;
        top: 10px;
        /* right:70px; */
        /* width:270px; */
        /* border-radius:5px; */
        /* padding:5px; */
        /* background: var(--light); */
        /* z-index:1; */
        cursor:pointer;
    }

    #controls {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:3px;
    }

    #colors {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:3px;
    }

    #activity {
        padding-top:10px;
        padding-left: 80px;
        overflow:auto;
    }

    button {
        cursor:pointer;
        width:30px;
        height:30px;
        border-radius:15px;
        border-width:2px;
    }

    #info {
        border-radius:5px;
        padding:10px;
        background:#eeeeee;
    }

    .claim {
        border-width:2px;
        border-style:solid;
        padding:5px;
        border-radius:5px;
        margin-top: 7px;
        margin-bottom: 7px;
        cursor:pointer;
    }

    .claim-active {
        background:yellow;
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

    textarea {
        border-radius: 5px;
        padding:5px;
        width:350px;
    }

    #text_edit {
        position: fixed;
        top:10px;
        right:20px;
        z-index:1;
    }

    /* div { */
    /*     border:1px solid pink; */
    /* } */

</style>
