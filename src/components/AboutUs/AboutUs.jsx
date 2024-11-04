import React from "react";
import AboutComponentMini from "../../SubComponents/About";
const AboutUs = () => {
  return (
    <section id="aboutPage" className="page">
      <div className="container">
        <img src="/about.jpg" alt="about" />
        <div className="content">
          <h3>Your peace of mind, our priority!</h3>
          <p>We are committed to providing you with a serene and unforgettable vacation experience. Our dedicated team goes above and beyond to ensure that every aspect of your stay is perfect. From luxurious accommodations to personalized service, we handle the details so you can focus on relaxation and enjoyment. Trust us to create a peaceful getaway tailored to your needs, where your satisfaction is our top priority.</p>
        </div>
      </div>
      <AboutComponentMini />
    </section>
  );
};

export default AboutUs;
