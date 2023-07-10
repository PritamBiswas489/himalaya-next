'use client'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';
import { useSnackbar } from "notistack";
import { signIn } from "next-auth/react";
import { useRouter } from 'next/router';
import { getSession } from 'next-auth/react';


import logBg from '@/assets/images/login.jpg';
import logRegLogo from "@/assets/images/logo-b.png";
const Header = dynamic(() => import('@/component/Header'));
const Footer = dynamic(() => import('@/component/Footer'));
import { pagesApi } from '@/service/Pages.service';
import { menuApi } from '@/service/Menu.service';
import styles from '@/pages/loader.module.css';

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

export default function logPage({footerData,headerMenuData}) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef  = useRef();
  const [EMAIL_ERROR,SET_EMAIL_ERROR] = useState({isVaild:false,message:''});
  const [PASSWORD_ERROR,SET_PASSWORD_ERROR] = useState({isVaild:false,message:''});
  const [LOADING, SET_LOADING] = useState(false);
  const [LOGIN_CHECKING, SET_LOGIN_CHECKING] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace('/dashboard');
      } else {
        SET_LOGIN_CHECKING(false);
      }
    });
  }, [router]);
   

  function validateEmail(){
    const email = emailRef.current.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      SET_EMAIL_ERROR({isVaild:false,message:"Enter a valid email"});
    } else if (!regex.test(email)) {
      SET_EMAIL_ERROR({isVaild:false,message:"Invalid email format"});
    }else{
        SET_EMAIL_ERROR({isVaild:true,message:""});
    }
  }
  function validatePassword(){
    const password = passwordRef.current.value;
    if (!password) {
        SET_PASSWORD_ERROR({isVaild:false,message:"Choose a 6 characters password"});
    } else if (password.length < 6) {
        SET_PASSWORD_ERROR({isVaild:false,message:"Password must be more than 6 characters"});
    }else{
        SET_PASSWORD_ERROR({isVaild:true,message:""});
    }
  }
  async function submitForLogin(){
     if(EMAIL_ERROR.isVaild && PASSWORD_ERROR.isVaild){
        SET_LOADING(true);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        const result =   await signIn('credentials', { 
            redirect: false,
            email:email,
            password:password
          });
          console.log(result);
          if(!result.error){
            
            enqueueSnackbar('Successfully logged in');
            router.replace('/dashboard');
            SET_LOADING(false);
          }else{
            enqueueSnackbar(result.error, {variant:'error'} );
            SET_LOADING(false);
          }
     }
  }
  if(LOGIN_CHECKING){
    return '';
  }
  return (
    <>
        <Suspense  fallback={ <div className={styles.loader}></div>}>
        <Header menu={headerMenuData} footer={footerData}></Header>
        <section className="loginreg-page d-flex align-items-center" style={{  background: `url(${logBg.src}) center bottom / cover fixed` }}>
            <div className="menu-top-gap loginreg-page-footer-gap w-100">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-lg-6 col-mg-6 col-sm-12 col-12">
                            <div className="loginreg-page-wrap">
                                <span className="log-reg-logo">
                                    <img className="img-block" src={logRegLogo.src} alt="" />
                                </span>
                                <h2>So let's log in</h2>
                                <div className="log-reg-input">
                                    <label className="logreg-lbl">email address</label>
                                    <input onInput={validateEmail} ref={emailRef} type="text" className="form-control log-reg-input-style" placeholder="Email Address" />
                                    {EMAIL_ERROR.message!='' && <p style={{color:'red'}}>{EMAIL_ERROR.message}</p>}
                                </div>
                                <div className="log-reg-input">
                                    <label className="logreg-lbl">Password</label>
                                    <input onInput={validatePassword} ref={passwordRef} type="password" className="form-control log-reg-input-style" placeholder="Password" />
                                    {PASSWORD_ERROR.message!='' && <p style={{color:'red'}}>{PASSWORD_ERROR.message}</p>}
                                </div>
                                <div className="forget-pass">
                                    <Link href="#">Forgot Password?</Link>
                                </div>
                                <div className="submit-wrap">
                                    <button onClick={submitForLogin} disabled={(!EMAIL_ERROR.isVaild && !PASSWORD_ERROR.isVaild) || LOADING} className="orange-btn">log in <FiArrowRight /></button>
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
