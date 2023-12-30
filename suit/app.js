const game = () => {
    let pScore = 0;
    let cScore = 0;
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");

    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");

            playerHand.src = "../suit/assets/rock.jpg";
            computerHand.src = "../suit/assets/rock.jpg";
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
    
        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerOptions = ["rock", "paper", "scissors"];
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
    
                // Jalankan animasi setiap kali opsi dipilih
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
    
                // Set timeout untuk menyesuaikan tampilan setelah animasi selesai
                setTimeout(() => {
                    compareHands(this.textContent.toLowerCase(), computerChoice);
                }, 2000);
            });
        });
    
        // Hentikan animasi setelah selesai
        playerHand.addEventListener("animationend", function () {
            this.style.animation = "";
        });
    
        computerHand.addEventListener("animationend", function () {
            this.style.animation = "";
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        // Update nama file gambar sesuai dengan pilihan
        const playerImage = `${playerChoice}.jpg`;
        const computerImage = `${computerChoice}.jpg`;

        // Set gambar berdasarkan pilihan
        playerHand.src = `../suit/assets/${playerImage}`;
        computerHand.src = `../suit/assets/${computerImage}`;

        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }

        if (winningConditions[playerChoice] === computerChoice) {
            winner.textContent = "Player Wins";
            pScore++;
        } else {
            winner.textContent = "Computer Wins";
            cScore++;
        }

        updateScore();
    };

    startGame();
    playMatch();
};

game();
