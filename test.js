let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {
      return 'This dog has ' + dog.numLegs + '.'
    }
  };
  
  console.log(dog.sayLegs())