function Cat(){
	this.stomach = [];
}

Cat.prototype.eat = function(animal){
	if(anima instanceof Mouse){
	this.stomach.push(animal);
	}else{
		throw new Error('Cat can only eat mouse!');
	}
}

module.exports = Cat;
