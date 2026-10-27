
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let timer = null;
let speed = 0;
let angle = 0;
let height = 0;
let X = 0;
let Y = 0;
let Vx = 0;
let Vy = 0;
let time = 0;
let dt = 0.16;
let scale = 1;
let maxX = 0;
let maxY = 0;
let trajectory = [];
const gravity = 9.81;
// lol 

function drawGrid() {
     ctx.clearRect(0, 0, canvas.width, canvas.height);
     ctx.strokeStyle = "gray";
     ctx.fillStyle = "gray";
     ctx.lineWidth = 1;
     ctx.font = "12px Arial";

     for (let x = 100; x < canvas.width; x += 100) {
          ctx.beginPath();
          ctx.moveTo(x, 0);
          ctx.lineTo(x, canvas.height);
          ctx.stroke();
          ctx.fillText(`${Math.round(x / scale)}m`, x + 5, canvas.height - 10);
     }

     for (let y = 100; y < canvas.height; y += 100) {
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(canvas.width, y);
          ctx.stroke();

          ctx.fillText(
               `${Math.round((canvas.height - y) / scale)}m`,
               canvas.width - 45,
               y - 5
          );
     }
}

function draw() {
    drawGrid();

    ctx.fillStyle = "black";

    for (const point of trajectory) {
        ctx.beginPath();
        ctx.arc(
               point.x * scale,
               canvas.height - point.y * scale,
               3,
               0,
               Math.PI * 2
        );
        ctx.fill();
    }
}

function start() {
    clearInterval(timer);
    timer = null;

    speed = Number(document.getElementById("speed").value);
    angle = Number(document.getElementById("angle").value);
    height = Number(document.getElementById("height").value);

    if (
          document.getElementById("speed").value === "" ||
          document.getElementById("angle").value === "" ||
          document.getElementById("height").value === "" ||
          !Number.isFinite(speed) ||
          !Number.isFinite(angle) ||
          !Number.isFinite(height) ||
          speed < 0 ||
          angle < 0 ||
          angle > 90 ||
          height < 0
    ) 
    
    {
        alert("Enter a valid speed, angle (0–90°), and height.");
        return;
    }

    const angleRad = angle * Math.PI / 180;
    Vx = speed * Math.cos(angleRad);
    Vy = speed * Math.sin(angleRad);
    X = 0;
    Y = height;
    time = 0;
    maxX = 0;
    maxY = height;
    scale = 1;
    trajectory = [{ x: X, y: Y }];

    document.getElementById("xx").textContent = "X : 0m";
    document.getElementById("yy").textContent = `Y : ${Math.round(Y)}m`;
    document.getElementById("time").textContent = "Time : 0s";
    document.getElementById("maxY").textContent = `Max Y : ${Math.round(maxY)}m`;

    if (height === 0 && speed === 0) {
        draw();
        return;
    }

    draw();

    timer = setInterval(() => {
        time += dt;

        X += Vx * dt;
        Vy -= gravity * dt;
        Y = height + speed * Math.sin(angleRad) * time - 0.5 * gravity * time * time;

        maxX = Math.max(maxX, X);
        maxY = Math.max(maxY, Y);

        const safeMaxX = Math.max(maxX, 10);
        const safeMaxY = Math.max(maxY, 10);

        scale = Math.min(
               canvas.width / (safeMaxX + 10),
               canvas.height / (safeMaxY + 10));

        if (Y <= 0) {
            Y = 0;
        }

        trajectory.push({ x: X, y: Y });

        draw();

        document.getElementById("time").textContent = `Time : ${Math.round(time / 0.25) * 0.25}s`;
        document.getElementById("xx").textContent = `X : ${Math.round(X)}m`;
        document.getElementById("yy").textContent = `Y : ${Math.round(Y)}m`;
        document.getElementById("maxY").textContent = `Max Y : ${Math.round(maxY)}m`;

          if (Y <= 0) {
                 clearInterval(timer);
                 timer = null;
          }
    }, 160);
}

function reset() {
    clearInterval(timer);
    timer = null;
    speed = 0;
    angle = 0;
    height = 0;
    X = 0;
    Y = 0;
    Vx = 0;
    Vy = 0;
    time = 0;
    scale = 1;
    maxX = 0;
    maxY = 0;
    trajectory = [];

    document.getElementById("speed").value = 0;
    document.getElementById("angle").value = 0;
    document.getElementById("height").value = 0;
    document.getElementById("xx").textContent = "X : 0m";
    document.getElementById("yy").textContent = "Y : 0m";
    document.getElementById("time").textContent = "Time : 0s";
    document.getElementById("maxY").textContent = "Max Y : 0m";

    draw();
}
draw();
