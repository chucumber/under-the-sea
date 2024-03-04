function pickup() {
    alert("They picked up the drive.");
    document.getElementById("ground").style.opacity = "0";
    document.getElementById("ground").style.cursor = "progress";
    document.getElementById("text").style.display = "block";
    document.getElementById("drive-icon").style.filter = "invert(100%)"
}


window.addEventListener('load',load);
window.addEventListener('wheel',throttle(scroll,2000));


var index=0; //new project count
var pIndex; //previous project count

function load() {
  var des=document.getElementsByClassName("words");
  var page=document.getElementsByClassName("page");
  pIndex=des.length-1;
  for(var i=0;i<des.length;i++){
    des[i].innerHTML=addSpan(des[i].innerHTML);
    page[i].innerHTML=addSpan(page[i].innerHTML);
  }
}

function addSpan(str){
  var strArray=str.split(" ");
  var newStr='';
  for(var i=0;i<strArray.length;i++){
    var newStr = newStr+"<span>"+strArray[i]+"</span> ";
  }
  return newStr;
}

var paragraphs=document.getElementsByClassName("paragraph");
function updateParagraphs(){
  paragraphs[index].classList.add("active");
  paragraphs[pIndex].classList.remove("active");
  paragraphs[pIndex].classList.add("disappear");
  setTimeout(function(){
    paragraphs[pIndex].classList.remove("disappear");
  },1100);
  
}

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

function scroll(){
  pIndex=index;
  if(index<paragraphs.length-1) index++;
  else index=0;
  updateParagraphs();
}
