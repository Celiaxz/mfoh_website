import styles from "./Project.module.css";
import fig from "../../assets/Assets_mfoh/schoolProject/1.jpeg";
import fig2 from "../../assets/Assets_mfoh/HumanRightsday/1.jpeg";
import fig3 from "../../assets/Assets_mfoh/onedaystakeholdersdialogue/GovtDialogue.jpeg";
import fig4 from "../../assets/Assets_mfoh/coronation picture/crown.jpeg";
import fig5 from "../../assets/Assets_mfoh/legal aiid council/unitedNations.jpeg";
const Items = [
  {
    thumbnailUrl: fig,
    title: "Partnership with Legal Aid Council Nigeria",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },

  {
    thumbnailUrl: fig2,
    title: "Christmas Charity Project",
    body: "“Giving and caring for others is the most important essence of Christmas “.Those were the words of Amb. Rita Chika Ezenwa during her visit to the elderly in the slum of Abuja on the 23rd Dec 2022. Recounting that the aged in local communities are often neglected and hardly taken care of especially as they may be sick with no proper medication or food to eat, Hence, why she took to the streets and the slums. The reigning Miss Face of Humanity Nigeria who is also the founder of Nery’s Development initiatives informed that the foundation will henceforth include the aged in their projects and there is going to be an annually, to happen every 23rd Dec.",
  },

  {
    thumbnailUrl: fig,
    title: "Partnership with Legal Aid Council Nigeria",
    body: "In order to continue to proactively advance the task of helping indigents and persons with special needs in Nigeria, MFOH Nigeria proposed a collaborative effort with the Legal Aid Council in such a manner to encourage an atmosphere of alliance to effectively and efficiently establish and maintain objectives and commitments with regard to all matters related to easy access to justice for the indigents. At a strategic meeting between the team of Miss Face of Humanity Nigeria and senior staff of the Legal Aid Council at the Boardroom of the Legal Aid Council in Abuja both parties pledged to seek avenues to make it possible for everybody, irrespective of religion, sex, and tribe to have equal access to justice, whether rich or poor.",
  },
  {
    thumbnailUrl: fig3,
    title:
      "2nd United Nations – Government of Nigeria and Partners Dialogue on Human Rights",
  },

  { thumbnailUrl: fig4, title: "Official Crowning Ceremony" },
  {
    thumbnailUrl: fig5,
    title: "Courtsey Visit to United Nations Office in Nigeria",
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
