const superhero = {
    name: "Spider Man",
    secretIdentity: "$secret",
    powers: ["fly", "disappear", "command money", "read mind"],
    weakness: "Weakness",
  
    usePower: function (powerName) {
      if (this.powers.includes(powerName)) {
        console.log(`${this.name} can ${powerName}`);
      } else {
        console.log(`${this.name} can't  ${powerName}`);
      }
    },
    revealIdentity: function () {
      console.log(`Secret identity of ${this.name} is  ${this.secretIdentity}`);
    },
  };
  
  // task 3
  /*
  An object constructor function in JavaScript is used to create multiple objects with similar properties .*/
  function SuperHero(name, secretIdentity, powers, weakness) {
    this.name = name;
    this.secretIdentity = secretIdentity;
    this.powers = powers;
    this.weakness = weakness;
  
    /*In function constructors, methods are typically defined as properties of the object itself, which means each object instance gets its own copy of the method. This can be inefficient for memory usage.
  
  In class constructors, methods are defined on the prototype of the object, meaning all instances share the same method, reducing memory usage:*/
    this.usePower = function (powerName) {
      if (this.powers.includes(powerName)) {
        console.log(`${this.name} can ${powerName}`);
      } else {
        console.log(`${this.name} can't  ${powerName}`);
      }
    };
  
    this.revealIdentity = function () {
      console.log(`Secret identity of ${this.name} is  ${this.secretIdentity}`);
    };
  }
  
  // task 4
  
  SuperHero.prototype.fly = function () {
    console.log(`${this.name} can fly at a speed of light`);
  };
  
  // Creating superhero instances
  
  // Function constructors are hoisted which means you can call them before they are defined but it is not the same for class but that is not the best approach
  
  // also functions constructor can be used without the new keyworld in that case (this) refers to the global object, not a new instance
  const hero1 = new SuperHero(
    "Spider-Man",
    "Peter Parker",
    ["wall-crawling", "super strength", "spider-sense"],
    "loud noises"
  );
  
  const hero2 = new SuperHero(
    "Iron Man",
    "Tony Stark",
    ["genius intellect", "powered armor suit", "energy blasts"],
    "ego"
  );
  
  // villians
  
  const villian1 = new SuperHero(
    "Joker",
    "Arthur Fleck",
    ["chaos", "trickery"],
    "noise"
  );
  
  const villian2 = new SuperHero(
    "Thanos",
    "Thanos",
    ["infinity gauntlet", "infinity gauntlet", "infinity gauntlet"],
    "infinity"
  );
  
  // task 4
  console.log(hero2.fly());
  
  let superheros = [hero1, hero2];
  let villians = [villian1, villian2]
  
  const manipulateSuperheros = superheros.map(({secretIdentity, powers}) =>  {
    return `${secretIdentity} strength: ${powers.length}`;
  });
  
  const manipulateVillians = villians.map(({secretIdentity, powers}) =>  {
      return `${secretIdentity} strength: ${powers.length}`;
    });
  
  console.log(manipulateSuperheros);
  
  console.log(manipulateVillians);
  
  /*Prototypal Inheritance in JavaScript allows you to extend the functionality of objects by creating a prototype chain. 
  */