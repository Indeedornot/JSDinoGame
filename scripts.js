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
    if(cactusLeft < dinoWidth && cactusLeft > 0 && dinoTop >= dinoClouds)
    {
        cactus.style.animation = 'none';
        cactus.offsetWidth; /* trigger reflow */
        cactus.style.animation = null;
        alert("Game Over")
        
    }
}, 10);

//detect collision

document.addEventListener("keydown", 
    function(event){ jump()})