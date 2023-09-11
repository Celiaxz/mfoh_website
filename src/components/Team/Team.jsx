import { Teamcontents } from "./TeamContents";
import "./Team.css";
export default function Team() {
  return (
    <>
      <h1 className="teamMotto">Our Fantastic Team </h1>
      <div className="team">
        {Teamcontents.map((teamcontent, index) => {
          return (
            <div className="ourTeam">
              <div>
                <img className="teamImage" src={teamcontent.image} />
              </div>
              <div>{teamcontent.name}</div>
              <div>{teamcontent.description}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}
