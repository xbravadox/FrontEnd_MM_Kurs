function add(c,d){
   console.log(this.a + this.b + c + d);
}

const numbers ={
   a: 1,
   b: 7
};

// funkcja.call(OBIEKT, ARGUMENTY)
add.call(numbers, 3, 9);

// funkcja.call(OBIEKT, TABLICA)
add.apply(numbers, [7, -5]);


const user = {
   name: 'Greg'
};

// bind nie zadziała na funkcji strzałkowej
const showUser= () => console.log(this.name);

showUser.bind(user)();


const showUser2 = function(){
   console.log(this.name)
};

showUser2.bind(user)()