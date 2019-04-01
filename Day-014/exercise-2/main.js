function drawLine(ctxElet, startPoint, endPoint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPoint[0], startPoint[1]);
    ctxElet.lineTo(endPoint[0], endPoint[1]);
    ctxElet.stroke();
}

function drawQuadraticCurve(ctxElet, startPoint, endPoint, controlPoint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPoint[0], startPoint[1]);
    ctxElet.quadraticCurveTo(controlPoint[0], controlPoint[1], endPoint[0], endPoint[1]);
    ctxElet.stroke();
}

function drawRectangle(ctxElet, startPoint, width, height, color) {
    ctxElet.fillStyle = color;
    ctxElet.fillRect(startPoint[0], startPoint[1], width, height);
}


$(document).ready(function() {
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');
    drawLine(ctx, [0, 0], [0, 300]);
    drawLine(ctx, [0, 280], [300, 280]);
    drawQuadraticCurve(ctx, [0, 0], [300, 280], [0, 280]);
    drawRectangle(ctx, [0, 280], 10, 20, "#e25858");
})