$('document').ready(function(){
	var questions = [
	['math', '1', 'What is 2+2?', '4'],
	['misc', '1', 'What is Geoff\'s social security number?','1'],
	['science', '12+', 'What is the part of the brain thought responsible for memory?', 'hippocampus'],
	['history', '2', 'Who was the first president of the United States?', 'George Washington'],
	['math', '7', 'Solve this equation 4x + 3 = 19', '4'],
	['science', '12+', 'What can you give a parkinson\'s patient to stop the tremors?', 'l-dopa'],
	['misc', '12+', 'How high a an architect can build in NYC is known as what term', 'air rights'],
	];

	var questionNum = Math.floor(Math.random() * questions.length); 
	var currentQuestion = questions[questionNum];
	var category = currentQuestion[0];
	var difficulty = currentQuestion[1];
	$('#category').text("Category: " + category.toUpperCase());
	$('#difficulty').text("Difficulty: " + difficulty);
	$('#question').text(currentQuestion[2]);

	$('.submitQuestion').on('click', submit);

	$('#answer').keypress(function(event){
		if (event.which === 13) submit();
	});

	function submit () {
		var answer = $('#answer').val();
		if(answer.toLowerCase() == currentQuestion[3].toLowerCase()){
			chrome.mathDone = true;
			chrome.runtime.sendMessage('dlfbaefmaboanbdoficjjdcpcnjikjba', {message: 'math done!'});
		}
		else {
			alert("WRONG! TRY AGAIN!");
		}
	}
});

//dlfbaefmaboanbdoficjjdcpcnjikjba
