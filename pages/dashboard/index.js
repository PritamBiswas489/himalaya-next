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
import { RxDashboard } from 'react-icons/rx';
import { RiCloseLine } from 'react-icons/ri';
import { BsFilterLeft } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

import LeftPanel from '@/component/dashboard/LeftPanel';



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

export default function dashboardPage({footerData,headerMenuData}) {
  const [leftMenuHit, setLeftMenuHit] = useState(false);
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="front-dashboard" style={{  background: `url(${smallHeadImg.src}) center top no-repeat` }}></section>
            <section>
                <div className="add-footer-pattern-gap">
                    <div className="front-dashboard-wrap">                      
                      <div className={`front-dashboard-wrap-lft ${leftMenuHit === true && 'left-open'}`}>
                        <button className="dashboard-menu d-lg-none"
                          onClick={() => {
                            setLeftMenuHit(false);
                          }}
                        ><RiCloseLine /></button>
                          <LeftPanel />
                        {/* <div className="front-dashboard-menu">
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
                        </div> */}
                      </div>
                      <div className="front-dashboard-wrap-rgt">
                      <button className="dashboard-open-menu d-lg-none"
                          onClick={() => {
                            setLeftMenuHit(true);
                          }}
                        ><BsFilterLeft /></button>
                        <div className="dasboard-bedcrumb">
                          <ul>
                            <li><Link href="#"><RxDashboard />Dashboard</Link></li>
                            <li>Dashboard</li>
                          </ul>
                        </div>
                        <div className="front-dashboard-rgt-base">
                          <div className="front-dashboard-base-head">
                            <div className="dashboard-base-head-lft">
                              <h5>My Profile</h5>
                            </div>
                            <div className="dashboard-base-head-rgt">
                              <Link href="#"><FiEdit />edit profile</Link>
                            </div>
                          </div>
                          <div className="front-dashboard-base-body">
                            <div className="dashboard-profile-wrap">
                              <div className="dashboard-profile-wrap-lft">
                                <span className="profile-image">
                                  <img className="img-block" src="https://achishayari.com/wp-content/uploads/2023/04/Cute-DP-Image.webp" alt="" />
                                </span>
                              </div>
                              <div className="dashboard-profile-wrap-rgt">
                                <div className="profile-dtls">
                                  <ul>
                                    <li>
                                      <div className="profile-dtls-title">Name</div>
                                      <div className="profile-dtls-info">pritam biswas</div>
                                    </li>
                                    <li>
                                      <div className="profile-dtls-title">Gender</div>
                                      <div className="profile-dtls-info">Male</div>
                                    </li>
                                    <li>
                                      <div className="profile-dtls-title">Birth Date</div>
                                      <div className="profile-dtls-info">6/22/2023</div>
                                    </li>
                                    <li>
                                      <div className="profile-dtls-title">Country</div>
                                      <div className="profile-dtls-info">India</div>
                                    </li>
                                    <li>
                                      <div className="profile-dtls-title">Email</div>
                                      <div className="profile-dtls-info">pritam.biswas489@gmail.com</div>
                                    </li>
                                    <li>
                                      <div className="profile-dtls-title">Phone</div>
                                      <div className="profile-dtls-info">1234567890</div>
                                    </li>
                                  </ul>
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
