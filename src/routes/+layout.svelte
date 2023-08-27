<script>
    import { links } from '$lib/links.js'
    import { songs } from '$lib/songs.js'
    let linksCount = links.length;
    let songsCount = songs.length;
</script>
<nav>
    <div class="logo">
        <a href="/">GuruEAP</a>
    </div>
    <div class="menu">
        <a href="/posts">{linksCount} posts</a> | 
        <a href="/songs">{songsCount} songs</a>
    </div>
</nav>

<div class="px-2"><slot /></div>
