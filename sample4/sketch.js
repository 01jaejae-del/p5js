
// 달 관련
let baseDiam = [30, 33, 37, 42, 48, 55];
let arcDiam = [63, 66, 72, 75, 82, 85, 93, 96, 105, 108, 118, 121, 132, 135, 147, 144, 163, 160, 180, 177];
let arcStart = [-120, -170, -90, -140, -60, -110, -30, -80, 0, -50, 30, -20, 60, 10, 90, 40, 120, 70, 150, 100];
let arcEnd   = [180, -130, 210, -100, 240, -70, 270, -40, 300, -10, 330, 20, 360, 50, 30, 80, 60, 110, 90, 140];

// 별 관련
let stars = [
  {x:55, y:30}, {x:50, y:140}, {x:70, y:220}, {x:300, y:80},
  {x:270, y:180}, {x:400, y:50}, {x:480, y:90}, {x:550, y:20},
  {x:30, y:80}, {x:270, y:30}, {x:300, y:150}, {x:380, y:100},
  {x:450, y:40}, {x:560, y:110}
];
let starAlpha = [];
let starSpeed = [];

// 산 관련
let mountainLines = [];
let mountainColors = [
  ['#003300','#330000','#660000','#664422','#442200','#FFF5F0'],
  ['#004d00','#4d0000','#800000','#806633','#663300','#FFECEC'],
  ['#0A6E0A','#6E0A0A','#990000','#996633','#663300','#FFE6E6'],
  ['#228B22','#8B2222','#B22222','#B28466','#663322','#FFE0E0'],
  ['#32CD32','#CD3232','#FF3333','#FF9966','#993322','#FFDADA'],
  ['#7CFC00','#FC7C7C','#FF6666','#FFB266','#994422','#FFD6D6'],
  ['#ADFF2F','#FFADAD','#FF8080','#FFCC99','#996633','#FFECEC'],
  ['#CCFF66','#FFCCCC','#FF9999','#FFD9B3','#996633','#FFF2E6'],
  ['#E6FFB3','#FFE6E6','#FFB3B3','#FFE0CC','#995522','#FFFFFF']
];
let totalTime = 10 * 60;

// 나무 관련
let trunkBase; 
let trunkLines = [];
let leaves = [];
let leafFallInterval = 120;

let counter = 0;
let leafCounter = 0;

// 구름 관련
let clouds = [
  {x: 240, y: 230, startX: 240, travel: 50, speed: 0}, 
  {x: 400, y: 170, startX: 400, travel: 50, speed: 0}  
];

function keyPressed() {
  if (key === 's') saveGif('mySketch', 10);
}
function setup() {
  createCanvas(600, 400);

  // 별 초기화
  for (let i = 0; i < stars.length; i++) {
    starAlpha.push(random(50, 255));
    starSpeed.push(random(0.5, 2));
  }

  // 산 초기화
  mountainLines.push({x1:600, y1:200, x2:155, y2:400, baseColor:'#002600', dynamic:false});
  for (let group = 0; group < 9; group++) {
    for (let i = 0; i < 50; i++) {
      let x2 = 600 - (group*50 + i);
      mountainLines.push({x1:600, y1:200, x2:x2, y2:400, baseColor:mountainColors[group][0], dynamic:true, colorSet:mountainColors[group]});
    }
  }

  // 나무 기둥 바탕
  trunkBase = {x1:60, y1:360, x2:80, y2:360, x3:80, y3:400, x4:60, y4:400, color:'#8B4513'};

  // 나무 기둥 라인
  let trunkLineColors = ['#D2B48C','#D2B48C','#D2B48C','#CD853F','#CD853F','#CD853F','#A0522D','#A0522D','#A0522D'];
  for (let i=0;i<trunkLineColors.length;i++){
    trunkLines.push({x1:80-2*i, y1:360, x2:80-2*i, y2:400, color:trunkLineColors[i]});
  }

  // 나무잎 5개
  let leafQuads = [
    [70,310,100,340,70,370,40,340],
    [40,310,70,340,40,370,10,340],
    [85,275,115,305,85,335,55,305],
    [55,275,85,305,55,335,25,305],
    [100,310,130,340,100,370,70,340]
  ];

  let leafLines = [
    [[70,310,100,340],[68,312,98,342],[66,314,96,344],[64,316,94,346],[62,318,92,348],[60,320,90,350],[58,322,88,352],[56,324,86,354],[54,326,84,356],[52,328,82,358],[50,330,80,360],[48,332,78,362]],
    [[40,310,70,340],[38,312,68,342],[36,314,66,344],[34,316,64,346],[32,318,62,348],[30,320,60,350],[28,322,58,352],[26,324,56,354],[24,326,54,356],[22,328,52,358],[20,330,50,360],[18,332,48,362]],
    [[85,275,115,305],[83,277,113,307],[81,279,111,309],[79,281,109,311],[77,283,107,313],[75,285,105,315],[73,287,103,317],[71,289,101,319],[69,291,99,321],[67,293,97,323],[65,295,95,325],[63,297,93,327]],
    [[55,275,85,305],[53,277,83,307],[51,279,81,309],[49,281,79,311],[47,283,77,313],[45,285,75,315],[43,287,73,317],[41,289,71,319],[39,291,69,321],[37,293,67,323],[35,295,65,325],[33,297,63,327]],
    [[100,310,130,340],[98,312,128,342],[96,314,126,344],[94,316,124,346],[92,318,122,348],[90,320,120,350],[88,322,118,352],[86,324,116,354],[84,326,114,356],[82,328,112,358],[80,330,110,360],[78,332,108,362]]
  ];

  for(let i=0;i<5;i++){
    leaves.push({quad:leafQuads[i], lines:leafLines[i], quadColor:'#FF69B4', lineColor:'#FFF0F5', alpha:255, falling:false});
  }

  // 구름 속도와 이동 범위 설정
  for (let c of clouds) {
    c.travel = random(40, 70);
    c.speed = c.travel / 120;
  }
}

