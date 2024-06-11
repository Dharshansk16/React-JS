function EmojiCard(props) {
  return (
    <div className="center">
      <div className="column">
        <div className="card">
          <img className="image" src={props.img} alt="emoji" />
          <h3 className="title">{props.title}</h3>
          <p className="content">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default EmojiCard;
