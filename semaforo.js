const img = document.querySelector('img');

const buttons = document.getElementById('buttons')
const trafficLight = (event) => {
    stopAutomatic();
    turnOn[event.target.id]();

}

let colorIndex = 0;
let intervalID = null;
const nextIndex = () => {

    colorIndex = colorIndex < 2 ? ++colorIndex : 0;

   /* if (colorIndex < 2) {
        colorIndex++;

    } else {

        colorIndex = 0;
    }*/

}

const changeColor
    = () => {


        const colors = ['green', 'yellow', 'red']
        const color = colors[colorIndex];
        turnOn[color]();
        nextIndex();
    }

    const stopAutomatic = () =>{
        clearInterval(intervalID);
    }
const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'automatic': () => intervalID = setInterval(changeColor, 1000)

}
buttons.addEventListener('click', trafficLight);
