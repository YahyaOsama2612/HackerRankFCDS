import { useState, useEffect, memo } from "react";
import ImageSlider from "./ImageSlider";
import first from  "/src/assets/committees/426210812_810359067772978_6432805786170877286_n.jpg";
import seconed from  "/src/assets/committees/426216923_810358867772998_470054367525324257_n.jpg";
import third from  "/src/assets/committees/426358374_810358824439669_7917421702513469851_n.jpg";
import forth from  "/src/assets/committees/426484463_812377714237780_2031385671984382527_n.jpg";
import fifth from "/src/assets/committees/426513817_812377394237812_160985539812957006_n.jpg";
import sixth from  "/src/assets/committees/426544874_812377434237808_6165946909755775755_n.jpg";
import seven from  "/src/assets/committees/432049395_831263309015887_1589484039942064045_n.jpg";
import eight from  "/src/assets/committees/432712631_831263575682527_1275090964012417970_n.jpg";
import photo from  "/src/assets/download(3).svg";

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
    <div className={`min-h-screen ${colors[currentColorIndex]} transition-all duration-1000 py-10 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Committees
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center md:justify-start">
            <img
              className="h-32 sm:h-40 md:h-48 lg:h-56 object-contain rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
              src={photo}
              alt="Committee members"
            />
          </div>
          <div>
            <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
              We have various committees, including <span className="font-bold text-blue-600">Organizing</span>, <span className="font-bold text-indigo-600">IT</span>, <span className="font-bold text-purple-600">HR</span>, <span className="font-bold text-pink-600">PR</span>, <span className="font-bold text-blue-600">Media and Marketing</span>, and <span className="font-bold text-indigo-600">Scientific</span> all focused on helping members improve their soft and hard skills.
            </p>
          </div>
        </div>
        
        <div className="mt-44">
          <ImageSlider images={images} />
        </div>
      </div>
    </div>

  );
};

export default memo(ColorChanger) ;
