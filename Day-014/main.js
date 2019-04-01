// function drawLine(ctxElet, startPoint, endPoint) {
//     ctxElet.beginPath();
//     ctxElet.moveTo(startPoint[0], startPoint[1]);
//     ctxElet.lineTo(endPoint[0], endPoint[1]);
//     ctxElet.stroke();
// }

// function drawQuadraticCurve(ctxElet, startPoint, controlPoint,endPoint) {
//     ctxElet.beginPath();
//     ctxElet.moveTo(startPoint[0], startPoint[1]);
//     ctxElet.quadraticCurveTo(controlPoint[0], controlPoint[1], endPoint[0], endPoint[1]);
//     ctxElet.stroke();
// }

// function drawBezierCurvve(ctxElet, startPoint, controlPoint1, controlPoint2, endPoint) {
//     ctxElet.beginPath();
//     ctxElet.moveTo(startPoint[0], startPoint[1]);
//     ctxElet.bezierCurveTo(controlPoint1[0], controlPoint1[1], controlPoint2[0], controlPoint2[1], endPoint[0], endPoint[1]);
//     ctxElet.stroke();
// }

// function drawRectangle(ctxElet, topLeftPoint, width, height, color) {
//     ctxElet.fillStyle = color;
//     ctxElet.fillRect(topLeftPoint[0], topLeftPoint[1],  width, height);
// }

// let canvas = document.getElementById('canvas');
// let ctx = canvas.getContext('2d');

// drawRectangle(ctx, [50, 50], 400, 400, '#e5e5e5');
// drawLine(ctx, [0, 0], [500, 500]);
// drawQuadraticCurve(ctx, [0, 0], [0, 200],[500, 400])

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let dragging = false;
context.strokeStyle = "#df4b26";
context.lineJoin = "round";
context.lineWidth = 5;
$('#canvas').mousedown(function(e){
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    context.beginPath();
    context.moveTo(mouseX,mouseY);
    draw(mouseX,mouseY);
    dragging = true;
});
$('#canvas').mousemove(function(e){
    if(dragging){
        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        draw(mouseX,mouseY);
    }
});
$('#canvas').mouseup(function(e){
    dragging = false;
});
$('#canvas').mouseleave(function(e){
    dragging = false;
});

function draw(x,y){
    context.lineTo(x,y);
    context.moveTo(x,y);
    context.closePath();
    context.stroke();
}