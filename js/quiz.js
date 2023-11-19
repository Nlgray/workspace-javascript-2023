//generate the numbers for the quiz
function randomInt(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
var M = randInt(300,600);
var N = randInt(100,M);
var K = randInt(1,10);
console.log(m,n,k);

//put random number into the HTML
document.getElementById("s1").textContent = M.toString();
//do rest
var T = N + K;
var S = N - K;

document.querySelector('[vaue="4"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"+"+K.toString();
document.querySelector('[value="3"]').nextSibling.nodeValue = M.toString()+"-"+N.toString()+"-"+K.toString();
document.querySelector('[value="2"]').nextSibling.nodeValue = M.toString()+"+"+N.toString();
document.querySelector('[value="1"]').nextSibling.nodeValue = M.toString()+"-"+N.toString();
//action--click action change stlye
function changestlye(e){
    e.preventDefault();
    //get the style of the element rn
    var classname = this.getAttribute("class");
    
    //change style of the element clicked
    if (classname == "answer"){
    this.setAttribute("class","answer selected");
    }else{
this

   }
   this.animate([{transform: 'rotate(0deg)'},{transform:'rotate(180deg'}],[{duration:300, fill, "forwards"}]);
}
//add event listener 
for (var i=0; i<4; i++){
    document.getElementsByClassName("answer")[i].addEventListener("click",changestlye, false);
}


