class Ball{
constructor(x, y, m){
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 10;
    this.vel = createVector(0, 0);
    this.acc = createVector(0,0);
  } 

  applyForce(force){
     let f = p5.Vector.div(force, this.mass);
     this.acc.add(f);
   }
 
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
    let x = this.pos.x;
    let y = this.pos.y;
    } 

  show(){
    stroke(255,);
    strokeWeight(10);
    fill(255, 100);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
 }


}