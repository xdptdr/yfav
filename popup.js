function scroll() {
	console.log("Scrolling");
}

document.addEventListener('DOMContentLoaded', () => {
	
	var scrollButton = document.getElementById('scrollButton');
	scrollButton.onclick=()=>{
		chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
			var tab = tabs[0];
			chrome.tabs.executeScript(tab.id, {file:'scroll.js'});
		});
	}
	var collectButton = document.getElementById('collectButton');
	collectButton.onclick=()=>{
		chrome.tabs.query({active: true, currentWindow: true}, (tabs)=>{
			var tab = tabs[0];
			chrome.tabs.executeScript(tab.id, {file:'collect.js'}, (results)=>{
				chrome.bookmarks.create({
					title:'yfav'
				}, (bookmarkNode)=> {
					results[0].forEach((lnk)=>{
						chrome.bookmarks.create({
							parentId:bookmarkNode.id,
							title:lnk.title,
							url:lnk.href
						});
					})
				});
			});
		});
	}
});
