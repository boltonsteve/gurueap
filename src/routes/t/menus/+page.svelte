<script>

    import SvelteSeo from "svelte-seo";
    import Menu from '../../components/Menu.svelte';

    let myAnswers = [];
    let myGuesses = [];

    let incoming = `In modern society, in order to improve [the|a|an|-] quality of their lives, [-|a|an|the] people go shopping. Some people claim that as a result, we have moved too far away from [-|a|an|the] established beliefs and conduct, and that we should progress rather than being stuck in outdated traditions, so there is no cause for regret.`;

    const updateAnswers = (e) => {
        myAnswers = [...e.detail];
        console.log(myAnswers);
    }

    const updateGuesses = (e) => {
        myGuesses = [...e.detail];
        console.log(myGuesses);
    }

</script>

 <Menu incoming={incoming} title="Menu" on:updateAnswers={updateAnswers} on:updateGuesses={updateGuesses} />
