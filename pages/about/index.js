'use client'
import React from 'react'
import dynamic from 'next/dynamic';

if (typeof window !== 'undefined') {
	window.$ = window.jQuery = require('jquery');
  
}
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});
import { Parallax } from 'react-parallax';
// Prallax about Banner
import aboutBanner from '@/assets/images/about-banner.jpg';
// Prallax Main Activity
import activityParallax from '@/assets/images/about/main-activity-bg.jpg';


import AboutCounter from '@/component/AboutCounter';
import Link from 'next/link';

// Mission Vission
import missin from '@/assets/images/about/1.png';
import vissin from '@/assets/images/about/2.png';
import abtImg1 from '@/assets/images/about/abtimg1.jpg';
import abtImg2 from '@/assets/images/about/abtimg2.jpg';
import abtImg3 from '@/assets/images/about/abtimg3.jpg';

// Service
import serviceImg1 from '@/assets/images/about/service1.png';
import serviceImg2 from '@/assets/images/about/service2.png';
import serviceImg3 from '@/assets/images/about/service3.png';
import serviceImg4 from '@/assets/images/about/service4.png';

// Activity
import activityIcon from '@/assets/images/icon/icon-6.png';

// Avatar Image
import avatarImage from '@/assets/images/avatar/1.jpg';
// Say Platform
import tripadvisorIcon from '@/assets/images/icon/tripadvisor.png';
import googleIcon from '@/assets/images/icon/google.png';

// Member Slider
import memberImg1 from '@/assets/images/about/member/member-img1.png';
import memberImg2 from '@/assets/images/about/member/member-img2.png';
import memberImg3 from '@/assets/images/about/member/member-img3.png';
import memberImg4 from '@/assets/images/about/member/member-img4.png';
import memberImg5 from '@/assets/images/about/member/member-img5.png';

// React Font Icon
// import { FaShareNodes } from "react-icons/fa6";
import { FaShareAlt, FaFacebookF, FaGoogle, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";

const aboutServiceSlider = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: false,
    margin: 20,
    stagePadding: 20,
    nav: true,
    dots: false,
    navElement: 'div',
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
};
const clientSauSlider = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: false,
    margin: 25,
    stagePadding: 15,
    nav: true,
    dots: false,
    navElement: 'div',
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 2,
      },
    },
  };
  const memberSlider = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: false,
    margin: 25,
    stagePadding: 15,
    nav: true,
    dots: false,
    navElement: 'div',
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      800: {
        items: 1,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 5,
      },
    },
  };

