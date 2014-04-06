function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match&&match[7].length==11){
        return match[7];
    }else{
        alert("Url incorrecta");
    }
}

function windowCreate (urlYoutube){
	chrome.windows.create({
	 url:"http://www.youtube.com/embed/" +urlYoutube+ "?autoplay=1", 
	 width:600, 
	 height:400, 
	 type: 'popup',
	 left: 1000,
	 top: 80 
	});
}

chrome.browserAction.onClicked.addListener(function(tab) {

var url;
//chrome.tabs.getSelected(null, function(tab) {
   url = tab.url;
//});

//chrome.tabs.create({url:chrome.extension.getURL("tabs_api.html")});
// /http://(?:youtu.be/|(?:[a-z]{2,3}.)?youtube.com/watch(?:?|#!)v=)([w-]{11}).*/gi  'http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com'
// alert(url);

var urlYoutube = youtube_parser(url);
if (urlYoutube) {
	//alert(urlYoutube);
	windowCreate(urlYoutube)
};

//chrome.windows.onFocusChanged.addListener(function(window){

	    //chrome.windows.getCurrent(function(window){
		    //chrome.windows.update(window.id,{top:0, left:0, width:screen.width, height:400})
		//	});
//	});
});