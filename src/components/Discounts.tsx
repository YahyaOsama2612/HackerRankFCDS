import React from "react";

const Discounts: React.FC = () => {
  return (
    <div
      id="sponser"
      className="flex flex-wrap justify-center mt-[50px] gap-[50px] sm:gap-[100px]"
    >
      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/899043ca-70da-4203-a63a-c95490b71d99.jfif"
          alt="EveryDay"
        />
        <h2 className="font-bold">EveryDay</h2>
        <span>20% discount for first 100 attendees</span>
        <p>
          <a
            href="https://www.facebook.com/share/yMCVndoQQxQrPWuk/?mibextid=qi2Omg"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
        <span>code: event20</span>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/b48f9f26-e983-488d-af0f-8d4e2cb5dc10.jfif"
          alt="pes"
        />
        <h2 className="font-bold">pes</h2>
        <span>20% discount</span>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/befb22bb-dc06-47f3-bad4-850887d196db.jfif"
          alt="Florenza Advertising"
        />
        <h2 className="font-bold">Florenza Advertising</h2>
        <span>25% discount to CTRL A attendees</span>
        <p>
          <a
            href="https://www.facebook.com/florenzaadvertising?mibextid=ZbWKwL"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/842ede5e-baf0-4229-8840-51276c45c37f.jfif"
          alt="EraaSoft"
        />
        <h2 className="font-bold">EraaSoft</h2>
        <span>15% discount on courses</span>
        <p>
          <a
            href="https://www.facebook.com/eraasoft"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/bdc8104f-e8c4-43c6-95c9-e00b0693b023.jfif"
          alt="khwater"
        />
        <h2 className="font-bold">khwater</h2>
        <span>20% discount</span>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/1b93c06f-ac06-4734-b627-b589e6e345b2.jfif"
          alt="True Technology"
        />
        <h2 className="font-bold">True Technology</h2>
        <span>
          30% discount on maintenance and discounts on laptops up to 500 LE
        </span>
        <p>
          <a
            href="https://www.facebook.com/share/WdjEKLYS2BnWoKHS/?mibextid=qi2Omg"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
      </div>

      <div className="text-center">
        <img
          className="w-[130px] mx-auto"
          src="/src/assets/discounts/f67b55c2-4d65-4f3c-8bae-d0da1fc9a5ed.jfif"
          alt="Moatz & Nehal"
        />
        <h2 className="font-bold">Moatz & Nehal</h2>
      </div>
    </div>
  );
};

export default Discounts;
