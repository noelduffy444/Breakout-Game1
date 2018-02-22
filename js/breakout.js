var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 100, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "Green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(430, 270, 40, 40);
ctx.fillStyle = "#FFFF00";
ctx.fill();
ctx.closePath();