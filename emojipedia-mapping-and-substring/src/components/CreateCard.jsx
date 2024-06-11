import EmojiCard from "./EmojiCard";

function CreateCard(e) {
  return (
    <EmojiCard
      key={e.id}
      title={e.title}
      content={e.content}
      img={e.img}
      //comment
    />
  );
}

export default CreateCard;
