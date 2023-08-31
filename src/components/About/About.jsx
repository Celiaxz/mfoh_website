import logo from "../../assets/Assets_mfoh/logo/logo.jpg";
import photoOne from "../../assets/Assets_mfoh/queens picture/one_removebg.png";
import photoTwo from "../../assets/Assets_mfoh/queens picture/photo_two.png";
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
          ></AboutUs>
        );
      })}

      {/* <section className="">
        <h1 className="aboutTitle">Who we are </h1>
        <div>
          <div className="paragraphContainer">
            <p>
              This is a franchise under the management of the THECOACHES.COM
              with the headquarters based in Canada. In a beautiful ceremony of
              their official launch and crowning ceremony held in Royal Crest
              Hotel and Suites Port Harcourt on the 28th of October 2022, the
              Miss Face of Humanity Nigeria crowned Rita Chika Ezenwa as their
              Ambassador for 2022/2023 and representative to Miss Face of
              Humanity International which will hold in Mexico in 2023.
            </p>
            <p>
              Miss Face of Humanity was founded by Terence Kings in 2017 and
              started locally in Toronto, Canada. Over the years, the
              organization has grown to provide women under 30 a platform to
              support and to showcase their purpose, poise, and passion for
              humanity to the world. Miss Face of Humanity is a global platform
              for women who believe in the power of Humanity to change the
              world. Our goal is to present and showcase the most amazing and
              inspirational women from across the world, who are on a mission to
              spread Love, uplift Humanity and to inspire the world towards
              peace and unity.
            </p>
          </div>
          <img src={photoOne}></img>
        </div>
      </section>
      <section>
        <h1>What we do </h1>
        <p>
          {" "}
          Miss Face of Humanity Nigeria provides a platform and countless
          opportunities for young women to share their voices, purpose, poise
          and confidence to the world. A big part of what we do is to prepare
          our ambassadors to be ready to contribute to the advancement of world
          peace and diplomacy across the world. Through our global network of
          partners and national directors, we select, train, develop and
          showcase these women and their passions on a global stage. We
          celebrate these women and support their ambitions and visions for a
          better world.{" "}
        </p>
        <img src={photoTwo}></img>
      </section>
      <section>
        <img src={logo} alt="logo" />
        <p>
          Our legacy will be measured only by what we've done for “love and for
          humanity.” We believe every woman has a voice and a light to create
          change, and there is no better time to DARE and to be heard than RIGHT
          NOW. Together with our Ambassadors, we are on a mission to light up
          the dark and to leave our mark on earth. Miss Face of Humanity 2023 is
          a different kind of platform, meant only for trailblazers and
          difference makers from across the world. The time is Now.
        </p>
      </section>
      <section>
        <h1>our vision</h1>
        <p>
          A global showcase for female change-makers who believe in the power of
          Humanity to change the world.
        </p>
      </section> */}
    </div>
  );
}
