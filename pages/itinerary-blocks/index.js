'use client'
import React, { useEffect, useState, useLayoutEffect, useRef, } from 'react'
import { Parallax } from 'react-parallax';
import dynamic from 'next/dynamic';
// Prallax about Banner
import destinationBanner from '@/assets/images/destination-banner.jpg';
import Link from 'next/link';
import { FaCircleInfo, FaRegClock, FaRegEnvelope, FaRegImages } from 'react-icons/fa6';
import { BsCameraVideo } from 'react-icons/bs';
import { HiCheckCircle } from "react-icons/hi";
import { MdOutlineParagliding } from "react-icons/md";
import { RiMapPin2Line } from 'react-icons/ri';
import { Tooltip } from '@nextui-org/react';
import { LuDownload } from "react-icons/lu";



import itineryIcon1 from '@/assets/images/itinery/overview.png';
import itineryIcon2 from '@/assets/images/itinery/highlights.png';
import itineryIcon3 from '@/assets/images/itinery/itinary.png';
import itineryIcon4 from '@/assets/images/itinery/costing.png';
import itineryIcon5 from '@/assets/images/itinery/map.png';
import itineryIcon6 from '@/assets/images/itinery/gearlist.png';
import itineryIcon7 from '@/assets/images/itinery/faq.png';
import itineryIcon8 from '@/assets/images/itinery/support.png';
import itineryIcon9 from '@/assets/images/itinery/customer-review.png';
import itineryBoxImg1 from '@/assets/images/itinery/hiking2.png';
import itineryBoxImg2 from '@/assets/images/itinery/mountain.png';
import itineryBoxImg3 from '@/assets/images/itinery/history.png';
import itineryBoxImg4 from '@/assets/images/itinery/tent.png';
import itineryBoxImg5 from '@/assets/images/itinery/dinner-fill.png';

import featureImg1 from '@/assets/images/itinery/feature/clock.png';
import featureImg2 from '@/assets/images/itinery/feature/paragliding.png';
import featureImg3 from '@/assets/images/itinery/feature/destination.png';
import featureImg4 from '@/assets/images/itinery/feature/bar-chart.png';
import featureImg5 from '@/assets/images/itinery/feature/altitude.png';
import featureImg6 from '@/assets/images/itinery/feature/group.png';
import featureImg7 from '@/assets/images/itinery/feature/dinner.png';
import featureImg8 from '@/assets/images/itinery/feature/accomodation.png';
import featureImg9 from '@/assets/images/itinery/feature/distance.png';
import featureImg10 from '@/assets/images/itinery/feature/meeting-point.png';
import featureImg11 from '@/assets/images/itinery/feature/season.png';
import featureImg12 from '@/assets/images/itinery/feature/directions.png';
import featureImg13 from '@/assets/images/itinery/feature/hiking.png';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
// Avatar Image
import avatarImage from '@/assets/images/avatar/1.jpg';
// Say Platform
import tripadvisorIcon from '@/assets/images/icon/tripadvisor.png';
import googleIcon from '@/assets/images/icon/google.png';
import { PiNotepadBold } from 'react-icons/pi';

import whybook1 from '@/assets/images/whybook/whybook1.svg';
import whybook2 from '@/assets/images/whybook/whybook2.svg';
import whybook3 from '@/assets/images/whybook/whybook3.svg';
import whybook4 from '@/assets/images/whybook/whybook4.svg';
import whybook5 from '@/assets/images/whybook/whybook5.svg';
import customerSup1 from '@/assets/images/customersupport/customer-support1.svg';
import customerSup2 from '@/assets/images/customersupport/customer-support2.svg';
import customerSup3 from '@/assets/images/customersupport/customer-support3.svg';

    


// import { Suspense } from 'react';
// import { pagesApi } from '@/service/Pages.service';
// import { menuApi } from '@/service/Menu.service';
// import styles from '@/pages/loader.module.css';
// const Header = dynamic(() => import('@/component/Header'));
// const Footer = dynamic(() => import('@/component/Footer'));
// export async function getStaticProps(context) {
  
//   const footerData = await pagesApi.footer();
//   const headerMenu = await menuApi.menu();

//   return {
//     props:{
    
//       footerData : footerData.data.data,
//       headerMenuData : headerMenu.data.data
//     },
//     revalidate: 60,
//   };
// }





