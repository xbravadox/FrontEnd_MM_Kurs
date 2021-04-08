const newUser = {
    name: 'Grzesiek',
    age: 51,
    car: {
        brand: 'Volvo',
        color: 'black',
        year: 2008,
        //  metoda (funkcja) w obiekcie 
        sound (){
            console.log('ok')
        }
    }
};

console.log(newUser.name)
console.log(newUser.age)
console.log(newUser.car.brand)
newUser.car.sound()