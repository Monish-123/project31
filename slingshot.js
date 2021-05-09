class Slingshot {
constructor(body,point) {
var options={
bodyA:body,
pointB:point,
length:1,
stiffness:0.04
}
this.sling=Constraint.create(options);
World.add(world,this.sling)
this.point=point;
}            
display(){
 if(this.sling.bodyA){
var pos=this.sling.bodyA.position
strokeWeight(4)
line(pos.x,pos.y,this.point.x,this,this.point.y)
}
}
fly(){
    this.sling.bodyA = null;
}
}