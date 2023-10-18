let allButtons = document.querySelectorAll("button")
    for (const button of allButtons){
        button.addEventListener("click", function (){
            audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
        })
    }