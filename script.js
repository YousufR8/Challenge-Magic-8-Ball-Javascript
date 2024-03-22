window.onload = function(){

  const questionsAndAnswers = [
    { question: "Will I get a promotion?", answer: "Yes, definitely" },
    { question: "Should I pursue this opportunity?", answer: "Absolutely" },
    { question: "Will I pass the exam?", answer: "It is certain" },
    { question: "Will it rain tomorrow?", answer: "Cannot predict now" },
    { question: "Should I invest in stocks?", answer: "Without a doubt" },
  ];
  
  const questionInput = document.getElementById('question-input');
  const answerDisplay = document.getElementById('answer');
  const askBtn = document.getElementById('ask-btn');
  const clearBtn = document.getElementById('clear-btn');
  
  askBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    const randomPair = questionsAndAnswers[randomIndex];
    answerDisplay.textContent = randomPair.answer;
  });
  
  clearBtn.addEventListener('click', () => {
    questionInput.value = "";
    answerDisplay.textContent = "";
    questionInput.focus();
  });      
      
}