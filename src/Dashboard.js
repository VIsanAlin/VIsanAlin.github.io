import { useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { IoLogoSteam, IoLogoXbox, IoLogoPlaystation } from "react-icons/io";
import carouselOne from "./img/eldenring.jpg";
import carouselTwo from "./img/gowr.jpg";
import carouselThree from "./img/codbo.jpg";
import carouselFour from "./img/acbundle.jpg";
import heroImage from "./img/2.jpg";
import HeadHeroImg from "./img/3.jpg";

const HeadBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

function Dashboard() {
  // Scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver((e) => {
      e.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hid");
    hiddenElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className="main">
      {/* Header */}
      <div className="header">
        <div className="headerContainer">
          {/* Logo */}
          <div className="logo max-sm:hidden">
            <a href="/" className="flex ">
              <HeadBarIcon icon={<GiConsoleController size="30" />} />
              <h2 className="text-eightColor "> Gaming Platform</h2>
            </a>
          </div>
          <div className="logoMobile">
            <button
              className="text-eightColor bg-secondColor hover:bg-forthColor text-lg rounded-lg  px-5 py-2.5 mr-2 dark:bg-secondColor dark:hover:bg-forthColor focus:outline-none md:hidden "
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              Gaming Platform
            </button>
          </div>
          {/* Category */}
          <div className="category">
            <a
              className="text-eightColor hover:bg-forthColor hover:text-white px-2 py-2 rounded-full"
              href="/Dashboard"
            >
              Dashboard
            </a>
            <a
              className="text-eightColor hover:bg-forthColor hover:text-white px-2 py-2 rounded-full"
              href="/Products"
            >
              Products
            </a>

            <a
              className="text-eightColor hover:bg-forthColor hover:text-white px-2 py-2 rounded-full"
              href="Contact"
            >
              Contacts
            </a>
          </div>
          {/* Login */}
          <div>
            <button
              className="logIn"
              data-modal-target="authenticationModal"
              data-modal-toggle="authenticationModal"
            >
              Log In
            </button>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      <div
        id="authenticationModal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-secondColor">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              data-modal-hide="authenticationModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="px-6 py-6 lg:px-8">
              <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-tenColor">
                Sign in
              </h3>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-firstColor dark:border-fiveColor dark:placeholder-gray-400 dark:text-white"
                    placeholder="email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-firstColor dark:border-fiveColor dark:placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    className="text-sm text-eightColor hover:underline dark:text-tenColor"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-eightColor bg-firstColor hover:bg-thirdColor focus:ring-4 focus:outline-none rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800"
                >
                  Login to your account
                </button>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    className="text-eightColor hover:underline dark:text-tenColor"
                  >
                    Create account
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer for mobile */}
      <div
        id="drawer-navigation"
        className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto 
        transition-transform -translate-x-full
        bg-firstColor w-80 dark:bg-secondColor space-y-2"
        tabIndex="-1"
        aria-labelledby="drawer-navigation-label"
      >
        <h2 className="text-lg text-sixColor">Gaming platform</h2>
        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-eightColor bg-transparent rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close </span>
        </button>
        <div>
          <ul className=" text-eightColor space-y-3">
            <li>
              <a href="/" className="drawerItem">
                <span className="ml-4">Home</span>
              </a>
            </li>
            <li>
              <a href="/Dashboard">
                <span className="ml-4">Dashboard </span>
              </a>
            </li>
            <li>
              <a href="/Products">
                <span className="ml-4">Products </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ml-4">Contact</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="ml-4">Sign In</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* New Games Carousel */}
      <section className="gamingCarousel">
        <div className="advantagesTitle">
          <h1>New Games You Might Be Interested</h1>
        </div>
        <div
          id="indicators-carousel"
          className="relative"
          data-carousel="static"
        >
          {/* <!-- Carousel wrapper --> */}
          <div className="relative overflow-hidden md:h-[40rem] rounded-lg ">
            {/* <!-- Item 1 --> */}
            <div
              className="hidden duration-700 ease-in-out"
              data-carousel-item="active"
            >
              <img
                src={carouselOne}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 2 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={carouselTwo}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 3 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={carouselThree}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* <!-- Item 4 --> */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={carouselFour}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* <!-- Slider indicators --> */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
          </div>
          {/* <!-- Slider controls --> */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-firstColor/50 group-hover:bg-white/50 dark:group-hover:bg-firstColor/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none "
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-firstColor/50 group-hover:bg-white/50 dark:group-hover:bg-firstColor/80 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none ">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </section>

      {/* Games Categories */}
      <section className="gamesCategories">
        <div
          className="gamesCategoriesLayout"
          onMouseMove={(e) => {
            for (const box of document.getElementsByClassName("platformsBox")) {
              const rect = box.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top;

              box.style.setProperty("--mouse-x", `${x}px`);
              box.style.setProperty("--mouse-y", `${y}px`);
            }
          }}
        >
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-44 py-2">
              Action
            </h2>
            <p className="text-eightColor text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-40 py-2">
              Racing
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-36 py-2">
              RPG
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-44 py-2">
              Co-op
            </h2>
            <p className="text-eightColor text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-40 py-2">
              Multiplayer
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-36 py-2">
              Virtual Reality
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-44 py-2">
              Horror
            </h2>
            <p className="text-eightColor text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-40 py-2">
              Strategy
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="platformsBox">
            <h2 className="text-sevenColor text-2xl self-center px-36 py-2">
              Casual
            </h2>
            <p className="text-eightColor text-sm ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="leftFooter md:w-1/4">
          <div className="logo max-sm:hidden">
            <HeadBarIcon icon={<GiConsoleController size="40" />} />
            <h2 className="text-sixColor ">Gaming Platform</h2>
          </div>
          <p className="max-sm:hidden text-lg">Let's play some games.</p>
          <p className="max-sm:hidden text-lg"> Let's have some fun.</p>
          <div className="socialMedia">
            <HeadBarIcon icon={<FaFacebook size="20" />} />
            <HeadBarIcon icon={<FaTwitter size="20" />} />
            <HeadBarIcon icon={<FaInstagram size="20" />} />
          </div>
          <p> Copyright &copy; Visan Alin </p>
        </div>
        <div className="rightFooter ">
          <div className="usefulLinks">
            <h2 className="text-xl text-sixColor">Useful links</h2>
            <a href="/Dashboard">Dashboard</a>
            <a href="/Products">Store</a>
          </div>
          <div className="terms ">
            <h2 className="text-xl text-sixColor">Terms</h2>
            <a href="#">TOS</a>
            <a href="#">Privacy</a>
          </div>
          <div className="contact ">
            <h2 className="text-xl text-sixColor">Contact</h2>

            <a href="Contact">About</a>
            <a href="Contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;
