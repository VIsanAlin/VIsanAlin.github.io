import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiConsoleController } from "react-icons/gi";
import { useState } from "react";
import games from "./games.json";

const HeadBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

export default function Products() {
  const [visibleGames, setVisibleGames] = useState(12);

  function loadMore() {
    setVisibleGames((prev) => prev + 12);
  }

  return (
    <div className="main">
      {/* Header */}
      <div className="header">
        <div className="headerContainer">
          {/* Logo */}
          <div className="logo">
            <a href="/" className="flex">
              <HeadBarIcon icon={<GiConsoleController size="30" />} />
              <h2 className="text-eightColor ">Gaming Platform</h2>
            </a>
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
              href="#"
            >
              Platforms
            </a>
            <a
              className="text-eightColor hover:bg-forthColor hover:text-white px-2 py-2 rounded-full"
              href="#"
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
      {/* List */}
      <div className="productContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {games &&
          games
            .slice(0, visibleGames)
            .map(({ title, image, price, tags, id }) => (
              <Link
                to={`/Products/${id}`}
                key={id}
                className="border rounded-md shadow-sm overflow-hidden productItem "
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={image}
                    alt={title}
                    className="object-fill h-full w-full"
                  />
                </div>
                <div className="flex justify-between h-16 px-4 py-2 ">
                  <div>
                    <h3 className="text-lg font-medium  mb-2">{title}</h3>
                    <p className=" text-sm mb-2">
                      {tags.map((tag) => `[${tag}] `)}
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-lg">{price}€</p>
                  </div>
                </div>
              </Link>
            ))}
      </div>
      {visibleGames < games.length && (
        <button onClick={loadMore} className="loadMoreButton">
          Load More
        </button>
      )}
      {/* Footer */}
      <footer className="footer">
        <div className="leftFooter w-1/4">
          <div className="logo">
            <HeadBarIcon icon={<GiConsoleController size="40" />} />
            <h2 className="text-sixColor ">Gaming Platform</h2>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            lobortis.{" "}
          </p>
          <div className="socialMedia">
            <HeadBarIcon icon={<FaFacebook size="20" />} />
            <HeadBarIcon icon={<FaTwitter size="20" />} />
            <HeadBarIcon icon={<FaInstagram size="20" />} />
          </div>
          <p> Copyright &copy; Visan Alin Bogdan </p>
        </div>
        <div className="rightFooter ">
          <div className="usefulLinks">
            <h2 className="text-xl text-sixColor">Useful links</h2>
            <a href="#">Store</a>
            <a href="#">Platforms</a>
            <a href="#">Community</a>
          </div>
          <div className="terms ">
            <h2 className="text-xl text-sixColor">Terms</h2>
            <a href="#">TOS</a>
            <a href="#">Privacy</a>
            <a href="#">Refunds</a>
          </div>
          <div className="contact ">
            <h2 className="text-xl text-sixColor">Contact</h2>
            <a href="#">Support</a>
            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
