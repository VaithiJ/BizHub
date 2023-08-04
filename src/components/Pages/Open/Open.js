import React, { useRef } from "react";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../../../../src/assets/css/tailwind.output.css";
import "../../../../src/assets/css/tailwind.css";
import "../../../assets/css/style.css";
import "@windmill/react-ui";
import client1 from "../../../assets/img/clients/client-1.png";
import herooo from "../../../assets/img/hero-img.png";
import heroo from "../../../assets/img/ecomm.jpg";
import skills from "../../../assets/img/skills.png";
import { useNavigate, useParams } from "react-router-dom";
import { Link, Element } from "react-scroll";

import "../../../assets/css/style.css";
import "../../../assets/img/favicon.png";
import "../../../assets/img/favicon.png";
import "../../../assets/img/apple-touch-icon.png";

import Carousel from "../../Resuables/Carousel/Carousel";
import carsvalley from "../../Resuables/Carousel/Logo/cars-valley.png";
import vastra from "../../Resuables/Carousel/Logo/vastra.png";
import block from "../../Resuables/Carousel/Logo/blocklisting.png";
import art from "../../Resuables/Carousel/Logo/Artchain.png";
import realchain from "../../Resuables/Carousel/Logo/realchain.png";
import petchain from "../../Resuables/Carousel/Logo/petchain.png";
import verified from "../../Resuables/Carousel/Logo/verified.png";
import thrustshop from "../../Resuables/Carousel/Logo/thrustshop.png";
import bizhub from "../../Resuables/Carousel/Logo/BizHub.png";

import AOS from "aos";
import "aos/dist/aos.css";

const arttt = () => {
  window.open("https://3.110.82.152/");
};

const realll = () => {
  window.open("https://13.235.50.131/");
};

const blockliss = () => {
  window.open("https://13.233.104.66/");
};

