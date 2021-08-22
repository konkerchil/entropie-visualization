let arr = [];
let amount = 2000;
let balls = [];
let ent = 0;

function setup() {
  createCanvas(400, 400);
  for(let i = 0; i < amount; i++){
    const a = Math.floor(Math.random() * 6) + 1;
    arr.push(a);
 }

for(k = 0; k < arr.length; k++){
  balls[k] = new Ball(width / 2, 30, 0.01);
  balls[k] = arr[k];
  ent += balls[k];
  console.log(ent);
  console.log(balls[k]);
 }
}


function draw() {
  background(0);

balls[1].show();

/*for (let ball of balls){
  ball.show();
  ball.update();
 }  */

  rect(width / 6, height / 3 * 2, 7, height / 3);
  rect(width / 6 * 2, height / 3 * 2, 7, height / 3);
  rect(width / 6 * 3, height / 3 * 2, 7, height / 3);
  rect(width / 6 * 4, height / 3 * 2, 7, height / 3);
  rect(width / 6 * 5, height / 3 * 2, 7, height / 3);

} 
