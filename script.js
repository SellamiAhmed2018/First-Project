let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
  
  const getAge = (pet)=>{return new Date().getFullYear()-pet.bornOn};
  
  const petWithAge = pets.forEach(element => {
      element.age = getAge(element);
  });
  

  const dogs = pets.filter(element => {return element.type==="dog"});
  
  const jasper = pets.find(element =>{return element.name="Jasper"});
  console.log(`Jasper is  ${jasper.age} years old`);