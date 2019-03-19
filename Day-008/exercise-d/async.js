class User {
    constructor(options) {
        this.firstName = options.name.first;
        this.lastName = options.name.last;
        this.email = options.email;
        this.dob = options.registered;
    }
}


const userGenerator = function () {
    let http = new XMLHttpRequest();
    http.open("GET", `https://randomuser.me/api/`, true);
    http.onreadystatechange = function () {
        if (this.readyState !== 4) {
            return;
        }
        else if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            data = data.results[0];
            let user = new User(data);
            
            array.push(user);
        }
        else {
            console.log(`error occured ${this.status}`);
        }
    }
    http.send();
}

let array = []
for (let i = 0; i < 5; i++) {
    userGenerator();
}
console.log(array);