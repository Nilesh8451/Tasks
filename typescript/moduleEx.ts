export class Vehical {
  name: string;
  price: number;
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  run(speed) {
    console.log(`${this.name} is running at speed of ${speed}`);
  }

  stop() {
    console.log(`${this.name} is stopped`);
  }
}
