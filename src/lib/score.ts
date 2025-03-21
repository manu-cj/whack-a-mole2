import { timer } from "./timer";

export const score = (score:number, play:boolean) => {
    const main = document.querySelector('.main');
    const scoreSection = document.createElement('section');
    scoreSection.classList.add('score');    
    const scoreElement = document.createElement('div');
    scoreElement.classList.add('score__element');
    scoreElement.textContent = `Score: ${score}`;
    scoreSection.appendChild(scoreElement);
    if (main) {
        main.appendChild(scoreSection);   
    }
    timer(score, play);

    if (play === false) {
        main?.removeChild(scoreSection);
        
    }
}