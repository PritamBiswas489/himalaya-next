'use client'
import React, { Suspense } from 'react'
import dynamic from 'next/dynamic';

import regBg from '@/assets/images/register.jpg';
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

export default function regPage({footerData,headerMenuData}) {
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
        <section className="loginreg-page d-flex align-items-center" style={{  background: `url(${regBg.src}) center bottom / cover fixed` }}>
            <div className="menu-top-gap loginreg-page-footer-gap w-100">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-7 col-mg-7 col-sm-12 col-12">
                            <div className="loginreg-page-wrap">
                                <span className="log-reg-logo">
                                    <img className="img-block" src={logRegLogo.src} alt="" />
                                </span>
                                <h2>Register into your account</h2>
                                <div className="log-reg-text">Enter your personal details and start journey with us</div>
                                <div className="row g-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">First Name</label>
                                            <input type="text" className="form-control log-reg-input-style" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">Last Name</label>
                                            <input type="text" className="form-control log-reg-input-style" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">Email</label>
                                            <input type="text" className="form-control log-reg-input-style" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">Phone</label>
                                            <input type="text" className="form-control log-reg-input-style" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">Password</label>
                                            <input type="number" className="form-control log-reg-input-style" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="log-reg-input mb-0">
                                            <label className="logreg-lbl">Confirm Password</label>
                                            <input type="number" className="form-control log-reg-input-style" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="reg-chk">
                                    <div className="checkbox">
                                        <input type="checkbox" id="terms-condi" />
                                        <label htmlFor="terms-condi">Creating an account means you're okay with our <Link href="#">Terms of Service</Link> and <Link href="#">Privacy Statement</Link></label>
                                    </div>
                                </div>
                                <div className="submit-wrap mt-4">
                                    <button className="orange-btn">log in <FiArrowRight /></button>
                                </div>
                                <div className="alrdy-member-wrap">
                                    <Link href="#">Already a member? Sign In</Link>
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
