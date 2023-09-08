import { Teamcontents } from "./TeamContents";
import "./Team.css";
export default function Team() {
  return (
    <div className="Team">
      <h1>Our Fantastic Team </h1>
      {Teamcontents.map((teamcontent, index) => {
        return (
          <div>
            key = {index}; name={teamcontent.name}
            <img src="" />
          </div>
        );
      })}
    </div>
  );
}
