const quotes = [
  "Success is the sum of small efforts repeated daily.",
  "Dream big, start small, act now.",
  "Your future is created by what you do today.",
  "Believe in yourself and keep moving forward.",
  "Every expert was once a beginner.",
  "Consistency beats motivation.",
  "Hard work always pays off in the long run.",
  "Learn something new every day.",
  "Mistakes are proof that you are trying.",
  "Focus on progress, not perfection.",
  "The best way to predict the future is to create it.",
  "Discipline is the bridge between goals and achievement.",
  "Stay patient and trust the process.",
  "Small steps lead to big results.",
  "Don't wait for opportunity, create it.",
  "Success starts with self-belief.",
  "Challenges make life interesting.",
  "Never stop learning because life never stops teaching.",
  "Great things take time.",
  "Push yourself because no one else will do it for you."
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");
button.addEventListener('click',()=>{
    const index=Math.floor(Math.random()*20);//this will give random number between 1 to 20
    quote.textContent=quotes[index];
})