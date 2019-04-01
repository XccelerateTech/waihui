const setTimeout = function(milliseconds, callback) {
    console.log(`start at ${new Date()}`);
    let timeout = new Date().getTime() + milliseconds;
    let bool = true;
    while (bool) {
        if (new Date().getTime() > timeout) {
            bool = false;
        }
    }
    callback();    
}

setTimeout(10000, function() {
    console.log(`finish at ${new Date()}`);
});