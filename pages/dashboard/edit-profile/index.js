'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';

import smallHeadImg from '@/assets/images/blog.jpg';


const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { BsClipboardCheck, BsStar } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

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

export default function editProfilePage({footerData,headerMenuData}) {
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="front-dashboard" style={{  background: `url(${smallHeadImg.src}) center top no-repeat` }}></section>
            <section>
                <div className="add-footer-pattern-gap">
                    <div className="front-dashboard-wrap">
                      <div className="front-dashboard-wrap-lft">
                        <div className="front-dashboard-menu">
                          <div className="front-dashboard-menu-box">
                            <h5>My Account</h5>
                            <ul>
                              <li><Link href="#"><RxDashboard /> Dashboard</Link></li>
                              <li><Link href="#"><AiFillEdit />Edit Profile</Link></li>
                              <li><Link href="#"><RiLockPasswordLine />Change Password</Link></li>
                            </ul>
                          </div>
                          <div className="front-dashboard-menu-box">
                            <h5>Tour Booking</h5>
                            <ul>
                              <li><Link href="#"><BsClipboardCheck />My Bookings</Link></li>
                              <li><Link href="#"><BsStar />Reviews</Link></li>
                            </ul>
                          </div>
                          <div className="front-dashboard-menu-box">
                            <ul className="dasboard-logout">
                              <li><Link href="#"><RiLogoutBoxRLine />Sign Out</Link></li>
                            </ul>
                          </div>
                          <div className="front-dashboard-need-help">
                            <h5>Need Help?</h5>
                            <ul>
                              <li><Link href="#"><FaPhone />+91 9865321012</Link></li>
                              <li><Link href="#"><FaEnvelope />Info@HimalayanLeisure.Com</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="front-dashboard-wrap-rgt">
                        <div className="dasboard-bedcrumb">
                          <ul>
                            <li><Link href="#"><RxDashboard />Dashboard</Link></li>
                            <li>edit Profile</li>
                          </ul>
                        </div>
                        <div className="front-dashboard-rgt-base">
                          <div className="front-dashboard-base-head">
                            <div className="dashboard-base-head-lft">
                              <h5>edit Profile</h5>
                            </div>
                          </div>
                          <div className="front-dashboard-base-body">
                            <div className="edit-profile-wrap">
                                <div className="edit-profile-wrap-lft"></div>
                                <div className="edit-profile-wrap-rgt">
                                    <div className="row g-3">
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="profile-input">
                                                <label className="profile-lbl">First Name</label>
                                                <input type="text" className="log-reg-input-style form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="profile-input">
                                                <label className="profile-lbl">Last Name</label>
                                                <input type="text" className="log-reg-input-style form-control" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="profile-input">
                                                <label className="profile-lbl">Email</label>
                                                <input type="text" className="log-reg-input-style form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="row g-3">
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Day</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">01</option>
                                                            <option value="">02</option>
                                                            <option value="">03</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Month</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">Jan</option>
                                                            <option value="">Feb</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Year</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">2021</option>
                                                            <option value="">2022</option>
                                                            <option value="">2023</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Gender</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">Male</option>
                                                            <option value="">Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="profile-input">
                                                <label className="profile-lbl">Phone Number</label>
                                                <input type="text" className="log-reg-input-style form-control" placeholder="Phone Number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <div className="profile-select">
                                                <label className="profile-lbl">Country</label>
                                                <select className="log-reg-select-style form-select">
                                                    <option value="">Country 1</option>
                                                    <option value="">Country 2</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
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
    </>
  )
}
