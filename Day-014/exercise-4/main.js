function drawLine(ctxElet, startPoint, endPoint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPoint[0], startPoint[1]);
    ctxElet.lineTo(endPoint[0], endPoint[1]);
    ctxElet.stroke();
}

function drawQuadraticCurve(ctxElet, startPoint, controlPoint, endPoint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPoint[0], startPoint[1]);
    ctxElet.quadraticCurveTo(controlPoint[0], controlPoint[1], endPoint[0], endPoint[1]);
    ctxElet.stroke();
}

function drawRectangle(ctxElet, startPoint, width, height, color) {
    ctxElet.fillStyle = color;
    ctxElet.fillRect(startPoint[0], startPoint[1], width, height);
}

function drawBezierCurve(ctxElet, startPrint, controlPrint1, controlPrint2, endPrint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPrint[0], startPrint[1]);
    ctxElet.bezierCurveTo(controlPrint1[0], controlPrint1[1], controlPrint2[0], controlPrint2[1], endPrint[0], endPrint[1]);
    ctxElet.stroke();  
}

$(document).ready(function() {
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');
    drawBezierCurve(ctx, [50, 100], [75, 75], [225, 75], [250, 100]);
    drawBezierCurve(ctx, [250, 100], [270, 120], [270, 180], [250, 200]);    
    drawBezierCurve(ctx, [250, 200], [240, 210], [170, 220], [150, 210])
    drawQuadraticCurve(ctx, [150, 210], [150, 250], [75, 250]);
    drawQuadraticCurve(ctx, [75, 250], [100, 250], [100, 210]);
    drawBezierCurve(ctx, [100, 210], [100, 210], [80, 220], [50, 200]);
    drawBezierCurve(ctx, [50, 200], [30, 180], [30, 120], [50, 100]);
})