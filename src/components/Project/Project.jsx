import styles from "./Project.module.css";
import fig from "../../assets/Assets_mfoh/schoolProject/1.jpeg";
import fig2 from "../../assets/Assets_mfoh/HumanRightsday/1.jpeg";
import fig3 from "../../assets/Assets_mfoh/onedaystakeholdersdialogue/GovtDialogue.jpeg";
import fig4 from "../../assets/Assets_mfoh/coronation picture/crown.jpeg";
import fig5 from "../../assets/Assets_mfoh/Coutsey visit to United Nations/un.jpeg";
import fig6 from "../../assets/Assets_mfoh/national human right commission/humanrightcommission.jpeg";
import fig7 from "../../assets/Assets_mfoh/legal aiid council/legalaidcouncil.jpeg";
import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
const Items = [
  {
    thumbnailUrl: fig6,
    title: "Human Rights Day: MFOH Nigeria Cautions on Security",
  },

  {
    thumbnailUrl: fig7,
    title: "Partnership with Legal Aid Council Nigeria",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },
  {
    thumbnailUrl: fig,
    title: "Scholarship Offer to 11 students in Primary School",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },
  {
    thumbnailUrl: logo,
    title: "Christmas Charity Project",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },
  {
    thumbnailUrl: fig5,
    title: "Courtsey Visit to United Nations Office in Nigeria",
  },
  { thumbnailUrl: fig4, title: "Official Crowning Ceremony" },
  {
    thumbnailUrl: logo,
    title: "Human Rights Day: MFOH Nigeria Cautions on Security",
  },

  {
    thumbnailUrl: fig2,
    title:
      "2nd United Nations – Government of Nigeria and Partners Dialogue on Human Rights",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },
  {
    thumbnailUrl: logo,
    title: "2nd extraordinary summit of the Youth Model African Union in Abuja",
  },
  {
    thumbnailUrl: fig3,
    title:
      "1 DAY Stakeholders Dialogue on Protecting the Rights of Indigents in Nigeria",
  },
];

const Project = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectContainer__items}>
        <h1>Projects</h1>

        <div className={styles.projectContainer__items_box}>
          {Items
            ? Items.map((single, index) => {
                return (
                  <div
                    key={index}
                    className={styles.projectContainer__items_box_single}
                  >
                    <img src={single.thumbnailUrl} alt="" />
                    <div className={styles.projectTitleContainer}>
                      <div className={styles.projectTitle}>{single.title}</div>
                      <button>Read More ... </button>
                    </div>
                  </div>
                );
              })
            : "No Project"}
        </div>
      </div>
    </div>
  );
};

export default Project;
