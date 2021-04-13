const newUser = {
    name: 'Grzesiek',
    age: 51,
    sex: 'male',
    car: 'Volvo',
};

for (const data in newUser) {
    console.log(data)
    console.log(newUser[data])
}
