let http = new XMLHttpRequest();

http.open('GET', 'data.json');
http.onreadystatechange = function() {
    if (this.readyState !== 4 ) {
        return;
    }
    else if (this.status === 200) {
        console.log(typeof this.response);
        console.log(this.response);
        let resObject = JSON.parse(this.response)
        console.log(typeof resObject);
        console.log(resObject);
    }
    else {
        console.log(`error ocurred ${this.status}`);
    }
}
http.send();