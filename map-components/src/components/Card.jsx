import Profile from "./Profile.jsx";
import Detail from "./Details.jsx";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h1 className="name">{props.name}</h1>
        <Detail detail={props.email} />
        <Profile img={props.img} />
        <Detail detail={props.detail} />
      </div>
    </div>
  );
}

export default Card;
