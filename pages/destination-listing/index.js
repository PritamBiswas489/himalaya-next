'use client'
import React from 'react'
import { Parallax } from 'react-parallax';
// Prallax about Banner
import destinationBanner from '@/assets/images/destination-banner.jpg';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Destination Image
import destiNation1 from '@/assets/images/destination/1.jpg';
import destiNation3 from '@/assets/images/destination/3.jpg';
import destiNation4 from '@/assets/images/destination/4.jpg';
import terrain from '@/assets/images/terrain.png';
import pattern from '@/assets/images/pattren.png';

// Destination Info Icon
import duration from '@/assets/images/icon/duration.svg';
import difficulty from '@/assets/images/icon/difficulty.svg';
import activity from '@/assets/images/icon/activity.svg';

// Package Image
import packageImage from '@/assets/images/package/1.jpg';
import packageImage2 from '@/assets/images/package/2.jpg';
import packageImage3 from '@/assets/images/package/3.jpg';
import packageImage4 from '@/assets/images/package/4.jpg';
import { FiArrowRight } from 'react-icons/fi';
import DestinationListingCounter from '@/component/DestinationListingCounter';

const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';

 

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




export default function destinationListingPage({footerData,headerMenuData}){
    return (
        <Suspense  fallback={ <div className={styles.loader}></div>}>
             <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="inner-banner-curp">
                <Parallax bgImage={destinationBanner.src} strength={300} className="inner-parallex1">
                    <div className="menu-top-gap inner-banner1 d-flex align-items-center justify-content-center">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="inner-banner1-title">
                                        <h3>destination</h3>
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
            <section className="destination-listing-sec">
                <div className="container-fluid left-right-gap">
                    <div className="row align-items-center destination-gap">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div className="row destination-brick">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="tour-destination-wrap">
                                    <Link href="#" className="tour-destination-box">
                                    <span className="destination-box-img"><img className="img-block" src={destiNation1.src} alt="" /></span>
                                    <div className="destination-box-dtls">
                                        <div className="destination-name">
                                        <h3>Sikkim</h3>
                                        <span className="destination-count">11 tours</span>
                                        </div>
                                        <div className="destination-text">
                                        <span className="mount-img"><img src={terrain.src} alt="" /></span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="tour-destination-wrap">
                                    <Link href="#" className="tour-destination-box">
                                    <span className="destination-box-img"><img className="img-block" src={destiNation3.src} alt="" /></span>
                                    <div className="destination-box-dtls">
                                        <div className="destination-name">
                                        <h3>Sikkim</h3>
                                        <span className="destination-count">11 tours</span>
                                        </div>
                                        <div className="destination-text">
                                        <span className="mount-img"><img src={terrain.src}  alt="" /></span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="tour-destination-wrap">
                                    <Link href="#" className="tour-destination-box">
                                    <span className="destination-box-img"><img className="img-block" src={destiNation3.src} alt="" /></span>
                                    <div className="destination-box-dtls">
                                        <div className="destination-name">
                                        <h3>nepal</h3>
                                        <span className="destination-count">11 tours</span>
                                        </div>
                                        <div className="destination-text">
                                        <span className="mount-img"><img src={terrain.src}  alt="" /></span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="tour-destination-wrap">
                                    <Link href="#" className="tour-destination-box">
                                    <span className="destination-box-img"><img className="img-block" src={destiNation4.src} alt="" /></span>
                                    <div className="destination-box-dtls">
                                        <div className="destination-name">
                                        <h3>bhutan</h3>
                                        <span className="destination-count">11 tours</span>
                                        </div>
                                        <div className="destination-text">
                                        <span className="mount-img"><img src={terrain.src}  alt="" /></span>
                                        <h4>Lorem Ipsum</h4>
                                        <div className="text-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </div>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <div className="destination-info-wrap">
                            <span className="pattern-1"><img src={pattern.src} alt="" /></span>
                            <span className="pattern-2"><img src={pattern.src} alt="" /></span>
                            <span className="pattern-3"><img src={pattern.src} alt="" /></span>
                            <div className="destination-info-dtls">
                            <h4>Location</h4>
                            <h3>Our Destination</h3>
                            <div className="destination-info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores! Iusto, quidem molestiae aliquam rem distinctio nostrum alias dignissimos omnis sunt, aut, temporibus corrupti! Ratione dolores impedit quos nam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores! Iusto, quidem molestiae aliquam rem distinctio nostrum alias dignissimos omnis sunt, aut, temporibus corrupti! Ratione dolores impedit quos nam adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, asperiores! Iusto, quidem molestiae aliquam rem distinctio nostrum alias dignissimos omnis sunt, aut, temporibus corrupti! Ratione dolores impedit quos nam adipisci. </div>
                            </div>
                            <DestinationListingCounter />
                            <Link href="#" className="orange-btn">Learn More<FiArrowRight /></Link>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="filter-section add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="filter-box-base">
                            <div className="filter-box-wrap">
                                <div className="filter-box-wrap-head">
                                    <h3>Filter By</h3>
                                </div>
                                <div className="filter-box-wrap-body">
                                    <div className="filter-box">
                                        <h4>Region</h4>
                                        <ul>
                                            <li className="checkbox">
                                                <input type="checkbox" id="region1" />
                                                <label htmlFor="region1">India</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="region2" />
                                                <label htmlFor="region2">Nepal</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="region3" />
                                                <label htmlFor="region3">Japan</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="region4" />
                                                <label htmlFor="region4">Pakistan</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="region5" />
                                                <label htmlFor="region5">London</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-box">
                                        <h4>Price</h4>
                                        <ul>
                                            <li className="checkbox">
                                                <input type="checkbox" id="price1" />
                                                <label htmlFor="price1">$5,000 to $10,000</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="price2" />
                                                <label htmlFor="price2">$5,000 to $10,000</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="price3" />
                                                <label htmlFor="price3">$5,000 to $10,000</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="price4" />
                                                <label htmlFor="price4">$5,000 to $10,000</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-box">
                                        <h4>Difficulty</h4>
                                        <ul>
                                            <li className="checkbox">
                                                <input type="checkbox" id="difficulty1" />
                                                <label htmlFor="difficulty1">Easy</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="difficulty2" />
                                                <label htmlFor="difficulty2">Moderate</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="difficulty3" />
                                                <label htmlFor="difficulty3">Difficult</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="difficulty4" />
                                                <label htmlFor="difficulty4">Extreme</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-box">
                                        <h4>Duration</h4>
                                        <ul>
                                            <li className="checkbox">
                                                <input type="checkbox" id="duration1" />
                                                <label htmlFor="duration1">01 - 03 days</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="duration2" />
                                                <label htmlFor="duration2">04 - 08 days</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="duration3" />
                                                <label htmlFor="duration3">08 - 12 days</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="duration4" />
                                                <label htmlFor="duration4">12 - 15 days</label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="duration5" />
                                                <label htmlFor="duration5">15 - 30 days</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="filter-box">
                                        <h4>Review Score</h4>
                                        <ul>
                                            <li className="checkbox">
                                                <input type="checkbox" id="reviewScore1" />
                                                <label htmlFor="reviewScore1"><div className="stars" style={{'--rating': '5'}}></div></label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="reviewScore2" />
                                                <label htmlFor="reviewScore2"><div className="stars" style={{'--rating': '4'}}></div></label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="reviewScore3" />
                                                <label htmlFor="reviewScore3"><div className="stars" style={{'--rating': '3'}}></div></label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="reviewScore4" />
                                                <label htmlFor="reviewScore4"><div className="stars" style={{'--rating': '2'}}></div></label>
                                            </li>
                                            <li className="checkbox">
                                                <input type="checkbox" id="reviewScore5" />
                                                <label htmlFor="reviewScore5"><div className="stars" style={{'--rating': '1'}}></div></label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-product-listing">
                            <div className="sortby-wrap">
                                <h4>Sort By</h4>
                                <ul>
                                    <li>
                                        <select className="form-select sortby-select">
                                            <option>No. of Reviews</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select className="form-select sortby-select">
                                            <option>Price</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select className="form-select sortby-select">
                                            <option>Popularity</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select className="form-select sortby-select">
                                            <option>Name</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select className="form-select sortby-select">
                                            <option>Duration </option>
                                        </select>
                                    </li>
                                </ul>
                            </div>
                            <div className="row g-3">
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage4.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage2.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="purple-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage3.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage4.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage2.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage3.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage4.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage2.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="product-box-base">
                                        <div className="product-box-img">
                                            <div className="green-badge-wrap">new</div>
                                                <img className="img-block" src={packageImage3.src} alt="" />
                                                <div className="price-tag-wrap">
                                                <h6>From <del>$10</del></h6>
                                                <h5>USD 1,258</h5>
                                            </div>
                                        </div>
                                        <div className="product-box-desc">
                                            <h3><Link href="#">Lorem ipsum dolor adipiscing elit, sed do</Link></h3>
                                            <div className="package-two">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</div>
                                            <ul className="destination-info-list-wrap d-flex justify-content-between">
                                                <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> 3 days</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> Difficult</li>
                                                <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> Sightseeing</li>
                                            </ul>
                                            <ul className="review-wrap">
                                                <li><div className="stars" style={{'--rating': '2.5'}} /></li>
                                                <li>5.0 of <strong>47 Reviews</strong></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer data={footerData}></Footer>
            </Suspense>
    );
}
