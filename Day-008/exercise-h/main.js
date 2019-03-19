let iconList = document.getElementsByTagName("img");
for (let i = 1; i < iconList.length; i++) {
    iconList[i].addEventListener("mouseover", function() {
        iconList[i].style.height = "180px";
        iconList[i].style.width = "180px";
    })
    iconList[i].addEventListener("mouseout", function() {
        iconList[i].style.height = "128px";
        iconList[i].style.width = "128px";
    })
}

let button = document.getElementsByClassName("banner-content-button")[0];
button.addEventListener("click", function(){
    console.log(this);
    this.innerHTML = "buy flowers";
    this.style.backgroundColor = "red";
    let title = document.getElementsByClassName("banner-content-title")[0];
    title.innerHTML = "Welcome to my flower shop";
    title.style.backgroundColor = "#e5f2cb";
    title.style.color = "blue";
})
