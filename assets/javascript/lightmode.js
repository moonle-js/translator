const trigger = document.querySelector('#trigger')
const sunMoon = document.querySelector('#sunMoon');
const wholePage = document.querySelector('body');
const clouds = document.querySelectorAll('.cloud');


var width = 20;
var height = 18;
for(let i = 0; i < clouds.length; i++){
    clouds[i].style.width = `${width}px`
    width += 4;
    clouds[i].style.height = `${height}px`
    height += 3;

    clouds[i].style.position = "absolute"
    clouds[i].style.backgroundColor = "#fff"
    clouds[i].style.borderRadius = "15px"

    clouds[0].style.right = "5px"
    clouds[0].style.bottom = "-7px"

    clouds[1].style.right = "15px"
    clouds[1].style.bottom = "-5px"

    clouds[2].style.right = "25px"
    clouds[2].style.bottom = "-6px"

    clouds[i].style.border = "1px solid var(--lightCyan)"
    

}





trigger.addEventListener('click', function(){
    sunMoon.classList.toggle('modeOnSun');
    sunMoon.classList.toggle('modeOnMoon');
    wholePage.classList.toggle('white_body');
    translateThis.classList.toggle('white_translate');
    translatedTextt.classList.toggle('white_translate')
    langFrom.classList.toggle('white_translate')
    langTo.classList.toggle('white_translate')
    
    
    if(trigger.style.border == "2px solid var(--white)"){
        trigger.style.border = "2px solid var(--black)"
        trigger.style.background = "var(--lightBlack)"

    }else{
        trigger.style.border = "2px solid var(--white)"
        trigger.style.background = "var(--lightCyan)"

    }


    if(sunMoon.style.marginLeft == "50px"){
        sunMoon.style.marginLeft = "0"
    }else{
        sunMoon.style.marginLeft = "50px"
    }
})