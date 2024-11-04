import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>VILLA16  Pvt. Ltd.</h4>
          <p>
          "Book your dream villa today and experience luxury, comfort, and unforgettable moments. Your perfect getaway awaits—let’s make memories together!"
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home |</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}> | Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+00 000 000 00</p>
          <p>piyushhhhhhh19@gmail.com</p>
          <p>© All Rights Reserved | VILLA16 | Privacy Policy </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
