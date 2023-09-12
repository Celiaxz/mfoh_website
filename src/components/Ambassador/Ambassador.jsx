import React from "react";
import "./Ambassador.css";
import photoTwo from "../../assets/Assets_mfoh/queens_picture/photo_two.png";

const ambassadorCont = [
  {
    title: "Our 2023 Ambassador",
    text: " Ambassador Rita Chika Ezenwa is a native of Isikwuato local government\
  area in Abia state, Nigeria. She holds a Bachelors degree in Economics\
  from ISM Adonai University, Cotonou Benin Republic. She is a beauty\
  queen , commercial model, humanitarian and interior decorator by\
  profession. She has won several pageants amongst which are; Most\
  beautiful girl in Abuja 2016 as the Face of Dolce Entertainment, Queen\
  of Aso International 2019 and many more",
    image: `${photoTwo}`,
  },

  {
    title: "Our 2023 Ambassador",
    text: "  Our 2023 Ambassador Ambassador Rita Chika Ezenwa is a native of\
Isikwuato local government area in Abia state, Nigeria. She holds a\
Bachelors degree in Economics from ISM Adonai University, Cotonou\
Benin Republic. She is a beauty queen , commercial model, humanitarian\
and interior decorator by profession. She has won several pageants\
amongst which are; Most beautiful girl in Abuja 2016 as the Face of\
Dolce Entertainment, Queen of Aso International 2019 and many more She\
is also the founder of Nery Developmental Initiative; an NGO which\
helps in supporting kids with autism and special needs. Rita popularly\
known as Nerita, a renowned Interior Decorator, has initiated and\
carried out several projects and initiatives to provide care for\
children who have autism, out of school kids, rape victims, and\
charity visitations to IDP camps. The organisation also helps kids in\
general who cannot afford education to get back to school. Because of\
her humanitarian nature, Nery developmental Initiative was nominated\
and won an award in the Africa most Industrious Women 2022 Awards. She\
has also won the award of Most Fashionable Queen of the Year Award in\
2019, Top 60 under 40 Most Influential/Inspiring Paragon Personality\
Award 2021, and nominated for the Flourish Nobel Awards in 2021. Her\
advocacy is 'Equality for all through Education'  ",
    image: `${photoTwo}`,
  },
];

export default function Ambassador() {
  return (
    <>
      <div className="Ambassador">
        <hi>Our 2023 Ambassador</hi>
      </div>
      {ambassadorCont.map((oneContent) => {
        return (
          <div className="Ambassador">
            {oneContent.title}
            {oneContent.text}
            <div>
              <img src={oneContent.image} alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
}

/* <div className="Ambassador">
{ambassadorCont.map((onecontent,index ) ={
return( <div>
 <h1>{onecontent.title}</h1>
<p>{onecontent.text}</p>

  <img src={onecontent.image} />

</div>
)
                    })}
       
        
     

  );
} */
