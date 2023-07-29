Status = "";
Headphone_image = "";

function preload()
{
    Headphone_image = loadImage("Headphone.jpg");
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
    objectDetection.detect(Headphone_image, gotResult);
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
    image(Headphone_image, 0, 0, 640, 350);
}