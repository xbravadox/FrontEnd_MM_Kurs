const car1 = {
   name: 'Volvo'
};

const car2 = {
   name: 'Mercedes'
};

const car3 = {
   name: 'Scania'
};

function showName(){
   console.log(this.name)
};


showName.bind(car1)();

// --------------------------------------------------
const colorsObj = {
   colors: ['red', 'green', 'blue'],
   showColors(){
      this.colors.forEach(function(el, i){
         console.log(this.colors[i]);
      }.bind(this));
   }
};


colorsObj.showColors();