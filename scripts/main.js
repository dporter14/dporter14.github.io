var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/wolfpack.png') {
		myImage.setAttribute ('src','images/wolfpackk.png');
	} else {
		myImage.setAttribute ('src', 'images/wolfpack.png');
	}
}
