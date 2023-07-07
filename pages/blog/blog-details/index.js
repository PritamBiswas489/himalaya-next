'use client'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic';

import blogDetls from '@/assets/images/blog/blo-dtls.jpg';


const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import { SlCalender } from 'react-icons/sl';
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

export default function blogdetailsPage({footerData,headerMenuData}) {
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="blog-banner" style={{  background: `url(${blogDetls.src}) center top no-repeat` }}>
                <div className="blog-inner-title menu-top-gap">
                    <div className="container-fluid left-right-gap">
                        <div className="row">
                            <div className="col">
                                <h2>maet sudipta lorem ipsum sit dolora maet</h2>
                                <h4><SlCalender />May 26, 2023</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-page-sec add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">
                    <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                            <div className="blog-details-box">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptate obcaecati quos quaerat exercitationem sequi voluptatibus illum excepturi eligendi quia? Quam nesciunt minima cumque? Nesciunt assumenda vel maxime magnam repellendus.
                            Inventore delectus debitis nostrum assumenda, possimus officia. Incidunt, optio. Odit laboriosam alias totam rerum facere officiis cum libero fugiat incidunt iusto dolore, molestias ipsam. Numquam delectus hic saepe necessitatibus eaque? 
                            </div>
                        </div>
                        {/* <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                            <div className="recent-blog">
                                <div className="recent-blog-box">
                                    <Link href="#"></Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        <Footer data={footerData}></Footer>
        </Suspense>
    </>
  )
}
