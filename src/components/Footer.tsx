import { memo } from "react";
import logo from "/src/assets/hackerrank8164.logowik.com.webp"

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Company Name</h2>
            <img
              src={logo}
              alt="Company Logo"
              className="mx-auto md:mx-0"
              style={{ height: "100px" }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#project" className="text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <ul className="space-y-2 flex justify-center md:block">
              <li className="text-gray-400 translate-y-2">
                <a href="https://youtube.com/channel/UCPdduoZKZCKx9hiz6EU41jg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FF3D00"
                      d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
                    ></path>
                    <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                  </svg>
                </a>
              </li>
              <li className="text-gray-400">
                <a href="https://www.linkedin.com/company/hackerrank-campus-club-fcds/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#0078d4"
                      d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                    ></path>
                    <path
                      d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                      opacity=".05"
                    ></path>
                    <path
                      d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                      opacity=".07"
                    ></path>
                    <path
                      fill="#fff"
                      d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,0.912-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li className="text-gray-400">
                <a href="https://www.instagram.com/hacker_rank_fcds/">
                  
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 48 48"
                  >
                    <radialGradient
                      id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
                      cx="19.38"
                      cy="42.035"
                      r="44.899"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fd5"></stop>
                      <stop offset=".328" stopColor="#ff543f"></stop>
                      <stop offset=".348" stopColor="#fc5245"></stop>
                      <stop offset=".504" stopColor="#e64771"></stop>
                      <stop offset=".643" stopColor="#d53e91"></stop>
                      <stop offset=".761" stopColor="#cc39a4"></stop>
                      <stop offset=".841" stopColor="#c837ab"></stop>
                    </radialGradient>
                    <path
                      fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
                      d="M34.6,4H13.4C8.7,4,5,7.7,5,12.4v21.2C5,40.3,8.7,44,13.4,44h21.2c4.7,0,8.4-3.7,8.4-8.4V12.4	C43,7.7,39.3,4,34.6,4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M24,15.5c-4.7,0-8.5,3.8-8.5,8.5S19.3,32.5,24,32.5S32.5,28.7,32.5,24S28.7,15.5,24,15.5z M24,29.9	c-3.3,0-5.9-2.7-5.9-5.9s2.7-5.9,5.9-5.9c3.3,0,5.9,2.7,5.9,5.9S27.3,29.9,24,29.9z M34.8,14c0,1.1-0.9,2-2,2h-4.7	c-1.1,0-2-0.9-2-2v-4.7c0-1.1,0.9-2,2-2H32.9c1.1,0,2,0.9,2,2V14z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M33.5,14c0,0.8-0.7,1.5-1.5,1.5h-4.1c-0.8,0-1.5-0.7-1.5-1.5V9.9c0-0.8,0.7-1.5,1.5-1.5h4.1	c0.8,0,1.5,0.7,1.5,1.5V14z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-500">© 2024 Yahya Osama ABD ELqauwy</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer) ;
