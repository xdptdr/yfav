var scrollHeight = null;
var interval = null;

function sscroll() {
	document.body.parentNode.scrollTop=document.body.parentNode.scrollHeight
}
interval = setInterval(sscroll, 100);
