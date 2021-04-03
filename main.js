//get HTML Elements HTMLを取得
const question = document.getElementById("quiz-question");
const nextBtn = document.getElementById("next");
//images arrays 暗記したい動物をここに追加する
const animals = [
  "./imgs/dog.png",
  "./imgs/rabbit.png",
  "./imgs/raccoon.png",
  "./imgs/wild-boar.png",
];
// create random method ランダム関数の生成
const randomQuiz = Math.floor(Math.random() * 4);
//create images 初期画像を作る
const quizImg = document.createElement("img");
quizImg.setAttribute("id", "img");
quizImg.src = animals[randomQuiz];
question.appendChild(quizImg);

//function  nextボタンを押した時の関数
const nextAnimal = () => {
  const randomQuiz = Math.floor(Math.random() * 4);
  const img = document.getElementById("img");
  img.src = animals[randomQuiz];
  question.appendChild(img);
};

//clicked nextBtn nextボタンを押した時の挙動
nextBtn.addEventListener("click", () => {
  nextAnimal();
});
