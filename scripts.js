const dino = document.getElementById('dino');
const dinoWidth = dino.offsetWidth;
const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));

const cactus = document.getElementById('cactus');
const cactusWidth = cactus.offsetWidth;
const cactusHeight = cactus.offsetHeight;

const dinoClouds = dinoTop - cactusHeight;
const jumpTime = 500 - 100; //ms coyote time or smth like that

function jump(){
    if(!dino.classList.contains("jump")) {
        dino.classList.add("jump");
    }
    setTimeout(function(){
        dino.classList.remove("jump");
    }, jumpTime)
}

let isAlive = setInterval(function()
{
    //dino y and cactus x
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    //Collision detection
    if(cactusLeft < dinoWidth && cactusLeft > 0 && dinoTop >= dinoClouds)
    {
        cactus.style.animation = 'none';
        cactus.offsetWidth; /* trigger reflow */
        cactus.style.animation = null;
        alert("Game Over")
        
    }
}, 10);

document.addEventListener("keydown", 
    function(event){ jump()})

//Timer
const timer = document.getElementById('timer');
timer.innerHTML = "1";

let timerInterval = window.setInterval(function(){
    let newValue = parseInt(timer.innerHTML) + 1;
    timer.innerHTML = String(padLeadingZeros( newValue, 4));
}, 1000);

//adds zeros to number
function padLeadingZeros(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
padLeadingZeros(57, 3);// "057"
padLeadingZeros(57, 4); //"0057"