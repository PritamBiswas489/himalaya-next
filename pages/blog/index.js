'use client'
import React, { Suspense, useState } from 'react'
import dynamic from 'next/dynamic';

import smallHeadImg from '@/assets/images/blog.jpg';
import blogImg1 from '@/assets/images/blog/blog1.jpg';
import blogImg2 from '@/assets/images/blog/blog2.jpg';
import blogImg3 from '@/assets/images/blog/blog3.jpg';
import blogImg4 from '@/assets/images/blog/blog4.jpg';


const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';
import Link from 'next/link';
import { SlCalender } from "react-icons/sl";
import { RxTriangleRight } from 'react-icons/rx';

const EqualHeight = dynamic(() => import('react-equal-height').then(res=>res.EqualHeight), {
    ssr: false,
  });
  const EqualHeightElement = dynamic(() => import('react-equal-height').then(res=>res.EqualHeightElement), {
    ssr: false,
  });



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

export default function blogPage({footerData,headerMenuData}) {
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
            <section className="blog-banner" style={{  background: `url(${smallHeadImg.src}) center top no-repeat` }}></section>
            <section className="blog-page-sec add-footer-pattern-gap">
                <div className="container-fluid left-right-gap">
                    <div className="row justify-content-center add-blog-filter">
                        <div className="col-xl-5 col-lg-7 col-md-8 col-sm-12 col-12">
                            <div className="blog-page-heading">
                                <h3>Blog</h3>
                                <div className="blog-page-heading-text">What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown simply dummy text of the printing</div>
                            </div>
                        </div>
                        <div className="blog-filter-wrap">
                            <div className="blog-select">
                                <select className="blog-select-style form-select">
                                    <option value=""> Select 1</option>
                                    <option value=""> Select 2</option>
                                    <option value=""> Select select 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <EqualHeight>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="blog-box">
                                    <span className="blogimg">
                                        <img className="img-block" src={blogImg1.src} alt="" />
                                        <span className="blog-author-name">kartick gain</span>
                                    </span>
                                    <div className="bloginfo">
                                        <h4>
                                            <Link href="#">sudipta lorem ipsum sit dolora maet</Link>
                                        </h4>
                                        <span className="bolg-post-date"><SlCalender />May 26, 2023</span>
                                        <EqualHeightElement name="bloginfotext">
                                            <div className="bloginfo-text">sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet sudipta lo...</div>
                                        </EqualHeightElement>
                                        <Link href="#" className="visit-blog"><RxTriangleRight />read more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="blog-box">
                                    <span className="blogimg">
                                        <img className="img-block" src={blogImg2.src} alt="" />
                                    </span>
                                    <div className="bloginfo">
                                        <h4>
                                            <Link href="#">lorem ipsum sit dolora maet sudipta lorem ipsum sit dolora maet</Link>
                                        </h4>
                                        <span className="bolg-post-date"><SlCalender />May 26, 2023</span>
                                        <EqualHeightElement name="bloginfotext">
                                            <div className="bloginfo-text">phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB. Frequently used operations (managing databases, tables, columns, relations, indexes, users, permissions, etc) can be...</div>
                                        </EqualHeightElement>
                                        <Link href="#" className="visit-blog"><RxTriangleRight />read more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="blog-box">
                                    <span className="blogimg">
                                        <img className="img-block" src={blogImg3.src} alt="" />
                                    </span>
                                    <div className="bloginfo">
                                        <h4>
                                            <Link href="#">maet sudipta lorem ipsum sit dolora maet</Link>
                                        </h4>
                                        <span className="bolg-post-date"><SlCalender />May 26, 2023</span>
                                        <EqualHeightElement name="bloginfotext">
                                            <div className="bloginfo-text">This is only for testing purposes.</div>
                                        </EqualHeightElement>
                                        <Link href="#" className="visit-blog"><RxTriangleRight />read more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                                <div className="blog-box">
                                    <span className="blogimg">
                                        <img className="img-block" src={blogImg4.src} alt="" />
                                    </span>
                                    <div className="bloginfo">
                                        <h4>
                                            <Link href="#">sit amet, consectetur</Link>
                                        </h4>
                                        <span className="bolg-post-date"><SlCalender />May 26, 2023</span>
                                        <EqualHeightElement name="bloginfotext">
                                            <div className="bloginfo-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed. Purus gravida quis blandit turpis cursus. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Eu augue ut lectus ar</div>
                                        </EqualHeightElement>
                                        <Link href="#" className="visit-blog"><RxTriangleRight />read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EqualHeight>
                </div>
            </section>
            <Footer data={footerData}></Footer>
        </Suspense>
    </>
  )
}
