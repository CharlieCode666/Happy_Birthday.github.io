alert("這是收集happy birthday字母的小遊戲,你可以操控左右鍵來移動紫色小方塊收集字母")

window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
/* ======================================= */
    
    var dir = 0;
    var x = 175;
    var y = 388;
    
    var aum = 0;
    var bum = 0;
    var cum = 0;
    var dum = 0;
    var eum = 0;
    var fum = 0;
    var gum = 0;
    var hum = 0;
    var ium = 0;
    var jum = 0;
    var kum = 0;
    var lum = 0;
    var mum = 0;
    
/* ======================================= */

  var t = Date.now();
    let speed = 100;
    var Score = 0;
    var M = 12;

/* ======================================= */
  
  var Hx = 10;
  var Hy = -10;
    
  var Ax = 40;
  var Ay = -20;
    
  var P_1x = 55;
  var P_1y = -30;

  var P_2x = 90;
  var P_2y = -40;
  
  var Yx = 135;
  var Yy = -35;
    
  var Bx = 150;
  var By = -25;
    
  var Ix = 170;
  var Iy = -80;

  var Rx = 190;
  var Ry = -5;
  
  var Tx = 230;
  var Ty = -50;
    
  var H_2x = 240;
  var H_2y = -23;
    
  var Dx = 260;
  var Dy = -13;

  var A_2x = 300;
  var A_2y = -35;
  
  var Y_2x = 350;
  var Y_2y = -40;
  
/* ======================================= */

  var coin1x = Math.random() * (388-40)
  var coin1y = Math.random() * (-30)

/* ======================================= */

    
let right = document.getElementById('right');
right.ontouchstart = function() {
  dir = 1;
}
right.ontouchend = function() {
  dir = 0;
}

let left = document.getElementById('left');
left.ontouchstart = function() {
  dir = 2;
}
left.ontouchend = function() {
  dir = 0;
}



