import React from 'react'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "../../../../src/assets/css/tailwind.output.css"
import "../../../../src/assets/css/tailwind.css"
import "../../../assets/css/style.css"
import "@windmill/react-ui"
import client1 from "../../../assets/img/clients/client-1.png"
import herooo from "../../../assets/img/hero-img.png"
import heroo from "../../../assets/img/why-us.png"
import skills from "../../../assets/img/skills.png"


import "../../../assets/css/style.css"
import "../../../assets/img/favicon.png"
import "../../../assets/img/favicon.png"
import "../../../assets/img/apple-touch-icon.png"

import Carousel from '../../Resuables/Carousel/Carousel';
import carsvalley from "../../Resuables/Carousel/Logo/cars-valley.png";
import vastra from "../../Resuables/Carousel/Logo/vastra.png";
import block from "../../Resuables/Carousel/Logo/blocklisting.png";
import art from "../../Resuables/Carousel/Logo/Artchain.png";
import realchain from "../../Resuables/Carousel/Logo/realchain.png";
import petchain from "../../Resuables/Carousel/Logo/petchain.png";
import verified from "../../Resuables/Carousel/Logo/verified.png";
import thrustshop from "../../Resuables/Carousel/Logo/thrustshop.png";
import AOS from "aos";
import 'aos/dist/aos.css';











