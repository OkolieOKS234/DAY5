export class Players {
  constructor(Name, Country) {
    this.Name = Name;
    this.Country = Country;
  }
  Metadata() {
    return `${this.Name} was born in ${this.Country}`;
  }
}
export class tennisPlayer extends Players {
  constructor(Name, Country, Age) {
    super(Name, Country);
    this.Age = Age;
  }
  Metadata() {
    return `${this.Name} is ${this.Age} years old`;
  }
}
export class golfPlayer extends Players {
  constructor(Name, Country, Age) {
    super(Name, Country);
    this.Age = Age;
  }
  Metadata() {
    return `${this.Name} is ${this.Age} years old`;
  }
}
