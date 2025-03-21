import { game } from "./lib/game";
import { score } from "./lib/score";
import "./ui/style.css";
import samba from "./assets/sounds/Samba.mp3";
import samba2 from "./assets/sounds/samba-pop-288518.mp3";

const audio = new Audio(samba2);
audio.loop = false;

audio.addEventListener("ended", () => {
  audio.src = audio.src === samba2 ? samba : samba2;
  audio.play();
});

audio.play();

const app = document.getElementById("app");
if (app) {
  const header = document.createElement("header");
  header.classList.add("header");
  const h1 = document.createElement("h1");
  h1.classList.add("header__title");
  h1.textContent = "Whack a mole";
  header.appendChild(h1);
  const playButton = document.createElement("button");
  playButton.classList.add("header__play-button");
  playButton.textContent = "Play";
  header.appendChild(playButton);
  const difficultySelect = document.createElement("select");
  difficultySelect.classList.add("header__difficulty-select");

  const easyOption = document.createElement("option");
  easyOption.value = "2500";
  easyOption.textContent = "Easy";
  difficultySelect.appendChild(easyOption);

  const mediumOption = document.createElement("option");
  mediumOption.value = "1500";
  mediumOption.textContent = "Medium";
  difficultySelect.appendChild(mediumOption);

  const hardOption = document.createElement("option");
  hardOption.value = "500";
  hardOption.textContent = "Hard";
  difficultySelect.appendChild(hardOption);

  header.appendChild(difficultySelect);
  app.appendChild(header);

  let play = false;

  const main = document.createElement("main");
  main.classList.add("main");
  app.appendChild(main);
  let difficulty = difficultySelect.value;
  difficultySelect.addEventListener("change", () => {
     difficulty = difficultySelect.value;
  });
  playButton.addEventListener("click", () => {
    playButton.textContent = play ? "Play" : "Stop";
    play = !play;
    game(play, difficulty);
    score(0, play);
  });



  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const currentYear = new Date().getFullYear();
  footer.textContent = `© ${currentYear} Manu-cj`;
  app.appendChild(footer);
}
