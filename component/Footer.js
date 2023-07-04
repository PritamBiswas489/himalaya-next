import React from 'react';
import style from "@/component/Footer.module.scss";
import siteLogo from '@/assets/images/logo.png';

// Footer Pattern
 
import Link from 'next/link';
import { FaPhoneSquareAlt, FaRegEnvelope, FaFacebookF, FaGooglePlusG, FaTwitter, FaLinkedin } from "react-icons/fa";

// Bank Card
import card1 from '@/assets/images/footer/1.png';
import card2 from '@/assets/images/footer/2.png';
import card3 from '@/assets/images/footer/3.png';
import card4 from '@/assets/images/footer/4.png';
// Footer member
import member1 from '@/assets/images/footer/member/1.png';
import member2 from '@/assets/images/footer/member/2.png';
import member3 from '@/assets/images/footer/member/3.png';
import member4 from '@/assets/images/footer/member/4.png';
import sslimg from '@/assets/images/footer/member/security.png';

const Footer = ({data}) => {
  return (
    <>
        <footer className={`${style['footer-section']} ${style['footer-pattern']}`}>
          <div className={`container-fluid ${style['left-right-gap']}`}>
            <div className="row">
              <div className="col-lg-2 col-md-3 colsm-12 col-12">
                <div className={`${style['footer-about']}`}>
                    <span className={`${style['footer-logo']}`}>
                     
                      <img

                                   className={`${style['img-block']}`} 
                                    
                                    src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/footerPage/columnOne/${data?.columnOneLogo}`}
                                    alt=''
                                />
                    </span>
                </div>
              </div>
              <div className="col-lg-8 col-md-6 colsm-12 col-12">
                <div className={`${style['footer-menu-list']} ${style['footer-box-heading']}`}>
                  <h5>Useful link:</h5>
                  <div className="row">
                    <div className="col-lg-3 colmd-3 col-sm-12 col-12">
                      <div className={`${style['footer-menu-list-box']}`}>
                        <ul>
                          <li><Link href="#">DESTINATIONS</Link></li>
                          <li><Link href="#">ACTIVITIES</Link></li>
                          <li><Link href="#">STYLES</Link></li>
                          <li><Link href="#">ABOUT US</Link></li>
                          <li><Link href="#">CONTACT US</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 colmd-3 col-sm-12 col-12">
                      <div className={`${style['footer-menu-list-box']}`}>
                        <ul>
                          <li><Link href="#">DESTINATIONS</Link></li>
                          <li><Link href="#">ACTIVITIES</Link></li>
                          <li><Link href="#">STYLES</Link></li>
                          <li><Link href="#">ABOUT US</Link></li>
                          <li><Link href="#">CONTACT US</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-3 colmd-3 col-sm-12 col-12">
                      <div className={`${style['footer-menu-list-box']}`}>
                        <ul>
                          <li><Link href="#">DESTINATIONS</Link></li>
                          <li><Link href="#">ACTIVITIES</Link></li>
                          <li><Link href="#">STYLES</Link></li>
                          <li><Link href="#">ABOUT US</Link></li>
                          <li><Link href="#">CONTACT US</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 colsm-12 col-12">
                <div className={`${style['footer-contact']} ${style['footer-box-heading']}`}>
                  <h5>Contact</h5>
                  <div className={`${style['addrss-text']}`}>Zertyb Music Acaademy <br></br> 1st floor Millbank Tower, <br></br> 21-24 Millbank, <br></br> London, SW1P 4QP</div>
                  <ul>
                    <li><Link href="#"><FaPhoneSquareAlt />+44 (0) 207 118 4999</Link></li>
                    <li><Link href="#"><FaRegEnvelope />info@dubaivisas.co.uk </Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={`${style['ftr-middle']}`}>
              <div className="row">
                <div className="col-lg-2 col-md-3 colsm-12 col-12">
                  <div className={`${style['footer-social']} ${style['footer-box-heading']}`}>
                      <h5>Follow Us:</h5>
                      <ul className="d-flex justify-content-between">
                        <li><Link href="#"><FaFacebookF /></Link></li>
                        <li><Link href="#"><FaGooglePlusG /></Link></li>
                        <li><Link href="#"><FaTwitter /></Link></li>
                        <li><Link href="#"><FaLinkedin /></Link></li>
                      </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-md-6 colsm-12 col-12">
                  <div className={`${style['footer-newsletter']} ${style['footer-box-heading']}`}>
                      <h5>News letter</h5>
                      <div className={`${style['letter-text']}`}>Receive regular updates on our latest news, favourite trips, trip reports and inspiration for your next adventure</div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-3 colsm-12 col-12">
                  <div className={`${style['footer-newsletter-subscribe']}`}>
                    <Link href="#" className={`${style['orange-btn']}`}>Subscribe</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style['ftr-btm']}`}>
              <div className="row justify-content-between">
                <div className="col-auto">
                  <div className={`d-flex align-items-center ${style['footer-member']} ${style['footer-box-heading']}`}>
                      <h5>We are Proud Member of:</h5>
                      <ul className="d-flex">
                        <li><span className={`${style['member-img']}`}><img src={member1.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={member2.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={member3.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={member4.src} alt="" /></span></li>
                      </ul>
                  </div>
                </div>
                <div className="col-auto">
                  <div className={`d-flex align-items-center ${style['footer-bank']} ${style['footer-box-heading']}`}>
                    <h5>We are Proud Member of:</h5>
                      <ul className="d-flex">
                        <li><span className={`${style['member-img']}`}><img src={card1.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={card2.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={card3.src} alt="" /></span></li>
                        <li><span className={`${style['member-img']}`}><img src={card4.src} alt="" /></span></li>
                      </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style['ftr-btmcopyright']}`}>
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className={`${style['footer-copy-right']}`}>
                      <div className={`${style['copyrgt-text']}`}>© 2022 by Himalayan Leisure inc Pvt Ltd by Aqualeaf It Solution Pvt. Ltd.</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className={`${style['footer-ssl']}`}>
                    <span className={`${style['member-img']}`}><img src={sslimg.src} alt="" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  )
}

export default Footer