function setup() {
    canvas = createCanvas(600, 400)
    canvas.position(475, 370)
    background("white")
    canvas.mouseReleased(classifyCanvas)
}


function classifyCanvas() {
    classifier.classify(canvas,gotresult)
}

function gotresult(error,results) {
    console.log(results)
    document.getElementById("label").innerHTML = results[0].label
    document.getElementById("confidence").innerHTML = Math.round((results[0].confidence)* 100) + "%"
    
    
}


function cleancanvas() {
    background("white")
}

function preload() {
    classifier = ml5.imageClassifier("DoodleNet")

}

function draw() {
    strokeWeight(10)
    stroke(0)
    // p mouse X/ or means PREVIOUS mouse, mouse x and y means current
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }

}