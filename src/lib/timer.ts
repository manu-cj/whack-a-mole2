export const timer = (score:number, play:boolean) => {

    const parent = document.querySelector(".score");
    const gameSection = document.querySelector(".game");
    const timerSection = document.createElement("div");
    const main = document.querySelector(".main");
    const scoreElement = document.querySelector(".score__element");
    const playButton = document.querySelector(".header__play-button");
    if (parent) {
        
        timerSection.classList.add("timer");
        parent.appendChild(timerSection);
    }

let timeLeft = 60;
const interval = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(interval);
        if (gameSection && parent && scoreElement) {
            
            parent.classList.remove("score");
            parent.classList.add("final-score");
            scoreElement.textContent = `Final score: ${score}`;
            gameSection.innerHTML = "";
            (gameSection as HTMLElement).style.display = `none`;
            timerSection.style.display = `none`;
            if (playButton) {
                playButton.textContent = "Play again";
            }
            playButton?.addEventListener("click", () => {
                playButton.textContent = "Play";
                play = !play;
                if (play === false) {   
                    if (main) {
                        main.innerHTML = "";
                    }
                }
                return play;
            }
            ); 
        }
    } else {
        timerSection.textContent = `Time left: ${timeLeft} s`;
        console.log(timeLeft);
        timeLeft--;
    }
}, 1000);
}