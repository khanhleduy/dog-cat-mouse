function Mouse(name){
	this.name = name;
	this.dead = false;

}

Mouse.prototype.die = function(){
	this.dead = true;
}

console.log('sleep');

module.exports = Mouse;
