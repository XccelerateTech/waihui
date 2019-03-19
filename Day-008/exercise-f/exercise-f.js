const findClassList = function(className) {
    let elementList = document.getElementsByClassName(className);
    for (let i = 0; i < elementList.length; i++) {
        console.log(elementList[i]);
    }
}

// https://en.wikipedia.org/wiki/Wiki
findClassList("toc");