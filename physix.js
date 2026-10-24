alert("Desktop only, and dont set the angle higher than 90 degrees")
let canvas
let ctx
let X;
let Y;
let time
let timer
let angle = 0;
let angleRad
let speed = 0 ;
let height;
let maxY = 0 
let maxX = 0  
let dt
let Gy
let vy
let vx
let i = 0 
let Ix;
let Iy
let Mx
let My
let scale = 0 
let scaleX 
let scaleY
let sin90 
let trajectories = []
let trajectory = [];
let acceleration 


// Canva grid :+: 
function draw(){
canvas = document.getElementById('myCanvas');

     ctx = canvas.getContext("2d");

     ctx.beginPath();
     ctx.moveTo(100 , 1)
     ctx.lineTo(100,600 );
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(100 / scale)+"m", 110, 590);

     ctx.beginPath();
     ctx.moveTo(200 , 1)
     ctx.lineTo(200,600 );
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(200 / scale)+"m", 210, 590);

     ctx.beginPath();
     ctx.moveTo(300 ,1);
     ctx.lineTo(300 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(300 / scale)+"m", 310, 590);  

     ctx.beginPath();
     ctx.moveTo(400 ,1);
     ctx.lineTo(400 , 600);
     ctx.strokeStyle = " black";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(400 / scale)+"m", 410, 590);
     
     ctx.beginPath();
     ctx.moveTo(500 ,1);
     ctx.lineTo(500 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(500 / scale)+"m", 510, 590);   

     ctx.beginPath();
     ctx.moveTo(600 ,1);
     ctx.lineTo(600 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(600 / scale)+"m", 610, 590);

     ctx.beginPath();
     ctx.moveTo(700 ,1);
     ctx.lineTo(700 , 600);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(700 / scale)+"m", 710, 590);

     ctx.beginPath();
     ctx.moveTo(1 ,200);
     ctx.lineTo(800 , 200);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(400 / scale)+"m", 760, 190);

     ctx.beginPath();
     ctx.moveTo(800 ,100);
     ctx.lineTo(1 , 100);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(500 / scale)+"m", 760, 90);

     ctx.beginPath();
     ctx.moveTo(1 ,400);
     ctx.lineTo(800 , 400);
     ctx.strokeStyle = "gray";
     ctx.stroke()
     ctx.beginPath();
     ctx.moveTo(800 ,300);
     ctx.lineTo(1 , 300);
     ctx.strokeStyle = "black";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(300 / scale)+"m", 760, 290);
     
     ctx.beginPath();
     ctx.moveTo(800 ,200);
     ctx.lineTo(1 , 200);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(200 / scale)+"m", 760, 396);

     ctx.beginPath();
     ctx.moveTo(800 ,500);
     ctx.lineTo(1 , 500);
     ctx.strokeStyle = "gray";
     ctx.stroke();
     ctx.font = "15px Arial";
     ctx.fillStyle = "gray";
     ctx.fillText(Math.round(100 / scale)+"m", 760, 490);
     
};
draw()
