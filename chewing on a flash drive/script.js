function pickup() {
    alert("They picked up the drive.");
    document.getElementById("ground").style.opacity = "0";
    document.getElementById("text").style.display = "block";
    document.getElementById("drive-icon").style.transform = "rotate(-110deg)";
}



window.addEventListener('load',load);
window.addEventListener('wheel',throttle(scroll,3000));


var index=0; //new project count
var pIndex; //previous project count

function load() {
  var des=document.getElementsByClassName("words");
  var scr=document.getElementsByClassName("scroll-down");
  pIndex=des.length-1;
  for(var i=0;i<des.length;i++){
    des[i].innerHTML=addSpan(des[i].innerHTML);
    scr[i].innerHTML=addSpan(scr[i].innerHTML);
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

var projects=document.getElementsByClassName("paragraph");
function updateProject(){
  projects[index].classList.add("active");
  projects[pIndex].classList.remove("active");
  projects[pIndex].classList.add("disappear");
  setTimeout(function(){
    projects[pIndex].classList.remove("disappear");
  },1400);
  
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
  if(index<projects.length-1) index++;
  else index=0;
  updateProject();
}
