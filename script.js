let square = document.querySelector('.square');

let rotationStart = 0;

function rotate(){
    square.style.transform = `rotate(${rotationStart}deg)`;

    rotationStart += 1360;

    console.log(rotationStart);
}

setInterval(rotate,2000);