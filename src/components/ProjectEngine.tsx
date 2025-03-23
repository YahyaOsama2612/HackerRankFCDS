import Button from "./Button";
import photo from "/src/assets/download.svg"
import image from "/src/assets/WhatsApp Image 2024-08-16 at 1.38.30 PM.jpeg"
import background from "/src/assets/360_F_275289557_YptaQZDnGnDkcgm8b792ItXOqvvkTQAr.jpg"
import { memo } from "react";

const ProjectEngine = () => {
  return (
    <div
      id="project"
      className="mt-40 bg-cover bg-center"
      style={{
        backgroundImage:
          `url(${background})`,
      }}
    >
      <div className="flex flex-col lg:flex-row justify-around items-center p-8">
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <img
            className="h-48 lg:h-52 mt-5 mx-auto lg:mx-0"
            src={photo}
            alt=""
          />
          <a href="https://forms.gle/TRqmnEq1axpZjx5e9">
            <Button className=" cursor-pointer mx-auto lg:mx-36 my-8 lg:my-16">Join</Button>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row items-center">
          <p className="mt-5 lg:mt-20 mb-5 lg:mb-20 text-center lg:text-left text-xl lg:text-2xl lg:translate-y-10 px-4 lg:px-0">
            Navigating your CS journey? We've got your back! 💚 Introducing our
            project dedicated to empowering new students in the field of
            computer science💻. For more details, check the project page:{" "}
            <span className="text-green-600">
              <a href="https://www.facebook.com/ProjectEngineFCDS">
                Project Engine
              </a>
            </span>
          </p>
          <img
            className="h-72 lg:h-80 mt-5 lg:mt-0 lg:ml-8"
            src={image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default memo(ProjectEngine) ;
