$('document').ready(function(){
	var questions = [
    ['math', '1', 'What is 2+2?', '4'],
    ['misc', '1', 'What is Geoff\'s social security number?','1'],
    ['science', '12+', 'What is the part of the brain thought responsible for memory?', 'hippocampus'],
    ['history', '2', 'Who was the first president of the United States?', 'George Washington'],
    ['math', '7', 'Solve this equation 4x + 3 = 19', '4'],
    ['science', '12+', 'What can you give a parkinson\'s patient to stop the tremors?', 'l-dopa'],
    ['misc', '12+', 'How high an architect can build in NYC is known as what term?', 'air rights'],
    ['science', '7', 'A bond between a metal and a non-metal is called a(n)', 'ionic bond'],
    ['history', '2', 'Who was the third president of the US?', 'Thomas Jefferson'],
    ['math', '6', 'What is the median of this set? { 1 , 2 , 3 , 4 , 5 }', '3'],
    ['science', '10', 'What is the largest artery in the body?', 'aorta'],
    ['history', '11', 'Corey doesnt know history & english. True/false', 'true'],
    ['math', '8', 'What is the positive solution of x to the problem x^2 + 3x - 4 = 0', '1'],
    ['science', '11', 'How long does a rock begining at rest take to hit the ground assuming no resistance from 10m.', 'something'],
    ['history', '2', 'Who was the second president of the United States?', 'John Adams'],
    ['math', '9', 'If one side of a triangle is 7 feet and the adjacent angle is 30 degrees, can you hear it fall?', 'yes'],
    ['science', '12+', 'What neurological disease is characterized by the proliferization of Amyloid-Beta plaques?', 'Alzheimers'],
    ['science', '8', 'Convert 2m to kilometers', 'hippocampus'],
    ['history', '6', 'What year did World War 2 end?', '1945'],
    ['math', '8', 'Reduce: 6X^2*Y / 3XY', '2X'],
    ['history', '2', 'Who was the first president of the United States?', 'George Washington'],
    ['math', '3', 'What is 4 / 2', '2'],
    ];


	chrome.storage.local.get('settings', function (result) {
		var questionSubset;
		if(result.settings.difficulties)
		questions = questions.filter(function (question) {
			return (result.settings.difficulties.indexOf(question[1]) !== -1);
		});

		if(result.settings.categories)
		questions = questions.filter(function (question) {
			return (result.settings.categories.indexOf(question[0]) !== -1);
		});

		var questionNum = Math.floor(Math.random() * questions.length); 
		var currentQuestion = questions[questionNum];
		var category = currentQuestion[0];
		var difficulty = currentQuestion[1];
		$('#category').text("Category: " + category.toUpperCase());
		$('#difficulty').text("Difficulty: " + difficulty);
		$('#question').text(currentQuestion[2]);

		function submit () {
			var answer = $('#answer').val();
			if(answer.toLowerCase() == currentQuestion[3].toLowerCase()){
				chrome.mathDone = true;
				chrome.runtime.sendMessage('ocghjfkhhhjbelfnfimcnkbocglmgibj', {message: 'math done!'});
			}
			else {
				alert("WRONG! TRY AGAIN!");
			}
		}

		$('.submitQuestion').on('click', submit);

		$('#answer').keypress(function(event){
			if (event.which === 13) submit();
		});
	});
});

//dlfbaefmaboanbdoficjjdcpcnjikjba
//ocghjfkhhhjbelfnfimcnkbocglmgibj
