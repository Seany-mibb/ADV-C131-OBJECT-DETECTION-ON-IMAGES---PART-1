img = "";

function preload()
{
    img = loadImage("d.webp")
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
    text("Laptop", 400, 77);
    noFill();
    stroke("#ff0000");
    rect(120,60,500, 350);
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