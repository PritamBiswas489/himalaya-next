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
                              <li><Link href="#"><RxDashboard />My Bookings</Link></li>
                              <li><Link href="#"><AiFillEdit />Reviews</Link></li>
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
                              <li><Link href="#"><RiLogoutBoxRLine />Sign Out</Link></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="front-dashboard-wrap-rgt">dashboard</div>
                    </div>
                </div>
            </section>
        <Footer data={footerData}></Footer>
        </Suspense>
    </>
  )
}
