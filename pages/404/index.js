'use client'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic';

import errorPage from '@/assets/images/404.jpg';
import Link from 'next/link';


const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));
import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';




// export async function getStaticProps(context) {
    
//     const footerData = await pagesApi.footer();
//     const headerMenu = await menuApi.menu();
  
//     return {
//       props:{      
//         footerData : footerData.data.data,
//         headerMenuData : headerMenu.data.data
//       },
//       revalidate: 60,
//     };
//   }

export default function ErrorPage({footerData,headerMenuData}) {
  return (
    <>
        {/* <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header> */}
            <section className="error-banner" style={{  background: `url(${errorPage.src}) center top no-repeat` }}>
                <div className="erroe-page-title menu-top-gap">
                    <div className="container-fluid left-right-gap">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-6 col-sm-12 col-12">
                                <div className="eror-page-text">
                                    <h2>404</h2>
                                    <h3>Page Not  found</h3>
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                                    <ul>
                                        <li><Link href="#">Back to Home</Link></li>
                                        <li><Link href="#">Contact Us</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
         {/* <Footer data={footerData}></Footer>
         </Suspense> */}
    </>
  )
}
