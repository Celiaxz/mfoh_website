import "./ApplicationReqirement.css";
import Apply from "./ApplyForm";
export default function Application() {
  return (
    <>
      <div className="applicationContMain" id="section-application">
        <div className="appyContainer">
          <div className="description">APPLY FOR 2024 EDITION</div>
          <div className="requirement">
            <div className="requirementTitle">Application Requirement</div>
            <div className="requirementBody">
              <p className="firstParagraph">
                Miss Face of Humanity is known as an international showcase NOT
                a competition. The candidates are referred to as
                delegates/ambassadors NOT contestants. Delegates must at least
                be 19 years of age and under 30 years of age before the
                international showcase.
              </p>
              <p className="secondParagraph">
                Delegates must be citizens or passport holders of Nigeria to
                represent. There are two exceptions to this rule:
              </p>
              <ol>
                <li>
                  {" "}
                  If a candidate was born in a country that doesn’t give
                  citizenship to immigrants from birth, they can still represent
                  that country as long as they are Permanent residents. 2.
                </li>
                <li>
                  Candidates who lived in a country for more than 10 years and
                  does not have the passport can still represent the country as
                  long as they are Permanent Residents
                </li>
              </ol>
              <ul>
                <li>
                  Delegates must be of good moral standard and have no criminal
                  record
                </li>
                <li>
                  Delegates must not be married, divorced or born children.
                </li>
                <li>
                  Delegates must be willing to serve Humanity and uphold the
                  crown with integrity
                </li>
                <li>
                  Delegates must be available and willing to travel to the host
                  country of the Miss Face of Humanity International showcase at
                  a date set forth by the Miss Face of Humanity Organization.
                </li>
                <li>
                  There are NO height or size requirements for Miss Face of
                  Humanity delegates
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="applyForm">
        <Apply />
      </div>
    </>
  );
}
