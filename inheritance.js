function Car(options){
    this.title=options.title;
}

Car.prototype.drive=function(){
    return 'Baleno';
}
/*const car = new Car({title:'Maruti suzuki'});
console.log(car.drive());
console.log(car);*/


function Toyota(options){
    Car.call(this,options);
    this.color=options.color;
}
Toyota.prototype=Object.create(Car.prototype);
Toyota.prototype.constructor=Toyota;

Toyota.prototype.honk = function(){
    return 'Beep';
}

const toyota = new Toyota({color:'Red',title:'daily drive'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
