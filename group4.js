img = "";

function preload()
{
    img = loadImage("iphone.jpg")
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
    text("iPhone", 250, 47);
    noFill();
    stroke("#ff0000");
    rect(120,10,200, 400);
}

function back()
{
    window.location = "index.html";
}