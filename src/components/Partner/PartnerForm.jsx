import styles from "./PartnerForm.module.css";
const PartnerForm = () => {
  return (
    <div className={styles.formContainer}>
      <h1>Send us a message and we’ll get back to you shortly.</h1>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Support" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter your text here ..."
        ></textarea>

        <div className={styles.fromFooter}>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
