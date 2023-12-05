import { Teamcontents } from "./TeamContents";
import "./Team.css";
export default function Team() {
  return (
    <>
      <div className="teamMain">
        <div className="teamCont">
          <h1 className="teamMotto">Our Fantastic Team </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {Teamcontents.map((teamcontent, index) => {
              return (
                <div className="ourTeam">
                  <div>
                    <img className="teamImage" src={teamcontent.image} />
                  </div>
                  <div className="teamName">{teamcontent.name}</div>
                  <div className="teamDesc">{teamcontent.description}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
