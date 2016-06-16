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