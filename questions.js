$('document').ready(function(){
	var questions = [["What is 2+2?", '4'],["What is Geoff's middle name?", 'Henry'],["What is the capital of New York", "Albany"]];
	var questionNum = Math.floor(Math.random() * questions.length); 
	var currentQuestion = questions[questionNum];
	$('#question').text(currentQuestion[0]);

	$('.submitQuestion').on('click', function(elem){
		var answer = $('#answer').val();
		if(answer.toLowerCase() == currentQuestion[1].toLowerCase()){
			chrome.tabs.update(window.currentTabId, {
				url: 'http://www.facebook.com'
			});
		}
		else {
			alert("WRONG! NO FACEBOOK FOR YOU!");
		}
	});
});

// window.keepGoing = function(){
// 	// alert('got to this function');
// 	console.log('geoff thinks we will see this too')
	
// }