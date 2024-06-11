import Heading from "./Heading";

function Form() {
  return (
    <div className="container">
      <form className="form">
        <header>Hello</header>
        <input type="text" placeholder="Username" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Login</button> <br />
      </form>
    </div>
  );
}

export default Form;
