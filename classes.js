class Car{

    constructor(options){
        this.title=options.title;
    }

    drive(){
        return 'Baleno';
    }

}
class Toyota extends Car{

    constructor(options){
        super(options); //Car.constructor()
        this.color=options.color;
    }
    honk(){
        return 'Beep';
    }
}

const toyota = new Toyota({color:'red',title:'Maruti Suzuki'});
console.log(toyota.honk());
console.log(toyota);

/*const car = new Car({title:'Toyota'});
console.log(car);
console.log(car.drive());*/