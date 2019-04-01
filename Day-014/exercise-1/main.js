function drawLine(ctxElet, startPoint, endPoint) {
    ctxElet.beginPath();
    ctxElet.moveTo(startPoint[0], startPoint[1]);
    ctxElet.lineTo(endPoint[0], endPoint[1]);
    ctxElet.stroke();
}

$(document).ready(function() {
    const canvas = $('canvas')[0];
    const ctx = canvas.getContext('2d');
    drawLine(ctx, [0, 0], [300, 300]);
    drawLine(ctx, [300, 0], [0, 300]);
})