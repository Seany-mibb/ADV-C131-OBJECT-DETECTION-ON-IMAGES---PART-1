img = "";

function preload()
{
    img = loadImage("bottle.webp")
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.position(500,250);
}

function draw()
{
    image(img, 0, 0, 640, 420);

    fill("#ff0000")
    textSize(18);
    textFont("Segoe UI")
    text("Bottle", 36, 77);
    noFill();
    stroke("#ff0000");
    rect(120,0,100, 400);
}

function back()
{
    window.location = "index.html";
}