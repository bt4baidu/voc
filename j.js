var x=new XMLHttpRequest();
var o=0;
function next(c){
c.removeAttribute("onclick");
x.onreadystatechange=function(){if(x.readyState==4&&x.status==200){s=x.responseText;c.parentNode.nextSibling.innerHTML=s;o+=5;c.setAttribute("onclick","next(this)");}}
x.open("GET","http://corpus.vocabulary.com/api/1.0/examples.json?query=device&maxResults=5&startOffset="+o,true);
x.send();
//alert('t');
//
//s='<div class=n>#1</div><div class="g r">#2(#3)</div>';
}
