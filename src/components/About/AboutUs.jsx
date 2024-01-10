export default function AboutUs(props) {
  const { title, text, image, layout } = props;
  const combinedClassName = `aboutUs ${layout}`;
  return (
    <div className={combinedClassName}>
      <div className="aboutUsContainer">
        {layout === "layout1" && (
          <>
            {/* <div className="title">
              <h1>{title}</h1>
            </div> */}
            <div className="contentone">
              <div className="textone">
                <div className="title">
                  <h1>{title}</h1>{" "}
                </div>
                <div className="text">
                  <p>{text}</p>
                </div>
              </div>

              <div className="image">
                {image && <img src={image} alt="logo" />}
              </div>
            </div>
          </>
        )}
        {layout === "layout2" && (
          <>
            <div className="contenttwo">
              {/* <div className="image">
                {image && <img src={image} alt="about" />}
              </div> */}
              <div className="title2text2">
                <div className="title">
                  <h1>{title}</h1>
                </div>
                <div className="texttwo">{text}</div>
              </div>
            </div>
          </>
        )}
      </div>
      {layout === "layout3" && (
        <>
          <div className="image3">
            {image && <img src={image} alt="about" />}
          </div>
          <div className="text">{text}</div>
        </>
      )}
      {layout === "layout4" && (
        <>
          <div className="title">
            {" "}
            <h1>{title}</h1>
          </div>
          <div className="text">{text}</div>
        </>
      )}
    </div>
  );
}