/* ======================================= */
  
  function draw(){
    
    var timePassed = (Date.now() - t) / 1000;
    t = Date.now();
    
    var fps = Math.round(1 / timePassed);
    
    context.clearRect(0, 0, 388, 570)
    
    context.beginPath();
    
    context.font = '10px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("FPS: " + fps, 6, 12);
  
  
  context.rect(x, y, 35, 30);
    context.fillStyle = "#6600ff";
    context.fill();
    
    context.lineWidth = 3;
    context.strokeStyle = "#ffffff";
    context.stroke();

  if(dir == 1){
    if(x+38 < 388){
      x += (speed * timePassed)
    }
  }
  
  else if(dir == 2){
    if(x > 0){
      x -= (speed * timePassed)
    }
  }
  
  if (Hx <= x+40 && x <= Hx+38 && Hy <= y+40 && y <= Hy+38) {
    aum += 1;
  }
  if(aum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("H", 5, 480);
    
    Hy = -10;
    }
    
    if (Ax <= x+40 && x <= Ax+38 && Ay <= y+40 && y <= Ay+38) {
    bum += 1;
  }
  if(bum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("A", 30, 480);
    
    Ay = -10;
    }
    
  if (P_1x <= x+40 && x <= P_1x+38 && P_1y <= y+40 && y <= P_1y+38) {
    cum += 1;
  }
  if(cum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("P", 55, 480);
    
    P_1y = -10;
    }
  
  if (P_2x <= x+40 && x <= P_2x+38 && P_2y <= y+40 && y <= P_2y+38) {
    dum += 1;
  }
  if(dum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("P", 80, 480);
    
    P_2y = -10;
    }
  
  if (Yx <= x+40 && x <= Yx+38 && Yy <= y+40 && y <= Yy+38) {
    eum += 1;
  }
  if(eum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("Y", 105, 480);
    
    Yy = -10;
    }
  
  if (Bx <= x+40 && x <= Bx+38 && By <= y+40 && y <= By+38) {
    fum += 1;
  }
  if(fum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("B", 190, 480);
    
    By = -10;
    }
    
  if (Ix <= x+40 && x <= Ix+38 && Iy <= y+40 && y <= Iy+38) {
    gum += 1;
  }
  if(gum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("I", 215, 480);
    
    Iy = -10;
    }
  
  if (Rx <= x+40 && x <= Rx+38 && Ry <= y+40 && y <= Ry+38) {
    hum += 1;
  }
  if(hum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("R", 230, 480);
    
    Ry = -10;
    }
    
  if (Tx <= x+40 && x <= Tx+38 && Ty <= y+40 && y <= Ty+38) {
    ium += 1;
  }
  if(ium >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("T", 255, 480);
    
    Ty = -10;
    }
    
  if (H_2x <= x+40 && x <= H_2x+38 && H_2y <= y+40 && y <= H_2y+38) {
    jum += 1;
  }
  if(jum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("H", 280, 480);
    
    H_2y = -10;
    }
    
  if (Dx <= x+40 && x <= Dx+38 && Dy <= y+40 && y <= Dy+38) {
    kum += 1;
  }
  if(kum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("D", 305, 480);
    
    Dy = -10;
    }
    
  if (A_2x <= x+40 && x <= A_2x+38 && A_2y <= y+40 && y <= A_2y+38) {
    lum += 1;
  }
  if(lum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("A", 330, 480);
    
    A_2y = -10;
    }
  
  if (Y_2x <= x+40 && x <= Y_2x+38 && Y_2y <= y+40 && y <= Y_2y+38) {
    mum += 1;
  }
  if(mum >= 1){
    context.beginPath();
    context.font = '40px Arial';
    context.fillStyle = '#66ffff';
    context.fillText("Y", 355, 480);
    
    Y_2y = -10;
    }
  
/* ======================================= */
  
  context.beginPath();
  
  context.rect(0, 420, 388, 5);
  context.fillStyle = "#0000ff"
  context.fill();
  
/* ======================================= */
  
  /* 1 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("H", Hx, Hy);
  
  Hy += 2 * (speed * timePassed);
  
  if(Hy >= 420){
    Hx = Math.random() * (388-40);
    Hy = Math.random() * (-30);
  }
  
  /* 2 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("A", Ax, Ay);
  
  Ay += (speed * timePassed);
  
  if(Ay >= 420){
    Ax = Math.random() * (388-40);
    Ay = Math.random() * (-50);
  }
  
  /* 3 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("P", P_1x, P_1y);
  
  P_1y += 0.5 * (speed * timePassed);
  
  if(P_1y >= 420){
    P_1x = Math.random() * (388-40);
    P_1y = Math.random() * (-30);
  }
  
  /* 4 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("P", P_2x, P_2y);
  
  P_2y += 1.2 * (speed * timePassed);
  
  if(P_2y >= 420){
    P_2x = Math.random() * (388-40);
    P_2y = Math.random() * (-30);
  }
  
  /* 5 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("Y", Yx, Yy);
  
  Yy += 0.8 * (speed * timePassed);
  
  if(Yy >= 420){
    Yx = Math.random() * (388-40);
    Yy = Math.random() * (-30);
  }
  
  /* 6 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("B", Bx, By);
  
  By += 1.6 * (speed * timePassed);
  
  if(By >= 420){
    Bx = Math.random() * (388-40);
    By = Math.random() * (-30);
  }
  
  /* 7 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("I", Ix, Iy);
  
  Iy += 0.4 * (speed * timePassed);
  
  if(Iy >= 420){
    Ix = Math.random() * (388-40);
    Iy = Math.random() * (-30);
  }
  
  /* 8 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("R", Rx, Ry);
  
  Ry += 2 * (speed * timePassed);
  
  if(Ry >= 420){
    Rx = Math.random() * (388-40);
    Ry = Math.random() * (-30);
  }
  
  /* 9 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("T", Tx, Ty);
  
  Ty += 1.3 * (speed * timePassed);
  
  if(Ty >= 420){
    Tx = Math.random() * (388-40);
    Ty = Math.random() * (-30);
  }
  
  /* 10 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("H", H_2x, H_2y);
  
  H_2y += 1.1 * (speed * timePassed);
  
  if(H_2y >= 420){
    H_2x = Math.random() * (388-40);
    H_2y = Math.random() * (-30);
  }
  
  /* 11 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("D", Dx, Dy);
  
  Dy += 0.9 * (speed * timePassed);
  
  if(Dy >= 420){
    Dx = Math.random() * (388-40);
    Dy = Math.random() * (-30);
  }
  
  /* 12 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("A", A_2x, A_2y);
  
  A_2y += 0.4 * (speed * timePassed);
  
  if(A_2y >= 420){
    A_2x = Math.random() * (388-40);
    A_2y = Math.random() * (-30);
  }
  
  /* 13 */
  
  context.beginPath();
  
  context.font = '40px Arial';
  context.fillStyle = '#66ffff';
  context.fillText("Y", Y_2x, Y_2y);
  
  Y_2y += 1.7 * (speed * timePassed);
  
  if(Y_2y >= 420){
    Y_2x = Math.random() * (388-40);
    Y_2y = Math.random() * (-30);
  }
  
/* ======================================= */
  
  if(aum == 1 && bum == 1 && cum == 1 && dum == 1 && eum == 1 && fum == 1 && gum == 1 && hum == 1 && ium == 1 && jum == 1 && kum == 1 && lum == 1 && mum == 1){
    
    
    alert("生日快樂🥳 盧祺學");
    
    aum = 2;
  }
  
   if(aum == 2){
    context.beginPath();
    context.font = '50px Arial';
    context.fillStyle = '#cc0099';
    context.fillText("遊戲結束", 100, 250);
    }
  
  window.requestAnimationFrame(draw);
  }
    draw();
}
