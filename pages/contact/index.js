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
import faqBanner from '@/assets/images/faq/faq.jpeg';
// Prallax Main Activity


import Link from 'next/link';


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

// Mission Vission
import contactIcon1 from '@/assets/images/contact/contact-location.svg';
import contactIcon2 from '@/assets/images/contact/contact-callus.svg';
import contactIcon3 from '@/assets/images/contact/contact-emailus.svg';
import abtImg1 from '@/assets/images/about/abtimg1.jpg';
import abtImg2 from '@/assets/images/about/abtimg2.jpg';
import abtImg3 from '@/assets/images/about/abtimg3.jpg';


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


import { Suspense } from 'react';
import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import { FiArrowRight } from 'react-icons/fi';
    const Header = dynamic(() => import('@/component/Header'));
    const Footer = dynamic(() => import('@/component/Footer'));
  export async function getStaticProps(context) {
    
    const footerData = await pagesApi.footer();
    const headerMenu = await menuApi.menu();
  
    return {
      props:{
      
        footerData : footerData.data.data,
        headerMenuData : headerMenu.data.data
      },
      revalidate: 60,
    };
  }

export default function contactPage({footerData,headerMenuData}){
    return (
        <>
            <Suspense  fallback={ <div className={styles.loader}></div>}>
                <Header menu={headerMenuData} footer={footerData}></Header>
                <section className="inner-banner-curp">
                    <Parallax bgImage={faqBanner.src} strength={300} className="inner-parallex1">
                        <div className="menu-top-gap inner-banner1 d-flex align-items-center justify-content-center">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <div className="inner-banner1-title">
                                            <h3>Contact Us</h3>
                                            <div className="inner-banner1-text">Get in touch with your queries and questions. We are here 24/7 to answer your queries.</div>
                                        </div>
                                    </div>
                                    {/* <div className="col-auto">
                                        <div className="inner-banner1-btn">
                                            <Link href="#" className="orange-btn">contact us</Link>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </Parallax>
                </section>
                <section className="mission-visson-sec">
                    <div className="container-fluid left-right-gap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div div className="section-heading section-heading-lft small-font">
                                    <h4>Lorem Ipsum</h4>
                                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing </h3>
                                    <div className="section-heading-desc">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet.
                                    </div>
                                </div>
                                <div className="mission-vission-wrap contact-page">
                                    <div className="mission-vission-wrap-box">
                                        <div className="mission-vission-wrap-box-lft">
                                            <span className="mission-vission-icon">
                                                <img src={contactIcon1.src} className="img-block" alt="" />
                                            </span>
                                        </div>
                                        <div className="mission-vission-wrap-box-rgt">
                                            <h3>Our Location</h3>
                                            <div className="mission-vission-text">Thamel Bhagwati Marg <br/>Kathmandu - 26, Nepal</div>
                                        </div>
                                    </div>
                                    <div className="mission-vission-wrap-box">
                                        <div className="mission-vission-wrap-box-lft">
                                            <span className="mission-vission-icon">
                                                <img src={contactIcon2.src} className="img-block" alt="" />
                                            </span>
                                        </div>
                                        <div className="mission-vission-wrap-box-rgt">
                                            <h3>Call Us</h3>
                                            <div className="mission-vission-text">+977 (0)1 5515 565 <br/> +977 98510 94155</div>
                                        </div>
                                    </div>
                                    <div className="mission-vission-wrap-box">
                                        <div className="mission-vission-wrap-box-lft">
                                            <span className="mission-vission-icon">
                                                <img src={contactIcon3.src} className="img-block" alt="" />
                                            </span>
                                        </div>
                                        <div className="mission-vission-wrap-box-rgt">
                                            <h3>Email Us</h3>
                                            <div className="mission-vission-text">
                                                <Link href="#">info@himalayanleisure.com</Link>
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
                <section className="contact-getin-touch">
                    <div className="container-fluid left-right-gap">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="contact-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594654.5043937997!2d81.48972189098741!3d28.376839448773733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2sin!4v1689079974077!5m2!1sen!2sin" width="100%" height="100%" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-heading">
                                            <h4>Lorem Ipsum</h4>
                                            <h3>Get In Touch</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div class="col-12">
                                        <div class="profile-input">
                                            <label class="profile-lbl">Name</label>
                                            <input type="text" class="log-reg-input-style form-control" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="profile-input">
                                            <label class="profile-lbl">Email</label>
                                            <input type="text" class="log-reg-input-style form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                        <div class="profile-input">
                                            <label class="profile-lbl">Phone No</label>
                                            <input type="text" class="log-reg-input-style form-control" placeholder="Phone No" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="profile-textare">
                                            <label class="profile-lbl">Message</label>
                                            <textarea class="textare-style form-control" rows="4" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="contact-message">
                                            <button type="button" className="orange-btn">Send Message<FiArrowRight /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-member-sec">
                    <div className="container-fluid left-right-gap">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-heading">
                                <h4>Lorem</h4>
                                <h3>Service Excellence</h3>
                                </div>
                            </div>
                            <div className="member-slider-wrap">
                            <OwlCarousel className="owl-theme slider-arrow1" {...aboutServiceSlider}>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg1.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg3.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg4.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg5.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg1.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-client-sec">
                    <div className="container-fluid left-right-gap">
                        <div className="row g-5 justify-content-center">
                            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                <div className="section-heading">
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
                            <OwlCarousel className="owl-theme slider-arrow1" {...aboutServiceSlider}>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg1.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg3.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg4.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg5.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg1.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="service-img-box">
                                        <span className="service-img-box-img">
                                            <img src={memberImg2.src} alt="" />
                                        </span>
                                    </div>
                                </div>
                            </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer data={footerData}></Footer>
            </Suspense>
        </>
    );
}
