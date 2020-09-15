function person(name: string, age: number, gender: "Male" | "Female") {
  console.log(`Welcome ${name} you are ${age} years old and you are ${gender}`);
}

person("Nilesh", 21, "Male");
// person("Tushar", 22, "DK") ;  //Will give error

type Gender = "Male" | "Female";

function person1(name: string, age: number, gender: Gender) {
  console.log(`Welcome ${name} you are ${age} years old and you are ${gender}`);
}

person1("Nilesh", 21, "Male");
// person1("Tushar", 22, "DK"); //Will give error

type APerson = {
  name: string;
  hungry: boolean;
};

type AYoutuber = {
  youtuber: boolean;
};

type Nilesh = APerson | AYoutuber;
type Nilesh2 = APerson & AYoutuber;

const nilesh: Nilesh = {
  youtuber: false,
};

const nilesh2: Nilesh2 = {
  youtuber: false,
  name: "Nilesh",
  hungry: false,
};
