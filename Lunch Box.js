Status = "";
LunchBox_image = "";

function preload()
{
    LunchBox_image = loadImage("Lunch Box.jpg");
}
function setup()
{
    canvas = createCanvas(640, 350);
    canvas.position(315, 200);
    objectDetector = ml5.objectDetector('CoCoSSd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Object";
}
function modelLoaded()
{
    console.log('Model Loaded!!');
    Status = true;
    objectDetection.detect(LunchBox_image, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
}
function draw()
{
    image(LunchBox_image, 0, 0, 640, 350);
}
