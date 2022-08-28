img = "";

function preload()
{
    img = loadImage("iphone.jpg")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(500,250);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: COCOSSD Model has started detecting the objects!";
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#ff0000")
    textSize(18);
    textFont("Segoe UI")
    text("iPhone", 250, 47);
    noFill();
    stroke("#ff0000");
    rect(120,10,200, 400);
}

function modelLoaded()
{
    console.log("Model is Loaded!");
    Status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error)
    }
    
    console.log(results);
}

function back()
{
    window.location = "index.html";
}