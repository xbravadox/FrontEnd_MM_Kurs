function User(number) {
    this.jakisnumer = number;
    this.test = function () {
        console.log('Metoda w obiekcie')
    }
};

User.prototype.test = function () {
    console.log('Metoda poza obiektem')
};

const newUser = new User(555);
console.log(newUser.test())
console.log(newUser.jakisnumer.toString())





