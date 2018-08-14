let name = prompt("What is your name?");
let color = prompt("What is your favorite color?");
let address = prompt("Where do you live?");
let hobbies = prompt("What are your favorite hobbies?");
let myAge = confirm ("Are you 18 or older?")


console.log(name + ' from ' + address + '!');

alert(' Hello ' + name + ' from ' + address + '!');


console.log(name);
console.log(color)
console.log(address);
console.log(hobbies);
console.log(myAge);

let elName = document.getElementById('name');
let elColor = document.getElementById('color');
let elAddress = document.getElementById('address');
let elHobbies = document.getElementById('hobbies');
let elAge = document.getElementById('age');

elName.innerHTML = name;
elColor.innerHTML = color;
elAddress.innerHTML = address;
elHobbies.innerHTML = hobbies;
elAge.innerHTML = myAge;

console.log(elName);
console.log(elColor);
console.log(elAddress);
console.log(elHobbies);