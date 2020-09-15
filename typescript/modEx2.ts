import { Vehical } from "./moduleEx";

class MyCar extends Vehical {
  color: string;
  constructor(name: string, price: number, color: string) {
    super(name, price);
    this.color = color;
  }

  power(pow) {
    console.log(`power of ${this.name} is now ${pow} times`);
  }
}

const nileshCar = new MyCar("BMW", 23232323, "black");
nileshCar.run(200);
nileshCar.power(3);
nileshCar.stop();
