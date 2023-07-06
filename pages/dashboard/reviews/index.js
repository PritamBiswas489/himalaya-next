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
import LeftPanel from '@/component/dashboard/LeftPanel';
import { RiCloseLine } from 'react-icons/ri';
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

export default function reviewsListPage({footerData,headerMenuData}) {
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
                            <li>reviews</li>
                          </ul>
                        </div>
                        <div className="front-dashboard-rgt-base">
                          <div className="front-dashboard-base-head">
                            <div className="dashboard-base-head-lft">
                              <h5>reviews list</h5>
                            </div>
                          </div>
                          <div className="front-dashboard-base-body">
                            <div className="table-wrap">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Tour Name</th>
                                      <th className="text-center">Review Date</th>
                                      <th className="text-center">Rating</th>
                                      <th className="text-center">Review</th>
                                      <th className="text-end">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><span className="tour-title">demo345 demo55</span></td>
                                      <td className="text-center">2023-07-13</td>
                                      <td className="text-center"><div className="stars" style={{'--rating': 2.6}} /> <strong>(2.6)</strong></td>
                                      <td className="text-center"></td>
                                      <td className="text-end">ch_3N8lboBrTxsUWUFn124Cyyvn</td>
                                    </tr>
                                  </tbody>
                                </table>
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
