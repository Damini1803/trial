// number
var num = 5;
console.log(num);

//string
var name = "Damini";
console.log(name);

//boolean values
var bool = true;
console.log(bool);

//undefined
var object;
console.log(object);

//null - nothing/ empty
var object = null;
console.log(object);

//array
// zero indexed
var arr1 = [1,2,3,4,5];
console.log(arr1);

console.log(arr1[3]);

var arr2 = ["Damini",22,true];
arr2.push("teacher");

console.log(arr2);
console.log(arr2[0]);



var arr3 = [ [1,2] , [3,4] , [5,6] ];


console.log(arr3);
console.log(arr3[2]);
console.log(arr3[2][0]);
console.log(arr3[1][1]);




var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(300, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  

  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  


  drawSprites();
}