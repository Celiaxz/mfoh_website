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
  const [formErrors, setFormErrors] = useState({});

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

  const validateForm = () => {
    const errors = {};
    if (firstName.trim() === "") {
      errors.firstName = "* First name is required";
    }

    if (lastName.trim() === "") {
      errors.lastName = "* Last name is required ";
    }
    if (email.trim() === "") {
      errors.email = "* Email is required";
    }
    if (objective.trim() === "") {
      errors.objective = " * objective is required";
    }
    if (phone.trim() === "") {
      errors.phone = "* phone is required";
    }
    if (birthDate.trim() === "") {
      errors.birthDate = " * Date of birth is required";
    }
    if (stateOrigin.trim() === "") {
      errors.stateOrigin = "* state of origin is required";
    }

    setFormErrors(errors);
    // If there are no errors, return true indicating the form is valid
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    console.log("sumbmitting form data to Firestore");
    console.log("first name:", firstName);
    const isValid = validateForm();

    if (isValid) {
      try {
        const result = await addDoc(collection(db, "registeredCandidates"), {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
          objective: objective,
          birthDate: birthDate,
          stateOrigin: stateOrigin,
          timestamp: serverTimestamp(),
        });
        console.log("Data sent to Firestore sucessfully", result);
        setFirstname("");
        setLastname("");
        setEmail("");
        setEmail("");
        setObjective("");
        setPhone("");
        setBirthDate("");
        setStateOrigin("");
      } catch (error) {
        console.error("error sending data ", error);
      }
    } else {
      console.log("form has validation erros");
    }
  };

  //   const newCandidate = {
  //     firstName,
  //     lastName,
  //     email,
  //     phone,
  //     objective,
  //     birthDate,
  //     stateOrigin,
  //   };
  //   console.log("submitted", newCandidate);
  // };
  const url =
    "https://us-central1-mfoh-server.cloudfunctions.net/mfoh/acceptpayment";
  // const url = "http://localhost:5000/acceptpayment";
  // console.log(url);

  async function paystackpay(e) {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
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
    } else {
      console.log("Form has validation errors ");
    }
    handleSubmit();
  }
  return (
    <div className="main">
      <div className="appyFormContainer">
        <div className="title">Registration</div>
        <form className="formContainer">
          <div className="user-details">
            <div className="input-box">
              {" "}
              <label className="labelTitle">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={firstNameHandler}
                />
                {formErrors.firstName && ( // New line
                  <span className="errorMessage">{formErrors.firstName}</span>
                )}
              </label>
            </div>
            <div className="input-box">
              {" "}
              <label className="labelTitle">
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={lastNameHandler}
                />
                {formErrors.lastName && ( // New line
                  <span className="errorMessage">{formErrors.lastName}</span>
                )}
              </label>
            </div>
            <div className="input-box">
              <label className="labelTitle">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={emailHandler}
                />
                {formErrors.email && ( // New line
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </label>{" "}
            </div>
            <div className="input-box">
              {" "}
              <label className="labelTitle">
                Phone:
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your number"
                  value={phone}
                  onChange={phoneeHandler}
                />
                {formErrors.phone && ( // New line
                  <span className="errorMessage">{formErrors.phone}</span>
                )}
              </label>
            </div>
            <div className="input-box">
              {" "}
              <label className="labelTitle">
                Why contest?:
                <input
                  type="text"
                  name="objective"
                  placeholder="Enter your reason for contesting"
                  value={objective}
                  onChange={objectiveHandler}
                />
                {formErrors.objective && ( // New line
                  <span className="errorMessage">{formErrors.objective}</span>
                )}
              </label>
            </div>
            <div className="input-box">
              {" "}
              <label className="labelTitle">
                Date of birth :
                <input
                  type="text"
                  name="birthDate"
                  placeholder="Enter your date of birth...DD.MM.YY"
                  value={birthDate}
                  onChange={birthDateHandler}
                />
                {formErrors.birthDate && ( // New line
                  <span className="errorMessage">{formErrors.birthDate}</span>
                )}
              </label>
            </div>
            <div className="input-box">
              <label className="labelTitle">
                State of Origin:
                <input
                  type="text"
                  name="stateOrigin"
                  placeholder="Enter your state of origin e.g Abia, FCT, Benue..."
                  value={stateOrigin}
                  onChange={stateOriginHandler}
                />
                {formErrors.stateOrigin && ( // New line
                  <span className="errorMessage">{formErrors.stateOrigin}</span>
                )}
              </label>{" "}
            </div>
          </div>
          {/* <div className="button">
            <input
              type="submit"
              // className="submitBtn"
              value="Enter your state of "
              onClick={paystackpay}
            />
          </div> */}

          <div className="button">
            <button className="submitBtn" onClick={paystackpay}>
              {" "}
              Pay with Paystack
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
