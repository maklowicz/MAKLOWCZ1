
var wys = 100
var dlu = 200

var nav1 = function(){
	document.querySelector("main").style.color = "white";
}
var nav2 = function(){
	document.querySelector("main").style.color = "pink";
}
var nav3 = function(){
	document.querySelector("main").style.color = "green";
}
var nav4 = function(){
	document.querySelector("main").style.color = "blue";
}
function plus(w, d) {
	wys += w;
	dlu += d;
	var tw = wys + 'px';
	var td = dlu + 'px';
	document.querySelector("img").style.height = tw;
	document.querySelector("img").style.width = td;

}
function szukaj (){
	var zapytanie = document.getElementById('zapytanie').value;
	console.log(zapytanie);
	var link ='http://maps.google.com/?q=';
	window.open(link+zapytanie);
}




