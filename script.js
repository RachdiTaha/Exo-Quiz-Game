function envoyer() {
  let point = 0;
  let q1 = document.quiz.question1.value;
  let q2 = document.quiz.question2.value;
  let q3 = document.quiz.question3.value;
  let q4 = document.quiz.question4.value;
  let q5 = document.quiz.question5.value;
  let quiz = document.getElementById("quiz");
  let resultat = document.getElementById("resultat");
  let song = new Audio("./sounds/song.wav");
  let song1 = new Audio("./sounds/applause.wav");
  let song2 = new Audio("/sounds/yeahh.wav");

  if (q1 == "Javascript") {
    point++;
  }
  if (q2 == "Librairie") {
    point++;
  }
  if (q3 == "10") {
    point++;
  }
  if (q4 == "spring") {
    point++;
  }
  if (q5 == "react") {
    point++;
  }
  quiz.style.display = "none";

  if (point < 3) {
    resultat.textContent = `Ton résultat est de ${point} point, sir t9ra,`;
    song.play();
  } else if (point == 3) {
    resultat.textContent = `Ton Résultat est de ${point} point, passable !!!`;
    song1.play();
  } else {
    resultat.textContent = `Ton Résultat est de ${point} point, c'est excelent !!!`;
    song2.play();
  }
}
