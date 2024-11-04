import React from "react";
import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { FaSquareTwitter } from "react-icons/fa6";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>CONTACT US</h1>
        <p>"Got questions? We're here to help! Reach out anytime for personalized assistance in planning your perfect villa getaway."
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>Let's connect</h3>
              <div>
                <p>Phone</p>
                <span>+001 1234 999</span>
              </div>
              <div>
                <p>Email</p>
                <span>piyushhhhhhh19@gmail.com</span>
              </div>
              <div>
            <p>Address</p>
            <span> Nulla St.
Mankato Mississippi ,563-7401</span>
          </div>
          <ul>
          <Link to={"/facebook"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/instagram"} target="_blank"><BsInstagram /></Link>
          <Link to={"/twitter"} target="_blank"><FaSquareTwitter /></Link>
        </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