const Open = () => {
  function scrollToSection(id) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      easing: "ease-in-out", // Set the animation easing (optional)
      once: true, // Only animate elements once (optional)
      mirror: false, // Whether elements should animate out while scrolling past them (optional)
    });
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Add an effect to scroll to the "About" section on component mount
  useEffect(() => {
    // Check if there is a hash in the URL and if it matches the about section's ID
    if (window.location.hash === "#about") {
      handleScrollToAbout();
    }
  }, []);

  return (
    <div>
      <>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Jost:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
          rel="stylesheet"
        />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
        <link
          href="assets/vendor/bootstrap/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/boxicons/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          href="assets/vendor/glightbox/css/glightbox.min.css"
          rel="stylesheet"
        />
        <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
        <link
          href="assets/vendor/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />

        <link href="assets/css/style.css" rel="stylesheet" />

        <header
          id="header"
          className="fixed-top "
          style={{ backgroundColor: "white" }}
        >
          <div className="container d-flex align-items-center">
            <h1 className="logo me-auto">
              <a>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  exact="true"
                  activeClass="active"
                  style={{ cursor: "pointer", color: "black" }}
                >
                  BizHub
                </Link>
              </a>
            </h1>

            <nav id="navbar" className="navbar">
              <ul>
                <li>
                  <a>
                    <Link
                      id="coloronhover"
                      // style={{ color: "black" }}
                      className="nav-link scrollto active"
                      to="hero"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      exact="true"
                      activeClass="active"
                      style={{ cursor: "pointer" }}
                    >
                      Home
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link
                      id="coloronhover"
                      className="nav-link scrollto"
                      to="about"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      exact="true"
                      activeClass="active"
                      style={{ cursor: "pointer", marginLeft: "-20px" }}
                    >
                      About
                    </Link>
                  </a>
                </li>

                <li className="dropdown">
                  <a id="coloronhover" href="#">
                    <span style={{ marginLeft: "10px" }}>platforms</span>{" "}
                    <i
                      className="fas fa-arrow-down"
                      style={{ marginTop: "5px" }}
                    />
                  </a>
                  <ul>
                    <li>
                      <a href="#">CarsValley</a>
                    </li>
                    <li>
                      <a href="#">Vastra</a>
                    </li>
                    <li>
                      <a href="#" onClick={blockliss}>
                        BlockListing
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={arttt}>
                        ArtChain
                      </a>
                    </li>
                    <li>
                      <a href="#" onClick={realll}>
                        RealChain
                      </a>
                    </li>
                    <li>
                      <a href="#">PetChain</a>
                    </li>
                    <li>
                      <a href="#">VerifiedJobs</a>
                    </li>
                    <li>
                      <a href="#">ThrustShop</a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a>
                    <Link
                      id="coloronhover"
                      // style={{ color: "black" }}
                      className="nav-link scrollto"
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                      exact="true"
                      activeClass="active"
                      style={{ cursor: "pointer", marginLeft: "-25px" }}
                    >
                      Contact
                    </Link>
                  </a>
                </li>
                {/* <li>
                  <a className="getstarted scrollto" href="#about">
                    Get Started
                  </a>
                </li> */}
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            {/* .navbar */}
          </div>
        </header>

        {/* End Header */}
        {/* ======= Hero Section ======= */}
        <section
          id="hero"
          className="d-flex align-items-center"
          style={{ position: "relative", top: "30px", height: "600px" }}
        >
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                {/* <h1>All in one ecommerce site</h1>
                <h2>10+ Applications for your use</h2> */}
                <div className="exp">
                  <h1 className="allinone">Find your E-commerce</h1>
                  <h4 className="buysell">
                    Empowering Secure and Transparent E-commerce on the
                    Blockchain !
                  </h4>
                  <br />
                  <br />

                  <Link
                    className="viewbutton"
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    exact="true"
                    activeClass="active"
                    style={{
                      cursor: "pointer",
                      marginLeft: "-340px",
                    }}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-in"
                data-aos-delay={200}
              >
                <img
                  id="heroimage"
                  src={herooo}
                  style={{ width: "550px" }}
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}

        <main id="main">
          {/* ======= Clients Section ======= */}
          <section id="clients" className="clients section-bg">
            <div className="container"></div>
          </section>

          {/* End Cliens Section */}
          {/* ======= About Us Section ======= */}

          {/* End About Us Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us section-bg" data-aos="fade-up">
            <div className="container-fluid" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
                  <div className="content">
                    <h3>
                      BizHub - All-in-One Marketplace Solution{" "}
                      <strong>with Blockchain Technology</strong>
                    </h3>
                    <br />
                    <p>
                      BizHub is a revolutionary online marketplace where sellers
                      can list various products and services, and buyers can
                      explore a wide range of verified items. Our unique feature
                      is the integration of blockchain technology, ensuring that
                      every product listed on BizHub goes through a stringent
                      verification process.
                    </p>
                  </div>
                  <br />
                  <div className="accordion-list">
                    <ul>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          className="collapse"
                          data-bs-target="#accordion-list-1"
                        >
                          <span>01</span> Verified Products and Services{" "}
                          <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-1"
                          className="collapse show"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            At BizHub, we prioritize the safety and trust of our
                            users. Every product and service listed on our
                            platform undergoes a rigorous verification process
                            by authorized verifiers. This ensures that you can
                            confidently buy and sell products without any
                            discrepancies.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-list-2"
                          className="collapsed"
                        >
                          <span>02</span> Seamless Buying and Selling Experience{" "}
                          <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-2"
                          className="collapse"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            BizHub provides a user-friendly interface for both
                            buyers and sellers. The intuitive platform allows
                            sellers to easily list their products and services,
                            and buyers can navigate through a diverse range of
                            items effortlessly. Enjoy a seamless buying and
                            selling experience at BizHub.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          data-bs-target="#accordion-list-3"
                          className="collapsed"
                        >
                          <span>03</span> Blockchain-Powered Trust and
                          Transparency{" "}
                          <i className="bx bx-chevron-down icon-show" />
                          <i className="bx bx-chevron-up icon-close" />
                        </a>
                        <div
                          id="accordion-list-3"
                          className="collapse"
                          data-bs-parent=".accordion-list"
                        >
                          <p>
                            With our innovative blockchain technology, every
                            verified product's information is securely stored in
                            an immutable record. This level of transparency
                            ensures that buyers can trust the authenticity of
                            products and services on BizHub, fostering a
                            reliable marketplace for everyone.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-5 align-items-stretch order-1 order-lg-2 img"
                  data-aos="zoom-in"
                  data-aos-delay={150}
                >
                  <img className="heroos" src={heroo} alt="BizHub Hero" />
                </div>
              </div>
            </div>
          </section>

          {/* ======= Services Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2 style={{ color: "white" }}>About Us</h2>
              </div>

              <div className="col-lg-8 pt-4 pt-lg-0">
                <div className="alignabout">
                  <p className="bizhubdis">
                    "Welcome to BizHub, your one-stop destination for buying and
                    selling trusted and verified products and even services."
                  </p>
                  <br />
                  <p className="bizhubdis">
                    This introductory statement highlights that BizHub is a
                    platform that serves as a single destination for individuals
                    and businesses to engage in various transactions related to
                    products, services, and job opportunities. It aims to
                    provide a convenient marketplace where users can find
                    everything they need, ranging from products to services to
                    job listings.
                  </p>
                  <br />
                  <p className="bizhubdis">
                    "At BizHub, we strive to create a secure and transparent
                    marketplace, where every listing undergoes a thorough
                    verification process by our authorized verifiers."
                  </p>
                  {/* <a href="#" className="btn-learn-more">
                    Learn More
                  </a> */}
                </div>
              </div>
              {/* </div> */}
            </div>
          </section>
          <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>platforms</h2>
                <p>Our platform consists of these following applications</p>
              </div>
              <div className="row" style={{ marginTop: "40px" }}>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  {/* Card content */}
                  <div className="icon-box">
                    <div className="icon">
                      <img src={verified} />{" "}
                    </div>
                    {/* <h4>
                      <a href="">Visit Site</a>
                    </h4> */}
                    <br />
                    <p className="desali">
                      Verified Careers: Your gateway to trusted job
                      opportunities. Say goodbye to fake jobs and hello to
                      verified employment.
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px", marginTop: "-5px" }}>
                      <a className="hrefff" href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
                  data-aos="zoom-in"
                  data-aos-delay={200}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <img src={art} />{" "}
                    </div>
                    {/* <h4>
                      <a href="">Visit Site</a>
                    </h4> */}
                    <br />
                    <p className="desali">
                      A premier platform for buying and selling verified and
                      authentic paintings
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px", marginTop: "35px" }}>
                      <a className="hrefff" href="" onClick={arttt}>
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay={300}
                >
                  {/* Card content */}
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={vastra}
                        style={{ position: "relative", marginTop: "-5px" }}
                      />{" "}
                    </div>
                    {/* <h4>
                      <a style={{ position: "relative", top: "-30px" }} href="">
                        Visit Site
                      </a>
                    </h4> */}
                    <br />
                    <p
                      style={{
                        position: "relative",
                        top: "-30px",
                        textAlign: "left",
                      }}
                    >
                      Vasthra aims to create a trusted platform where only
                      verified and authentic Kanchipuram silk sarees are traded.
                    </p>
                    <br />
                    <br />

                    <h5
                      style={{
                        fontSize: "18px",
                        position: "relative",
                        top: "-25px",
                      }}
                    >
                      <a className="hrefff" href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
                  data-aos="zoom-in"
                  data-aos-delay={400}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <img src={carsvalley} />{" "}
                    </div>
                    <br />
                    <p className="desali">
                      Cars Valley: Your go-to marketplace for secure and
                      transparent secondhand car transactions. Powered by
                      blockchain.
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px", marginTop: "10px" }}>
                      <a className="hrefff" href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div className="w-100" id="spacebetweencards"></div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  {/* Card content */}
                  <div className="icon-box">
                    <div className="icon" style={{ marginTop: "-15px" }}>
                      <img src={realchain} />{" "}
                    </div>

                    <p style={{ marginTop: "10px", textAlign: "left" }}>
                      Redefining Real Estate Verification with Web3 and
                      Blockchain!
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px", marginTop: "50px" }}>
                      <a className="hrefff" onClick={realll} href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <img src={thrustshop} />{" "}
                    </div>
                    <br />
                    <p className="desali">
                      Bike Hub: Your centralized destination for buying,
                      selling, and connecting with biking communities.
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px" }}>
                      <a className="hrefff" href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  {/* Card content */}
                  <div className="icon-box">
                    <div className="icon">
                      <img src={petchain} />{" "}
                    </div>
                    <br />
                    <p className="desali">
                      A secure blockchain-based platform for buying and selling
                      pets. Verifiers ensure pet authenticity, while blockchain
                      records verified pet data
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px" }}>
                      <a className="hrefff" href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
                <div
                  className="col-xl-3 col-md-6 d-flex align-items-stretch"
                  data-aos="zoom-in"
                  data-aos-delay={100}
                >
                  <div className="icon-box">
                    <div className="icon">
                      <img src={block} />{" "}
                    </div>
                    <br />

                    <p className="desali">
                      A blockchain-powered marketplace for verified business
                      listings, ensuring trust and transparency.
                    </p>
                    <br />
                    <br />

                    <h5 style={{ fontSize: "18px", marginTop: "30px" }}>
                      <a className="hrefff" onClick={blockliss} href="">
                        Visit Site
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Services Section */}
          {/* ======= Cta Section ======= */}
          <section id="cta" className="cta">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-lg-9 text-center text-lg-start">
                  <h3>Call To Action</h3>
                  <p>
                    {" "}
                    Start your journey on BizHub - the ultimate marketplace for
                    verified products and services. Experience the power of
                    blockchain technology and make secure and reliable
                    transactions with confidence.
                  </p>
                </div>
                <div className="col-lg-3 cta-btn-container text-center">
                  <a id="cta-btn" className="cta-btn align-middle" href="#">
                    Call To Action
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* End Cta Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact" data-aos="ease-in-out">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>
                  For any inquiries or feedback, please don't hesitate to reach
                  out to us. We'd love to hear from you!
                </p>
              </div>
              <div className="row">
                <div className="col-lg-5 d-flex align-items-stretch">
                  <div className="info">
                    <div className="address">
                      <i className="bi bi-geo-alt" />
                      <h4>Location:</h4>
                      <p>ASV Ramana Towers, T. Nagar, Chennai-600017</p>
                    </div>
                    <div className="email">
                      <i className="bi bi-envelope" />
                      <h4>Email:</h4>
                      <p>info@securekloud.com</p>
                    </div>
                    <div className="phone">
                      <i className="bi bi-phone" />
                      <h4>Call:</h4>
                      <p> 044 6602 8000</p>
                    </div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.7318435544444!2d80.24670741478363!3d13.029696290834336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52670a47bcf333%3A0xb2f7d8d0e2d78df!2sASV%20Ramana%20Towers!5e0!3m2!1sen!2sin!4v1629357638830!5m2!1sen!2sin"
                      frameBorder={0}
                      style={{ border: 0, width: "100%", height: 290 }}
                      allowFullScreen=""
                    />
                  </div>
                </div>
                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                  <form
                    action="forms/contact.php"
                    method="post"
                    role="form"
                    className="php-email-form"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="name"
                          required=""
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="name">Your Email</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        required=""
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="name">Message</label>
                      <textarea
                        className="form-control"
                        name="message"
                        rows={10}
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="my-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit">Send Message</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* End Contact Section */}
        </main>
        <Carousel />
        {/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 footer-contact">
                  <h3>SecureKloud</h3>
                  <p>
                    ASV Ramana Towers <br />
                    T. Nagar, Chennai
                    <br />
                    Tamil Nadu 600017 <br />
                    <br />
                    <strong>Phone:</strong> 044 6602 8000
                    <br />
                    <strong>Email:</strong> info@securekloud.com
                    <br />
                  </p>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <br />
                  <ul>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">About us</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Services</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Terms of service</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Privacy policy</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <br />
                  <ul>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Web Design</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Web Development</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Product Management</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Marketing</a>
                    </li>
                    <li className="serviceleft">
                      <i className="bx bx-chevron-right" />{" "}
                      <a href="#">Graphic Design</a>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Social Networks</h4>
                  <p>
                    Cras fermentum odio eu feugiat lide par naso tierra videa
                    magna derita valies
                  </p>
                  <div className="social-links mt-3">
                    <a href="#" className="twitter">
                      <i className="bx bxl-twitter" />
                    </a>
                    <a href="#" className="facebook">
                      <i className="bx bxl-facebook" />
                    </a>
                    <a href="#" className="instagram">
                      <i className="bx bxl-instagram" />
                    </a>
                    <a href="#" className="google-plus">
                      <i className="bx bxl-skype" />
                    </a>
                    <a href="#" className="linkedin">
                      <i className="bx bxl-linkedin" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="container footer-bottom clearfix">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>Securekloud</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits"></div>
          </div>
        </footer>
        {/* End Footer */}

        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
      </>
    </div>
  );
};

export default Open;
