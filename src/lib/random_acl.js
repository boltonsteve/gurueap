function redraw(result) {

    let total_collocations = acl.length;
    let ran = Math.floor(Math.random() * total_collocations);
    let next = acl[ran];
    let {before,first,first_pos,second,second_pos,after,sample} = next;

    let output = `${before} <b><i>${first}</i></b> ${first_pos}, <b><i>${second}</i></b> ${second_pos} ${after}`;

    var lefts = [];
    var rights = [];

    acl.forEach(function(next,i) {
        let left = next.first;
        let right = next.second;

        if(left == first) {
            rights.push(right);
        }
        if(right == second) {
            lefts.push(left);
        }
    });

    if(sample.length > 0) {
        sample = sample.replace(/`${first}`/, `<em><strong>${first}</strong></em>`);
        sample = sample.replace(/`${second}`/, `<em><strong>${second}</strong></em>`);
        output += `<div class="alert alert-success" style="margin-top:10px;margin-bottom:0px;"><p style="font-size:18px;"><em>${sample}</em></p></div>`;
    }

    if(lefts.length > 1) {
        var right_msg = ` preceding <em><strong>${second}</strong></em> `;        
    } else {
        var right_msg = '';
    }

    if(rights.length > 1) {
        var left_msg = ` following <em><strong>${first}</strong></em> `;        
    } else {
        var left_msg = '';
    }

    if(left_msg.length > 0 && right_msg.length > 0) {
        var and = ' and ';
    } else {
        var and = '';
    }

    if(left_msg.length>0 || right_msg.length>0) {
        var i_bullets =  `<li style="margin-left:-20px;">Other collocations ${left_msg}${and}${right_msg} are listed below. Select items to see examples.</li>`;
    } else {
        var i_bullets = '';
    }

    html = `<div class="jumbotron">
      <h2>${output}</h2>
      <ul style="font-size:16px;">
            <li style="margin-left:-20px;">This page contains <span class="badge">${total_collocations}</span> collocation pairs.</li>
          <li style="margin-left:-20px;">Reload the page to see another pair.</li>
        ${i_bullets}
      </ul>
      <p><a class="btn btn-primary btn-lg" href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${first}%20${second}" target="_blank" role="button">Sample sentences</a></p>
    </div>`;

    if(rights.length > 1) {
        left_main = `<table class="table" style="margin:0px;padding:0px;"><tr><td style="border:0px;font-size:18px;width:50%;text-align:right;"><em><strong>${first}</strong></em></td>
        <td style="border:0px;font-size:18px;">`;
        rights.forEach(function(next,i) {
            if(next !== second) {
                left_main += `<a href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${first}%20${next} "target="_blank">${next}</a><br />`;
            }
        });
        left_main += '</td></tr></table>';
        html += left_main;
    }

    if(lefts.length > 0) {
        right_main = `<table class="table" style="margin:0px;padding:0px;"><tr><td style="border:0px;font-size:18px;width:50%;text-align:right;">`;
        lefts.forEach(function(next,i) {
            if(next !== first) {
                right_main += `<a href="https://skell.sketchengine.eu/#result?f=concordance&lang=en&query=${next}%20${second} "target="_blank"> ${next}</a><br />`;
            }
        });
        right_main += `</td><td style="border:0px;font-size:18px;"><em><strong>${second}</strong></em></td></tr></table>`;
        html += right_main;
    }

    // $("#wrapper").html(html);

}
