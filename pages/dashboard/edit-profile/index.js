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

export default function editProfilePage({footerData,headerMenuData}) {
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
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                                            <div className="profile-input">
                                                <label className="profile-lbl">First Name</label>
                                                <input type="text" className="log-reg-input-style form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
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
                                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Day</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">01</option>
                                                            <option value="">02</option>
                                                            <option value="">03</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Month</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">Jan</option>
                                                            <option value="">Feb</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
                                                    <div className="profile-select">
                                                        <label className="profile-lbl">Year</label>
                                                        <select className="log-reg-select-style form-select">
                                                            <option value="">2021</option>
                                                            <option value="">2022</option>
                                                            <option value="">2023</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12">
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
                                        <div className="col-12">
                                          <div className="profile-update-btn">
                                            <button type="button" className="orange-btn">update profile</button>
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
