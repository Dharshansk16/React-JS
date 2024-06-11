import "./styles.css";
import Card from "./components/Card";
import contacts from "./components/contacts";

function CreateCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      email={contact.email}
      img={contact.img}
      detail={contact.detail}
    />
  );
}

export default function App() {
  return (
    <div className="App">
      {contacts.map(CreateCard)} //mapping components (using loops)
      {/* <Card
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
      /> */}
    </div>
  );
}
