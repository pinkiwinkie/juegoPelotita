var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
//le da velocidad a la bola y la direccion
var dx = 3;
var dy = 3;
//para hacer que la pelota rebote en la circunferencia y no en el centro.
var ballRadius = 10;
//controlador de la pelota


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
    //rebote en borde derecha e izquierda
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    //rebote en borde superior e inferior
    if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

}


setInterval(draw, 10);

//setInterval -> naturaleza infinita