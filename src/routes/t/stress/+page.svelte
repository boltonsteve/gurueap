<script>

    import SvelteSeo from "svelte-seo";
    import Scaffold from '../../components/Scaffold.svelte';

    let incoming = `Some students perform badly in IELTS because they are under an unusual amount of stress. IELTS is particularly stressful because [if students do not achieve their target score they may not be able to continue with their scholarships|Why?]. The kind of stress caused by IELTS can lead to [anxiety|What?], and [depression|What?]. However, it is possible to overcome this stress so that [a satisfactory score can be achieved without too much angst|So that what?], as follows.

One effective way to relax before the IELTS test is to meditate. Meditation involves focusing carefully on something, either [an object|What?], or [a sound|What?], or even [our breathing|What?]. Meditation has various positive effects. It [calms the mind, clearing it of unnecessary thoughts|What does it do?]. In addition, meditation also [relaxes the body|What else does it do?]. Finally, [regular meditation can bring about lasting effects|Finally, what?].

Another way to reduce stress before and during the test involves making certain lifestyle adjustments. First it is important to [get plenty of sleep the night before the test|to what?]. Also, try to avoid too much [alcohol, caffeine and fast food|..too much what?] in the lead up to the test. In addition, rather than study intensely the day before an exam, [begin your exam revision and practice well before the test date|do this instead..].

In conclusion, IELTS anxiety can be reduced easily, by meditating and by living 'cleanly' as the test date approaches. As long as habits such as these are developed, [stress will at least be controlled|What will happen?] and [IELTS band scores may increase|What else will happen?].`;

</script>

<SvelteSeo
    title="IELTS Stress"
    description="Replace highlighted items with your own ideas to build an essay."
    keywords="IELTS,EAP,academic English,Indonesia,study abroad,English for academic purposes,pre-departure training,writing,scaffold,activity,stress"
 /> 

 <Scaffold incoming={incoming} title='IELTS Stress' />
