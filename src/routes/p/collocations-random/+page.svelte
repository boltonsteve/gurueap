<script>

    import SvelteSeo from "svelte-seo"
    import { collocations } from '$lib/collocations.js'
    import { acl } from '$lib/acl.js';

    let filtered = acl.filter( next => next.sample.match(/\w/) );

    let html,left,right,lefts,rights,left_msg,right_msg,and,i_bullets,left_main,right_main,collocates;

    let total_collocations = filtered.length;
    let ran = Math.floor(Math.random() * total_collocations);
    let next = filtered[ran];
    let {before,first,first_pos,second,second_pos,after,sample} = next;
    collocates = `<div id="collocates">${before} <b><i>${first}</i></b> ${first_pos}, <b><i>${second}</i></b> ${second_pos} ${after}</div>`;

    lefts = [];
    rights = [];

    acl.forEach(function(next,i) {
        left = next.first;
        right = next.second;

        if(left == first) {
            rights.push(right);
        }
        if(right == second) {
            lefts.push(left);
        }
    });

    if(sample.length > 0) {
        sample = sample.replace(first, `<b>${first}</b>`);
        sample = sample.replace(second, `<b>${second}</b>`);
        html = `<p class="font-italic" style="font-size:1.1rem;">${sample}</p>`;
    }

    if(rights.length > 1) {
        left_msg = ` following <i><b>${first}</b></i> `;        
    } else {
        left_msg = '';
    }

    if(lefts.length > 1) {
        right_msg = ` preceding <i><b>${second}</b></i> `;        
    } else {
        right_msg = '';
    }

    if(left_msg.length > 0 || right_msg.length > 0) {
        and = ' and ';
    } else {
        and = '';
    }

    if(left_msg.length>0 || right_msg.length>0) {
        i_bullets =  `<li style="margin-left:-20px;">Other collocations ${left_msg}${and}${right_msg} are listed below. Select items to see examples.</li>`;
    } else {
        i_bullets = '';
    }

    html = `<div>
        ${html}
        <a class="btn btn-outline-dark mx-auto d-block text-center" href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${first}%20${second}" target="_blank" style="text-decoration:none;">more sample sentences</a>
    </div>
      <ul style="font-size:16px;">
            <li style="margin-left:-20px;">This page contains <span class="badge">${total_collocations}</span> collocation pairs.</li>
          <li style="margin-left:-20px;">Reload the page to see another pair.</li>
        ${i_bullets}
      </ul>`;

    if(rights.length > 0) {
        left_main = `<div class="font-weight-bold text-right">${first}</div><div>`;
            rights.forEach(function(next,i) {
                if(next !== second) {
                    left_main += `<a href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${first}%20${next} "target="_blank">${next}</a><br />`;
                }
            });
        left_main += '</div>';
    }

    if(lefts.length > 0) {
        right_main = `<div class="text-right">`;
            lefts.forEach(function(next,i) {
                if(next !== first) {
                    right_main += `<a href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${next}%20${second} "target="_blank"> ${next}</a><br />`;
                }
            });
        right_main += `</div>
        <div class="font-weight-bold">${second}</div>`;
    }

</script>

<div class="mb-3 mw-500">

    <h1>Random Academic Collocations</h1>

    <img src="/img/dice.png" alt="dice" style="float:right;width:90px;height:90px;">
    <div id="collocates">{@html collocates}</div>
    <div id="output">{@html html}</div>

    <div class="my-grid">{@html left_main}</div>
    <div class="my-grid">{@html right_main}</div>

</div>


<style>

    #collocates {
        font-size: 1.4rem;
    }

    .my-grid {
        display:grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom:15px;
        gap:10px;
    }

</style>
