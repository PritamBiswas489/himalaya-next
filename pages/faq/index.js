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
import faqwrapBg from '@/assets/images/faqpattern.jpg';


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
      900: {
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

export default function faqPage({footerData,headerMenuData}){
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
                                            <h3>faq</h3>
                                            <div className="inner-banner1-text">Frequently Asked Question</div>
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
                <section className="about-page-sec">
                    <div className="container-fluid left-right-gap">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="section-heading section-heading-lft">
                                    <h4>Checkout</h4>
                                    <h3>Our Frequently Asked Questions</h3>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12 col-sm-12 col-12">
                                <div className="about-page-text">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="quick-navigation-sec faq-wrap-bg" style={{ backgroundImage: `url(${faqwrapBg.src})`}}>
                    {/* <Parallax bgImage={faqwrapBg.src} strength={500} className="parallax-wrap"> */}
                        <div className="container-fluid left-right-gap">
                            <div className="row g-3">
                                <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                    <div className="quick-navigation-menu-box">
                                        <h2>Quick Navigation</h2>
                                        <ul>
                                            <li><Link href="#">Refunnd</Link></li>
                                            <li><Link href="#">Booking</Link></li>
                                            <li><Link href="#">Support</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                                    <div class="faq-src relative">
                                        <input type="text" class="faq-src-input" placeholder="Search your question.." />
                                    </div>
                                    <div className="faq-wrap-box">
                                        <div className="faq-list">
                                            <div className="faq-qus active-open">
                                                <h4>Refunded rules</h4>
                                            </div>
                                            <div className="faq-ans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                        <div className="faq-list">
                                            <div className="faq-qus">
                                                <h4>Refunded rules</h4>
                                            </div>
                                            <div className="faq-ans" style={{display: 'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                        <div className="faq-list">
                                            <div className="faq-qus">
                                                <h4>Refunded rules</h4>
                                            </div>
                                            <div className="faq-ans" style={{display: 'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/* </Parallax> */}
                </section>
                <section className="about-client-sec">
                    <div className="container-fluid left-right-gap">
                        <div className="row g-5 justify-content-center">
                            <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-heading">
                                <h4>Checkout</h4>
                                <h3>What Our <br></br> Client Say</h3>
                                <div className="section-heading-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</div>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-12">
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
