// KONSTRUKTOR OBIEKTU
function User(name, age) {
    this.name = name;
    this.age = age
};

//  PROTOTYPY OBIEKTU - METODY
User.prototype.hello = function () {
    console.log(`Użytkownik ma na imię ${this.name} i ma ${this.age} lat.`)
};

User.prototype.country = 'Polska'

//  NOWA INSTANCJA OBIEKTU
const newUser = new User('Greg', 51);
const newUser2 = new User('Dawid', 29);

console.log(newUser);
console.log(newUser2);
console.log(newUser.country);
console.log(newUser2.country);

newUser.hello();
newUser2.hello();