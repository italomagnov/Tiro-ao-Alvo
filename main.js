var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
var pontuação = document.querySelector('h1');

// variaveis globais
var randomX;
var randomY;
//

// estilo do canvas
pincel.fillStyle = 'lightgrey';
pincel.fillRect(0, 0, 600, 400);
//
var raio = 10;
function drawCircle(x, y, raio, cor) {
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function clean() {
    pincel.clearRect(0, 0, 600, 400);
}

function drawTarget(x, y) {
    drawCircle(x, y, raio+20, 'red'); //maior
    drawCircle(x, y, raio+10, 'white'); //meio
    drawCircle(x, y, raio, 'red'); //menor
}

function randomTarget(maximo) {    
    return Math.floor(Math.random() * maximo)
};

function attScreen() {
    clean();
    randomX = randomTarget(600);
    randomY = randomTarget(400);
    drawTarget(randomX, randomY);
}

function shoot(event) {
    var x = event.pageX - tela.offsetLeft;
    var y = event.pageY - tela.offsetTop;
    
    if(x > randomX-raio && x < randomX+raio && y > randomY-raio && y < randomY+raio) {
        alert('alvo acertado');
    }

}

tela.onclick = shoot;
setInterval(attScreen, 700);



