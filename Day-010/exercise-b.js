let drippingTap = setInterval(function() {
    console.log(`drop`);
}, 1000)

let endTime = 9;
endTime *= 1000;
setTimeout(function() {
    clearInterval(drippingTap);
}, endTime);