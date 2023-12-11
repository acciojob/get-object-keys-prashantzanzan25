//your JS code here. If required.
var student = {
	name: 'John Doe'
};

Object.prototype.getKeys = function() {
	return Object.keys(this);
};

var keysArray = student.getKeys();

console.log(keysArray);