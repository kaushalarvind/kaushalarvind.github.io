var v = document.getElementById("butt");
var ta = document.getElementById('divide');
var x = new XMLHttpRequest;
x.open("GET", "test.html");
//x.responseType = "document";
x.onreadystatechange =function(){
	ta.innerHTML = x.responseText;
}
function func(){
	x.send();
}
if(v.addEventListener)
	v.addEventListener("click", func, false);
else if(v.attachEvent)
	v.attachEvent('onclick', func);