// 구름 그리기
function drawClouds() {
  rectMode(CENTER);
  for (let c of clouds) {
    c.x -= c.speed;
    if (c.x < c.startX - c.travel) c.x = c.startX;

    // 구름 사각형
    stroke('#dbefff'); strokeWeight(1); fill('#dbefff');
    rect(c.x, c.y, 10, 2, 1);
    noFill();
    rect(c.x, c.y, 15, 7, 1);
    rect(c.x, c.y, 20, 12, 2);
    rect(c.x, c.y, 25, 17, 3);
    stroke('#a3cdee');
    rect(c.x, c.y, 30, 22, 4);
    rect(c.x, c.y, 35, 27, 5);
    rect(c.x, c.y, 40, 32, 6);
    stroke('#6ea1c9');
    rect(c.x, c.y, 45, 37, 7);
    rect(c.x, c.y, 50, 42, 8);
    rect(c.x, c.y, 55, 47, 9);

    // 구름 라인: 사각형 오른쪽 끝 기준
    let rightEdge = c.x + 55 / 2;
    stroke('#6ea1c9'); strokeWeight(2);
    line(rightEdge, c.y - 20, rightEdge + 32, c.y - 20);
    line(rightEdge, c.y - 15, rightEdge + 17, c.y - 15);
    line(rightEdge, c.y - 10, rightEdge + 7, c.y - 10);
    line(rightEdge, c.y - 5, rightEdge + 12, c.y - 5);
    line(rightEdge, c.y, rightEdge + 17, c.y);
  }
}

// draw
function draw() {
  background('#000069');
  counter++;
  leafCounter++;

  let t = constrain(counter / totalTime, 0, 1);

  // 달
  for (let i = 0; i < baseDiam.length; i++) {
    if (i === 0) {stroke('#fafabe'); fill('#fafabe');} else {stroke('#fafabe'); noFill();}
    ellipse(150, 100, baseDiam[i], baseDiam[i]);
    baseDiam[i] += 0.1;
  }
  for (let i = 0; i < arcDiam.length; i++) {
    if(i%2===0) stroke('#fafabe'); else stroke('#ffffff');
    noFill();
    arc(150,100,arcDiam[i],arcDiam[i],radians(arcStart[i]),radians(arcEnd[i]));
    arcDiam[i]+=0.1; arcStart[i]+=0.5; arcEnd[i]+=0.5;
  }

  // 별
  for(let i=0;i<stars.length;i++){
    starAlpha[i]+=starSpeed[i];
    if(starAlpha[i]>255 || starAlpha[i]<50) starSpeed[i]*=-1;
    stroke(255,250,190,starAlpha[i]);
    fill(255,250,190,starAlpha[i]);
    circle(stars[i].x,stars[i].y,5);
    noFill();
    circle(stars[i].x,stars[i].y,8);
    circle(stars[i].x,stars[i].y,11);
  }

  // 산
  for(let lineData of mountainLines){
    if(!lineData.dynamic) stroke(lineData.baseColor);
    else{
      let colors=lineData.colorSet;
      let stage=min(floor(t*(colors.length-1)),colors.length-2);
      let stageT=(t*(colors.length-1))%1;
      stroke(lerpColor(color(colors[stage]),color(colors[stage+1]),stageT));
    }
    strokeWeight(1);
    line(lineData.x1,lineData.y1,lineData.x2,lineData.y2);
  }

  // 나무 기둥 바탕
  noStroke(); fill(trunkBase.color);
  quad(trunkBase.x1,trunkBase.y1,trunkBase.x2,trunkBase.y2,trunkBase.x3,trunkBase.y3,trunkBase.x4,trunkBase.y4);

  // 나무 기둥 라인
  strokeWeight(1);
  for(let l of trunkLines){ stroke(l.color); line(l.x1,l.y1,l.x2,l.y2); }

  // 나무잎
  for(let i=0;i<leaves.length;i++){
    let leaf = leaves[i];
    if(leafCounter>i*leafFallInterval) leaf.falling=true;

    if(leaf.falling){
      for(let j=0;j<leaf.quad.length;j+=2){ leaf.quad[j]-=1.5; leaf.quad[j+1]+=1.5; }
      for(let l of leaf.lines){ l[0]-=1.5; l[1]+=1.5; l[2]-=1.5; l[3]+=1.5; }
      leaf.alpha-=2; if(leaf.alpha<0) leaf.alpha=0;
    }

    fill(color(leaf.quadColor + hex(floor(leaf.alpha),2)));
    stroke(color(leaf.lineColor + hex(floor(leaf.alpha),2)));
    quad(leaf.quad[0],leaf.quad[1],leaf.quad[2],leaf.quad[3],leaf.quad[4],leaf.quad[5],leaf.quad[6],leaf.quad[7]);
    for(let l of leaf.lines){ line(l[0],l[1],l[2],l[3]); }
  }

  // 구름
  drawClouds();
}