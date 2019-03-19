const deleteChild = function(idName) {
    let parentElement = document.getElementById(idName);
    while (parentElement.children.length !== 0) {
        parentElement.removeChild(parentElement.firstChild);
    }
}

// https://en.wikipedia.org/wiki/Wiki
deleteChild("content");