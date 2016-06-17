$('document').ready(function(){
	var questions = [['math', 'What is 2+2?', '4', 2, 3, 1],
	['misc', 'What is Geoff\'s social security number?', '1', 2, 3, 4],
	['science', 'What is the part of the brain thought responsible for memory?', 'hippocampus'],
	['history', 'Who was the first president of the United States?', 'George Washington'],
	['math', 'Solve this equation 4x + 3 = 19', '4']
	];
	
	var questionNum = Math.floor(Math.random() * questions.length); 
	var currentQuestion = questions[questionNum];
	var category = currentQuestion[0];
	$('#category').text("Category: " + category.toUpperCase());
	$('#question').text(currentQuestion[1]);

	$('.submitQuestion').on('click', submit);

	$('#answer').keypress(function(event){
		if (event.which === 13) submit();
	});

	function submit () {
		var answer = $('#answer').val();
		if(answer.toLowerCase() == currentQuestion[2].toLowerCase()){
			chrome.mathDone = true;
			chrome.runtime.sendMessage('dlfbaefmaboanbdoficjjdcpcnjikjba', {message: 'math done!'});
		}
		else {
			alert("WRONG! TRY AGAIN!");
		}
	}
});

//dlfbaefmaboanbdoficjjdcpcnjikjba
