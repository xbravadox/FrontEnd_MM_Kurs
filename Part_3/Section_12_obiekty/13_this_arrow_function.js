'use strict'


function test(){
   console.log(this);
};

const test2= () => {
   console.log(this);
};


test();
test2();


const ob = {
   name: 'Greg',
   callName(){
      console.log(this.name);

      function callNameAgain() {
         console.log(`bind w callNameAgain: ${this.name}`);
      };

      callNameAgain.bind(this)()

      const callAgain = () =>{
         console.log(`Funckja strzałkowa w callName: ${this.name}`);
      };
      callAgain()
   },
   testFn: () => {console.log(this)}
};



ob.callName();
ob.testFn();


// -------------------------------------
const colorsObj = {
   colors: ['red', 'green', 'blue'],
   showColors(){
      this.colors.forEach((el, i) =>{
         console.log(this.colors[i])
      })
   }
};


colorsObj.showColors();