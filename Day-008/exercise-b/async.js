function print(textData) {
    console.log(textData);              
}

function informMe(endPoint, value, callback) {
    let http = new XMLHttpRequest();
    http.open("GET", `https://restcountries.eu/rest/v2/${endPoint}/${value}`, true);
    http.onreadystatechange = function() {
        console.log(this);
        if (this.readyState !== 4) {
            return;
        }
        else if (this.status === 200) {
            let data = JSON.stringify(this.responseText);
            callback(data);
        }
        else {
            console.log(`error ocurred ${this.status}`);
        }
    }
    http.send();
}

informMe("currency", "USD", print);