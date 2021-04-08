const user = {
    name: 'Grzesiek',
    age: 51,
    'fav-animal': 'dog' // zapis z myślnikiem
};

//  dodawanie właściwości
user.country = 'Polska';
user['fav-color'] = 'zielony'; // zapis z myślnikiem

console.log(user);

// usuwanie właściwości
delete user.age

console.log(user);