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
          <div className="image"></div>
        </>
      )}
    </div>
    //     <>
    //       <div>
    //         {title && <div>{title}</div>}
    //         <div>{text}</div>
    //         {image && <img src={image} alt="about us" />}
    //       </div>
    //     </>
  );
}
