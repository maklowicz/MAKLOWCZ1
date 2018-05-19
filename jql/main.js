
var wys = 100
var dlu = 200

 $(document).ready( function (){
 	$("#nav1").click(function(){
 		$(this)[0].style.backgroundColor = "red";
 		$("#nav2")[0].style.backgroundColor = "";
 		$("#nav3")[0].style.backgroundColor = "";
 		$("#nav4")[0].style.backgroundColor = "";
 	} );
 	$("#nav2").click(function(){
 		$(this)[0].style.backgroundColor = "red";
 		$("#nav1")[0].style.backgroundColor = "";
 		$("#nav3")[0].style.backgroundColor = "";
 		$("#nav4")[0].style.backgroundColor = "";
 	} );
 	$("#nav3").click(function(){
 		$(this)[0].style.backgroundColor = "red";
 		$("#nav2")[0].style.backgroundColor = "";
 		$("#nav1")[0].style.backgroundColor = "";
 		$("#nav4")[0].style.backgroundColor = "";
 	} );
 	$("#nav4").click(function(){
 		$(this)[0].style.backgroundColor = "red";
 		$("#nav2")[0].style.backgroundColor = "";
 		$("#nav3")[0].style.backgroundColor = "";
 		$("#nav1")[0].style.backgroundColor = "";
 	} );

 	for( var i = 0; i < 10; i++){
 		var text = $("main").find("p")[0].innerText;
 		var p = document.createElement("p"); 
 		p.innerText = text;
 		p.innerHTML += ("<h3>" + i + "</h3>");
 		document.body.appendChild(p);

 		$("main")[0].appendChild(p);


 	}


//=================================================
 } );

// var nav1 = function(){
// 	document.querySelector("main").style.color = "white";
// }
// var nav2 = function(){
// 	document.querySelector("main").style.color = "pink";
// }
// var nav3 = function(){
// 	document.querySelector("main").style.color = "green";
// }
// var nav4 = function(){
// 	document.querySelector("main").style.color = "blue";
// }
// function plus(w, d) {
// 	wys += w;
// 	dlu += d;
// 	var tw = wys + 'px';
// 	var td = dlu + 'px';
// 	document.querySelector("img").style.height = tw;
// 	document.querySelector("img").style.width = td;

// }
function szukaj (){
	var zapytanie = document.getElementById('zapytanie').value;
	console.log(zapytanie);
	var link ='http://maps.google.com/?q=';
	window.open(link+zapytanie);
}




