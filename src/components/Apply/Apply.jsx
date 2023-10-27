import "./Apply.css";
import { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import axios from "axios";

export default function Apply() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [objective, setObjective] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [stateOrigin, setStateOrigin] = useState("");
  const [amount, setAmount] = useState(7000 * 100); //Set the amount

  const firstNameHandler = (e) => {
    setFirstname(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastname(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const objectiveHandler = (e) => {
    setObjective(e.target.value);
  };
  const phoneeHandler = (e) => {
    setPhone(e.target.value);
  };
  const birthDateHandler = (e) => {
    setBirthDate(e.target.value);
  };
  const stateOriginHandler = (e) => {
    setStateOrigin(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("sumbmitting form data");
    console.log("first name:", firstName);
    console.log("first name:", lastName);
    if (firstName) {
      await addDoc(collection(db, "registeredCandidates"), {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        objective: objective,
        birthDate: birthDate,
        stateOrigin: stateOrigin,
        timestamp: serverTimestamp(),
      });
      setFirstname("");
      setLastname("");
      setEmail("");
      setEmail("");
      setObjective("");
      setPhone("");
      setBirthDate("");
      setStateOrigin("");
    }

    const newCandidate = {
      firstName,
      lastName,
      email,
      phone,
      objective,
      birthDate,
      stateOrigin,
    };
    console.log("submitted", newCandidate);
  };
  // const url = "https://missfaceofhumanitynigeria.com/paystack_API";
  const url = "http://localhost:5000/acceptpayment";
  console.log(url);
  const form = new FormData();
  form.append("lastName", lastName);
  form.append("firstName", firstName);
  form.append("phone", phone);
  form.append("objective", objective);
  form.append("birthDate", birthDate);
  form.append("stateOrigin", stateOrigin);
  form.append("email", email);
  async function paystackpay(e) {
    e.preventDefault();
    try {
      const response = await axios.post(url, form, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      //check if the response contains an authorization_url
      if (
        response.data &&
        response.data.data &&
        response.data.data.authorization_url
      ) {
        const authorization_url = response.data.data.authorization_url;
        console.log("this is authorization url:", authorization_url);
        //Redirect the user to the Paystack checkout page
        console.log("Response from Paystack:", response.data);
        setPayresult();
        window.location.href = authorization_url;
      } else {
        //Handle the case where there is no authorization_url in the response
        console.error("No authorization_url found in the response ");
      }
    } catch (error) {
      console.error("error while handling:", error);
    }
  }
  return (
    <div className="form">
      <h1 className="applyTitle">Apply Form</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="name"
            value={firstName}
            onChange={firstNameHandler}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={lastNameHandler}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={emailHandler}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={phone}
            onChange={phoneeHandler}
          />
        </label>
        <label>
          What is your reason for contesting:
          <input
            type="text"
            name="objective"
            value={objective}
            onChange={objectiveHandler}
          />
        </label>
        <label>
          Date of birth :
          <input
            type="text"
            name="birthDate"
            value={birthDate}
            onChange={birthDateHandler}
          />
        </label>
        <label>
          State of Origin:
          <input
            type="text"
            name="stateOrigin"
            value={stateOrigin}
            onChange={stateOriginHandler}
          />
        </label>
        <button className="submitBtn" onClick={paystackpay}>
          {" "}
          Pay with Paystack
        </button>
      </form>
    </div>
  );
}
