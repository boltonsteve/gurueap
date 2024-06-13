<script>

    import SvelteSeo from "svelte-seo";
    import { ChevronUp, ChevronDown, ChevronDoubleUp, ChevronDoubleDown, ChevronLeft, ChevronRight, ChevronDoubleLeft, ChevronDoubleRight, ArrowCounterclockwise, ArrowClockwise, Copy, FileEarmarkPlus, TagsFill, QuestionCircle, Toggles, NodePlus, NodeMinus, SignpostSplit, FileText, Diagram2, WrenchAdjustableCircle, ZoomIn, ZoomOut, PlusSquare, DashSquare, BoxArrowInDown, ListNested, ListUl, Indent, Unindent } from "svelte-bootstrap-icons";
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
            text:"This is a good tool for outlining and visualising arguments (press '?' for instructions).",
            indent:0,
            borderColor:'black',
            bullet:true,
            active:true
        },
        {
            text:"This tool makes it is easy to make a standard outline (press 'f' to toggle between <b><i>argument</i></b> and <b><i>outline</i></b> format).",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can edit selected items (select an item using the arrow keys, press 'enter' to start editing, and 'enter' again when you've finished).",
            indent:2,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can move selected items up and down (select an item and use the up and down arrow keys while holding down shift).",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent selected items left and right (select an item and use the left and right arrow keys [+ shift to move entire blocks]).",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can visualise an argument (press 'f' to toggle between <b><i>argument</i></b> and <b><i>outline</i></b> format).",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can edit selected claims (select a claim using the arrow keys, press 'enter' to start editing, and 'enter' again when you've finished).",
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
            text:"With this tool you can move selected claims up and down (select a claim and use the up and down arrow keys while holding down shift).",
            indent:3,
            borderColor:'green',
            bullet:true,
            active:false
        },
        {
            text:"With this tool you can indent claims (nodes) left and right to highlight their logical function (select a claim and use the left and right arrow keys [+ shift to move entire blocks]).",
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
        },
        {
            text:"With this tool you can output an essay based on your argument map.",
            indent:1,
            borderColor:'green',
            bullet:true,
            active:false
        }
    ]
    
    // Declarations
    const borderThickness = 2;
    const size = 30;
    const sequence = ['First of all','Secondly','Thirdly','Fourth','Next'];
    const adding = ['In addition','Furthermore','Moreover','also','additionally','What is more'];
    let indent = 50;
    let current = 0;
    let currIndent = 0;
    let max_indent = 0;
    let input = claims[0].text;
    let editing = false;
    let outline = false;
    let label = '';
    let showLabels = false;
    let showTools = true;
    let highlightNode = true;
    let toSave = '';
    let thisIndent = 0;
    let undos = [];
    let redos = [];
    let history = [claims];
    let toHistory = [];
    let now = 0;
    let borderStyle = 'solid';
    let borderColor = 'green';
    let borderWidth = 2;
    let zoom = 1;
    let scratchpad = false;
    let scratchpad_text = '';
    let scratchpad_btn_text = 'show scratchpad';
    let showModal = false;
    let modalBody = '';
    let modalWidth = 600;
    let helpHtml = '';

    onMount(() => {
        redraw();
        current = 0;
        now = 0;
        editing = false;
        let elEdit = document.getElementById('editing');
        elEdit.blur();
        elEdit.setAttribute("disabled","");
        elEdit.classList.remove('bg-yellow');
        redraw();
    });


    // Toggles

    const toggleModal = () => {
        showModal = !showModal;
    }

    const toggleInfo = () => {
        modalBody = document.getElementById('modal').innerHTML;
        modalWidth = 600;
        toggleModal();
    }

    const toggleSaved = () => {
        modalBody = 'Your activity has been copied to the clipboard.';
        modalWidth = 300;
        toggleModal();
        setTimeout(function() {
            if(showModal) {
                toggleModal();
            }
        },2000);
    }

    const toggleEssay = (htmlStr) => {
        modalBody = 'Your essay has been copied to the clipboard:<br><br>' + htmlStr.replace(/\n/g,'<br>');
        modalWidth = 500;
        toggleModal();
    }

    const toggleScratchpad = () => {
        if(scratchpad) {
            scratchpad = false;
            scratchpad_btn_text = 'show scratchpad';
        } else {
            scratchpad = true;
            scratchpad_btn_text = 'hide scratchpad';
        }
    }

    const toggleEditArrange = () => {
        if(editing) {
            editing = false;
            document.getElementById('editing').blur();
            document.getElementById('editing').setAttribute("disabled","");
            document.getElementById('editing').classList.remove('bg-yellow');

            let element = document.getElementById("c"+current);
            element.scrollIntoView();

        } else {
            editing = true;
            document.getElementById('editing').removeAttribute("disabled");
            document.getElementById('editing').classList.add('bg-yellow');
            document.getElementById('editing').focus();
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


    const handleClick = (e) => {

        editing = false;
        document.getElementById('editing').blur();
        document.getElementById('editing').setAttribute("disabled","");
        document.getElementById('editing').classList.remove('bg-yellow');

        if(!editing) {
            let id = Number(e.target.id.replace(/c/,''));
            claims.forEach( next => {
                next.active = false;
            })
            current = id;
            console.log("current: " + current);
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

    const increaseIndent = () => {
        if(indent < 150) {
            indent += 5;
        }
    }

    const decreaseIndent = () => {
        if(indent > 20) {
            indent -= 5;
        }
    }

// Movement
    
    const upMove= () => {
        if(current > 1) {
            let beingMoved = claims.splice(current,1);
            current --;
            claims.splice(current,0,beingMoved[0]);
        }
        redraw();
    }

    const downMove= () => {
        if(current < claims.length-1) {
            let beingMoved = claims.splice(current,1);
            current ++
            claims.splice(current,0,beingMoved[0]);
        }
        redraw();
    }

    const upMoveBlock = () => {

        currIndent = 0;
        /* let currIndent = 0; */

        if(current > 1) {

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

    const downMoveBlock = () => {

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

    const leftMove = () => {
        if(claims[current].indent > 1 && current !== 0) {
            claims[current].indent = claims[current].indent - 1;
        }
        redraw();
    }

    const rightMove = () => {
        if(current > 0 && claims[current-1].indent >= claims[current].indent) {
            claims[current].indent = claims[current].indent + 1;
        }
        redraw();
    }

    const leftMoveBlock = () => {
        currIndent = claims[current].indent;
        /* let currIndent = claims[current].indent; */
        let largerIndent = true;
        if(currIndent > 1) { // Don't allow anything except Contention at indent 0!
            claims[current].indent --;
            claims.forEach( (next,i) => {
                if(i > current) {
                    if(next.indent > currIndent && largerIndent) {
                        claims[i].indent --;
                    } else {
                        // Clumsy way to exit the loop, but it works!
                        largerIndent = false;
                    }
                }
            })
            redraw();
        }
    }

    const rightMoveBlock = () => {
        if(current > 0 && claims[current-1].indent >= claims[current].indent) {
            currIndent = claims[current].indent;
            /* let currIndent = claims[current].indent; */
            let largerIndent = true;
            claims[current].indent ++;
            claims.forEach( (next,i) => {
                if(i > current) {
                    if(next.indent > currIndent && largerIndent) {
                        claims[i].indent ++;
                    } else {
                        // Clumsy way to exit the loop, but it works!
                        largerIndent = false;
                    }
                }
            })
            redraw();
        }
    }


    let onKeyUp = (e) => {

        if (e.key == 'Enter') {
            toggleEditArrange();
            let str = document.getElementById('editing').value;
            str = str.replace(/\n/g,'');
            document.getElementById('editing').value = str;
        }

        if(!editing) {
            if(e.key == '?') {
                toggleInfo();
            } else if(e.key == 'ArrowUp' || e.key == 'k') {
                e.shiftKey ? upMoveBlock() : upFocus();
            } else if(e.key == 'ArrowDown' || e.key == 'j') {
                e.shiftKey ? downMoveBlock() : downFocus();
            } else if(e.key == 'ArrowLeft' || e.key == 'J') {
                e.shiftKey ? leftMoveBlock() : leftMove();
            } else if(e.key == 'ArrowRight' || e.key == 'K') {
                e.shiftKey ? rightMoveBlock() : rightMove();
            } else if(e.key == 'f') {
                toggleMode();
            } else if(e.key == 'b') {
                claims[current].bullet = true;
            } else if(e.key == 'h') {
                claims[current].bullet = false;
            } else if(e.key == '+') {
                addClaim();
            } else if(e.key == '-') {
                deleteClaim();
            } else if(e.key == 'K') {
                claims[current].borderColor = 'black';
                redraw();
            } else if(e.key == 'R') {
                claims[current].borderColor = 'red';
                redraw();
            } else if(e.key == 'B') {
                claims[current].borderColor = 'blue';
                redraw();
            } else if(e.key == 'G') {
                claims[current].borderColor = 'green';
                redraw();
            } else if(e.key == 'O') {
                claims[current].borderColor = 'orange';
                redraw();
            } else if(e.key == 'A') {
                claims[current].borderColor = 'grey';
                redraw();
            } else if(e.key == 'c') {
                loadMap();
            } else if(e.key == 'N') {
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
            } else if(e.key == '[') {
                decreaseIndent();
            } else if(e.key == ']') {
                increaseIndent();
            } else if(e.key == '\\') {
                indent = 50;
            } else if(e.key == 'p') {
                toggleScratchpad();
            } else if(e.key == '.') {
                upMove();
            } else if(e.key == ',') {
                downMove();
            }
        }
    }

    const getLabel = (i) => {

        let becauses = [false,false,false,false,false,false,false,false,false,false];
        let currentColor = claims[i].borderColor;

        if(showLabels) {

            if(currentColor == 'green') {

                thisIndent = claims[i].indent;
                /* let thisIndent = claims[i].indent; */
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
            } else if(currentColor == 'pink') {
                label = '<b><i>to explain..</i></b> ';
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
        let largerIndent = true;
        if(current > 0 && highlightNode) {
            blockArr.push(current);
            claims.forEach( (next,i) => {
                if(i > current) {
                    if(next.indent > claims[current].indent && largerIndent) {
                        blockArr.push(i);
                    } else {
                        // Clumsy way to exit the loop..
                        largerIndent = false;
                    }
                }
            })
        }

        let str = ''
        let arr = [];

        toHistory = [];
        max_indent = 0

        claims.forEach( (next,i) => {

            max_indent = next.indent > max_indent ? next.indent : max_indent;

            next.active = false;

            if(blockArr.includes(i)) {
                claims[i].borderStyle = 'dashed';
                /* claims[i].borderStyle = 'solid'; */
                /* claims[i].borderWidth = 4; */
                claims[i].borderWidth = 2;
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

        let theIndent = claims[current].indent + 1;

        let newClaim = {
            text: "",
            indent: theIndent,
            borderColor: 'green',
            active: false,
            bullet: true
        }

        current ++;

        if(current < claims.length) { // = more claims below
            let remainder = (claims.length) - current;
            if(remainder > 0) { // check indents in remaining claims
                let bigger = true;
                for(let i=0; i<remainder; i++) {
                    if(bigger) {
                        /* current ++; */
                        if(claims[current].indent < theIndent) {
                            bigger = false;
                        } else {
                            current ++;
                        }
                    }
                }
            }
        }

        claims.splice(current, 0, newClaim);
        claims.forEach( next => {
            next.active = false;
        })

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

        /* saveMap(); */

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

        toggleSaved();

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

    const createText = () => {

        let prevBorderCol = '';
        let prevIndent = 0;
        let htmlArr = [];
        let col = '';
        let sig = '';
        let seqCount = 0;
        let addCount = 0;

        claims.forEach( (next,i) => {

            col = claims[i].borderColor;
            thisIndent = claims[i].indent;
            sig = '';

            if(i == 0) {

                // Introduction + Contention
                htmlArr[i] = `In this first sentence give a general introduction to your topic. In the second sentence (optional), ask your reader a question so that they can consider their own position before reading yours. In the third sentence tell us what other people think about this situation. [It will be argued that] ${claims[i].text.replace(/<.*?>/g,'')} [, as follows/for the following reasons].`;

            } else {

                if(thisIndent == 1) {
                    if(col == 'red') {
                        sig = '[It could be argued that]';
                    } else if(col == 'green') {
                        sig = '[Because]';
                    }
                } else {
                    if(col == 'grey') {
                        sig = '[For example]';
                    } else if(col == 'blue') {
                        sig = '[In fact]';
                    } else if(col == 'pink') {
                        sig = '[To explain]';
                    } else if(col == 'red') {
                        sig = '[Although]';
                    } else if(col == 'orange') {
                        sig = '[However]';
                    } else if(col == 'green') {
                        if(thisIndent == prevIndent) {
                            sig = `[${adding[addCount]}]`;
                            addCount ++;
                        } else {
                            sig = '[Because]';
                            addCount = 0;
                        }
                    }
                }

                htmlArr[i] = `${sig} ${claims[i].text}`;

            }

            // Paragraph break
            if(claims[i].indent == 1 && i <= claims.length-1) {
                htmlArr[i] = `\n\n${htmlArr[i].trim().replace(/<.*?>/g,'')}`;
            }

            prevIndent = next.indent;
            prevBorderCol = next.borderColor;

        })

        htmlArr.push(`\n\n[In conclusion] ${claims[0].text.replace(/<.*?>/g,'')}. In this sentence summarise your main points (ITO). In a third sentence make a prediction about future trends or consequences.`);

        let htmlStr = htmlArr.join(' ');
        console.log(htmlStr);
        navigator.clipboard.writeText(htmlStr);

        toggleEssay(htmlStr);

    }

    const saveScratchpadText = (e) => {
        /* console.log(e.target.value); */
        scratchpad_text = e.target.value;
    }

</script>

<SvelteSeo
    title="ArguLine"
/> 

<div id="modal" style="display:none;">
    <div class="alert">Press <code>enter</code> to toggle between <b><i>Insert</i></b> and <b><i>Arrange</i></b></div>
    <h3 style="margin-left:30px;">In 'Insert' mode</h3>
    <div style="margin-left:60px;">
        <p><code>Type</code> to edit items.</p>
        <p class="small">(HTML markup is allowed: &lt;b&gt;<b>bold</b>&lt;/b&gt;; &lt;i&gt;<i>italic</i>&lt;/i&gt;; etc.)</p>
    </div>
    <h3 style="margin-left:30px;">In 'Arrange' mode</h3>
    <div style="margin-left:60px;">
        <p><code>click <QuestionCircle /></code> or <code>type ?</code> to toggle instructions.</p>
        <p><code>click <FileEarmarkPlus /></code> or <code>type N</code> for <b><i>new</i></b> argument/outline.</p>
        <p><code>click <Copy /></code> to <b><i>save</i></b> activity to clipboard.</p>
        <p><code>click <BoxArrowInDown  /></code> or <code>type c</code> to <b><i>load</i></b> activity from clipboard.</p>
        <p><code>click <ArrowCounterclockwise /></code> or <code>u</code> to <i><b>undo</b></i>, <code><ArrowClockwise /></code> or <code>type r</code> to <i><b>redo</b></i>.</p>
        <p><code>click <ZoomIn /></code> or <code>type z</code> to <i><b>zoom in</b></i>, <code><ZoomOut /></code> or <code>type shift z</code> to <i><b>zoom out</b></i>.</p>
        <p><code>click <PlusSquare /></code> or <code>type +</code> to <b><i>add item</i></b>, <code><DashSquare /></code> to <b><i>remove item</i></b>.</p>
        <p><code>click <FileText /></code> to output a completed text <i>while editing an argument</i>.</p>
        <p><code>click <ListUl /></code> for <b><i>outline</i></b> format, <code><ListNested /></code> for <b><i>argument</i></b> format, OR <code>press f</code> to toggle between formats.</p>
        <p>When outlining, <code>type h</code> for <i><b>heading</b></i>, <code>b</code> for <i><b>bullet</b></i>.</p>
        <p><code>click <SignpostSplit /></code> or <code>type l</code> to toggle signal words on/off.</p>
        <p><code>click <ChevronUp /></code> or <code>type &uarr;</code> to select <b><i>next claim up</i></b>, <code><ChevronDown /></code> or <code>&darr;</code> <b><i>next claim down</i></b>.</p>
        <p><code>click <ChevronDoubleUp /></code> or <code>type shift &uarr;</code> to <b><i>move block up</i></b>, <code><ChevronDoubleDown /></code> or <code>shift &darr;</code> to <b><i>move block down</i></b>.</p>
        <p><code>click <ChevronLeft /></code> or <code>type &larr;</code> to <b><i>indent left</i></b>, <code><ChevronRight /></code> or <code>&rarr;</code> to <b><i>indent right</i></b>.</p>
        <p><code>click <ChevronDoubleLeft /></code> or <code>type shift &larr;</code> to <b><i>move block left</i></b>, <code><ChevronDoubleRight /></code> or <code>shift &rarr;</code> to <b><i>move block right</i></b>.</p>
        <p><code>click</code> colours to change border colour.</p>
    </div>
</div>

<Modal {showModal} msg={modalBody} modalWidth={modalWidth} on:click={toggleModal} />

<div id="text_edit">
    <textarea id="editing" rows="5" on:input={handleInput} onkeydown="return (event.keyCode!=13);" placeholder="start typing..">{input}</textarea>
</div>

<div id="scratchpad">
    <button class="btn btn-outline-dark mt-1" on:click={toggleScratchpad} style="position:absolute;top:-30px;right:0px;font-size:0.7rem;width:100px;z-index:1;">{scratchpad_btn_text}</button>
    {#if scratchpad}
        <textarea on:keyup={saveScratchpadText} transition:slide rows="20" placeholder="scratchpad..">{scratchpad_text}</textarea>
    {/if}
</div>

<div id="activity">

    <div id="map" style="overflow:auto;position:relative;">
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

        {#if !outline}
            {#each Array(max_indent) as _, index (index)}
                <div class="stripe" style="left:{(index+1) * indent}px;"></div>
            {/each}
        {/if}

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
        <div title="zoom in" on:click={zoomIn}><ZoomIn width={size} height={size} /></div>
        <div title="zoom out" on:click={zoomOut}><ZoomOut width={size} height={size} /></div>
        <div title="add item" on:click={addClaim}><PlusSquare width={size} height={size} /></div>
        <div title="remove selected item" on:click={deleteClaim}><DashSquare width={size} height={size} /></div>
        <div title="create text" on:click={createText}><FileText width={size} height={size} /></div>
        {#if outline}
            <div title="argument format" on:click={toggleMode}><ListNested width={size} height={size} /></div>
        {:else}
            <div title="outline format" on:click={toggleMode}><ListUl width={size} height={size} /></div>
        {/if}
        <div title="show/hide signal words" on:click={toggleSignals}><SignpostSplit width={size} height={size} /></div>
        <div title="toggle highlight block" on:click={toggleHighlightNode}><Diagram2 width={size} height={size} /></div>
        <div title="move item left" on:click={leftMove}><ChevronLeft width={size} height={size} /></div>
        <div title="move item right" on:click={rightMove}><ChevronRight width={size} height={size} /></div>
        <div title="move block left" on:click={leftMoveBlock}><ChevronDoubleLeft width={size} height={size} /></div>
        <div title="move block right" on:click={rightMoveBlock}><ChevronDoubleRight width={size} height={size} /></div>
        <div title="select item above" on:click={upFocus}><ChevronUp width={size} height={size} /></div>
        <div title="select item below" on:click={downFocus}><ChevronDown width={size} height={size} /></div>
        <div title="move block up" on:click={upMoveBlock}><ChevronDoubleUp width={size} height={size} /></div>
        <div title="move block udown" on:click={downMoveBlock}><ChevronDoubleDown width={size} height={size} /></div>
    </div>

    <div id="colors" on:click={changeColor}>
        <button id="green" title="support a claim" class="btn btn-outline-success">&nbsp;</button>
        <button id="red" title="object to a claim" class="btn btn-outline-danger">&nbsp;</button>
        <button id="orange" title="rebut and objection" class="btn btn-outline-warning">&nbsp;</button>
        <button id="blue" title="in fact" class="btn btn-outline-primary">&nbsp;</button>
        <button id="grey" title="for example" class="btn btn-outline-secondary">&nbsp;</button>
        <button id="pink" title="explanation" class="btn btn-outline-explanation">&nbsp;</button>
        <!--<button id="black" title="" class="btn btn-outline-dark">&nbsp;</button>-->
    </div>

</div>

    <div id="logo" style="position:fixed;bottom:10px;right:30px;">
        <div style="position">
            Argu<i>Line</i>
            <div id="line"></div>
        </div>
    </div>

<svelte:window on:keyup|preventDefault={onKeyUp} />

<style>

    #navbar {
        position:fixed;
        top: 10px;
        cursor:pointer;
    }

    #controls {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:3px;
    }

    #controls > div {
        opacity: 0.5;
        -webkit-transition: opacity .3s;
        -moz-transition: opacity .3s;
        transition: opacity .3s;
    }

    #controls > div:hover {
        opacity: 1;
    }

    #colors {
        display:grid;
        grid-template-columns: 1fr 1fr;
        gap:3px;
    }

    #colors > button {
        cursor:pointer;
        width:30px;
        height:30px;
        border-radius:15px;
        border-width:2px;
    }

    #activity {
        padding-top:10px;
        padding-left: 80px;
        overflow:auto;
    }

    #info {
        border-radius:5px;
        padding:10px;
        background:#eeeeee;
    }

    .claim {
        border-width:2px;
        border-style:solid;
        background: white;
        padding:5px;
        border-radius:5px;
        margin-top: 7px;
        margin-bottom: 7px;
        cursor:pointer;
    }

    .claim-active {
        background: var(--yellow);
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
        resize: none;
    }

    #text_edit {
        position: fixed;
        top:10px;
        right:20px;
        z-index:1;
    }

    #scratchpad {
        position: fixed;
        top:150px;
        right:20px;
        z-index:1;
    }

    /* div { */
    /*     border:1px solid pink; */
    /* } */

    .alert {
        border: 3px dotted var(--red);
        border-radius: 5px;
        padding:5px;
        text-align:center;
        font-size: 1.2rem;
        margin-bottom: 10px;
    }

    #logo {
        position:fixed;
        right:20px;
        bottom:20px;
        font-size:2rem;
        z-index:2;
        background: white;
        opacity:0.5;
    }

    #logo ul {
        padding: 0px;
        margin: 0px;
    }

    .stripe {
        position:absolute;
        top:0px;
        height:100%;
        width:2px;
        border-left:2px dotted #aaaaaa;
        z-index:-1;
    }

</style>
