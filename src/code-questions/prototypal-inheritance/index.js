function Animal(name) {
  this.name = name;
}
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};
Animal.species = 'Generic Animal';

function Dog(name) {
  Animal.call(this, name); // Call the parent constructor
}
Dog.prototype = Object.create(Animal.prototype); // Set up inheritance
Dog.prototype.constructor = Dog; // Set the constructor property to Dog
Dog.prototype.bark = function () {
  console.log(`${this.name} is barking`);
};
