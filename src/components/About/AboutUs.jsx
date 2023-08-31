export default function AboutUs(props) {
  const { title, text, image, layout } = props;
  const combinedClassName = `aboutUs ${layout}`;
  return (
    <div className={combinedClassName}>
      {layout === "layout1" && (
        <>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
          <div className="image">{image && <img src={image} alt="logo" />}</div>
        </>
      )}
      {layout === "layout2" && (
        <>
          <div className="image">
            {image && <img src={image} alt="about" />}
          </div>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </>
      )}
      {layout === "layout3" && (
        <>
          <div className="image">
            {image && <img src={image} alt="about" />}
          </div>
          <div className="text">{text}</div>
        </>
      )}
      {layout === "layout4" && (
        <>
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </>
      )}
    </div>
  );
}
