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
import LeftPanel from '@/component/dashboard/LeftPanel';
import { BsFilterLeft } from 'react-icons/bs';

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

export default function changepasswordPage({footerData,headerMenuData}) {
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
                            <li>change password</li>
                          </ul>
                        </div>
                        <div className="front-dashboard-rgt-base">
                          <div className="front-dashboard-base-head">
                            <div className="dashboard-base-head-lft">
                              <h5>change password</h5>
                            </div>
                          </div>
                          <div className="front-dashboard-base-body">
                            <div className="change-password-wrap">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <div className="profile-input">
                                            <label className="profile-lbl">Old Password</label>
                                            <input type="number" className="log-reg-input-style form-control" placeholder="Old Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="profile-input">
                                            <label className="profile-lbl">New Password</label>
                                            <input type="number" className="log-reg-input-style form-control" placeholder="New Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="profile-input">
                                            <label className="profile-lbl">Confirm Password</label>
                                            <input type="number" className="log-reg-input-style form-control" placeholder="Confirm Password" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="profile-update-btn">
                                            <button type="button" className="orange-btn">update password</button>
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
