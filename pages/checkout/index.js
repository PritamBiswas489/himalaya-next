'use client'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic';

import smallHeadImg from '@/assets/images/blog.jpg';


const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import Link from 'next/link';

import checkContactDetails from '@/assets/images/checkout/tourist.png';
import idcardContactDetails from '@/assets/images/checkout/id-card.png';
import noteContactDetails from '@/assets/images/checkout/note.png';
import { FaCircleInfo } from 'react-icons/fa6';
import { Tooltip } from '@nextui-org/react';

import whybook1 from '@/assets/images/whybook/whybook1.svg';
import whybook2 from '@/assets/images/whybook/whybook2.svg';
import whybook3 from '@/assets/images/whybook/whybook3.svg';
import whybook4 from '@/assets/images/whybook/whybook4.svg';
import whybook5 from '@/assets/images/whybook/whybook5.svg';
import customerSup1 from '@/assets/images/customersupport/customer-support1.svg';
import customerSup2 from '@/assets/images/customersupport/customer-support2.svg';
import customerSup3 from '@/assets/images/customersupport/customer-support3.svg';
import bookingComplete from '@/assets/images/checkout/accept.png';
import { RiPriceTag3Line } from 'react-icons/ri';

import visa from '@/assets/images/checkout/visa.png';
import mastercard from '@/assets/images/checkout/mastercard.png';
import americanexpress from '@/assets/images/checkout/american-express.png';
import jcb from '@/assets/images/checkout/jcb.png';
import CvvImage from '@/component/CvvImage';
import paypal from '@/assets/images/checkout/paypal.png'


// export async function getStaticProps(context) {
    
//     const footerData = await pagesApi.footer();
//     const headerMenu = await menuApi.menu();
  
//     return {
//       props:{      
//         footerData : footerData.data.data,
//         headerMenuData : headerMenu.data.data
//       },
//       revalidate: 60,
//     };
//   }

