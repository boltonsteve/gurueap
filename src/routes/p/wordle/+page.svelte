<!-- Wordle.svelte -->

<script>
  let targetWord = "apple";
  let guessedWord = Array(targetWord.length).fill("");
  let maxAttempts = 6;
  let attemptsLeft = maxAttempts;

  function handleGuess(event) {
    const input = event.target.value.toLowerCase();

    if (input.length === targetWord.length) {
      if (input === targetWord) {
        alert("Congratulations! You guessed the word.");
      } else {
        attemptsLeft--;
        if (attemptsLeft === 0) {
          alert(`Game over! The correct word was ${targetWord}.`);
          resetGame();
        }
      }
    }
  }

  function resetGame() {
    guessedWord = Array(targetWord.length).fill("");
    attemptsLeft = maxAttempts;
  }
</script>

<style>
  .word-container {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
  }

  input {
    width: 30px;
    text-align: center;
    padding: 5px;
    margin: 0 5px;
  }

  button {
    margin-top: 10px;
  }
</style>

<div>
  <div class="word-container">
    {#each guessedWord as letter, index (index)}
      <input
        bind:value={guessedWord[index]}
        on:input={handleGuess}
        type="text"
        maxlength="1"
      />
    {/each}
  </div>

  <p>Attempts left: {attemptsLeft}</p>

  <button on:click={resetGame}>Reset Game</button>
</div>

