$('document').ready(function(){
	var questions = [["What is 2+2?", '4'],
	["What is Geoff's middle name?", 'Charles'],
	["What is the capital of New York?", "Albany"],
	["What is Geoff's Social Security Number?", '123456789']];

	var questionNum = Math.floor(Math.random() * questions.length); 
	var currentQuestion = questions[questionNum];
	$('#question').text(currentQuestion[0]);

	$('.submitQuestion').on('click', submit);

	$('#answer').keypress(function(event){
		if (event.which === 13) submit();
	});

	function submit () {
		var answer = $('#answer').val();
		if(answer.toLowerCase() == currentQuestion[1].toLowerCase()){
			chrome.mathDone = true;
			chrome.runtime.sendMessage('dlfbaefmaboanbdoficjjdcpcnjikjba', {message: 'math done!'});
		}
		else {
			alert("WRONG! TRY AGAIN!");
		}
	}
});

//dlfbaefmaboanbdoficjjdcpcnjikjba
