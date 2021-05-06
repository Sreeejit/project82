canvas = document.getElementById("firstCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", mousedown);
ctx.beginPath();
ctx.strokeStyle = "grey";
ctx.lineWidth = 1;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(350,210,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450,210,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(400,250,40,0,2 * Math.PI)
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5;
ctx.arc(290,250,40,0,2 * Math.PI)
ctx.stroke();

function Clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function mousedown(event)
{

mousex = event.clientX - canvas.offsetLeft;
mousey = event.clientY - canvas . offsetTop;
console.log(" X = " + mousex + " ,Y = " + mousey);
circle(mousex , mousey);}

function circle(mousex , mousey)
{
var radius = document.getElementById("Radiusinput").value;
var color = document.getElementById("ColorInput").value;
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(mousex, mousey,radius,0,2 * Math.PI)
ctx.stroke();

}