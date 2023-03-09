import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { useParams } from "react-router-dom";

import * as Realm from "realm-web";
import { useState, useEffect } from "react";
import gamesData from "./games.json";

const HeadBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

function Productgame() {
  // console.log(gamesData);
  const { productId } = useParams();
  const game = gamesData.find((game) => game.id === productId);

  // MongoDB A Game
  const [games, setGames] = useState([]);

  useEffect(
    () => async () => {
      const REALM_APP_ID = "games-oodpu";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const allGames = await user.functions.getAllGames();
        setGames(allGames);
        // console.log(allGames);
      } catch (error) {
        console.error(error);
      }
    },
    []
  );

  console.log(`The games are below`);
  console.log(games);

  const theGame = games.find((thegame) => thegame.id === productId);
  console.log(theGame);

  return (
    <div className="main">
      {/* Header */}
      <div className="header">
        <div className="headerContainer">
          {/* Logo */}
          <div className="logo  max-sm:hidden">
            <a href="/" className="flex">
              <HeadBarIcon icon={<GiConsoleController size="30" />} />
              <h2 className="text-eightColor ">Gaming Platform</h2>
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

      {/* Drawer mobile */}
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

      {/* The product */}
      <div className="productLayout">
        {theGame &&
          Object.keys(theGame).forEach((key) => {
            console.log(key + "-" + `${theGame[key]}`);
            console.log(theGame[key]);
          })}
        <h2 className="text-4xl px-8 py-4">{game.title}</h2>
        <div className="flex md:flex-row flex-col bg-cover bg-center bg-opacity-0">
          <div className="px-8 md:w-1/2 ">
            <img src={game.image} alt={game.title} />
          </div>
          <div className="flex flex-col space-y-4 md:w-1/2 px-8">
            <img
              src={game.image}
              alt={game.title}
              className="w-1/3 max-sm:hidden"
            />
            <p>Publisher: {game.publisher}</p>
            <p>Release date: {game.release}</p>
            <p className="md:w-1/2">{game.description}</p>
            <p>Tags: {game.tags.join(", ")}</p>
          </div>
        </div>
        <div className="px-8 py-8">
          <p className="flex justify-end border-b-2 border-tenColor">
            Price: {game.price}
          </p>
        </div>
        <div className="aboutGame">
          {game.aboutGame.map((aboutGame) => (
            <p>{aboutGame}</p>
          ))}
        </div>
        <div className="features">
          <p className="border-b-2 border-tenColor pb-2">Features: </p>
          <ul className="space-y-4">
            {game.features.map((feature) => (
              <ul className="list-disc ">
                <li>{feature}</li>
              </ul>
            ))}
          </ul>
        </div>
        <div className="systemReq">
          <p className="border-b-2 border-tenColor pb-2">
            System requirements:
          </p>
          <ul className="space-y-2">
            <li className="list-disc">
              {" "}
              <span className="text-lg pr-2 text-sevenColor">OS:</span>{" "}
              {game.systemRequirements.OS}
            </li>
            <li className="list-disc">
              <span className="text-lg pr-2 text-sevenColor">Processor:</span>{" "}
              {game.systemRequirements.Processor}
            </li>
            <li className="list-disc">
              <span className="text-lg pr-2 text-sevenColor">Memory:</span>{" "}
              {game.systemRequirements.Memory}
            </li>
            <li className="list-disc">
              <span className="text-lg pr-2 text-sevenColor"> Graphics:</span>{" "}
              {game.systemRequirements.Graphics}
            </li>
            <li className="list-disc">
              <span className="text-lg pr-2 text-sevenColor"> DirectX:</span>{" "}
              {game.systemRequirements.DirectX}
            </li>
            <li className="list-disc">
              <span className="text-lg pr-2 text-sevenColor"> Storage:</span>{" "}
              {game.systemRequirements.Storage}
            </li>
          </ul>
        </div>
        <div className="reviews">
          <h3 className="border-b-2 border-tenColor pb-2">User reviews:</h3>
          <ul className="space-y-10">
            {game.reviews.map((review) => (
              <li>
                <p>{review.comment}</p>
                <p>By {review.username}</p>
                <p>Rating: {review.rating}/5</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

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

            <a href="#">About</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Productgame;
