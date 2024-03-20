const randomNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    function checkGuess() {
        const guessInput = document.getElementById('guessInput');
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            setMessage('Please enter a valid number between 1 and 100.', 'black');
            return;
        }

        attempts++;

        if (guess === randomNumber) {
            setMessage(`Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`, 'green');
            guessInput.disabled = true;
        } else if (guess < randomNumber) {
            setMessage('Too low. Try again.', 'blue');
        } else {
            setMessage('Too high. Try again.', 'red');
        }

        guessInput.value = '';
        guessInput.focus();
    }

    function setMessage(message, color) {
        const messageElement = document.getElementById('message');
        messageElement.style.color = color;
        messageElement.textContent = message;
    }