export default function itineraryBlocksPage({footerData,headerMenuData}){
    
    // Sticky Menu Area
    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return () => {
          window.removeEventListener("scroll", isSticky);
        };
    });
    
      /* Method that will fix header after a specific scrollable */
      const isSticky = (e) => {
        const header = document.querySelector("#itinery_menu");
        const scrollTop = window.scrollY;
        const minHeight= document.getElementById('inner_banner_height')?.offsetHeight;
        scrollTop >= minHeight ? header?.classList?.add('top-on') : header?.classList?.remove('top-on');
      };




    return (
        <>
        {/* <Suspense  fallback={ <div className={styles.loader}></div>}>
            <Header menu={headerMenuData} footer={footerData}></Header> */}
            <section id="inner_banner_height" className="inner-banner-normal">
                <Parallax bgImage={destinationBanner.src} strength={300} className="inner-parallex1">
                    <div className="menu-top-gap inner-banner2 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="inner-banner2-title">
                                        <h3>Everest Chola Pass Trek</h3>
                                        <ul className="review-wrap">
                                            <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                            <li>5.0 of <strong>47 Reviews</strong></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <div className="inner-banner2-btn">
                                        <ul className="d-flex itinery-bnr-btn">
                                            <li><Link href="#" className="orange-btn2"><FaRegImages />contact us</Link></li>
                                            <li><Link href="#" className="orange-btn2"><BsCameraVideo />contact us</Link></li>
                                        </ul> 
                                        <div className="cancelation-days"><HiCheckCircle />Free Cancellation 60 Days before departure </div>                                     
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>
            </section>
            <section id="itinery_menu" className="itinery-menu-listing-sec">
                <div className="container-fluid left-right-gap">
                    <div className="itinery-page-menu">
                        <div className="itinery-page-menu-lft">
                            <div className="itinery-menu">
                                <ul>
                                    <li>
                                        <Link href="#" className="itinery-menu-item active">
                                            <img src={itineryIcon1.src} alt="" />
                                            <span>Overview</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon2.src} alt="" />
                                            <span>Highlights</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon3.src} alt="" />
                                            <span>Itinary</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon4.src} alt="" />
                                            <span>Costing</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon5.src} alt="" />
                                            <span>Map</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon6.src} alt="" />
                                            <span>Gear list</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="itinery-menu-item">
                                            <img src={itineryIcon7.src} alt="" />
                                            <span>FAQ</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="itinery-page-menu-rgt">
                            <div className="itinery-price-enquary">
                                <div className="itinery-price-select d-flex align-items-center">
                                    <span>from</span>
                                    <select className="form-select enq-price">
                                        <option value="">US $1,258</option>
                                        <option value="">US $1,358</option>
                                        <option value="">US $4,058</option>
                                        <option value="">US $1,58</option>
                                    </select>
                                </div>
                                <div className="itinery-enquary-btn-wrap">
                                    <Link href="#" className="orange-btn">Enquiry now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="itinery-details-sec">
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="itinery-alert-box">Nepal is open again. Visa on arrival and no quarantine facility is available for fully vaccinated travelers. To be eligible for visa on arrival, one will require a negative Covid-19 PCR report not older than 72 hours at the time of boarding your flight, vaccine completed certificate (14 days must have completed after full dose), hotel booking as per your itinerary (for contact tracing if required) and ccmc.gov.np international arrival form filled up.</div>
                            <div className="border-box overflow-hidden">
                                <div className="feutured-box">
                                    <div className="feutured-box-lft">
                                        <div className="lft-icon-wrap">
                                            <div className="lft-icon-box">
                                                <div className="lft-icon-base">
                                                    <FaRegClock />
                                                    {/* <span className="lft-icon-img">
                                                        <img className="img-block" src={featureImg1.src} alt="" />
                                                    </span> */}
                                                    <h4>3 Days</h4>
                                                </div>
                                            </div>
                                            <div className="lft-icon-box">
                                                <Link href="#" className="lft-icon-base">
                                                    <MdOutlineParagliding />
                                                    <h4>Sightseeing</h4>
                                                </Link>
                                            </div>
                                            <div className="lft-icon-box">
                                                <Link href="#" className="lft-icon-base">
                                                    <RiMapPin2Line />
                                                    <h4>Nepal</h4>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feutured-box-rgt">
                                        <div className="row g-3">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg4.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade 
                                                        <span className="tooltip-wrap">
                                                            <Tooltip content={"Developers love Next.js"} color="invert"><FaCircleInfo /></Tooltip>
                                                        </span>
                                                        </h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg5.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg6.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg4.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade 
                                                        <span className="tooltip-wrap">
                                                            <Tooltip content={"Developers love Next.js"} color="invert"><FaCircleInfo /></Tooltip>
                                                        </span>
                                                        </h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg5.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg6.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg4.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade 
                                                        <span className="tooltip-wrap">
                                                            <Tooltip content={"Developers love Next.js"} color="invert"><FaCircleInfo /></Tooltip>
                                                        </span>
                                                        </h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg5.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg6.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg4.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade 
                                                        <span className="tooltip-wrap">
                                                            <Tooltip content={"Developers love Next.js"} color="invert"><FaCircleInfo /></Tooltip>
                                                        </span>
                                                        </h4>
                                                        <h6>Moderate</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon1.src} alt="" />
                                        </span>
                                        <h4>Overview</h4>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                </div>
                                <div className="border-box-head no-bb">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon2.src} alt="" />
                                        </span>
                                        <h4>Highlights</h4>
                                    </div>
                                </div>
                                <div className="border-box-body pt-0">
                                    <div className="highlights-text">
                                        <ul>
                                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisis</li>
                                            <li> Risus commodo viverra maecenas accumsan lacus vel facilisis.maecenas accumsan</li>
                                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisis. maecenas accumsan lacus </li>
                                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisis</li>
                                            <li> Risus commodo viverra maecenas accumsan lacus vel facilisis.maecenas accumsan</li>
                                            <li>Risus commodo viverra maecenas accumsan lacus vel facilisis. maecenas accumsan lacus </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head justify-content-between align-items-center">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon3.src} alt="" />
                                        </span>
                                        <h4>Itinary</h4>
                                    </div>
                                    <div className="border-box-head-rgt">
                                        <Link href="#" className="orange-btn2"><LuDownload />Download Itinary</Link>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="itinary-wrap">
                                        <div className="itinary-wrap-lft">
                                            <h4><FaMapMarkerAlt />Day 1</h4>
                                            <h3>01</h3>
                                        </div>
                                        <div className="itinary-wrap-rgt">
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</h4>
                                            <ul className="itinary-wrap-dtls">
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg1.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Trek Distance</h6>
                                                        <h5>15.5km / 9.6miles</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg2.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Highest Altitude</h6>
                                                        <h5>4,790m / 15,584ft</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg3.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Highest Altitude</h6>
                                                        <h5>4,790m / 15,584ft</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="itinery-wrap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                            <div className="itinery-wrap-package">
                                                <ul>
                                                    <li>
                                                        <span className="itinery-package-img">
                                                            <img src={itineryBoxImg4.src} alt="" />
                                                        </span>
                                                        <div className="itinery-package-txt">Overnight stay at Khumbu Travel Lodge (room with attached bathroom)</div>
                                                    </li>
                                                    <li>
                                                        <span className="itinery-package-img">
                                                            <img src={itineryBoxImg5.src} alt="" />
                                                        </span>
                                                        <div className="itinery-package-txt">Included standard meals (Breakfast + Lunch + Dinner)</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="itinary-wrap">
                                        <div className="itinary-wrap-lft">
                                            <h4><FaMapMarkerAlt />Day 2</h4>
                                            <h3>02</h3>
                                        </div>
                                        <div className="itinary-wrap-rgt">
                                            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</h4>
                                            <ul className="itinary-wrap-dtls">
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg1.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Trek Distance</h6>
                                                        <h5>15.5km / 9.6miles</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg2.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Highest Altitude</h6>
                                                        <h5>4,790m / 15,584ft</h5>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className="itinary-wrap-dtls-img">
                                                        <img src={itineryBoxImg3.src} alt="" />
                                                    </span>
                                                    <div className="itinary-wrap-dtls-text">
                                                        <h6>Highest Altitude</h6>
                                                        <h5>4,790m / 15,584ft</h5>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="itinery-wrap-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. 
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</div>
                                            <div className="itinery-wrap-package">
                                                <ul>
                                                    <li>
                                                        <span className="itinery-package-img">
                                                            <img src={itineryBoxImg4.src} alt="" />
                                                        </span>
                                                        <div className="itinery-package-txt">Overnight stay at Khumbu Travel Lodge (room with attached bathroom)</div>
                                                    </li>
                                                    <li>
                                                        <span className="itinery-package-img">
                                                            <img src={itineryBoxImg5.src} alt="" />
                                                        </span>
                                                        <div className="itinery-package-txt">Included standard meals (Breakfast + Lunch + Dinner)</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon4.src} alt="" />
                                        </span>
                                        <h4>Costing</h4>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="costing-wrap">
                                        <div className="costing-dtls include">
                                            <h4>What is included in the tour price?</h4>
                                            <ul>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="costing-dtls exclude">
                                            <h4>What is included in the tour price?</h4>
                                            <ul>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                                <li>
                                                    <h5>Airport pickup and drop services on a private vehicle including before and after the trek <span>(2 airport transfers for international arrival and international departure)</span></h5>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head justify-content-between align-items-center">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon5.src} alt="" />
                                        </span>
                                        <h4>Map</h4>
                                    </div>
                                    <div className="border-box-head-rgt">
                                        <Link href="#" className="orange-btn2"><LuDownload />Download Map</Link>
                                    </div>
                                </div>
                                <div className="border-box-body"></div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head justify-content-between align-items-center">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon6.src} alt="" />
                                        </span>
                                        <h4>Gear</h4>
                                    </div>
                                    <div className="border-box-head-rgt">
                                        <Link href="#" className="orange-btn2"><LuDownload />Download Map</Link>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="gear-wrap">
                                        <div className="row g-3">
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="gear-wrap-list">
                                                    <ul>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                        <li>Long sleeve shirts</li>
                                                        <li>Water bottles or camel bag / purifi cation or camel bag.</li>
                                                        <li>Long sleeve shirts.</li>
                                                        <li>Water bottles or camel bag / purifi cation or Camel bag.</li>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="gear-wrap-list">
                                                    <ul>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                        <li>Long sleeve shirts</li>
                                                        <li>Water bottles or camel bag / purifi cation or camel bag.</li>
                                                        <li>Long sleeve shirts.</li>
                                                        <li>Water bottles or camel bag / purifi cation or Camel bag.</li>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                                                <div className="gear-wrap-list">
                                                    <ul>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                        <li>Long sleeve shirts</li>
                                                        <li>Water bottles or camel bag / purifi cation or camel bag.</li>
                                                        <li>Long sleeve shirts.</li>
                                                        <li>Water bottles or camel bag / purifi cation or Camel bag.</li>
                                                        <li>Waterproof trekking boots / Flip Flops.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head justify-content-between align-items-center">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon7.src} alt="" />
                                        </span>
                                        <h4>FAQ</h4>
                                    </div>
                                    <div className="border-box-head-rgt">
                                        <Link href="#" className="orange-btn2">Expand All</Link>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="itinery-faq-wrap">
                                        <div className="itinery-faq-list">
                                            <div className="itinery-faq-qus active-open">
                                                <h4>How to analyze marketing strategies?</h4>
                                            </div>
                                            <div className="itinery-faq-ans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                        <div className="itinery-faq-list">
                                            <div className="itinery-faq-qus">
                                                <h4>How to analyze marketing strategies?</h4>
                                            </div>
                                            <div className="itinery-faq-ans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                        <div className="itinery-faq-list">
                                            <div className="itinery-faq-qus">
                                                <h4>How to analyze marketing strategies?</h4>
                                            </div>
                                            <div className="itinery-faq-ans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem voluptate excepturi odio? Doloremque autem dolor accusantium laborum vero provident velit minus a. Cupiditate voluptatum quidem eos adipisci. Illum, ducimus fuga.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon8.src} alt="" />
                                        </span>
                                        <h4>Support</h4>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="support-wrap">
                                        <div className="support-text"><strong>Meals and Accommodation:</strong> Best Season for the Trek: Langtang Circuit Trekking is complete tea house based route hence we will be sleeping and eating in the lodges. However, in Kathmandu we provide 3 star category hotel accommodation with only breakfast. The lodges on the trek will be mostly shared bathroom / shared toilet while in 1/2 places we may provide you rooms with private toilet (depending on availability).</div>
                                        <div className="support-text"><strong>Meals and Accommodation:</strong> Best Season for the Trek: Langtang Circuit Trekking is complete tea house based route hence we will be sleeping and eating in the lodges. However, in Kathmandu we provide 3 star category hotel accommodation with only breakfast. The lodges on the trek will be mostly shared bathroom / shared toilet while in 1/2 places we may provide you rooms with private toilet (depending on availability).</div>
                                        <div className="support-text"><strong>Meals and Accommodation:</strong> Best Season for the Trek: Langtang Circuit Trekking is complete tea house based route hence we will be sleeping and eating in the lodges. However, in Kathmandu we provide 3 star category hotel accommodation with only breakfast. The lodges on the trek will be mostly shared bathroom / shared toilet while in 1/2 places we may provide you rooms with private toilet (depending on availability).</div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-box">
                                <div className="border-box-head">
                                    <div className="border-box-head-lft">
                                        <span className="border-box-head-icon">
                                            <img src={itineryIcon9.src} alt="" />
                                        </span>
                                        <h4>Reviews</h4>
                                    </div>
                                </div>
                                <div className="border-box-body">
                                    <div className="review-wrap-box">
                                    <ResponsiveMasonry
                                            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                                        >
                                            <Masonry gutter="25px">
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
                                                            <li><div className="stars" style={{'--rating': '1.3'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '5'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                            <li><div className="stars" style={{'--rating': '2.3'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet,</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '4.3'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '5'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '5'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
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
                                                        <div className="client-say-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel</div>
                                                        <ul className="review-wrap">
                                                            <li><div className="stars" style={{'--rating': '5'}} /></li>
                                                            <li>26th Oct, 2022</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="sticky-wrap">
                                <div className="itinery-top-seller-box">
                                    <div className="top-slr-lbl"><span>Top</span> Seller</div>
                                    <h4>All Inclusive Price: <span>$ 1,560.00</span></h4>
                                    <h3>Book this Trip</h3>
                                    <div className="date-picker-wrap">
                                        <input type="date" className="form-control date-picker" />
                                    </div>
                                    <div className="number-people">
                                        <select className="form-select number-people-select">
                                            <option>Number of people</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                        </select>
                                    </div>
                                    <div className="seller-submit">
                                        <button type="button" className="seller-submit-btn">submit</button>
                                    </div>
                                    <div className="seller-cutomise">
                                        <button type="button" className="seller-cutomise-btn">Customize Trip</button>
                                    </div>
                                    <div className="seller-ftr">
                                        <ul>
                                            <li><Link href="#"><FaRegEnvelope />Forward to Friend</Link></li>
                                            <li><Link href="#"><PiNotepadBold />Quick Enquary</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="why-book-us mt-4">
                                    <div className="why-book-us-head">
                                        <h6>Why Book With Us?</h6>
                                    </div>
                                    <div className="why-book-us-body">
                                        <ul>
                                            <li>
                                                <span className="why-book-us-img">
                                                    <img src={whybook1.src} alt="" />
                                                </span>
                                                <div className="why-book-us-text">Experienced and Efficient Team</div>
                                            </li>
                                            <li>
                                                <span className="why-book-us-img">
                                                    <img src={whybook2.src} alt="" />
                                                </span>
                                                <div className="why-book-us-text">Reasonable Prices</div>
                                            </li>
                                            <li>
                                                <span className="why-book-us-img">
                                                    <img src={whybook3.src} alt="" />
                                                </span>
                                                <div className="why-book-us-text">24/7 Customer Support</div>
                                            </li>
                                            <li>
                                                <span className="why-book-us-img">
                                                    <img src={whybook4.src} alt="" />
                                                </span>
                                                <div className="why-book-us-text">Numerous Tour Selections</div>
                                            </li>
                                            <li>
                                                <span className="why-book-us-img">
                                                    <img src={whybook5.src} alt="" />
                                                </span>
                                                <div className="why-book-us-text">Highly Rated Experiences</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="customer-support mt-4">
                                    <div className="customer-support-head">
                                        <h6>24/7 Customer Support</h6>
                                    </div>
                                    <div className="customer-support-body">
                                        <ul>
                                            <li>
                                                <span className="customer-support-img">
                                                    <img src={customerSup1.src} alt="" />
                                                </span>
                                                <div className="customer-support-text">+977 98510 94155</div>
                                            </li>
                                            <li>
                                                <span className="customer-support-img">
                                                    <img src={customerSup2.src} alt="" />
                                                </span>
                                                <div className="customer-support-text">info@himalayanleisure.com</div>
                                            </li>
                                            <li>
                                                <span className="customer-support-img">
                                                    <img src={customerSup3.src} alt="" />
                                                </span>
                                                <div className="customer-support-text">09 to 06 Customer Support (Mon - Fri)</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">gbndgb</div>
            </section>
            {/* <Footer data={footerData}></Footer>
        </Suspense> */}
        </>
    );
}
