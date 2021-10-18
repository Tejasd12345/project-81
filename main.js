canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = " light grey";
ctx.lineWidth = 4;
ctx.rect(153,143,433,203);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 5;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 5;
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 5;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 5;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();