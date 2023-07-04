'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';

import logBg from '@/assets/images/login.jpg';
import logRegLogo from "@/assets/images/logo-b.png";

const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

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

export default function logPage({footerData,headerMenuData}) {
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
        <section className="loginreg-page d-flex align-items-center" style={{  background: `url(${logBg.src}) center bottom / cover fixed` }}>
            <div className="menu-top-gap loginreg-page-footer-gap w-100">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-mg-6 col-sm-12 col-12">
                            <div className="loginreg-page-wrap">
                                <span className="log-reg-logo">
                                    <img className="img-block" src={logRegLogo.src} alt="" />
                                </span>
                                <h2>So let's log in</h2>
                                <div className="log-reg-input">
                                    <label className="logreg-lbl">email address</label>
                                    <input type="text" className="form-control log-reg-input-style" placeholder="Email Address" />
                                </div>
                                <div className="log-reg-input">
                                    <label className="logreg-lbl">Password</label>
                                    <input type="number" className="form-control log-reg-input-style" placeholder="Password" />
                                </div>
                                <div className="forget-pass">
                                    <Link href="#">Forgot Password?</Link>
                                </div>
                                <div className="submit-wrap">
                                    <button className="orange-btn">log in <FiArrowRight /></button>
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
