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

export default function mybookingsPage({footerData,headerMenuData}) {
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
                            <li>my bookings</li>
                          </ul>
                        </div>
                        <div className="front-dashboard-rgt-base">
                          <div className="front-dashboard-base-head">
                            <div className="dashboard-base-head-lft">
                              <h5>bookings list</h5>
                            </div>
                          </div>
                          <div className="front-dashboard-base-body">
                            <div className="table-wrap">
                              <div className="table-responsive">
                                <table className="table">
                                  <thead>
                                    <tr>
                                      <th>Tour Name</th>
                                      <th className="text-center">Travel Date</th>
                                      <th className="text-center">Total</th>
                                      <th className="text-center">Payment Status</th>
                                      <th className="text-center">Payment Type</th>
                                      <th className="text-end">Transaction id</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td><span className="tour-title">demo345 demo55</span></td>
                                      <td className="text-center">2023-07-13</td>
                                      <td className="text-center">$12400</td>
                                      <td className="text-center">COMPLETED</td>
                                      <td className="text-center">card</td>
                                      <td className="text-end">ch_3N8lboBrTxsUWUFn124Cyyvn</td>
                                    </tr>
                                    <tr>
                                      <td><span className="tour-title">Kachanjungha Circuit Trekking</span></td>
                                      <td className="text-center">2023-07-18</td>
                                      <td className="text-center">$973.4</td>
                                      <td className="text-center">COMPLETED</td>
                                      <td className="text-center">card</td>
                                      <td className="text-end">ch_3NBBtaBrTxsUWUFn2c0Xu8X6</td>
                                    </tr>
                                    <tr>
                                      <td><span className="tour-title">Kachanjungha Circuit Trekking</span></td>
                                      <td className="text-center">2023-05-26</td>
                                      <td className="text-center">$17.4</td>
                                      <td className="text-center">COMPLETED</td>
                                      <td className="text-center">card</td>
                                      <td className="text-end">ch_3NBBzDBrTxsUWUFn0MJMcbL4</td>
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
