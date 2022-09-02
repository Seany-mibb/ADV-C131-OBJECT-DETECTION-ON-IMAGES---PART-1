img = "";
Status = '';
object = [];

function preload()
{
    img = loadImage("tv.webp")
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

    if(Status != '')
    {
        for(i = 0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            percent = floor(object[i].confidence * 100)
            fill("#ff0000")
            textSize(18);
            textFont("Segoe UI")
            text(object[i].label + " " + percent + "%", object[i].x, object[i].y);
            noFill();
            stroke("#ff0000")
            strokeWidth(15)
            rect(object[i].x, object[i].y, object[i].width, object[i].height);
            
        }
    }
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
    object = results;
}

function back()
{
    window.location = "index.html";
}