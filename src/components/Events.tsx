import React from "react";
import ImageSlider from "./ImageSlider";
import first from "/src/assets/Events/277520565_502209251625478_2664668823069627075_n.jpg";
import seconed from "/src/assets/Events/277527908_502212544958482_5849378512803868966_n.jpg";
import third from "/src/assets/Events/277534446_502211861625217_6558991334563267384_n.jpg";
import forth from "/src/assets/Events/277536007_502209761625427_4738654902355499570_n.jpg";
import fifth from "/src/assets/Events/277564736_502208871625516_673155079366009680_n.jpg";
import sixth from "/src/assets/Events/277584988_502215518291518_2105627613241172297_n.jpg";
import seven from "/src/assets/Events/277706746_502209938292076_1240054397573088483_n.jpg";
import eight from "/src/assets/Events/277792076_502224381623965_3761015908102343198_n.jpg";
import nine from "/src/assets/Events/277794895_502208528292217_2812173674813955244_n.jpg";
import ten from "/src/assets/Events/367421632_701458815329671_3213991632017468166_n.jpg";
import eleven from "/src/assets/Events/367713314_701458661996353_6069722364326588985_n.jpg";
import twelve from "/src/assets/Events/367738008_701452815330271_8714260887248519055_n.jpg";
import thirteen from "/src/assets/Events/367753380_701452381996981_8504661203303337802_n.jpg";
import fourteen from "/src/assets/Events/367938545_701452425330310_6265727126313980405_n.jpg";
import fifteen from "/src/assets/Events/367966299_701459061996313_2319708751290274918_n.jpg";
import photo from "/src/assets/download (2).svg";
import background from "/src/assets/stock-vector-vector-abstract-elegant-white-and-grey-background-abstract-white-pattern-squares-texture-722377342.jpg"


const Events: React.FC = () => {
  const images = [
    {name: first },
    { name: seconed },
    { name:third },
    { name:forth },
    { name:fifth },
    { name:sixth },
    { name:seven },
    { name:eight },
    {name: nine },
    { name:ten },
    {name: eleven },
    { name:twelve },
    { name:thirteen },
    {name: fourteen },
    { name:fifteen },
  ];

  return (
    <div
      className="space-y-24 mt-56 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${background})`,
      }}
    >
      <hr />
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        Events
      </h1>
      <div className="flex flex-col-reverse md:flex-row items-center">
        <img
          className="transform -translate-y-10 sm:-translate-y-20 md:-translate-y-32 md:-translate-x-10 w-48 sm:w-64 md:w-72 lg:w-80"
          src={photo}
          alt=""
        />
        <p className="text-center md:text-left text-lg sm:text-xl font-bold mb-4 md:w-1/2 mx-4">
          We host various events to support others in their careers, partnering
          with companies, engineers, and programmers to provide valuable
          guidance and opportunities.
        </p>
      </div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Events;
