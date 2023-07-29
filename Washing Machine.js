Status = "";
WashingMachine_image = "";

function preload()
{
    WashingMachine_image = loadImage("Washing Machine.jpg");
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
    objectDetection.detect(WashingMachine_image, gotResult);
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
    image(WashingMachine_image, 0, 0, 640, 350);
}
