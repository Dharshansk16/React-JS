import "./styles.css";
import Card from "./components/Card";
import contacts from "./components/contacts";

export default function App() {
  return (
    <div className="App">
      <Card
        name={contacts[0].name}
        email={contacts[0].email}
        detail={contacts[0].detail}
        img={contacts[0].img}
      />
      <Card
        name={contacts[1].name}
        email={contacts[1].email}
        detail={contacts[1].detail}
        img={contacts[1].img}
      />
    </div>
  );
}
