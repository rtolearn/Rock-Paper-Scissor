//Users' option

let choiceFirst = document.getElementById("choice-first");
let choiceSecond = document.getElementById("choice-second");
let choiceThird = document.getElementById("choice-third");

let container = document.getElementById("container-normal-mode");
let content = document.getElementById("choice-one");
choiceFirst.addEventListener("click", function(){
    container.style.display = "none";
 
    

})
choiceSecond.addEventListener("click", function(){
    container.style.display = "none";

    

})
choiceThird.addEventListener("click", function(){
    container.style.display = "none";


})


   //Computer perspective
//Generate a random number (for proability)

let randomNumber = (Math.floor(Math.random() / 3 * 10)) + 1;
switch(randomNumber){
    case 1:
        break;
    case 2:
        break;
    case 3:
        break;
    case 4:
        break;
    case 5:
        break;
    default: alert("Error");
}