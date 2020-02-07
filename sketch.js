var raindrops = [];
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  if(frameCount % 1 === 0){
    var raindrop = new Raindrop(random(0, windowWidth), -100, 3, random(20, 50));
    raindrops.push(raindrop);
  }
  for(var i = 0; i < raindrops.length; i++){
    raindrops[i].fall(7);
    raindrops[i].display();
  }
}
