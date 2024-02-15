<script>

    export let teacher = "Steve";

    const teachers = {
        Steve: ['Dave','Sue','John'],
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

    const tNames = Object.keys(teachers);
    const tNamesLinksArr = tNames.map( next => {
        return `<span>${next}</span>`;
    });
    const tNamesLinksStr = tNamesLinksArr.join(' - ');



</script>

<div id="teachers">
    {@html tNamesLinksStr}
</div>
