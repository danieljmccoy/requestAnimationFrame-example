 // example one
var box = document.getElementById('box'),
boxPos = 10,
boxVelocity = 2,
limit = 300,
lastFrameTimeMs = 0,
maxFPS = 60;

function update() {
boxPos += boxVelocity;
// Switch directions if we go too far
if (boxPos >= limit || boxPos <= 0) boxVelocity = -boxVelocity;
}

function draw() {
box.style.left = boxPos + 'px';
}

function mainLoop(timestamp) {
  if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
    requestAnimationFrame(mainLoop);
    return;
}
lastFrameTimeMs = timestamp;

update();
draw();
requestAnimationFrame(mainLoop);
}

requestAnimationFrame(mainLoop);



// example two
let globalID;
let clicked = true;
let body = document.querySelector("body");
let stop = document.querySelector("#stop");
let start = document.querySelector("#start");

function repeatOften() {
  let createdDiv = document.createElement("div")
  body.appendChild(createdDiv);
  globalID = requestAnimationFrame(repeatOften);
}

start.addEventListener("click", function(){
  if(clicked)
  globalID = requestAnimationFrame(repeatOften);
  clicked = false;
});

stop.addEventListener("click", function(){
    if(!clicked)
    cancelAnimationFrame(globalID);
    clicked = true;
})
