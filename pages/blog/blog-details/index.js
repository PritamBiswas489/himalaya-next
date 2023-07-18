'use client'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic';

import blogDetls from '@/assets/images/blog/blo-dtls.jpg';
import blogImg1 from '@/assets/images/blog/blog1.jpg';
import blogImg2 from '@/assets/images/blog/blog2.jpg';
import whybook1 from '@/assets/images/whybook/whybook1.svg';
import whybook2 from '@/assets/images/whybook/whybook2.svg';
import whybook3 from '@/assets/images/whybook/whybook3.svg';
import whybook4 from '@/assets/images/whybook/whybook4.svg';
import whybook5 from '@/assets/images/whybook/whybook5.svg';
import customerSup1 from '@/assets/images/customersupport/customer-support1.svg';
import customerSup2 from '@/assets/images/customersupport/customer-support2.svg';
import customerSup3 from '@/assets/images/customersupport/customer-support3.svg';


// const Header = dynamic(() => import('@/component/Header'));
// const Footer = dynamic(() => import('@/component/Footer'));

// import { pagesApi } from '@/service/Pages.service';
// import { menuApi } from '@/service/Menu.service';
// import styles from '@/pages/loader.module.css';
import { SlCalender } from 'react-icons/sl';
import Link from 'next/link';



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

export default function blogdetailsPage({footerData,headerMenuData}) {
  return (
    <>
        {/* <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header> */}
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
                    <div className="row g-3">
                        <div className="col-lg-8 col-md-7 col-sm-12 col-12">
                            <div className="blog-details-box">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo voluptate obcaecati quos quaerat exercitationem sequi voluptatibus illum excepturi eligendi quia? Quam nesciunt minima cumque? Nesciunt assumenda vel maxime magnam repellendus.
                            Inventore delectus debitis nostrum assumenda, possimus officia. Incidunt, optio. Odit laboriosam alias totam rerum facere officiis cum libero fugiat incidunt iusto dolore, molestias ipsam. Numquam delectus hic saepe necessitatibus eaque? 
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-5 col-sm-12 col-12">
                            <div className="recent-blog">
                                <div className="recent-blog-head">
                                    <h5>Recent Post</h5>
                                </div>
                                <div className="recent-blog-box">
                                    <Link href="#">
                                        <div className="recent-blog-img">
                                            <span className="recent-img-box">
                                                <img className="img-block" src={blogImg1.src} alt="" />
                                            </span>
                                        </div>
                                        <div className="recent-blog-text">
                                            <span><SlCalender />May 26, 2023</span>
                                            <h5>maet sudipta lorem ipsum sit dolora maet</h5>
                                        </div>
                                    </Link>
                                </div>
                                <div className="recent-blog-box">
                                    <Link href="#">
                                        <div className="recent-blog-img">
                                            <span className="recent-img-box">
                                                <img className="img-block" src={blogImg2.src} alt="" />
                                            </span>
                                        </div>
                                        <div className="recent-blog-text">
                                            <span><SlCalender />May 26, 2023</span>
                                            <h5>maet sudipta lorem ipsum sit dolora maet</h5>
                                        </div>
                                    </Link>
                                </div>
                                <div className="recent-blog-box">
                                    <Link href="#">
                                        <div className="recent-blog-img">
                                            <span className="recent-img-box">
                                                <img className="img-block" src={blogImg1.src} alt="" />
                                            </span>
                                        </div>
                                        <div className="recent-blog-text">
                                            <span><SlCalender />May 26, 2023</span>
                                            <h5>maet sudipta lorem ipsum sit dolora maet</h5>
                                        </div>
                                    </Link>
                                </div>
                                <div className="recent-blog-box">
                                    <Link href="#">
                                        <div className="recent-blog-img">
                                            <span className="recent-img-box">
                                                <img className="img-block" src={blogImg2.src} alt="" />
                                            </span>
                                        </div>
                                        <div className="recent-blog-text">
                                            <span><SlCalender />May 26, 2023</span>
                                            <h5>maet sudipta lorem ipsum sit dolora maet</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="why-book-us mt-4">
                                <div className="why-book-us-head">
                                    <h6>Why Book With Us?</h6>
                                </div>
                                <div className="why-book-us-body">
                                    <ul>
                                        <li>
                                            <span className="why-book-us-img">
                                                <img src={whybook1.src} alt="" />
                                            </span>
                                            <div className="why-book-us-text">Experienced and Efficient Team</div>
                                        </li>
                                        <li>
                                            <span className="why-book-us-img">
                                                <img src={whybook2.src} alt="" />
                                            </span>
                                            <div className="why-book-us-text">Reasonable Prices</div>
                                        </li>
                                        <li>
                                            <span className="why-book-us-img">
                                                <img src={whybook3.src} alt="" />
                                            </span>
                                            <div className="why-book-us-text">24/7 Customer Support</div>
                                        </li>
                                        <li>
                                            <span className="why-book-us-img">
                                                <img src={whybook4.src} alt="" />
                                            </span>
                                            <div className="why-book-us-text">Numerous Tour Selections</div>
                                        </li>
                                        <li>
                                            <span className="why-book-us-img">
                                                <img src={whybook5.src} alt="" />
                                            </span>
                                            <div className="why-book-us-text">Highly Rated Experiences</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="customer-support mt-4">
                                <div className="customer-support-head">
                                    <h6>24/7 Customer Support</h6>
                                </div>
                                <div className="customer-support-body">
                                    <ul>
                                        <li>
                                            <span className="customer-support-img">
                                                <img src={customerSup1.src} alt="" />
                                            </span>
                                            <div className="customer-support-text">+977 98510 94155</div>
                                        </li>
                                        <li>
                                            <span className="customer-support-img">
                                                <img src={customerSup2.src} alt="" />
                                            </span>
                                            <div className="customer-support-text">info@himalayanleisure.com</div>
                                        </li>
                                        <li>
                                            <span className="customer-support-img">
                                                <img src={customerSup3.src} alt="" />
                                            </span>
                                            <div className="customer-support-text">09 to 06 Customer Support (Mon - Fri)</div>
                                        </li>
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
