var scrollHeight = null;
var interval = null;

function sscroll() {
	if(scrollHeight === null || document.body.parentNode.scrollHeight != scrollHeight) {
		document.body.parentNode.scrollTop=document.body.parentNode.scrollHeight
	} else {
		clearInterval(interval);
	}

}
interval = setInterval(sscroll, 3000);