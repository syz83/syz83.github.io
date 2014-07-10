function getTarget(e){
	if(!e){
		e = window.event;
	}
	return e.target || e.srcElement;
}

function makeActive(e){
	//make class = "active"
	var target, elParent;
	target = getTarget(e);
	elParent = target.parentNode;
	elParent.className = "active";
}

//set up event listeners to call makeActive on nav-bar click
var el = document.getElementById('main-nav-bar');
if(el.addEventListener){
	el.addEventListener('click', function(e) {
		makeActive(e);
	}, false);
} else {
	el.attachEvent('onclick', function(e)){
		makeActive(e);
	});
}