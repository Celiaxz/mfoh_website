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

  // const [payResult, setPayresult] = useState(""); //Set the amount

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
      const requestBody = {
        email: email, // Use the email state variable
        lastName: lastName,
        firstName: firstName,
        phone: phone,
        objective: objective,
        birthDate: birthDate,
        stateOrigin: stateOrigin,
      };
      const response = await axios.post(url, requestBody, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      console.log("Response from Paystack:", response);

      if (response.data && response.data.data.authorization_url) {
        const authorization_url = response.data.data.authorization_url;
        console.log("Authorization URL:", authorization_url);
        // setPayresult(authorization_url);
        window.location.href = authorization_url;
      } else {
        console.error("No authorization_url found in the response");
      }
    } catch (error) {
      console.error("Error while handling:", error);
    }
  }
  return (
    <div className="form">
      <h1 className="applyTitle">Registration</h1>
      <form onSubmit={handleSubmit} className="formContainer">
        <div className="user-details">
          <div className="input-box">
            {" "}
            <label>
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="name"
                value={firstName}
                onChange={firstNameHandler}
                required
              />
            </label>
          </div>
          <div className="input-box">
            {" "}
            <label>
              Last Name:
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={lastNameHandler}
                required
              />
            </label>
          </div>
          <div className="input-box">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={emailHandler}
              />
            </label>{" "}
          </div>
          <div className="input-box">
            {" "}
            <label>
              Phone:
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={phoneeHandler}
              />
            </label>
          </div>
          <div className="input-box">
            {" "}
            <label>
              What is your reason for contesting:
              <input
                type="text"
                name="objective"
                value={objective}
                onChange={objectiveHandler}
              />
            </label>
          </div>
          <div className="input-box">
            {" "}
            <label>
              Date of birth :
              <input
                type="text"
                name="birthDate"
                value={birthDate}
                onChange={birthDateHandler}
              />
            </label>
          </div>
          <div className="input-box">
            <label>
              State of Origin:
              <input
                type="text"
                name="stateOrigin"
                value={stateOrigin}
                onChange={stateOriginHandler}
              />
            </label>{" "}
          </div>
          {/* <div className="button"> </div>
          <div className="input-box"> </div> */}

          <button className="submitBtn" onClick={paystackpay}>
            {" "}
            Pay with Paystack
          </button>
        </div>
      </form>
    </div>
  );
}
