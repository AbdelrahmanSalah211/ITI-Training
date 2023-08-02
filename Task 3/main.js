function addHtmlElement(numberOfElement, elementId, text) {
    var container = ""
    for (let i = 0; i < numberOfElement; i++) {
        container += "<h2>" + text + "</h2>"
    }
    document.getElementById(elementId).innerHTML = container
}

// addHtmlElement(2, "insert1", "Abdelrahman Salah")
// addHtmlElement(4, "insert2", "Abdelrahman Salah")
// addHtmlElement(4, "insert3", "Abdelrahman Salah")
// addHtmlElement(2, "insert4", "Abdelrahman Salah")


function addHtmlImage(elementId, imageSource, alt, imageWidth, imageHeight) {
    var container = ""
    container += "<img src=" + imageSource + " alt=" + alt + " width=" + imageWidth + " height=" + imageHeight + ">"
    document.getElementById(elementId).innerHTML = container
}

addHtmlImage("insert1", "images/Students-1.jpg", "Students", "400", "400")
addHtmlImage("insert2", "images/Students-2.jpg", "Students", "400", "400")
addHtmlImage("insert3", "images/Students-3.jpg", "Students", "400", "400")
addHtmlImage("insert4", "images/Students-4.jpg", "Students", "400", "400")



