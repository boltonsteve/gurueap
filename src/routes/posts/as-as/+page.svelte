<script>
    import SvelteSeo from "svelte-seo"
    import WithIcon from '../../components/WithIcon.svelte'
</script>

<div class="mb-3 mw-500">

    <img src="/img/beer-bellies.png" class="img-fluid rounded" alt="beer bellies">

    <h1>as...as</h1>

    <WithIcon icon="flag" position="right">
        <div slot="html">Sometimes comparing with <span class="font-weight-bold font-italic text-danger">as</span> leads to some first language interference, at least for Indonesians!</div>
    </WithIcon>

    <h3>as...as + verbs</h3>

    <div class="alert alert-success font-italic">
        Sally can eat as much as she likes and not get fat. I hate her!
        <p class="small my-0">(<b>much</b> affects the meaning of the verb <b>eat</b>)</p>
    </div>

    <p>So far, so good. In Bahasa Indonesia we have the same grammar structure.</p>

    <hr>
    
    <h3>as...as + plural and uncountable nouns</h3>

    <div class="alert alert-danger">
        <p class="font-italic my-0">If someone poisons your dog, give your dog coconut water as much as possible!</p>

    </div>

    <WithIcon icon="warning">
        <div slot="html">
            This is a direct translation of:
            <p class="font-italic mb-0">Kalau anjing anda keracunan, kasih dia air kelapa sebanyak mungkin!</p>
        </div>
    </WithIcon>

    <WithIcon icon="flag" position="right">
        <div slot="html">
            <p class="mb-0">Indonesians need to be careful here because in Bahasa Indonesia the uncountable noun <b><i>air kelapa</i></b> (coconut water) is positioned <span class="uli">before</span> <b><i>as much as</i></b></p>
        </div>
    </WithIcon>

    <p>With <b><i>plural and uncountable nouns</i></b>, you need this:</p>

    <div class="alert alert-success font-italic">
        <p class="my-0">If someone poisons your dog, give your dog as much coconut water as possible!</p>
        <p class="small my-0">(<b>much</b> affects the meaning of the noun <b><i>coconut water</i></b>)</p>
    </div>

    <p>Compare:</p>

    <div class="my-grid">
        <div style="text-align:center;">Indonesian</div>
        <div style="text-align:center;">English</div>
    </div>

    <div class="my-grid">
        <div class="alert alert-danger font-italic">
            <p class="my-0">If someone poisons your dog, give your dog <span class="font-weight-bold text-primary">coconut water</span> <span class="font-weight-bold text-info">as much as</span> possible!</p>
        </div>
        <div class="alert alert-success font-italic">
            <p class="my-0">If someone poisons your dog, give your dog <span class="font-weight-bold text-info">as much</span> <span class="font-weight-bold text-primary">coconut water</span> <span class="font-weight-bold text-info">as</span> possible!</p>
        </div>
    </div>

    <WithIcon icon="warning">
        <div slot="html">
            Notice that when you’re <span class="uli">focusing on nouns</span>, your only options are <b><i>much</i></b> (for uncountable nouns) and <b><i>many</i></b> (for plural countable nouns)!
        </div>
    </WithIcon>
    
    <hr>
    
    <h3>as...as + singular countable nouns</h3>

    <div class="alert alert-danger font-italic">Later if I have enough money I will build a house as large as possible.</div>

    <WithIcon icon="warning">
        <div slot="html">
            This is a direct translation of:
            <p class="font-italic mb-0">Nanti kalau saya punya uang saya mau bikin rumah sebesar mungkin!</p>
        </div>
    </WithIcon>

    <WithIcon icon="flag" position="right">
        <div slot="html">
            <p class="mb-0">Again, Indonesians need to be careful because in Bahasa Indonesia the singular count noun <b><i>rumah</i></b> (house) is positioned <span class="uli">before</span> <b><i>as much as</i></b>.</p>
        </div>
    </WithIcon>

    <p>With <b><i>singular countable nouns</i></b> you need this:</p>

    <div class="alert alert-success font-italic">
        <p class="my-0">Later if I have enough money I will build as large a house as possible.</p>
        <p class="my-0 small">(<b>large</b> affects the <span class="uli">singular countable noun</span> <b>house</b>)</p>
    </div>

    <p>Compare:</p>

    <div class="my-grid">
        <div style="text-align:center;">Indonesian</div>
        <div style="text-align:center;">English</div>
    </div>

    <div class="my-grid">
        <div class="alert alert-danger font-italic">
            <p class="my-0">Later if I have enough money I will build <span class="font-weight-bold text-primary">a house</span> <span class="font-weight-bold text-info">as large as</span> possible!</p>
        </div>
        <div class="alert alert-success font-italic">
            <p class="my-0">Later if I have enough money I will build <span class="font-weight-bold text-info">as large</span> <span class="font-weight-bold text-primary">a house</span> <span class="font-weight-bold text-info">as</span> possible!</p>
        </div>
    </div>

    <WithIcon icon="warning">
        <div slot="html">
            Notice the singular countable noun always has the article <b><i>a</i></b>! Notice also that you are no longer restricted to <b><i>many</i></b> and <b><i>much</i></b>. Any adjective can be used!
        </div>
    </WithIcon>

    <hr>

    <h3>Challenge</h3>

    <p>Can you make sentences comparing John and Linda? (See photo top of page)</p>

</div>

<style>
.my-grid {
    display:grid;
    grid-template-columns: 1fr 1fr;
}
    hr {
        margin:35px auto;
    }
</style>
