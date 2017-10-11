var nodes = document.querySelectorAll('.yt-simple-endpoint.style-scope.ytd-grid-video-renderer');
var links = [];
for(var i = 0 ; i < nodes.length ; ++i) {
	if(nodes[i].nodeName.toLowerCase()=='a') {
		links.push({href:nodes[i].href, title:nodes[i].firstChild.nodeValue.trim()});
	}
}
links;