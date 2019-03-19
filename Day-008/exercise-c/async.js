function whoIsInSpace() {
    let http = new XMLHttpRequest();
    http.open("GET", `http://api.open-notify.org/astros.json`,true)
    http.onreadystatechange = function() {
        if (this.readyState !== 4) {
            console.log(this);
            return;
        }
        else if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let array = data.people;
            let newArray = array.map((item) => {
                return item.name;
            });
            console.log(newArray);
        }
        else {
            console.log(`error occurred ${this.status}`);
        }
    }
    http.send();
}

whoIsInSpace();