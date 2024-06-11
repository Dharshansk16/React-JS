function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <img src={props.img} alt="Ghost" />
    </div>
  );
}

export default Card;
