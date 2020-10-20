var contentEle = document.body.querySelector(".content");

function makeHome(){
  contentEle.innerHTML="";
  contentEle.innerHTML="Home Page" 
}

function makeAbout(){
  contentEle.innerHTML="";
  var headEle = document.createElement("h1");
  headEle.innerHTML="About Page"
  contentEle.appendChild(headEle);
  var headEle = document.createElement("h3");
  headEle.innerHTML="Chris Garcia"
  contentEle.appendChild(headEle);
}

function makeInteract(){
  var ele = document.body.querySelector("div")
  ele.innerHTML=number;
  document.body.appendChild(ele);
}

document.body.querySelector(".HomeButton").addEventListener("click", function(){
  makeHome();
})

document.body.querySelector(".AboutButton").addEventListener("click", function(){
  makeAbout();
})

var number=0;
document.body.querySelector(".InteractButton").addEventListener("click", function(){
  makeInteract(number=number+1);
})

makeHome();