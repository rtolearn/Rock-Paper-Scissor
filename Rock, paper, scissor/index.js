// ### The challenge

// Users should be able to:

// - View the optimal layout for the game depending on their device's screen size
// - Play Rock, Paper, Scissors against the computer
// - Maintain the state of the score after refreshing the browser _(optional)_
// - **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer _(optional)_

//Effect of the user interface once the mode is selected by the user
let normalButton = document.getElementById("normal-button");
let advanceButton = document.getElementById("advance-button");
//Make sure that the mode is selected before the start button is clicked

//Store the status of the mode true: normal ; false:advance



let counter = 0;
normalButton.addEventListener("click", function(){
    let status = true;
    document.querySelectorAll(".advance").forEach(element => 
        element.classList.remove("jump-icon"));


    document.querySelectorAll(".normal").forEach(element => 
        element.classList.add("jump-icon"));

    counter++;
    //Store the type of mode into the local storage

    localStorage.setItem("mode", JSON.stringify(`${status}`));
})


advanceButton.addEventListener("click", function(){
    let status = false;
    document.querySelectorAll(".advance").forEach(element => 
        element.classList.add("jump-icon"));
    counter++;
    //Store the type of mode into the local storage
    localStorage.setItem("mode", JSON.stringify(`${status}`));
})

// Once the start button is clicked
let startButton = document.getElementById("start-button");


startButton.addEventListener("click", function(){
 

    if(counter > 0){
        document.getElementById("loading").style.display = "block";
        setTimeout(function(){
                document.getElementById("loading").style.display = "none";
                //Automatically bring user to the game page once the laoding is finished.
                window.location.replace("game.html")
        }, 3000);
       
    }
        
    else{
        alert("Please select the mode of the game.");      
        return;
    }




    
})


























