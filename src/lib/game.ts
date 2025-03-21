import { score } from "./score";
import smash from "./../assets/sounds/assets_smash.mp3";

export const game = (play:boolean, difficulty:string) => {

    let scoreValue = 0;
    const parent = document.querySelector(".main");
    if (parent) {
        const gameSection = document.createElement("section");
        gameSection.classList.add("game");
        parent.appendChild(gameSection);

        for (let i = 0; i < 9; i++) {
            const caseElement = document.createElement("div");
            caseElement.classList.add("cases");
            gameSection.appendChild(caseElement);

            const holeElement = document.createElement("div");
            holeElement.classList.add("hole");
            caseElement.appendChild(holeElement);    
        }
        const allCases = document.querySelectorAll(".cases");
        if (play) {
            setInterval(() => {
            const randomCase = Math.floor(Math.random() * 9);
            const moleElement = document.createElement("div");
            moleElement.classList.add("mole");
            moleElement.style.animationDuration = `${parseInt(difficulty) / 1000}s`;
            const scoreElement = document.querySelector(".score__element");
            if (scoreElement) {
                moleElement.addEventListener("click", () => {
                const audio = new Audio(smash);
                audio.play();
                scoreElement.textContent = `Score: ${scoreValue += 1}`;
                moleElement.remove();
                });
            }
            allCases.forEach(caseElement => {
                const existingMole = caseElement.querySelector(".mole");
                if (existingMole) {
                existingMole.remove();
                }
            });

            

            allCases[randomCase].appendChild(moleElement);

            setTimeout(() => {
                moleElement.remove();
            }, parseInt(difficulty));
            }, parseInt(difficulty));
        }
        
     
          
        
    }
    
}