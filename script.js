const signup = document.querySelector(".signup");
const login = document.querySelector(".login");
const signupModal = document.querySelector(".signup-modal-wrapper");
const closeButton = document.querySelector(".close-modal");

const showModal = () => {
  signupModal.style.display = "block";
};

const closeModal = () => {
  signupModal.style.display = "none";
};

signup.addEventListener("click", () => {
  showModal();
});

closeButton.addEventListener("click", () => {
  closeModal();
});

window.addEventListener("click", () => {
  if (event.target === modal) {
    closeModal();
  }
});
function generateQuiz(questions,quizContainer,resultsContainer,submitButton){
  function showQuestions(questions,quizContainer){
  }
  function showResults(questions,quizContainer,resultsContainers){
  }
  showQuestions(questions,quizContainer);
  submitButton.onclick=function(){
    showResults(questions,quizContainer,resultsContainer);
  }
}
var myQuestions=[
 {
    question: "What does HTML stand for?",
    answers:{
      a: 'Hyperlinks and Text Markup Language',
      b: 'Home Tool Markup Language',
      c: 'Hyper text Markup Tool'
    },
    correctAnswer:'c' 
  },
 {
    question: "Who is making the Web standards?",
    answers:{
      a: 'Mozilla',
      b: 'World Wide Web Consortium',
      c: 'Google'
    },
    correctAnswer:'b' 
  },
  {
    question: "what is the correct html element for inserting a line break?",
    answers:{
      a: '<br>',
      b: '<break>',
      c: '<lb>'
    },
    correctAnswer:'a' 
  },
  {
    question: "what is the correct html element to define important text?",
    answers:{
      a: '<strong>',
      b: '<b>',
      c: '<i>'
    },
    correctAnswer:'a' 
  },
  {
    question: "what is the correct html element to define emphasized text?",
    answers:{
      a: '<italic>',
      b: '<em>',
      c: '<i>'
    },
    correctAnswer:'b' 
  }
  ];
function showQuestions(questions,quizContainer){
  var output =[];
  var answers;
  for(var i=0;i<questions.length;i++){
    answers =[];
    for(letter in questions[i].answers){
  answers.push(
    '<label>'
    + '<input type="radio" name="question'+i+'"value="'+letter+'">'
    + letter + ':'
    + questions[i].answers[letter]
    +'</label>'
    );
    }
    output.push(
      '<div class="question">' + questions[i].question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>'
      );
  }
  quizContainer.innerHTML = output.join('');
}
function showResults(questions, quizContainer, resultsContainer){
	var answerContainers = quizContainer.querySelectorAll('.answers');
	var userAnswer = '';
	var numCorrect = 0;
	for(var i=0; i<questions.length; i++){
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		if(userAnswer===questions[i].correctAnswer){
			numCorrect++;
			answerContainers[i].style.color = 'lightgreen';
		}
		else{
			answerContainers[i].style.color = 'red';
		}
	}
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
