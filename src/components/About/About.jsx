import AboutUs from "./AboutUs";
import { contents } from "./contents";
import "./About.css";
export default function About() {
  return (
    <div className="aboutUs">
      {contents.map((content, index) => {
        return (
          <AboutUs
            key={index}
            title={content.title}
            text={content.texts}
            image={content.image}
            layout={content.layout}
          ></AboutUs>
        );
      })}
    </div>
  );
}
