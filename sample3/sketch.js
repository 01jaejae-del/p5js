  let faceAngle = 0;
  let prevMouseX = 0;

  let bgColor;
  let activeObject = 0;
  
  let cloudY = 0;
  let thunderY = 0;
  let birdX = 0;
  let stars = [];

  function setup(){
  createCanvas(600, 600);
  noCursor();
  bgColor = color('#00BFFF');
  prevMouseX = mouseX;
  }

  function draw() {
  background(bgColor);

  if (activeObject === 1) drawBird();
  if (activeObject === 2) drawClouds();
  if (activeObject === 3) drawThunder();
  if (activeObject === 4) drawStars();
    

  let speed = mouseX - prevMouseX;
  faceAngle = lerp(faceAngle, constrain(speed * 5, -40, 40), 0.1);

  push();
  translate(mouseX, mouseY);
  rotate(radians(faceAngle));
  drawFace(0, 0);
  pop();

  prevMouseX = mouseX;
}

  function keyPressed() {
  if (key === 's') saveGif('mySketch', 10);

}

  function drawBird() {
  birdX += 9; //속도
  if (birdX > width + 50) birdX = -50;
  
  fill('#A0522D');
  stroke('#5C2F1B');
  triangle(birdX-45, 170, birdX+35, 190, birdX+10, 200); 
  //왼쪽날개
  stroke('#A0522D');
  fill('#A0522D');
  ellipse(birdX, 200, 100, 50); 
  //몸통
  stroke('#ffffff');
  fill('#ffffff');
  beginShape();
  vertex(birdX + 40, 185);
  vertex(birdX + 40, 215);
  bezierVertex(birdX + 90, 210, birdX + 90, 190, birdX + 40, 185);
  endShape(CLOSE);
  // 머리
  fill('#FFD700');
  noStroke();
  triangle(birdX + 75, 195, birdX + 90, 200, birdX + 75, 205);
  // 부리
  fill('#A0522D');
  stroke('#5C2F1B');
  triangle(birdX+7, 200, birdX+34, 210, birdX-55, 250);
  //오른쪽날개
  fill('#A0522D');
  stroke('#A0522D');
  triangle(birdX-70, 180, birdX-40, 200, birdX-70, 220);
  //꼬리날개
  stroke('#000000');
  fill('#000000');
  ellipse(birdX+65, 198, 7, 2);
  stroke('#ffffff');
  fill('#ffffff');
  ellipse(birdX+67, 198, 1, 1);
  //눈
}
  function drawClouds() {
  stroke('#ffffff');
  fill('#ffffff');
  cloudY += 8;
  if (cloudY > height) cloudY = -50;

  ellipse(100, cloudY, 80, 80);
  ellipse(140, cloudY, 70, 70);
  ellipse(120, cloudY-20, 60, 60);
  //구름1
  ellipse(480, cloudY+150, 70, 70);
  ellipse(540, cloudY+150, 80, 80);
  ellipse(515, cloudY+160, 70, 70);
  //구름2
  ellipse(380, cloudY+50, 55, 50);
  ellipse(400, cloudY+20, 70, 65);
  ellipse(430, cloudY+30, 60, 55);
  //구름3
}
  function drawThunder() {
  thunderY += 10;
  if (thunderY > height) thunderY = -50;
  
  stroke('#ffffff');
  fill('#FF8C00');
  beginShape();
  vertex(110, thunderY + 50);
  vertex(130, thunderY + 50);
  vertex(120, thunderY + 100);
  vertex(140, thunderY + 100);
  vertex(110, thunderY + 200);
  vertex(120, thunderY + 130);
  vertex(100, thunderY + 130);
  endShape(CLOSE);
  //번개1
  stroke('#ffffff');
  fill('#FFFF99');
  beginShape();
  vertex(350, thunderY + 20);
  vertex(370, thunderY + 20);
  vertex(360, thunderY + 80);
  vertex(380, thunderY + 80);
  vertex(350, thunderY + 180);
  vertex(360, thunderY + 110);
  vertex(340, thunderY + 110);
  endShape(CLOSE);
  //번개2
  stroke('#ffffff');
  fill('#FFEB3B');
  beginShape();
  vertex(500, thunderY);
  vertex(520, thunderY);
  vertex(510, thunderY + 70);
  vertex(530, thunderY + 70);
  vertex(500, thunderY + 170);
  vertex(510, thunderY + 90);
  vertex(490, thunderY + 90);
  endShape(CLOSE);
  //번개3
}
  function drawStars() {
  stroke('#fafabe');
  fill('#fafabe');
circle(55, 30, 5);
circle(120, 50, 3);
circle(200, 80, 4);
circle(300, 40, 5);
circle(400, 100, 2);
circle(500, 150, 4);
circle(50, 200, 5);
circle(150, 250, 3);
circle(250, 300, 4);
circle(350, 350, 2);
circle(450, 400, 5);
circle(550, 450, 3);
circle(100, 500, 4);
circle(200, 550, 5);
circle(300, 500, 2);
circle(400, 450, 3);
circle(500, 400, 4);
circle(600, 350, 5);
circle(50, 320, 3);
circle(150, 270, 4);
circle(250, 220, 5);
circle(350, 180, 2);
circle(450, 140, 3);
circle(550, 100, 4);
circle(60, 60, 3);
circle(160, 90, 5);
circle(260, 120, 4);
circle(360, 150, 2);
circle(460, 180, 5);
circle(560, 210, 3);
circle(70, 240, 4);
circle(170, 270, 5);
circle(270, 300, 3);
circle(370, 330, 4);
circle(470, 360, 2);
circle(570, 390, 5);
circle(80, 420, 3);
circle(180, 450, 4);
circle(280, 480, 5);
circle(380, 510, 2);
circle(480, 540, 3);
circle(580, 570, 4);
circle(90, 30, 5);
circle(190, 60, 3);
circle(290, 90, 4);
circle(390, 120, 5);
circle(490, 150, 2);
circle(590, 180, 3);
circle(100, 210, 4);
circle(200, 240, 5);
circle(300, 270, 2);
circle(400, 300, 3);
circle(500, 330, 4);
circle(600, 360, 5);
circle(110, 390, 2);
circle(210, 420, 3);
circle(310, 450, 4);
circle(410, 480, 5);
circle(510, 510, 2);
circle(10, 540, 3);
circle(60, 570, 4);
circle(160, 30, 5);
circle(260, 60, 3);
circle(360, 90, 4);
circle(460, 120, 5);
circle(560, 150, 2);
circle(30, 180, 3);
circle(130, 210, 4);
circle(230, 240, 5);
circle(330, 270, 2);
circle(430, 300, 3);
circle(530, 330, 4);
circle(50, 360, 5);
circle(150, 390, 2);
circle(250, 420, 3);
circle(350, 450, 4);
circle(450, 480, 5);
circle(550, 510, 2);
circle(100, 540, 3);
circle(200, 570, 4);
//별
}
  function drawFace(x, y) {
  push();
  translate(x - 300, y - 200);
  
  stroke('#fff0db');
  fill('#fff0db');
  arc(228, 165, 26, 40, radians(80), radians(270), OPEN);//아래귀
  arc(223, 157, 20, 30, radians(130), radians(320), OPEN);//윗귀
  //왼쪽귀
  stroke('#f7e1c7');
  fill('#f7e1c7');
  arc(228, 165, 15, 20, radians(80), radians(270), OPEN);
  //왼쪽귀음영
  stroke('#e6c1a0');
  noFill();
  arc(221, 157, 12, 20, radians(130), radians(320), OPEN);
  //왼쪽귀음영선
  stroke('#fff0db');
  fill('#fff0db');
  arc(372, 165, 26, 40, radians(270), radians(100), OPEN);//아래귀
  arc(377, 157, 20, 30, radians(220), radians(50), OPEN);//윗귀
  //오른쪽귀
  stroke('#f7e1c7');
  fill('#f7e1c7');
  arc(372, 165, 15, 20, radians(270), radians(100), OPEN);
  //오른쪽귀음영
  stroke('#e6c1a0');
  noFill();
  arc(379, 157, 12, 20, radians(220), radians(50), OPEN);
  //오른쪽귀음영선
  stroke('#FF4500');
  fill('#FF4500');
  ellipse(300, 310, 108, 150);
  stroke('#FF4500');
  fill('#FF4500');
  triangle(281, 380, 319, 380, 300, 390);
  //불꽃1
  stroke('#FF8C00');
  fill('#FF8C00');
  ellipse(300, 310, 88, 130);
  stroke('#FF8C00');
  fill('#FF8C00');
  triangle(283, 370, 317, 370, 300, 380);
  //불꽃2
  stroke('#FFD700');
  fill('#FFD700');
  ellipse(300, 310, 58, 100);
  stroke('#FFD700');
  fill('#FFD700');
  triangle(287, 355, 313, 355, 300, 365);
  //불꽃3
  stroke('#FFE680');
  fill('#FFE680');
  ellipse(300, 310, 28, 70);
  stroke('#FFE680');
  fill('#FFE680');
  triangle(293, 340, 307, 340, 300, 350);
  //불꽃4
  stroke('#fff0db');
  fill('#fff0db');
  beginShape();
  vertex(250, 220);
  vertex(350, 220);
  bezierVertex(355, 320, 245, 320, 250, 220);
  //목
  endShape(CLOSE);
  stroke('#f7e1c7');
  fill('#f7e1c7');
  beginShape();
  vertex(250, 220);
  vertex(350, 220);
  bezierVertex(355, 270, 245, 270, 250, 220);
  endShape(CLOSE);
  //목음영
  stroke('#fff0db');
  fill('#fff0db');
  triangle(251, 243, 275, 287, 251, 280);
  triangle(349, 243, 325, 287, 349, 280);
  //목모서리
  stroke('#fff0db');
  fill('#fff0db');
  beginShape();
  vertex(230, 180);
  vertex(370, 180);
  bezierVertex(345, 275, 255, 275, 230, 180);
  endShape(CLOSE);
  //아래턱
  stroke('#fff0db');
  fill('#fff0db');
  quad(225, 130, 375, 130, 370, 180, 230, 180);
  //중간얼굴
  stroke('#fff0db');
  fill('#fff0db');
  arc(300, 130, 150, 130, radians(0), radians(360));
  //이마
  stroke('#ffffff');
  fill('#ffffff');
  arc(265, 145, 33, 13, radians(0), radians(360));
  //왼쪽눈
  stroke('#ffffff');
  fill('#ffffff');
  arc(335, 145, 33, 13, radians(0), radians(360));
  //오른쪽눈
  stroke('#3B2F2F');
  fill('#3B2F2F');
  circle(266, 144, 17);
  stroke('#D2A679');
  fill('#D2A679');
  circle(266, 144, 14);
  stroke('#6B4226');
  fill('#6B4226');
  circle(266, 144, 9);
  stroke('#000000');
  fill('#000000');
  circle(266, 144, 6);
  stroke('#ffffff');
  fill('#ffffff');
  circle(266, 142, 2);
  //왼쪽동공
  stroke('#3B2F2F');
  fill('#3B2F2F');
  circle(334, 144, 17);
  stroke('#D2A679');
  fill('#D2A679');
  circle(334, 144, 14);
  stroke('#6B4226');
  fill('#6B4226');
  circle(334, 144, 9);
  stroke('#000000');
  fill('#000000');
  circle(334, 144, 6);
  stroke('#ffffff');
  fill('#ffffff');
  circle(334, 142, 2);
  //오른쪽동공
  push(); //전역설정시작 
  stroke('#fff0db');
  strokeWeight(5);
  noFill();
  arc(265, 145, 39, 18, radians(0), radians(360));
  pop(); //전역설정끝
  //왼쪽눈테리두리
  push(); //전역설정시작 
  stroke('#fff0db');
  strokeWeight(5);
  noFill();
  arc(335, 145, 39, 18, radians(0), radians(360));
  pop(); //전역설정끝
  //오른쪽눈테리두리
  stroke('#ffffff');
  fill('#ffffff');
  triangle(281, 144, 285, 150, 274, 150);
  triangle(246, 145, 251, 142, 251, 148);
  //왼쪽눈꼬리
  stroke('#ffffff');
  fill('#ffffff');
  triangle(319, 144, 315, 150, 326, 150);
  triangle(354, 145, 349, 142, 349, 148);
  //오른쪽눈꼬리
  stroke('#fff0db');
  fill('#fff0db');
  quad(294, 140, 306, 140, 310, 180, 290, 180);
  //코
  stroke('#f7e1c7');
  fill('#fff0db');
  arc(294, 185, 23, 12, radians(79), radians(235), OPEN);
  //콧망울왼쪽
  stroke('#f7e1c7');
  fill('#fff0db');
  arc(306, 185, 23, 12, radians(-56), radians(101), OPEN);
  //콧망울오른쪽
  stroke('#f7e1c7');
  fill('#f2d7bb');
  triangle(294, 140, 290, 180, 284, 182);
  //코왼쪽음영
  stroke('#f7e1c7');
  fill('#f7e1c7');
  triangle(306, 140, 316, 182, 310, 180);
  //코오른쪽음영
  stroke('#000000');
  fill('#000000');
  ellipse(292, 190, 6, 2);
  //콧구멍왼쪽
  stroke('#000000');
  fill('#000000');
  ellipse(308, 190, 6, 2);
  //콧구멍오른쪽
  stroke('#f7e1c7');
  fill('#fff0db');
  arc(300, 180, 20, 25, radians(0), radians(180), OPEN);
  //콧망울
  stroke('#fff8f0');
  fill('#fff0db');
  quad(300, 195, 304, 210, 300, 214, 296, 210);
  //인중
  stroke('#f7e1c7');
  fill('#f7e1c7');
  ellipse(300, 226, 12, 2);
  //아래입술음영
  stroke('#000000');
  line(284, 219, 316, 219);
  //가운데입안선
  stroke('#f28b82');
  fill('#f28b82');
  triangle(296, 213, 304, 218, 284, 218);
  triangle(304, 213, 316, 218, 296, 218);
  //윗입술
  stroke('#f28b82');
  fill('#f28b82');
  arc(300, 219, 33, 14, radians(0), radians(180));
  //아랫입술
  stroke('#2c2c2c');
  fill('#2c2c2c');
  triangle(347, 123, 356, 130, 316, 125);
  triangle(316, 125, 340, 128, 314, 129);
  //오른쪽눈썹
  stroke('#2c2c2c');
  fill('#2c2c2c');
  triangle(253, 123, 244, 130, 284, 125);
  triangle(284, 125, 260, 128, 286, 129);
  //왼쪽눈썹
  push(); //전역설정시작 
  stroke('#444444');
  strokeWeight(2);
  line(305, 95, 305, 65);
  pop();
  //가르마
  push();
  stroke('#000000');
  strokeWeight(2);
  noFill();
arc(305, 135, 163, 80, radians(180), radians(270), OPEN);
arc(305, 134, 164, 80, radians(180), radians(270), OPEN);
arc(305, 133, 165, 80, radians(180), radians(270), OPEN);
arc(305, 132, 166, 80, radians(180), radians(270), OPEN);
arc(305, 131, 167, 80, radians(180), radians(270), OPEN);
arc(305, 130, 168, 80, radians(180), radians(270), OPEN);
arc(305, 129, 169, 80, radians(180), radians(270), OPEN);
arc(305, 128, 170, 80, radians(180), radians(270), OPEN);
arc(305, 127, 171, 80, radians(180), radians(270), OPEN);
arc(305, 126, 172, 80, radians(180), radians(270), OPEN);
arc(305, 125, 173, 80, radians(180), radians(270), OPEN);
arc(305, 124, 174, 80, radians(180), radians(270), OPEN);
arc(305, 123, 174, 80, radians(180), radians(270), OPEN);
arc(305, 122, 174, 80, radians(180), radians(270), OPEN);
arc(305, 121, 174, 80, radians(180), radians(270), OPEN);
arc(305, 120, 175, 80, radians(180), radians(270), OPEN);
arc(305, 119, 175, 80, radians(180), radians(270), OPEN);
arc(305, 118, 175, 80, radians(180), radians(270), OPEN);
arc(305, 117, 175, 80, radians(180), radians(270), OPEN);
arc(305, 116, 176, 80, radians(180), radians(270), OPEN);
arc(305, 115, 176, 80, radians(180), radians(270), OPEN);
arc(305, 114, 176, 80, radians(180), radians(270), OPEN);
arc(305, 113, 176, 80, radians(180), radians(270), OPEN);
arc(305, 112, 177, 80, radians(180), radians(270), OPEN);
arc(305, 111, 177, 80, radians(180), radians(270), OPEN);
arc(305, 110, 177, 80, radians(180), radians(270), OPEN);
arc(305, 109, 177, 80, radians(180), radians(270), OPEN);
arc(305, 108, 176, 80, radians(180), radians(270), OPEN);
arc(305, 107, 176, 80, radians(180), radians(270), OPEN);
arc(305, 106, 176, 80, radians(180), radians(270), OPEN);
arc(305, 105, 176, 80, radians(180), radians(270), OPEN);
arc(305, 104, 176, 80, radians(180), radians(270), OPEN);
//왼쪽머리카락1
arc(305, 146, 158, 100, radians(180), radians(270), OPEN);
arc(305, 145, 159, 100, radians(180), radians(270), OPEN);
arc(305, 144, 160, 100, radians(180), radians(270), OPEN);
arc(305, 143, 161, 100, radians(180), radians(270), OPEN);
arc(305, 142, 162, 100, radians(180), radians(270), OPEN);
arc(305, 141, 163, 100, radians(180), radians(270), OPEN);
arc(305, 140, 164, 100, radians(180), radians(270), OPEN);
arc(305, 139, 165, 100, radians(180), radians(270), OPEN);
arc(305, 138, 166, 100, radians(180), radians(270), OPEN);
arc(305, 137, 167, 100, radians(180), radians(270), OPEN);
arc(305, 136, 168, 100, radians(180), radians(270), OPEN);
arc(305, 135, 169, 100, radians(180), radians(270), OPEN);
arc(305, 134, 169, 100, radians(180), radians(270), OPEN);
arc(305, 133, 169, 100, radians(180), radians(270), OPEN);
arc(305, 132, 169, 100, radians(180), radians(270), OPEN);
arc(305, 131, 170, 100, radians(180), radians(270), OPEN);
arc(305, 130, 170, 100, radians(180), radians(270), OPEN);
arc(305, 129, 170, 100, radians(180), radians(270), OPEN);
arc(305, 128, 170, 100, radians(180), radians(270), OPEN);
arc(305, 127, 171, 100, radians(180), radians(270), OPEN);
arc(305, 126, 171, 100, radians(180), radians(270), OPEN);
arc(305, 125, 171, 100, radians(180), radians(270), OPEN);
arc(305, 124, 171, 100, radians(180), radians(270), OPEN);
arc(305, 123, 172, 100, radians(180), radians(270), OPEN);
arc(305, 122, 172, 100, radians(180), radians(270), OPEN);
arc(305, 121, 172, 100, radians(180), radians(270), OPEN);
arc(305, 120, 172, 100, radians(180), radians(270), OPEN);
arc(305, 119, 171, 100, radians(180), radians(270), OPEN);
arc(305, 118, 171, 100, radians(180), radians(270), OPEN);
arc(305, 117, 171, 100, radians(180), radians(270), OPEN);
arc(305, 116, 171, 100, radians(180), radians(270), OPEN);
arc(305, 115, 171, 100, radians(180), radians(270), OPEN);
//왼쪽머리카락2
arc(305, 147, 130, 100, radians(210), radians(270), OPEN);
arc(305, 146, 130, 100, radians(210), radians(270), OPEN);
arc(305, 145, 130, 100, radians(210), radians(270), OPEN);
arc(305, 144, 130, 100, radians(210), radians(270), OPEN);
arc(305, 143, 130, 100, radians(210), radians(270), OPEN);
arc(305, 142, 130, 100, radians(210), radians(270), OPEN);
arc(305, 141, 130, 100, radians(210), radians(270), OPEN);
arc(305, 140, 130, 100, radians(210), radians(270), OPEN);
arc(305, 139, 130, 100, radians(210), radians(270), OPEN);
arc(305, 138, 130, 100, radians(210), radians(270), OPEN);
arc(305, 137, 130, 100, radians(210), radians(270), OPEN);
arc(305, 136, 130, 100, radians(210), radians(270), OPEN);
arc(305, 135, 130, 100, radians(210), radians(270), OPEN);
arc(305, 134, 130, 100, radians(210), radians(270), OPEN);
arc(305, 133, 130, 100, radians(210), radians(270), OPEN);
arc(305, 132, 130, 100, radians(210), radians(270), OPEN);
arc(305, 131, 130, 100, radians(210), radians(270), OPEN);
arc(305, 130, 130, 100, radians(210), radians(270), OPEN);
arc(305, 129, 130, 100, radians(210), radians(270), OPEN);
arc(305, 128, 130, 100, radians(210), radians(270), OPEN);
arc(305, 127, 130, 100, radians(210), radians(270), OPEN);
arc(305, 126, 130, 100, radians(210), radians(270), OPEN);
arc(305, 125, 130, 100, radians(210), radians(270), OPEN);
arc(305, 124, 130, 100, radians(210), radians(270), OPEN);
arc(305, 123, 130, 100, radians(210), radians(270), OPEN);
arc(305, 122, 130, 100, radians(210), radians(270), OPEN);
arc(305, 121, 130, 100, radians(210), radians(270), OPEN);
arc(305, 120, 130, 100, radians(210), radians(270), OPEN);
arc(305, 119, 130, 100, radians(210), radians(270), OPEN);
arc(305, 118, 130, 100, radians(210), radians(270), OPEN);
arc(305, 117, 130, 100, radians(210), radians(270), OPEN);
arc(305, 116, 130, 100, radians(210), radians(270), OPEN);
//왼쪽앞머리
arc(278, 110, 100, 110, radians(210), radians(300), OPEN);
arc(278, 111, 100, 110, radians(210), radians(300), OPEN);
arc(278, 112, 100, 110, radians(210), radians(300), OPEN);
arc(278, 113, 100, 110, radians(210), radians(300), OPEN);
arc(278, 114, 100, 110, radians(210), radians(300), OPEN);
arc(278, 115, 100, 110, radians(210), radians(300), OPEN);
arc(278, 116, 100, 110, radians(210), radians(300), OPEN);
arc(278, 117, 100, 110, radians(210), radians(300), OPEN);
arc(278, 118, 100, 110, radians(210), radians(300), OPEN);
arc(278, 119, 100, 110, radians(210), radians(300), OPEN);
arc(278, 120, 100, 110, radians(210), radians(300), OPEN);
arc(278, 121, 100, 110, radians(210), radians(300), OPEN);
arc(278, 122, 100, 110, radians(210), radians(300), OPEN);
arc(278, 123, 100, 110, radians(210), radians(300), OPEN);
arc(278, 124, 100, 110, radians(210), radians(300), OPEN);
arc(278, 125, 100, 110, radians(210), radians(300), OPEN);
arc(278, 126, 100, 110, radians(210), radians(300), OPEN);
arc(278, 127, 100, 110, radians(210), radians(300), OPEN);
arc(278, 128, 100, 110, radians(210), radians(300), OPEN);
arc(278, 129, 100, 110, radians(210), radians(300), OPEN);
arc(278, 130, 100, 110, radians(210), radians(300), OPEN);
arc(278, 131, 100, 110, radians(210), radians(300), OPEN);
arc(278, 132, 100, 110, radians(210), radians(300), OPEN);
arc(278, 133, 100, 110, radians(210), radians(300), OPEN);
arc(278, 134, 100, 110, radians(210), radians(300), OPEN);
arc(278, 135, 100, 110, radians(210), radians(300), OPEN);
arc(278, 136, 100, 110, radians(210), radians(300), OPEN);
arc(278, 137, 100, 110, radians(210), radians(300), OPEN);
arc(278, 138, 100, 110, radians(210), radians(300), OPEN);
arc(278, 139, 100, 110, radians(210), radians(300), OPEN);
arc(278, 140, 100, 110, radians(210), radians(300), OPEN);
arc(278, 141, 100, 110, radians(210), radians(300), OPEN);
//왼쪽윗머리
arc(306, 138, 138, 80, radians(270), radians(360), OPEN);
arc(306, 137, 139, 80, radians(270), radians(360), OPEN);
arc(306, 136, 140, 80, radians(270), radians(360), OPEN);
arc(306, 135, 141, 80, radians(270), radians(360), OPEN);
arc(306, 134, 142, 80, radians(270), radians(360), OPEN);
arc(306, 133, 143, 80, radians(270), radians(360), OPEN);
arc(306, 132, 144, 80, radians(270), radians(360), OPEN);
arc(306, 131, 145, 80, radians(270), radians(360), OPEN);
arc(306, 130, 146, 80, radians(270), radians(360), OPEN);
arc(306, 129, 147, 80, radians(270), radians(360), OPEN);
arc(306, 128, 148, 80, radians(270), radians(360), OPEN);
arc(306, 127, 149, 80, radians(270), radians(360), OPEN);
arc(306, 126, 149, 80, radians(270), radians(360), OPEN);
arc(306, 125, 149, 80, radians(270), radians(360), OPEN);
arc(306, 124, 150, 80, radians(270), radians(360), OPEN);
arc(306, 123, 150, 80, radians(270), radians(360), OPEN);
arc(306, 122, 150, 80, radians(270), radians(360), OPEN);
arc(306, 121, 151, 80, radians(270), radians(360), OPEN);
arc(306, 120, 151, 80, radians(270), radians(360), OPEN);
arc(306, 119, 151, 80, radians(270), radians(360), OPEN);
arc(306, 118, 152, 80, radians(270), radians(360), OPEN);
arc(306, 117, 152, 80, radians(270), radians(360), OPEN);
arc(306, 116, 152, 80, radians(270), radians(360), OPEN);
arc(306, 115, 153, 80, radians(270), radians(360), OPEN);
arc(306, 114, 153, 80, radians(270), radians(360), OPEN);
arc(306, 113, 153, 80, radians(270), radians(360), OPEN);
arc(306, 112, 154, 80, radians(270), radians(360), OPEN);
arc(306, 111, 154, 80, radians(270), radians(360), OPEN);
arc(306, 110, 154, 80, radians(270), radians(360), OPEN);
arc(306, 109, 155, 80, radians(270), radians(360), OPEN);
arc(306, 108, 155, 80, radians(270), radians(360), OPEN);
arc(306, 107, 155, 80, radians(270), radians(360), OPEN);
//오른쪽머리1
arc(306, 118, 110, 40, radians(270), radians(360), OPEN);
arc(306, 117, 110, 40, radians(270), radians(360), OPEN);
arc(306, 116, 110, 40, radians(270), radians(360), OPEN);
arc(306, 115, 110, 40, radians(270), radians(360), OPEN);
arc(306, 114, 110, 40, radians(270), radians(360), OPEN);
arc(306, 113, 110, 40, radians(270), radians(360), OPEN);
arc(306, 112, 110, 40, radians(270), radians(360), OPEN);
arc(306, 111, 110, 40, radians(270), radians(360), OPEN);
arc(306, 110, 110, 40, radians(270), radians(360), OPEN);
arc(306, 109, 110, 40, radians(270), radians(360), OPEN);
arc(306, 108, 110, 40, radians(270), radians(360), OPEN);
arc(306, 107, 110, 40, radians(270), radians(360), OPEN);
arc(306, 106, 110, 40, radians(270), radians(360), OPEN);
arc(306, 105, 110, 40, radians(270), radians(360), OPEN);
arc(306, 104, 110, 40, radians(270), radians(360), OPEN);
arc(306, 103, 110, 40, radians(270), radians(360), OPEN);
arc(306, 102, 110, 40, radians(270), radians(360), OPEN);
arc(306, 101, 110, 40, radians(270), radians(360), OPEN);
arc(306, 100, 110, 40, radians(270), radians(360), OPEN);
arc(306, 99, 110, 40, radians(270), radians(360), OPEN);
arc(306, 98, 110, 40, radians(270), radians(360), OPEN);
arc(306, 97, 110, 40, radians(270), radians(360), OPEN);
arc(306, 96, 110, 40, radians(270), radians(360), OPEN);
arc(306, 95, 110, 40, radians(270), radians(360), OPEN);
arc(306, 94, 110, 40, radians(270), radians(360), OPEN);
arc(306, 93, 110, 40, radians(270), radians(360), OPEN);
arc(306, 92, 110, 40, radians(270), radians(360), OPEN);
arc(306, 91, 110, 40, radians(270), radians(360), OPEN);
arc(306, 90, 110, 40, radians(270), radians(360), OPEN);
arc(306, 89, 110, 40, radians(270), radians(360), OPEN);
arc(306, 88, 110, 40, radians(270), radians(360), OPEN);
arc(306, 87, 110, 40, radians(270), radians(360), OPEN);
//오른쪽머리2
arc(332, 95, 80, 80, radians(230), radians(360), OPEN);
arc(332, 96, 80, 80, radians(230), radians(360), OPEN);
arc(332, 97, 80, 80, radians(230), radians(360), OPEN);
arc(332, 98, 80, 80, radians(230), radians(360), OPEN);
arc(332, 99, 80, 80, radians(230), radians(360), OPEN);
arc(332, 100, 80, 80, radians(230), radians(360), OPEN);
arc(332, 101, 80, 80, radians(230), radians(360), OPEN);
arc(332, 102, 80, 80, radians(230), radians(360), OPEN);
arc(332, 103, 80, 80, radians(230), radians(360), OPEN);
arc(332, 104, 80, 80, radians(230), radians(360), OPEN);
arc(332, 105, 80, 80, radians(230), radians(360), OPEN);
arc(332, 106, 80, 80, radians(230), radians(360), OPEN);
arc(332, 107, 80, 80, radians(230), radians(360), OPEN);
arc(332, 108, 80, 80, radians(230), radians(360), OPEN);
arc(332, 109, 80, 80, radians(230), radians(360), OPEN);
arc(332, 110, 80, 80, radians(230), radians(360), OPEN);
arc(332, 111, 80, 80, radians(230), radians(360), OPEN);
arc(332, 112, 80, 80, radians(230), radians(360), OPEN);
arc(332, 113, 80, 80, radians(230), radians(360), OPEN);
arc(332, 114, 80, 80, radians(230), radians(360), OPEN);
arc(332, 115, 80, 80, radians(230), radians(360), OPEN);
arc(332, 116, 80, 80, radians(230), radians(360), OPEN);
arc(332, 117, 80, 80, radians(230), radians(360), OPEN);
arc(332, 118, 80, 80, radians(230), radians(360), OPEN);
arc(332, 119, 80, 80, radians(230), radians(360), OPEN);
arc(332, 120, 80, 80, radians(230), radians(360), OPEN);
arc(332, 121, 80, 80, radians(230), radians(360), OPEN);
arc(332, 122, 80, 80, radians(230), radians(360), OPEN);
arc(332, 123, 80, 80, radians(230), radians(360), OPEN);
arc(332, 124, 80, 80, radians(230), radians(360), OPEN);
arc(332, 125, 80, 80, radians(230), radians(360), OPEN);
arc(332, 126, 80, 80, radians(230), radians(360), OPEN);
//오른쪽머리3
arc(338, 87, 70, 50, radians(90), radians(160), OPEN);
arc(338, 86, 70, 50, radians(90), radians(160), OPEN);
arc(338, 85, 70, 50, radians(90), radians(160), OPEN);
arc(338, 84, 70, 50, radians(90), radians(160), OPEN);
arc(338, 83, 70, 50, radians(90), radians(160), OPEN);
arc(338, 82, 70, 50, radians(90), radians(160), OPEN);
arc(338, 81, 70, 50, radians(90), radians(160), OPEN);
arc(338, 80, 70, 50, radians(90), radians(160), OPEN);
arc(338, 79, 70, 50, radians(90), radians(160), OPEN);
arc(338, 78, 70, 50, radians(90), radians(160), OPEN);
arc(338, 77, 70, 50, radians(90), radians(160), OPEN);
arc(338, 76, 70, 50, radians(90), radians(160), OPEN);
arc(338, 75, 70, 50, radians(90), radians(160), OPEN);
arc(338, 74, 70, 50, radians(90), radians(160), OPEN);
arc(338, 73, 70, 50, radians(90), radians(160), OPEN);
arc(338, 72, 70, 50, radians(90), radians(160), OPEN);
arc(338, 71, 70, 50, radians(90), radians(160), OPEN);
arc(338, 70, 70, 50, radians(90), radians(160), OPEN);
arc(338, 69, 70, 50, radians(90), radians(160), OPEN);
arc(338, 68, 70, 50, radians(90), radians(160), OPEN);
arc(338, 67, 70, 50, radians(90), radians(160), OPEN);
arc(338, 66, 70, 50, radians(90), radians(160), OPEN);
arc(338, 65, 70, 50, radians(90), radians(160), OPEN);
arc(338, 64, 70, 50, radians(90), radians(160), OPEN);
arc(338, 63, 70, 50, radians(90), radians(160), OPEN);
arc(338, 62, 70, 50, radians(90), radians(160), OPEN);
arc(338, 61, 70, 50, radians(90), radians(160), OPEN);
arc(338, 60, 70, 50, radians(90), radians(160), OPEN);
arc(338, 59, 70, 50, radians(90), radians(160), OPEN);
arc(338, 58, 70, 50, radians(90), radians(160), OPEN);
arc(338, 57, 70, 50, radians(90), radians(160), OPEN);
arc(338, 56, 70, 50, radians(90), radians(160), OPEN);
//오른쪽앞머리
pop();
}