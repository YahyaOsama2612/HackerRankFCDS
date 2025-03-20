import everyday from "/src/assets/discounts/899043ca-70da-4203-a63a-c95490b71d99.jfif";
import FlorenzaAdvertising from "/src/assets/discounts/befb22bb-dc06-47f3-bad4-850887d196db.jfif";
import EraaSoft from "/src/assets/discounts/842ede5e-baf0-4229-8840-51276c45c37f.jfif";
import TrueTechnology from "/src/assets/discounts/1b93c06f-ac06-4734-b627-b589e6e345b2.jfif";

const Discounts = () => {
  return (
    <div
      id="sponser"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-[50px] gap-[30px] px-4 md:px-8"
    >
      {/* EveryDay */}
      <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img className="w-[130px] mx-auto mb-4" src={everyday} alt="EveryDay" />
        <h2 className="font-semibold text-lg text-gray-800 mb-2">EveryDay</h2>
        <span className="block text-gray-600 mb-4">
          20% discount for first 100 attendees
        </span>
        <p>
          <a
            href="https://www.facebook.com/share/yMCVndoQQxQrPWuk/?mibextid=qi2Omg"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
        <span className="block mt-4 text-sm text-gray-500">code: event20</span>
      </div>

      {/* Florenza Advertising */}
      <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-[130px] mx-auto mb-4"
          src={FlorenzaAdvertising}
          alt="Florenza Advertising"
        />
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          Florenza Advertising
        </h2>
        <span className="block text-gray-600 mb-4">
          25% discount to CTRL A attendees
        </span>
        <p>
          <a
            href="https://www.facebook.com/florenzaadvertising?mibextid=ZbWKwL"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
      </div>

      {/* EraaSoft */}
      <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img className="w-[130px] mx-auto mb-4" src={EraaSoft} alt="EraaSoft" />
        <h2 className="font-semibold text-lg text-gray-800 mb-2">EraaSoft</h2>
        <span className="block text-gray-600 mb-4">
          15% discount on courses
        </span>
        <p>
          <a
            href="https://www.facebook.com/eraasoft"
            className="text-blue-500 hover:underline"
          >
            Go to page
          </a>
        </p>
      </div>

      {/* True Technology */}
      <div className="text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          className="w-[130px] mx-auto mb-4"
          src={TrueTechnology}
          alt="True Technology"
        />
        <h2 className="font-semibold text-lg text-gray-800 mb-2">
          True Technology
        </h2>
        <span className="block text-gray-600 mb-4">
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
    </div>
  );
};

export default Discounts;
