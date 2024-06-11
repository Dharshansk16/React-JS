import "./styles.css";
import Heading from "./components/Heading";
// import EmojiCard from "./components/EmojiCard";
import emoji from "./components/Emojidetails";
import CreateCard from "./components/CreateCard";

// function CreateCard(e) {
//   return (
//     <EmojiCard
//       key={e.id}
//       title={e.title}
//       content={e.content}
//       img={e.img}
//       //comment
//     />
//   );
// }

export default function App() {
  return (
    <div className="App">
      <Heading />
      {emoji.map(CreateCard)}
    </div>
  );
}