export default function aboutPage(){
    return (
        <>
            <section className="inner-banner-curp">
                <Parallax bgImage={aboutBanner.src} strength={300} className="inner-parallex1">
                    <div className="menu-top-gap inner-banner1 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="inner-banner1-title">
                                        <h3>About Us</h3>
                                        <div className="inner-banner1-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem </div>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="inner-banner1-btn">
                                        <Link href="#" className="orange-btn">contact us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
            <section className="about-page-sec add-social-share">
                <div className="inner-social-shere">
                    <div className="inner-social-shere-wrap">
                        <div className="inner-social-shere-lft">
                            <Link href="#"><FaShareAlt /></Link>
                        </div>
                        <div className="inner-social-shere-rgt">
                            <div className="social-shere-rgt-list">
                                <ul className="d-flex">
                                    <li><Link href="#"><FaFacebookF className="fab-color" /></Link></li>
                                    <li><Link href="#"><FaGoogle className="gogl-color" /></Link></li>
                                    <li><Link href="#"><FaTwitter className="twi-color" /></Link></li>
                                    <li><Link href="#"><FaLinkedinIn className="link-color" /></Link></li>
                                    <li><Link href="#"><PiMicrosoftOutlookLogoDuotone className="outlk-color" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid left-right-gap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                            <div className="section-heading section-heading-lft">
                                <h4>Lorem Ipsum</h4>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                            <div className="about-page-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aoutcounter-sec add-waves-wrap">
                <div className="waves-wrap home-waves">
                    <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                        <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
                        <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
                        </g>
                    </svg>
                </div>
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="col-12">
                            <AboutCounter />
                        </div>
                    </div>
                </div>
            </section>
            <section className="mission-visson-sec">
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div div className="section-heading section-heading-lft">
                                <h4>Lorem Ipsum</h4>
                                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
                                <div className="section-heading-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.
                                </div>
                            </div>
                            <div className="mission-vission-wrap">
                                <div className="mission-vission-wrap-box">
                                    <div className="mission-vission-wrap-box-lft">
                                        <span className="mission-vission-icon">
                                            <img src={missin.src} className="img-block" alt="" />
                                        </span>
                                    </div>
                                    <div className="mission-vission-wrap-box-rgt">
                                        <h3>Our Mission</h3>
                                        <div className="mission-vission-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                </div>
                                <div className="mission-vission-wrap-box">
                                    <div className="mission-vission-wrap-box-lft">
                                        <span className="mission-vission-icon">
                                            <img src={vissin.src} className="img-block" alt="" />
                                        </span>
                                    </div>
                                    <div className="mission-vission-wrap-box-rgt">
                                        <h3>Our Vission</h3>
                                        <div className="mission-vission-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                            <div className="mission-vission-img-wrap">
                                <div className="mission-vission-img1">
                                    <span className="mission-vission-img1-wrap">
                                        <img className="img-block" src={abtImg1.src} alt="" />
                                    </span>
                                </div>
                                <div className="mission-vission-img2">
                                    <span className="mission-vission-img2-wrap">
                                        <img className="img-block" src={abtImg2.src} alt="" />
                                    </span>
                                </div>
                                <div className="mission-vission-img3">
                                    <span className="mission-vission-img3-wrap">
                                        <img className="img-block" src={abtImg3.src} alt="" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-service-sec">
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="col-12">
                            <div div className="section-heading">
                                <h4>Lorem Ipsum</h4>
                                <h3>Service Excellence</h3>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className="owl-theme slider-arrow1" {...aboutServiceSlider}>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg1.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg2.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg3.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg4.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg1.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg3.src} alt="" />
                                </span>
                            </div>
                        </div>
                        <div className="item">
                            <div className="service-img-box">
                                <span className="service-img-box-img">
                                    <img src={serviceImg4.src} alt="" />
                                </span>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </section>
            <section className="about-activity-sec">
                <Parallax bgImage={activityParallax.src} strength={500} className="parallax-wrap">
                    <div className="container-fluid left-right-gap">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-heading">
                                    <h4>Lorem Ipsum</h4>
                                    <h3>Main Activity</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-">
                                <div className="about-activity-box">
                                    <Link href="#">
                                        <span className="about-activity-box-icon">
                                            <img className="img-block" src={activityIcon.src} alt="" />
                                        </span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="about-activity-box-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
            <section className="about-client-sec">
                <div className="container-fluid left-right-gap">
                    <div className="row g-5 justify-content-center">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                            <div className="section-heading black-text">
                            <h4>Checkout</h4>
                            <h3>What Our <br></br> Client Say</h3>
                            <div className="section-heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
                            <div className="client-say-slider-wrap">
                                <OwlCarousel className="owl-theme slider-arrow1 disable-arrow" {...clientSauSlider}>
                                    <div className="item">
                                        <div className="client-say-box">
                                            <div className="client-say-box-user">
                                            <div className="client-say-box-user-lft">
                                                <div className="client-say-box-user-img-wrap">
                                                <span className="client-say-box-user-img">
                                                    <img src={avatarImage.src} alt="" />
                                                </span>
                                                <span className="say-platform">
                                                    <img src={tripadvisorIcon.src} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-say-box-user-rgt">
                                                <h4>Marlini Aragona</h4>
                                                <div>Designation</div>
                                            </div>
                                            </div>
                                            <div className="client-say-text">
                                            <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </div>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '4.3'}} /></li>
                                                <li>26th Oct, 2022</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="client-say-box">
                                            <div className="client-say-box-user">
                                            <div className="client-say-box-user-lft">
                                                <div className="client-say-box-user-img-wrap">
                                                <span className="client-say-box-user-img">
                                                    <img src={avatarImage.src} alt="" />
                                                </span>
                                                <span className="say-platform">
                                                    <img src={googleIcon.src} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-say-box-user-rgt">
                                                <h4>Marlini Aragona</h4>
                                                <div>Designation</div>
                                            </div>
                                            </div>
                                            <div className="client-say-text">
                                            <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </div>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '4.3'}} /></li>
                                                <li>26th Oct, 2022</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="client-say-box">
                                            <div className="client-say-box-user">
                                            <div className="client-say-box-user-lft">
                                                <div className="client-say-box-user-img-wrap">
                                                <span className="client-say-box-user-img">
                                                    <img src={avatarImage.src} alt="" />
                                                </span>
                                                <span className="say-platform">
                                                    <img src={tripadvisorIcon.src} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-say-box-user-rgt">
                                                <h4>Marlini Aragona</h4>
                                                <div>Designation</div>
                                            </div>
                                            </div>
                                            <div className="client-say-text">
                                            <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </div>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '4.3'}} /></li>
                                                <li>26th Oct, 2022</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="client-say-box">
                                            <div className="client-say-box-user">
                                            <div className="client-say-box-user-lft">
                                                <div className="client-say-box-user-img-wrap">
                                                <span className="client-say-box-user-img">
                                                    <img src={avatarImage.src} alt="" />
                                                </span>
                                                <span className="say-platform">
                                                    <img src={googleIcon.src} alt="" />
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="client-say-box-user-rgt">
                                                <h4>Marlini Aragona</h4>
                                                <div>Designation</div>
                                            </div>
                                            </div>
                                            <div className="client-say-text">
                                            <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel </div>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '4.3'}} /></li>
                                                <li>26th Oct, 2022</li>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-member-sec add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-heading">
                            <h4>Lorem</h4>
                            <h3>We are member</h3>
                            </div>
                        </div>
                        <div className="member-slider-wrap">
                            <OwlCarousel className="owl-theme slider-arrow1 disable-arrow" {...memberSlider}>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg1.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg3.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg4.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg5.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="member-icon-box">
                                        <span className="member-icon-box-img">
                                            <img src={memberImg3.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
