import "./Apply.css";
export default function Apply() {
  return (
    <div className="aboutApply">
      <h1>Apply Form</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="name" />
        </label>
        <label>
          Last Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="text" name="name" />
        </label>
        <label>
          Phone:
          <input type="text" name="name" />
        </label>
        <label>
          What is your reason for contesting:
          <input type="text" name="name" />
        </label>
        <label>
          Date of birth :
          <input type="text" name="name" />
        </label>
        <label>
          State of Origin:
          <input type="text" name="name" />
        </label>
        <button>
          {" "}
          <input type="submit" name="name" />
        </button>
      </form>
    </div>
  );
}
