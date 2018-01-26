var query = location.search.substring(1);
// Pull the URL query string.
var p1 = query.slice(0,query.search("="));
// Set p1 to the first parameter of the query string.
var p2 = query.slice(query.search("=")+1);
// Set p2 to the  parameter of the query string.
document.getElementById("Pixel").src = ("http://i.w55c.net/a.gif?p1=" +p1 "&p2=" +p2)  ;
