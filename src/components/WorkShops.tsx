import React from "react";
import ImageSlider from "./ImageSlider";

const WorkShops: React.FC = () => {
  const images = [
    "/src/assets/WORK/452297630_915024517306432_8715230458842874826_n.jpg",
    "/src/assets/WORK/452989004_915024290639788_1365287173615719826_n.jpg",
    "/src/assets/WORK/453069854_915024283973122_615113982360893893_n.jpg",
    "/src/assets/sucurity/452315771_915714770570740_2911510846323574243_n.jpg",
    "/src/assets/sucurity/452894928_915714800570737_2439688047695500310_n.jpg",
    "/src/assets/sucurity/453004226_915714720570745_41220490617783072_n.jpg",
    "/src/assets/C/417423904_807805921361626_4415310122654001129_n.jpg",
    "/src/assets/C/417507822_807805418028343_1498265982374649330_n.jpg",
    "/src/assets/C/417519503_807805978028287_3257971967889045008_n.jpg",
    "/src/assets/OOP/447661064_882945573847660_7282231300223932777_n.jpg",
    "/src/assets/OOP/447733296_882945490514335_4513038464569075097_n.jpg",
    "/src/assets/OOP/447771209_882945443847673_3002782296898575143_n.jpg",
  ];

  return (
    <div
      className="space-y-24 mt-14 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/src/assets/stock-vector-vector-abstract-elegant-white-and-grey-background-abstract-white-pattern-squares-texture-722377342.jpg')",
      }}
    >
      <hr />
      <h1 className="text-center text-4xl sm:text-5xl font-bold mb-4">
        WorkShops
      </h1>
      <div className="flex flex-col sm:flex-row items-center sm:items-start px-4 sm:px-20">
        <img
          className="transform -translate-y-8 sm:-translate-y-32 sm:-translate-x-10 h-40 sm:h-72"
          src="/src/assets/download.svg(1).svg"
          alt=""
        />
        <p className="text-center sm:text-left text-lg sm:text-xl font-bold mb-4 sm:ml-6">
          We are dedicated to supporting students in shaping their future
          through specialized workshops designed to guide them in their career
          choices and college subjects.
        </p>
      </div>
      <div className="px-4 sm:px-20">
        <ImageSlider images={images} />
      </div>
    </div>
  );
};

export default WorkShops;
