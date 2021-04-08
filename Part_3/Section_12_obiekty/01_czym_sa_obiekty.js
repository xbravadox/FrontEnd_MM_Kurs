// deklaracja obiektu
const newUser = {
    name: 'Grzesiek',
    age: 51,
    car: {
        brand: 'Volvo',
        color: 'black',
        year: 2008
    }
};

// odwołania do właściwości obiektu
console.log(newUser.name)
console.log(newUser.age)
console.log(newUser.car.brand)



const name = 'Ozzy';
const age = 15;

// dodawanie zmiennych jako właściwości - zapis skrócony gdy nazwa zmiennej jest taka sama jak klucza
const dog = {
    name,
    age
}

console.log(dog)