// document.addEventListener('DOMContentLoaded', function(){
// 		chrome.tabs.update(tab.id, {
// 			url: "http://www.zombo.com"
// 		})	
// })

// chrome.tabs.onCreated.addListener(function(tab, changeInfo){
// 	chrome.tabs.update(tab.id, {
// 		url: "http://www.zombo.com"
// 	})
// })

// window.Geoff = true; 

// function modifyGeoff(){
// 	window.Geoff = !window.Geoff; 
// }
// setInterval(function(){
// 	if(window.Geoff){
// 		chrome.tabs.getCurrent(function(tab, info){
// 			console.log(window.Geoff);
// 			chrome.tabs.update(tab, {
// 				url: "background.html"
// 			})	
// 		})
// 	}
// },3000)
// alert('extension updated');

window.currentTab;

chrome.tabs.onHighlighted.addListener(function(tab){
	window.currentTab = tab; 
})

window.doMath = true; 

chrome.tabs.onCreated.addListener(function(tab){
	// alert(tab.id);
	// if(){
		alert('got here');
		chrome.tabs.update(tab.id, {
			url: 'questionform.html'
		})
});

window.keepGoing = function(){
	// alert('got to this function');
	console.log('geoff thinks we will see this too')
	chrome.tabs.update(currentTab.id, {
		url: 'http://www.facebook.com'
	})
}
// 	alert(tab);
// 	$(document).ready(function () {
// 		//alert('inside doc ready');
// 		alert('THE BODYYYYY ' + $('body'))
// 		$("body").append("<h1>HI</h1>");
// 		//chrome.runtime.getBackgroundPage(function(page){
// 		//$("body").append($(page))	
// 	});
// });

// btn.onclick = function() {
//     modal.style.display = "block";
// };

// document.addEventListener('DOMContentLoaded', function () {
//   var modal = document.getElementById('myModal');
//   modal.style.display = "block";
// });
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// };