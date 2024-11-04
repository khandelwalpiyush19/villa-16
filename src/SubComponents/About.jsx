import React from "react";

const About = () => {
  return (
    <>
      <section id="aboutUs_Mini">
        <div className="first_container">
          <div className="content">
          <h1>ABOUT US</h1>
          <p>
          Welcome to VILLA16, where we believe that every journey should be memorable and enjoyable. Our passion lies in connecting travelers with exceptional accommodations and experiences tailored to their desires. With a carefully curated selection of villas, apartments, and unique stays, we strive to provide options that cater to every budget and preference. Our dedicated team is committed to ensuring your satisfaction, offering personalized support throughout your journey. Whether you’re planning a romantic getaway, a family vacation, or an adventurous retreat, we’re here to help you create unforgettable memories. Join us and discover the perfect escape for your next adventure!
          </p>
          <p>
  VILLA16 is designed by developer "Piyush" who is passionate about travel and unique experiences, he aims to inspire unforgettable adventures!
          </p>
          </div>
          <button>We strive to offer you best possible homes to stay!</button>
        </div>
        <div className="second_container">
          <div className="image_1">
            <img src="/people.jpg" alt="people" />
          </div>
          <div className="image_2">
            <img src="people2.jpg" alt="people2" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
