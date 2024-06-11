import "./styles.css";
import animals, { useAnimal } from "./components/data";

console.log(animals);
//Destructuring
const [cat, dog] = animals;

console.log(cat);
//Destructuring objects
const { name, sound } = cat;
console.log(sound);

//Destructuring Functions
const [Element1, Element2] = useAnimal(dog);
console.log(Element1);

export default function App() {
  return <div className="App"></div>;
}
