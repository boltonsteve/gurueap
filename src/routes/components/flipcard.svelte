<script>
    export let front;
    export let back;
</script>

<div class="flip-card">
    <div class="flip-card-inner">
        <div class="flip-card-front">
            <div>{@html front}</div>
        </div>
        <div class="flip-card-back">
            {back}
        </div>
    </div>
</div>

<style>

.flip-card {
    background-color: transparent;
    width: 220px;
    height: 150px;
    margin: 10px;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    /* text-align: center; */
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {

    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    border-radius:5px;
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor:pointer;
}

.flip-card-front {
    background-color: #fff;
    /* background-color: #bbb; */
    color: black;
}

.flip-card-back {
    background-color: #000;
    color: white;
    transform: rotateY(180deg);
}

</style>
