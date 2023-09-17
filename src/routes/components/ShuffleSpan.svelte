<script>
    export let id;
    export let word = "word";

</script>

<div id="{id}" class="span" on:click>{word}</div>

<style>
.span {
    border:1px solid #bbbbbb;
    border-radius:3px;
    padding:3px 7px 3px 7px;
    margin:3px;
    cursor:pointer;
    font-size:1.2rem;
}
</style>
