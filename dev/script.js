var xhr = new XMLHttpRequest();
xhr.onload = function() {
  console.log(this.responseXML.title);
}
xhr.open("GET", "test.html");
xhr.responseType = "document";
xhr.send();
