function Input(props) {
  return (
    <input onChange={props.inputFunction} type="text" value={props.inputText} />
  );
}
export default Input;