export default function blogPage({footerData,headerMenuData}) {
  return (
    <>
        {/* <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header> */}
            <section className="blog-banner" style={{  background: `url(${smallHeadImg.src}) center top no-repeat` }}>
                <div className="blog-inner-title menu-top-gap">
                    <div className="container-fluid left-right-gap">
                        <div className="row">
                            <div className="col">
                                <h2>Everest Chola Pass Trek</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="checkout-page-sec add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">
                    <div className="row">                        
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="tour-progress">
                                <ul>
                                    <li className="step-box step-one active complete">
                                        <span className="step-text">Select Tour</span>
                                    </li>
                                    <li className="step-box step-two active progressing">
                                        <span className="step-text">Contat Details</span>
                                    </li>
                                    <li className="step-box step-three">
                                        <span className="step-text">Payment</span>
                                    </li>
                                    <li className="step-box step-four">
                                        <span className="step-text">Complete</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="tour-progress-wrap">
                                <div className="step2" style={{display: 'none'}}>
                                    <div className="border-box">
                                        <div className="border-box-head">
                                            <div className="border-box-head-lft">
                                                <span className="border-box-head-icon">
                                                    <img src={checkContactDetails.src} alt="" />
                                                </span>
                                                <h4>Contact Details</h4>
                                            </div>
                                        </div>
                                        <div className="border-box-body">
                                            <div className="checkout-contact-dtls-wrap">
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">First Name<sup>*</sup></div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Email<sup>*</sup></div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="dtls-input">
                                                            <input type="text" className="form-control dtls-input-style" placeholder="Email@email.com" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Phone<sup>*</sup></div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="dtls-input">
                                                            <input type="text" className="form-control dtls-input-style" placeholder="+91 1234 567 890" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Country<sup>*</sup></div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="dtls-select">
                                                            <select className="form-select dtls-select-style">
                                                                <option>Country1</option>
                                                                <option>Country2</option>
                                                                <option>Country3</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box">
                                                    <div className="checkout-contact-dtls-box-lft">Address</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="dtls-input">
                                                            <input type="text" className="form-control dtls-input-style" placeholder="Line 1" />
                                                        </div>
                                                        <div className="dtls-input mt-3">
                                                            <input type="text" className="form-control dtls-input-style" placeholder="Line 2" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box">
                                                    <div className="checkout-contact-dtls-box-lft">Comments</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="dtls-textare">
                                                            <textarea className="form-control dtls-textare-style" placeholder="Leave your message" rows="5"></textarea>
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
                                                    <img src={checkContactDetails.src} alt="" />
                                                </span>
                                                <h4>Traveller Details</h4>
                                            </div>
                                        </div>
                                        <div className="border-box-body">
                                            <div className="checkout-contact-dtls-wrap">
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 1</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 2</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 3</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 4</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 5</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-contact-dtls-box align-items-center">
                                                    <div className="checkout-contact-dtls-box-lft">Traveller 6</div>
                                                    <div className="checkout-contact-dtls-box-rgt">
                                                        <div className="d-flex">
                                                            <div className="checkout-dtls-box-lft">
                                                                <div className="dtls-select">
                                                                    <select className="form-select dtls-select-style">
                                                                        <option>mr.</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="checkout-dtls-box-rgt">
                                                                <div className="dtls-input">
                                                                    <input type="text" className="form-control dtls-input-style" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-alert-wrap"><FaCircleInfo /> This is a secure and SSL encrypted payment. Your credit card details are safe.</div>
                                    <div className="step-next-prv-wrap">
                                        <ul>
                                            <li><button className="orange-btn next-btn">next</button></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="step3">
                                    <div className="border-box">
                                        <div className="border-box-head justify-content-center">
                                            <div className="border-box-head-lft">
                                                <h4>Please Select Your Preffered Additional Service</h4>
                                            </div>
                                        </div>
                                        <div className="border-box-body">
                                            <div className="checkout-payment">
                                                <div className="checkout-service-list d-flex">
                                                    <div className="checkout-service-list-lft"></div>
                                                    <div className="checkout-service-list-rgt">
                                                        <div className="service-price-wrap">
                                                            <ul className="d-flex title">
                                                                <li className="lft-service">Price</li>
                                                                <li className="rgt-service">Person</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-service-list d-flex">
                                                    <div className="checkout-service-list-lft">
                                                        <div className="checkbox service-list">
                                                            <input type="checkbox" id="list1" />
                                                            <label for="list1">Trisuli Rafting (Per Person) </label>
                                                        </div>
                                                    </div>
                                                    <div className="checkout-service-list-rgt">
                                                        <div className="service-price-wrap">
                                                            <ul className="d-flex list-person-price">
                                                                <li className="lft-service">$45 X</li>
                                                                <li className="rgt-service"><input type="text" className="form-control list-person-input" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-service-list d-flex">
                                                    <div className="checkout-service-list-lft">
                                                        <div className="checkbox service-list">
                                                            <input type="checkbox" id="list2" />
                                                            <label for="list2">Chitwan Safari (Per Person) </label>
                                                        </div>
                                                    </div>
                                                    <div className="checkout-service-list-rgt">
                                                        <div className="service-price-wrap">
                                                            <ul className="d-flex list-person-price">
                                                                <li className="lft-service">$138 X</li>
                                                                <li className="rgt-service"><input type="text" className="form-control list-person-input" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-service-list d-flex">
                                                    <div className="checkout-service-list-lft">
                                                        <div className="checkbox service-list">
                                                            <input type="checkbox" id="list3" />
                                                            <label for="list3">Mountain Flight (Per Person) </label>
                                                        </div>
                                                    </div>
                                                    <div className="checkout-service-list-rgt">
                                                        <div className="service-price-wrap">
                                                            <ul className="d-flex list-person-price">
                                                                <li className="lft-service">$192 X</li>
                                                                <li className="rgt-service"><input type="text" className="form-control list-person-input" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="checkout-service-list d-flex">
                                                    <div className="checkout-service-list-lft">
                                                        <div className="checkbox service-list">
                                                            <input type="checkbox" id="list4" />
                                                            <label for="list4">Kathmandu Tour (Per Person) </label>
                                                        </div>
                                                    </div>
                                                    <div className="checkout-service-list-rgt">
                                                        <div className="service-price-wrap">
                                                            <ul className="d-flex list-person-price">
                                                                <li className="lft-service">$86 X</li>
                                                                <li className="rgt-service"><input type="text" className="form-control list-person-input" /></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-box">
                                        <div className="border-box-head contact-travel-dtls">
                                            <div className="border-box-head-lft">
                                                <span className="border-box-head-icon">
                                                    <img src={idcardContactDetails.src} alt="" />
                                                </span>
                                                <h4>Contact Details</h4>
                                            </div>
                                            <div className="border-box-head-rgt">
                                                <span className="border-box-head-icon">
                                                    <img src={idcardContactDetails.src} alt="" />
                                                </span>
                                                <h4>Traveller Details</h4>
                                            </div>
                                        </div>
                                        <div className="border-box-body">
                                            <div className="contact-traveler-dtls">
                                                <div className="contact-traveler-dtls-lft">
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Full Name : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Email : </div>
                                                        <div className="dtls-lft-contact-rgt">email@email.com</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Phone : </div>
                                                        <div className="dtls-lft-contact-rgt">9804259865</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Country : </div>
                                                        <div className="dtls-lft-contact-rgt">India</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Address : </div>
                                                        <div className="dtls-lft-contact-rgt">AD 218 , Sector 1 , Near AD Park<br></br>Saltlake City, Kolkata 700064<br></br>West Bengal, India</div>
                                                    </div>
                                                </div>
                                                <div className="contact-traveler-dtls-rgt">
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 1 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 2 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 3 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 4 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 5 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                    <div className="traveler-dtls-lft-contact">
                                                        <div className="dtls-lft-contact-lft">Traveller 6 : </div>
                                                        <div className="dtls-lft-contact-rgt">Name Surname</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border-box">
                                        <div className="border-box-head">
                                            <div className="border-box-head-lft">
                                                <span className="border-box-head-icon">
                                                    <img src={noteContactDetails.src} alt="" />
                                                </span>
                                                <h4>Notes</h4>
                                            </div>
                                        </div>
                                        <div className="border-box-body">
                                            <div className="checkout-note-wrap">
                                                <h4>Additional Note  :</h4>
                                                <div className="note-text-wrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has  been the industry's standard dummy text ever since the 1500s, when an unknown printer took a  galley of type and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="payment-card-wrap">
                                        <h4>Please Select A Payment Method</h4>
                                        <div className="paylater-text">* If You wish to do bank transfer , Please select “Book and Pay” Later button. You will have an option to submit payment receipt on your dashboard page.</div>
                                        <div className="payment-mode-wrap">
                                            <div className="pay-mode-list">
                                                <div className="radio">
                                                    <input type="radio" id="pwc" name="paymode" />
                                                    <label for="pwc">Pay With <span className="card-text">Card</span></label>
                                                    <div className="pay-card-dtls">
                                                        <div className="payment-card-alert-wrap"><FaCircleInfo /> This is a secure and SSL encrypted payment. Your credit card details are safe.</div>
                                                        <div className="pay-card-img">
                                                            <div className="pay-card-img-lft">Credit Card Details</div>
                                                            <div className="pay-card-img-rgt">
                                                                <ul className="d-flex">
                                                                    <li><img src={visa.src} alt="" /></li>
                                                                    <li><img src={mastercard.src} alt="" /></li>
                                                                    <li><img src={americanexpress.src} alt="" /></li>
                                                                    <li><img src={jcb.src} alt="" /></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="card-input-wrap">
                                                            <div className="row g-2">
                                                                <div className="col-12">
                                                                    <div className="dtls-input">
                                                                        <label className="checkout-lbl">Full Name (on the card)</label>
                                                                        <input type="text" className="form-control dtls-input-style" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-12">
                                                                    <div className="dtls-input">
                                                                        <label className="checkout-lbl">Card Number</label>
                                                                        <input type="text" className="form-control dtls-input-style" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                    <div className="dtls-input">
                                                                        <label className="checkout-lbl">Expiration</label>
                                                                        <input type="text" className="form-control dtls-input-style" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                                                    <div className="dtls-input">
                                                                        <label className="checkout-lbl">CVV
                                                                            <span className="tooltip-wrap">
                                                                                <Tooltip content={<CvvImage />} color="invert"><FaCircleInfo /></Tooltip>
                                                                            </span>
                                                                        </label>
                                                                        <input type="text" className="form-control dtls-input-style" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pay-mode-list">
                                                <div className="radio">
                                                    <input type="radio" id="pp" name="paymode"/>
                                                    <label for="pp">Pay With <span><img src={paypal.src} alt="" /></span></label>
                                                </div>
                                            </div>
                                            <div className="pay-mode-list">
                                                <div className="radio">
                                                    <input type="radio" id="pl" name="paymode"/>
                                                    <label for="pl">Pay Later via <strong>Bank Transfer</strong></label>
                                                </div>
                                            </div>
                                            <div className="term-service">
                                                <div className="checkbox">
                                                    <input type="checkbox" id="terms" />
                                                    <label for="terms">* II agree with <Link href="#">Teerms of service</Link> and <Link href="#">Privact Statement</Link>.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pay-submit">
                                            <button className="orange-btn">submit</button>
                                        </div>
                                        <div className="booking-fees"><strong>No booking fees!</strong> You will be charged ₹90,948.93 once your booking is confirmed.</div>
                                    </div>
                                </div>
                                <div className="step4" style={{display: 'none'}}>
                                    <div className="booking-complete-wrap">
                                        <h4>Booking Complete</h4>
                                        <span className="booking-complete-img"><img src={bookingComplete.src} alt="" /></span>
                                        <h5>Thank You</h5>
                                        <div className="booking-complete-text">Your booking detail has been sent to your email.<br></br>
                                        You can check your payment status from your Dashboard</div>
                                        <div className="go-dashboard-wrap">
                                            <Link href="#" className="orange-btn">Go to my Dashboard</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="sticky-wrap">
                                <div className="tour-coupon-wrap">
                                    <div className="tour-coupon-travel-dtls">
                                        <h4>Everest Chola Pass Trek</h4>
                                        <div className="trvl-date-dtls"><strong>Travel Date :</strong> 18 January, 2023 <Link href="#">( edit )</Link></div>
                                        <div className="trvl-date-dtls"><strong>End Date :</strong> 4 February, 2023</div>
                                        <div className="trvl-date-dtls"><strong>Period :</strong> 18 Days</div>
                                        <div className="trvl-date-dtls"><strong>Traveller :</strong> 5</div>
                                        <div className="coupon-box">
                                            <div className="coupon-box-lft">
                                                <input type="text" className="form-control coupon-input" placeholder="Coupone Code" />
                                            </div>
                                            <div className="coupon-box-rgt">
                                                <button type="button" className="coupon-apply-btn">apply</button>
                                            </div>
                                        </div>
                                        <div className="view-brk-down">View Price Breakdown</div>
                                        <div className="total-price-wrap">
                                            <div className="total-price-wrap-lft">
                                                <span><RiPriceTag3Line /></span>
                                                Total Price
                                            </div>
                                            <div className="total-price-wrap-rgt">$2039.00</div>
                                        </div>
                                    </div>
                                    <div className="tour-deposit-travel-dtls">
                                        <div className="tour-deposit-travel-dtls-lft">50% Deposite</div>
                                        <div className="tour-deposit-travel-dtls-rgt">$1019.00</div>
                                    </div>
                                    <div className="coupon-next">
                                        <Link href="#">next</Link>
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
         {/* <Footer data={footerData}></Footer>
         </Suspense> */}
    </>
  )
}
