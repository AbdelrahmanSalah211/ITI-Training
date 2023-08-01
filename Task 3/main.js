function addHtmlElement(numberOfElement,elementId) {
    var container = ""
    for (let i = 0; i < numberOfElement; i++) {
        container += "<h2>Abdelrahman Salah</h2>"
    }
    document.getElementById(elementId).innerHTML = container
}

addHtmlElement(5,"insert1")
addHtmlElement(2,"insert2")
addHtmlElement(3,"insert3")
addHtmlElement(4,"insert4")


function addHtmlImage(elementId,imageSource,alt,imageWidth,imageHeight) {
    var container = ""
    container += "<img src=" + imageSource + " alt=" + alt + " width=" + imageWidth + " height=" + imageHeight + ">"
    document.getElementById(elementId).innerHTML = container
}

addHtmlImage("insert1","images/Students-1.jpg","Students","400","400")
addHtmlImage("insert2","images/Students-2.jpg","Students","400","400")
addHtmlImage("insert3","images/Students-3.jpg","Students","400","400")
addHtmlImage("insert4","images/Students-4.jpg","Students","400","400")



