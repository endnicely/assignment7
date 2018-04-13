/*eslint-env browser*/

//1
function Cat() {
    "use strict";
}
var Dog = function () {
    "use strict";
};

//2
var cat = new Cat();
var dog = new Dog();

//3
//function Animal() {
//    "use strict";
//}
//Animal.prototype.create = function () {
//    "use strict";
//    window.console.log("The Animal has been created");
//};
//var animal = new Animal();
//animal.create();

//4
//function Animal(message) {
//    "use strict";
//    this.message = message;
//}
//
//Animal.prototype.create = function () {
//    "use strict";
//    window.console.log(this.message);
//};
//var animal = new Animal("The Animal has been created");
//animal.create();

//5
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var animal = new Animal("cat", "Scottish Fold", "Grey", 5, 10);
//window.console.log(animal.type);
//window.console.log(animal.breed);
//window.console.log(animal.color);
//window.console.log(animal.height);
//window.console.log(animal.length);

//6
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//var animal = new Animal("cat", "Scottish Fold", "Grey", 5, 10);
//for (var property in animal) {
//    window.console.log(property);
//}

//7
//function Animal(type, breed, color, height, length) {
//    "use strict";
//    this.type = type;
//    this.breed = breed;
//    this.color = color;
//    this.height = height;
//    this.length = length;
//}
//Animal.prototype.speak = function () {
//    "use strict";
//    if (this.type ===  "cat") {
//        window.console.log("The " + this.color + " cat is meowing!");
//       
//    } else if (this.type === "dog") {
//        window.console.log("The " + this.color + " dog is barking!");
//    }
//};
//var animal1 = new Animal("cat", "Scottish Fold", "grey", 5, 10);
//var animal2 = new Animal("dog", "Chihuahua", "black", 5, 10);
//animal1.speak();
//animal2.speak();


//8
//function Animal(pType, pBreed, pColor, pHeight, pLength) {
//    "use strict";
//    var type = pType, breed = pBreed, color = pColor, height = pHeight, length = pLength;
//    var checkType = function () {
//        if (type === "cat") {
//            return "cat";
//        } else if (type === "dog") {
//            return "dog";
//        }
//    };
//    this.speak = function() {
//        window.console.log("The " + checkType() + " has made a noise!");
//    };
//}
//                       
//var animal1 = new Animal("cat", "Scottish Fold", "grey", 5, 10);
//var animal2 = new Animal("dog", "Chihuahua", "black", 5, 10);
//animal1.speak();
//animal2.speak();

//9
//String.prototype.findWords = function (word) {
//    "use strict";
//    var wordToFind = new RegExp(word, "gi");
//    window.alert(this.match(wordToFind).length);
//};
//var message = "Hello hello kitty";
//message.findWords("hello", "hello Kitty");