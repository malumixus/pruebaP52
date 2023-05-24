let x = 0;
let y = 30;
let cuad = false;

 // Start by creating a variable called x, this value needs to change every frame
function setup() {
  
   x = 0; // Start at the left edge of the canvas
  speed = 3;
  
  createCanvas(400, 400);
  frameRate(60);
}

//autor richard paul lohse
function draw() {
  noStroke();

  translate(x, y);

  push();

  fill("#ff8178");
  rect(0, 0, 80, 170);
  fill("#ff3df4");
  rect(80, 0, 130, 170);
  pop();

  push();

  fill("#00adf7");
  rect(210, 0, 200, 170); //210

  fill("#00f8ff");
  rect(210, 0, 200, 80);
  pop();

  push();

  fill("#ffa841");
  rect(0, 170, 210, 290); //170

  fill("#ffe13a");
  rect(0, 330, 210, 70);

  pop();

  push();

  fill("#08b183");
  rect(210, 170, 210, 700);

  fill("#23ec63");
  rect(210, 170, 70, 700);




  fill("red");
  x = x + speed; // Move slightly to the right every frame by changing the value of x by 1
	if (x > width){
      speed *= -1;
      }
  if (x == 0){
      speed *= -1 ;
      }
  ellipse(x, 60, 20, 20);
}
