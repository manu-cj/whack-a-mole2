export const play =(): void  =>{
    let play = false;
    const playButton = document.querySelector(".header__play-button");
    const main = document.querySelector(".main");
    playButton?.addEventListener("click", () => {
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