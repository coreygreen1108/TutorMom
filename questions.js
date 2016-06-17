$('document').ready(function(){
	var questions = [["What is 2+2?", '4'],["What is Geoff's middle name?", 'Charles'],["What is the capital of New York?", "Albany"]];
	var questionNum = Math.floor(Math.random() * questions.length); 
	var currentQuestion = questions[questionNum];
	$('#question').text(currentQuestion[0]);

	$('.submitQuestion').on('click', function(elem){
		var answer = $('#answer').val();
		if(answer.toLowerCase() == currentQuestion[1].toLowerCase()){
			chrome.mathDone = true;
			chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'math done!'});
		}
		else {
			alert("WRONG! NO FACEBOOK FOR YOU!");
		}
	});
});
