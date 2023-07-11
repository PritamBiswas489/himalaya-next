'use client'
import React from 'react'
import { Parallax } from 'react-parallax';
import dynamic from 'next/dynamic';
// Prallax about Banner
import destinationBanner from '@/assets/images/destination-banner.jpg';
import Link from 'next/link';
import { FaRegClock, FaRegImages } from 'react-icons/fa6';
import { BsCameraVideo } from 'react-icons/bs';
import { HiCheckCircle } from "react-icons/hi";
import { MdOutlineParagliding } from "react-icons/md";
import { RiMapPin2Line } from 'react-icons/ri';


import itineryIcon1 from '@/assets/images/itinery/overview.png';
import itineryIcon2 from '@/assets/images/itinery/highlights.png';
import itineryIcon3 from '@/assets/images/itinery/itinary.png';
import itineryIcon4 from '@/assets/images/itinery/costing.png';
import itineryIcon5 from '@/assets/images/itinery/map.png';
import itineryIcon6 from '@/assets/images/itinery/gearlist.png';
import itineryIcon7 from '@/assets/images/itinery/faq.png';

import featureImg1 from '@/assets/images/itinery/feature/clock.png';
import featureImg2 from '@/assets/images/itinery/feature/paragliding.png';
import featureImg3 from '@/assets/images/itinery/feature/destination.png';
import featureImg4 from '@/assets/images/itinery/feature/bar-chart.png';
import featureImg5 from '@/assets/images/itinery/feature/group.png';
import featureImg6 from '@/assets/images/itinery/feature/accomodation.png';
import featureImg7 from '@/assets/images/itinery/feature/meeting-point.png';
import featureImg8 from '@/assets/images/itinery/feature/directions.png';
import featureImg9 from '@/assets/images/itinery/feature/altitude.png';
import featureImg10 from '@/assets/images/itinery/feature/dinner.png';
import featureImg11 from '@/assets/images/itinery/feature/distance.png';
import featureImg12 from '@/assets/images/itinery/feature/season.png';
import featureImg13 from '@/assets/images/itinery/feature/hiking.png';


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





export default function itineraryBlocksPage({footerData,headerMenuData}){
    return (
        <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
            <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="inner-banner-normal">
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
            <section className="itinery-menu-listing-sec">
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
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                                <div className="rgt-icon-wrap">
                                                    <div className="rgt-icon-img">
                                                        <span className="lft-icon-img">
                                                            <img className="img-block" src={featureImg4.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="rgt-icon-txt">
                                                        <h4>Trip Grade</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">yuoyou</div>
                    </div>
                </div>
            </section>
            <section className="add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">gbndgb</div>
            </section>
            <Footer data={footerData}></Footer>
        </Suspense>
        </>
    );
}
