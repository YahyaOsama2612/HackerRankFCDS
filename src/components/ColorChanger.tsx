import { useState, useEffect } from "react";
import ImageSlider from "./ImageSlider";
import first from  "/src/assets/committees/426210812_810359067772978_6432805786170877286_n.jpg";
import seconed from  "/src/assets/committees/426216923_810358867772998_470054367525324257_n.jpg";
import third from  "/src/assets/committees/426358374_810358824439669_7917421702513469851_n.jpg";
import forth from  "/src/assets/committees/426484463_812377714237780_2031385671984382527_n.jpg";
import fifth from "/src/assets/committees/426513817_812377394237812_160985539812957006_n.jpg";
import sixth from "/src/assets/committees/426513817_812377394237812_160985539812957006_n.jpg";
import seven from  "/src/assets/committees/426544874_812377434237808_6165946909755775755_n.jpg";
import eight from  "/src/assets/committees/426544874_812377434237808_6165946909755775755_n.jpg";
import nine from  "/src/assets/committees/432049395_831263309015887_1589484039942064045_n.jpg";
import ten from  "/src/assets/committees/432712631_831263575682527_1275090964012417970_n.jpg";


const ColorChanger = () => {
  const colors = [
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
    "bg-gray-600",
    "bg-gray-700",
  ];

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
  ];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const changeColor = () => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    };

    const intervalId = setInterval(changeColor, 3000);

    return () => clearInterval(intervalId);
  }, [colors.length]);

  return (
    <div
      className={`h-screen ${colors[currentColorIndex]} transition-all duration-500`}
    >
      <div className="space-y-12 sm:space-y-24 mt-10 sm:mt-14">
        <hr />
        <h1 className="text-center text-3xl sm:text-5xl font-bold mb-4">
          Our Committees
        </h1>
        <div className="flex flex-col sm:flex-row items-center">
          <img
            className="transform sm:-translate-y-32 sm:-translate-x-10"
            style={{ height: "150px", margin: "0 5px 50px 20px" }}
            src="/src/assets/download(3).svg"
            alt=""
          />
          <p className="text-center sm:text-left text-lg sm:text-xl font-bold mb-32 sm:-translate-y-20 px-4 sm:px-0">
            We have various committees, including Organizing, IT, HR, PR, Media
            and Marketing, and scientific all focused on helping members improve
            their soft and hard skills.
          </p>
        </div>
        <div className="sm:-translate-y-40 ">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>
  );
};

export default ColorChanger;