const Open = () => {
  function scrollToSection(id) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the animation duration
      easing: "ease-in-out", // Set the animation easing (optional)
      once: true, // Only animate elements once (optional)
      mirror: false // Whether elements should animate out while scrolling past them (optional)
    });
  }, []);
  return (
    <div><>
    <meta charSet="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>Arsha Bootstrap Template - Index</title>
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
    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
    <link
      href="assets/vendor/bootstrap-icons/bootstrap-icons.css"
      rel="stylesheet"
    />
    <link href="assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
    <link href="assets/vendor/remixicon/remixicon.css" rel="stylesheet" />
    <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
    {/* Template Main CSS File */}
    <link href="assets/css/style.css" rel="stylesheet" />
    {/* =======================================================
    * Template Name: Arsha
    * Updated: Jul 05 2023 with Bootstrap v5.3.0
    * Template URL: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/
    ======================================================== */}
    {/* ======= Header ======= */}
    <header id="header" className="fixed-top " style={{backgroundColor:"#37517E"}}>
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">BizHub</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a> */}
        
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto active" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services" onClick={() => scrollToSection('#services')}>
                Services
              </a>
            </li>
            <li>
              <a className="nav-link   scrollto" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#team">
                Team
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
            <li>
              <a className="getstarted scrollto" href="#about">
                Get Started
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
        {/* .navbar */}
      </div>
    </header>
    
    {/* End Header */}
    {/* ======= Hero Section ======= */}
    <section id="hero" className="d-flex align-items-center" style={{position:"relative", top:"30px"}}>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <h1>All in one ecommerce site</h1>
            <h2>5+ Applications for your use</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a href="#about" className="btn-get-started scrollto">
                Get Started
              </a>
              <a
                href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
                className="glightbox btn-watch-video"
              >
                <i className="bi bi-play-circle" />
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay={200}
          >
            <img
              src={herooo}
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    {/* End Hero */}
    <Carousel/>
    <main id="main">
      {/* ======= Clients Section ======= */}
      <section id="clients" className="clients section-bg">
        <div className="container">
          {/* <div className="row" data-aos="zoom-in">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src={client1}
                className="img-fluid"
                alt="sssssssssssssssssssssssss"
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-2.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-3.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-4.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-5.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img
                src="assets/img/clients/client-6.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </section>
      {/* End Cliens Section */}
      {/* ======= About Us Section ======= */}
      <section id="about" className="about" >
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2 style={{color:"white"}}>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p>
                
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Various roles
                    available for the customers to take part in
                </li>
                <li>
                  <i className="ri-check-double-line" /> Enabled blockchain
                    technology to increase trust and security
                </li>
                <li>
                  <i className="ri-check-double-line" /> Verifiers verify the
                    products listed on the ecommerce website
                </li>
                <li>
                  <i className="ri-check-double-line" />Only verified
                    products are present for sale
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Welcome to BizHub, your one-stop destination for buying and
                selling trusted and verified products, services, and jobs. At
                BizHub, we strive to create a secure and transparent marketplace,
                where every listing undergoes a thorough verification process by
                our authorized verifiers
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
      {/* ======= Why Us Section ======= */}
      <section id="why-us" className="why-us section-bg" data-aos="fade-up">
      <div className="container-fluid" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1">
            <div className="content">
              <h3>
                Welcome to BizHub - Your All-in-One Marketplace Solution{" "}
                <strong>with Blockchain Technology</strong>
              </h3>
              <p>
                BizHub is a revolutionary online marketplace where sellers can list various products and services, and buyers can explore a wide range of verified items. Our unique feature is the integration of blockchain technology, ensuring that every product listed on BizHub goes through a stringent verification process.
              </p>
            </div>
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
                      At BizHub, we prioritize the safety and trust of our users. Every product and service listed on our platform undergoes a rigorous verification process by authorized verifiers. This ensures that you can confidently buy and sell products without any discrepancies.
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
                      BizHub provides a user-friendly interface for both buyers and sellers. The intuitive platform allows sellers to easily list their products and services, and buyers can navigate through a diverse range of items effortlessly. Enjoy a seamless buying and selling experience at BizHub.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed"
                  >
                    <span>03</span> Blockchain-Powered Trust and Transparency{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      With our innovative blockchain technology, every verified product's information is securely stored in an immutable record. This level of transparency ensures that buyers can trust the authenticity of products and services on BizHub, fostering a reliable marketplace for everyone.
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
            <img src={heroo} alt="BizHub Hero" />
          </div>
        </div>
      </div>
    </section>
      {/* End Why Us Section */}
      {/* ======= Skills Section ======= */}
      {/* <section id="bizhub-info" className="bizhub-info">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
            data-aos-delay={100}
          >
            <img src={skills} className="img-fluid" alt="BizHub Hero" />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 content"
            data-aos="fade-left"
            data-aos-delay={100}
          >
            <h3>Welcome to BizHub - Your All-in-One Marketplace Solution</h3>
            <p className="fst-italic">
              Visit Site dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="bizhub-info-content">
              <p>
                BizHub is a revolutionary online marketplace that brings buyers and sellers together in a secure and efficient platform. Our mission is to provide a seamless buying and selling experience, all backed by the power of blockchain technology.
              </p>
              <p>
                As a seller, you can easily list your products or services and have them verified by our team of authorized verifiers. This ensures that your listings are authentic and trustworthy, gaining the confidence of potential buyers.
              </p>
              <p>
                As a buyer, you can explore a wide range of verified products and services, knowing that every item you find on BizHub has gone through a thorough verification process. Our blockchain-powered platform ensures transparency and trust, making it easy for you to make informed decisions.
              </p>
              <p>
                Whether you are looking to sell or buy, BizHub is your go-to marketplace for everything you need. Join us today and experience the future of secure and reliable online commerce.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section> */}
      {/* End Skills Section */}
      {/* ======= Services Section ======= */}
      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
<img src={verified}/>                </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={art}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={vastra} style={{position:"relative", top:"-30px"}}/>                 </div>
                <h4>
                  <a style={{position:"relative", top:"-30px"}} href="">Visit Site</a>
                </h4>
                <p style={{position:"relative", top:"-30px"}}>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={carsvalley}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis
                </p>
              </div>
            </div>
            <br/>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={realchain}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={thrustshop}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={petchain}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
              </div>
            </div>
            <div
              className="col-xl-3 col-md-6 d-flex align-items-stretch"
              data-aos="zoom-in"
              data-aos-delay={100}
            >
              <div className="icon-box">
                <div className="icon">
                <img src={block}/>                 </div>
                <h4>
                  <a href="">Visit Site</a>
                </h4>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi
                </p>
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
                Start your journey on BizHub - the ultimate marketplace for verified products and services. Experience the power of blockchain technology and make secure and reliable transactions with confidence.

              </p>
            </div>
            <div className="col-lg-3 cta-btn-container text-center">
              <a className="cta-btn align-middle" href="#">
                Call To Action
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End Cta Section */}
      {/* ======= Portfolio Section ======= */}
      
      {/* End Portfolio Section */}
      {/* ======= Team Section ======= */}
      {/* <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Team</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={100}>
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/team/team-1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>
                    Explicabo voluptatem mollitia et repellat qui dolorum quasi
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4 mt-lg-0"
              data-aos="zoom-in"
              data-aos-delay={200}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/team/team-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>
                    Aut maiores voluptates amet et quis praesentium qui senda para
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/team/team-3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>
                    Quisquam facilis cum velit laborum corrupti fuga rerum quia
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 mt-4"
              data-aos="zoom-in"
              data-aos-delay={400}
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/img/team/team-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>
                    Dolorum tempora officiis odit laborum officiis et et accusamus
                  </p>
                  <div className="social">
                    <a href="">
                      <i className="ri-twitter-fill" />
                    </a>
                    <a href="">
                      <i className="ri-facebook-fill" />
                    </a>
                    <a href="">
                      <i className="ri-instagram-fill" />
                    </a>
                    <a href="">
                      {" "}
                      <i className="ri-linkedin-box-fill" />{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Team Section */}
      {/* ======= Pricing Section ======= */}
      {/* <section id="pricing" className="pricing">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Pricing</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="box">
                <h3>Free Plan</h3>
                <h4>
                  <sup>$</sup>0<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li className="na">
                    <i className="bx bx-x" />{" "}
                    <span>Pharetra massa massa ultricies</span>
                  </li>
                  <li className="na">
                    <i className="bx bx-x" />{" "}
                    <span>Massa ultricies mi quis hendrerit</span>
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="box featured">
                <h3>Business Plan</h3>
                <h4>
                  <sup>$</sup>29<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i className="bx bx-check" /> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i className="bx bx-check" /> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="box">
                <h3>Developer Plan</h3>
                <h4>
                  <sup>$</sup>49<span>per month</span>
                </h4>
                <ul>
                  <li>
                    <i className="bx bx-check" /> Quam adipiscing vitae proin
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nec feugiat nisl pretium
                  </li>
                  <li>
                    <i className="bx bx-check" /> Nulla at volutpat diam uteera
                  </li>
                  <li>
                    <i className="bx bx-check" /> Pharetra massa massa ultricies
                  </li>
                  <li>
                    <i className="bx bx-check" /> Massa ultricies mi quis
                    hendrerit
                  </li>
                </ul>
                <a href="#" className="buy-btn">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* End Pricing Section */}
      {/* ======= Frequently Asked Questions Section ======= */}
      {/* <section id="faq" className="faq section-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
              aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
              quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
              fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay={100}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  className="collapse"
                  data-bs-target="#faq-list-1"
                >
                  Non consectetur a erat nam at lectus urna duis?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-1"
                  className="collapse show"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id
                    volutpat lacus laoreet non curabitur gravida. Venenatis lectus
                    magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={200}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-2"
                  className="collapsed"
                >
                  Feugiat scelerisque varius morbi enim nunc?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-2"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque
                    habitant morbi. Id interdum velit laoreet id donec ultrices.
                    Fringilla phasellus faucibus scelerisque eleifend donec
                    pretium. Est pellentesque elit ullamcorper dignissim. Mauris
                    ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={300}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-3"
                  className="collapsed"
                >
                  Dolor sit amet consectetur adipiscing elit?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-3"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                    sagittis orci. Faucibus pulvinar elementum integer enim. Sem
                    nulla pharetra diam sit amet nisl suscipit. Rutrum tellus
                    pellentesque eu tincidunt. Lectus urna duis convallis
                    convallis tellus. Urna molestie at elementum eu facilisis sed
                    odio morbi quis
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={400}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-4"
                  className="collapsed"
                >
                  Tempus quam pellentesque nec nam aliquam sem et tortor
                  consequat? <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-4"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo.
                    Dignissim suspendisse in est ante in. Nunc vel risus commodo
                    viverra maecenas accumsan. Sit amet nisl suscipit adipiscing
                    bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay={500}>
                <i className="bx bx-help-circle icon-help" />{" "}
                <a
                  data-bs-toggle="collapse"
                  data-bs-target="#faq-list-5"
                  className="collapsed"
                >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel
                  turpis nunc eget lorem dolor?{" "}
                  <i className="bx bx-chevron-down icon-show" />
                  <i className="bx bx-chevron-up icon-close" />
                </a>
                <div
                  id="faq-list-5"
                  className="collapse"
                  data-bs-parent=".faq-list"
                >
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris
                    vitae ultricies leo integer malesuada nunc vel. Tincidunt eget
                    nullam non nisi est sit amet. Turpis nunc eget lorem dolor
                    sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* End Frequently Asked Questions Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact" data-aos="ease-in-out">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p>
            For any inquiries or feedback, please don't hesitate to reach out to us. We'd love to hear from you!

            </p>
          </div>
          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>securekloud@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+1 5589 55488 55s</p>
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
    {/* End #main */}
    {/* ======= Footer ======= */}
    <footer id="footer">
      {/* <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>
                Tamen quem nulla quae legam multos aute sint culpa legam noster
                magna
              </p>
              <form action="" method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>SecureKloud</h3>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> securekloud@gmail.com
                <br />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Services</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Web Design</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" /> <a href="#">Marketing</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />{" "}
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
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
            </div>
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
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/arsha-free-bootstrap-html-template-corporate/ */}
        </div>
      </div>
    </footer>
    {/* End Footer */}

    <a
      href="#"
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short" />
    </a>
    {/* Vendor JS Files */}
    {/* Template Main JS File */}
  </>
  </div>
  )
}

export default Open