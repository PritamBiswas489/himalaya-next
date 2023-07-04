'use client'
import React , { Suspense } from 'react';
import dynamic from 'next/dynamic';

 import styles from './loader.module.css';


import { destinationApi } from '@/service/Destination.service';
import { tourApi } from '@/service/Tour.service';
import { reviewApi } from '@/service/Review.service';
import { pagesApi } from '@/service/Pages.service';
import { widgetsApi } from '@/service/Widgets.service';
import { activityApi } from '@/service/Activity.service';
import { menuApi } from '@/service/Menu.service';

if (typeof window !== 'undefined') {
	window.$ = window.jQuery = require('jquery');
}
const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));

const HomeBannerComp = dynamic(() => import('@/component/Home/HomeBannerComp'));
const OurDestination = dynamic(() => import('@/component/Home/OurDestination'));
const Populartours = dynamic(() => import('@/component/Home/Populartours'));
const OurWork = dynamic(() => import('@/component/Home/Ourwork'));
const Tourpackage = dynamic(() => import('@/component/Home/Tourpackage'));
const About = dynamic(() => import('@/component/Home/About'));
const BestSeller = dynamic(() => import('@/component/Home/BestSeller'));
const ClientSays = dynamic(() => import('@/component/Home/ClientSays'));


export async function getStaticProps(context) {
  const homePage = await pagesApi.home();
  const destination = await destinationApi.list();
  const popularTour = await tourApi.popularTourList();
  const clientSays = await reviewApi.list();
  const countdown = await widgetsApi.countDown();
  const listActivity = await activityApi.listActivity();
  const footerData = await pagesApi.footer();
  const headerMenu = await menuApi.menu();

  return {
    props:{
      home: homePage.data.data,
      destinationList:destination.data.data,  
      popularTourList:popularTour.data.data,
      setting: popularTour.data.setting,
      reviewList:clientSays.data.data,
      countdown:countdown.data.data,
      activityList:listActivity.data.data ,
      footerData : footerData.data.data,
      headerMenuData : headerMenu.data.data
    },
    revalidate: 60,
  };
}

export default function Home({home, destinationList,popularTourList,setting,reviewList,countdown,activityList,footerData,headerMenuData}) {
   
  
  
  return (
    <>  
    <Suspense  fallback={ <div className={styles.loader}></div>}>
    <Header menu={headerMenuData} footer={footerData}></Header>
            <HomeBannerComp home={home}/>
            <OurDestination destination={destinationList} home={home} countdown={countdown}/>
            { popularTourList  ? <Populartours popularTour={popularTourList} setting={setting} home={home}/> : '' }  
            { activityList  ? <OurWork home={home} activityList={activityList}/> : ''}
            <Tourpackage setting={setting} home={home}/>
            <About  home={home}/>
            <BestSeller setting={setting} home={home}/>
            { reviewList  ? <ClientSays review={reviewList} home={home}/> : ''}
      <Footer data={footerData}></Footer>
      </Suspense>
    
    </>
  )
}
