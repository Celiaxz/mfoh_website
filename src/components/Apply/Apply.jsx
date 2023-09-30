import "./Apply.css";
import { useState } from "react";
import { db } from "../../firebase";
export default function Apply() {
  const [input, setInput] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input) {
    }
  };
  return (
    <div className="form">
      <h1 className="applyTitle">Apply Form</h1>
      <form className="formContainer">
        <label>
          First Name:
          <input
            type="text"
            placeholder="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          What is your reason for contesting:
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          Date of birth :
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <label>
          State of Origin:
          <input
            type="text"
            name="name"
            value={input}
            onChange={inputHandler}
          />
        </label>
        <button className="submitBtn"> submit</button>
      </form>
    </div>
  );
}
