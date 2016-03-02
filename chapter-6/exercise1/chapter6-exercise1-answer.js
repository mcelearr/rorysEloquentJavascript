function Vector(x,y){
  this.x = x;
  this.y = y;
  this.plus = function(vector){
    var newX = this.x + vector.x;
    var newY = this.y + vector.y;
    return new Vector(newX,newY);
  }
  this.minus = function(vector){
    var newX = this.x - vector.x;
    var newY = this.y - vector.y;
    return new Vector(newX,newY);
  }
}

Object.defineProperty(Vector.prototype, 'length', {
  get: function() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
});
