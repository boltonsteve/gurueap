<script>

    import SvelteSeo from "svelte-seo"
    import RandomStudent from "../../Components/RandomStudent.svelte"

    let texts = [
        'Bosses sit in offices filling pages with percentages.',
        'Boxes, faxes and packages are all sent by businesses.',
        'Nurses apply bandages and cure viruses.',
        'Sausages and sauces stay fresh in fridges.',
        'Witches make sandwiches from leeches and eyelashes.',
        'An artist mixes paint and brushes it onto canvases.',
        'Oranges grow on branches in the gardens of cottages.',
        'Men who repair watches wear glasses with thick lenses.',
        'People enter races to win prizes.',
        'Foxes hide in bushes to avoid surprises.',
        'People of both sexes sunbathe on beaches.',
        'Birds in cages face disadvantages.',
        'Noses of all shapes and sizes detect gases emerging from ashes.',
        'When he’s away, he misses her kisses.',
        'Students in colleges follow classes in the sciences. They write sentences using tenses in different languages.',
        'People buy cars from garages, then drive inches from the edges of bridges.',
        'Musicians of all ages appear on stages.',
        'My friend washes dishes to earn wages and pay taxes.'
    ];

</script>

<SvelteSeo
    title="IZ Plurals"
 /> 

<RandomStudent {texts} name="IZ" />
