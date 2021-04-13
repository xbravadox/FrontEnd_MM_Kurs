const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const p = document.querySelector('p');


function FoodSet(name, price) {
    this.name = name;
    this.price = price;
};

FoodSet.prototype.showText = function () {
    p.innerText = `${this.name}, Cena: ${this.price} zł`;
};

const set1 = new FoodSet('Schabowy, frytki, surówka', 14);
const set2 = new FoodSet('Zupa pomidorowa, gulasz z serc', 18);
const set3 = new FoodSet('Stek wołowy, frytki, sałatka', 56);

btn1.addEventListener('click', () => {
    set1.showText();
});

btn2.addEventListener('click', () => {
    set2.showText();
});

btn3.addEventListener('click', () => {
    set3.showText();
});