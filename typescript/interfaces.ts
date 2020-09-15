interface Person {
  name: string;
  hungry: boolean;
}

const me: Person = {
  name: "Nilesh",
  hungry: true,
};

class Nilesh implements Person {
  name: string;
  hungry: boolean;
  constructor(name: string, hungry: boolean) {
    this.name = name;
    this.hungry = hungry;
  }
}

interface Greeting {
  (name: string): string;
}

const greet: Greeting = (name: string) => `Hello ${name}`;

interface Nilesh extends Person {
  youtuber: boolean;
}

const me1: Nilesh = {
  name: "Nilesh",
  hungry: false,
  youtuber: false,
};

// Declaration Merging

interface Car {
  name: string;
  company: string;
}

interface Car {
  color: string;
  price: number;
  vip: boolean;
}

const suzuki: Car = {
  name: "Suzuki",
  company: "Maruti",
  color: "red",
  price: 2300000,
  vip: true,
};
