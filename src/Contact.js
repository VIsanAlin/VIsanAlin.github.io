import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import "./contactUs.css";

const HeadBarIcon = ({ icon }) => <div className="sidebar-icon">{icon}</div>;

function Contact() {
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

      {/* About us */}
      {/* <div className="aboutUs"></div> */}

      {/* Contact */}
      <div className="contactUs">
        <div className="contactTitle">
          <h2>Contact Us</h2>
        </div>
        <div className="contactSubTitle">
          <h3 className="">Get in touch and let us know how we can help</h3>
        </div>
        <div className="contactContent">
          <div className="contactForm">
            <h3 className="text-[1.5rem]">Needed information</h3>
            <div className="flex flex-col">
              <label for="email" className="">
                Email
              </label>
              <input type="text" id="email" className=""></input>
            </div>
            <div className="flex flex-col">
              <label for="title" className="">
                Title
              </label>
              <input type="text" id="title" className=""></input>
            </div>
            <div className="flex flex-col">
              <label for="text" className="">
                Tell us about your problem
              </label>
              <textarea type="text" id="text" className=""></textarea>
            </div>
            <div className="flex justify-end">
              <button className="bg-forthColor rounded-2xl h-12 w-32">
                Send ticket
              </button>
            </div>
          </div>
          <div className="contactData">
            <div>Support</div>
            <div>We are here to help with any questions you may have.</div>
            <a href="mailto: support@gp.com" className="">
              support@gp.com
            </a>
          </div>
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

            <a href="Contact">About</a>
            <a href="Contact">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Contact;
