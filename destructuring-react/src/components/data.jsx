animals = [
  {
    name: "cat",
    sound: "meow",
  },
  {
    name: "dog",
    sound: "bow",
  },
];

function useAnimal(animal) {
  return [
    animal.name,
    function animalSound() {
      console.log(animal.sound);
    },
  ];
}

export default animals;
export { useAnimal };
