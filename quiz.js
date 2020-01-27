function quiz(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

			// ...add an HTML radio button
			answers.push(`<label>
				  <input type="radio"
				         onclick="javascript:showNextSlide();"
						 name="question${questionNumber}"
						 value="${letter}">
				  ${letter} :
				  ${currentQuestion.answers[letter]}
				</label>`);			
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer !== currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `<canvas id='results-canvas'></canvas>`;
	var gauge = new RadialGauge({
		renderTo: 'results-canvas',
		width: 300,
		height: 300,
		title: 'Relacionamento Abusivo',
		startAngle: 90,
		ticksAngle: 180,
		minValue: 0,
		maxValue: myQuestions.length,
		majorTicks: 10,
		minorTicks: 5,
		valueFormat: { int: 3, dec: 0 },
		highlights: [
			{
				"from": 0,
				"to": Math.round(myQuestions.length / 4),
				"color": "#6699ff"
			}, {
				"from": Math.round(myQuestions.length * 3 / 4),
				"to": myQuestions.length,
				"color": "#ff3300"
			}
		],
		glow: true,
		animationDuration: 1500,
		animationRule: "linear"
	});
	gauge.value = numCorrect;
	gauge.draw();
	resultsContainer.scrollIntoView();
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
	  window.showNextSlide = showResults;
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  window.showResults = showResults;

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  window.showNextSlide = showNextSlide;

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
	{
	  question: "É possessivo?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "É controlador?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "É excessivamente ciumento?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Exige suas senhas?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "É constantemente desconfiado?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te acusa de traição sem motivos?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te isola?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Controla as roupas que você usa?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "É agressivo?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Costuma te segurar com força?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Costuma te empurrar?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Soca/empurra/derruba coisa pra te intimidar?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Já te ameaçou com algum tipo de arma?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te força relações sexuais sem a sua vontade?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz chantagem emocional?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te coloca pra baixo?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te humilha?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te xinga?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te dá apelidos pejorativos?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Desvaloriza o que você faz?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz com que você se sinta feia/burra/incapaz?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Fica nervoso quando você se sente forte/inteligente?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Se irrita quando você se mostra independente?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te ofende e faz passar por constrangimentos?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Desrespeita outras mulheres? (mãe, primas, colegas de serviço)",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz joguinhos para que você faça o que ele quer?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te pune e impõe restrições se você desobedecer",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz com que você tenha que pedir perdão",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te proibe de fazer as coisas?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te culpa por um abuso que ele tenha cometido contra você?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Fica carinhoso depois de um abuso para que você o perdoe?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te chantagia/ameaça quando você sugere deixa-lo?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Ameaça se matar caso termine o relacionamento?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Se justifica dizendo \"é porque eu te amo demais\" ou \"é para o seu bem\" ?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Instalou algum programa de rastreamento para te monitorar?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz com que você se afaste dos outros?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Te faz depender somente dele?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Faz \"críticas contrutivas\" que na verdade destroem sua autoestima?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Invalida seus sentimentos para você crer que o que sente é bobagem?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Evita o assunto \"dinheiro\" para te fazer economicamente dependente?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Controla o dinheiro para restringir suas atividades?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Rouba/esconde/quebra seus objetos pessoais?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Usa os filhos como ferramenta de chantagem?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "As ameaças têm se tornado comuns?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
	{
	  question: "Comete calunia/injuria/difamação?",
	   answers: {
		 a: "Sim",
		 b: "Não",
	   },
	   correctAnswer: "b"
	 },
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState != 'loading')
        fn();
    });
  }
}

ready(quiz);