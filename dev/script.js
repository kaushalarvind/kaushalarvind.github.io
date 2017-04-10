var v = document.getElementById("butt");
if(v.addEventListener)
	v.addEventListener("click", func, false);
else if(v.attachEvent)
	v.attachEvent('conclick', func);

var ta = document.getElementById('divide');
var x = new XMLHttpRequest;
x.open("GET", "test.html");
x.onreadystatechange =function(){
	function func(){
		x.responseType = "document";
		ta.innerHTML = x.responseText;
	}
}
x.send();
