'use client'
import React, { useEffect, useState } from 'react'
import style from '@/component/Header.module.scss';
import { BsTelephoneFill } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import siteLogo from '@/assets/images/logo.png';
import { FiArrowRight } from "react-icons/fi";

import { RxDashboard } from 'react-icons/rx';
import { RiLogoutBoxRLine } from 'react-icons/ri';
 
import Link from 'next/link';



const Header = ({menu,footer}) => {

    // Sticky Menu Area
useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("#main_header");
    const scrollTop = window.scrollY;
    scrollTop >= 2 ? header?.classList?.add(`${style['scroll-on']}`) : header?.classList?.remove(`${style['scroll-on']}`);
  };

// Mobile Menu Hamberger
const [hamBurger, hamBurgerOpen] = useState(false);
const [subMenu1, setMenuOpen1] = useState(false);
const [subMenu2, setMenuOpen2] = useState(false);
const [subMenu3, setMenuOpen3] = useState(false);
const [currentMegaMenu,setCurrentMegaMenu] =  useState('');

useEffect(()=>{
   setCurrentMegaMenu(menu.destination[0].slug);
},[])
function handleBigMenu(slug){
    setCurrentMegaMenu(slug)
}
function chunkArrayInGroups(arr, size) {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  }
  


  return (
    <>
    <header id="main_header" className={`${style['main-header']}`}>
        <div className="container-fluid left-right-gap">
            <div className="row align-items-center justify-content-between">
                <div className={`${style['logo']}`}>
                    <Link href={'/'}>
                        <img className="img-block" src={siteLogo.src} alt="" />
                    </Link>
                </div>
                <div className="col">
                    <div className="mega-menu-main-wrap">
                        <div className={`d-flex ${style['navArea']}`}>
                            <nav id="res_nav" className={`${style['navigation']} ${hamBurger === true && style['menu-open']}`}>
                                <div className={`${style['front-hamburger-wrap']}`}>
                                    <div className={`${style['nav-trigger']} ${hamBurger === true && style['active']}`}
                                    onClick={() => {
                                        hamBurgerOpen(!hamBurger);
                                    }}
                                    >
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <ul className="d-flex justify-content-end">
                                    <li className={`${style['sub_menu_open']} ${subMenu1 === true && style['sub-open']}`}>
                                        <Link href="javascript:;"
                                        onClick={() => {
                                            setMenuOpen1(!subMenu1);
                                            setMenuOpen2(false);
                                            setMenuOpen3(false);
                                        }}
                                        >DESTINATIONS</Link>
                                        <div className={`${style['submenu']}`}>
                                            <div className={`${style['submenu-wrap-big']}`}>
                                                <div className={`${style['submenu-wrap']}`}>
                                                    <div className={`${style['submenu-wrap-lft']}`}>
                                                        <ul>
                                                        {menu.destination && menu.destination.map((_element,_index)=>(<li key={_element.destId}><Link href={`#`} onClick={(e)=>{e.preventDefault(); handleBigMenu(_element.slug)}}>{_element.name}</Link></li>))}
                                                        </ul>
                                                    </div>
                                                    {menu.destination && menu.destination.map((_element,_index)=>{
                                                       return (_element.slug === currentMegaMenu && <div key={`sub${_element.slug}`}  className={`${style['submenu-wrap-rgt']}`}>
                                                       <div className={`${style['plan-tripwrap']}`}>
                                                           <Link href={`/destination/${_element.slug}`} className={`${style['orange-btn']}`}>plan your trip to {_element.name}<FiArrowRight /></Link>
                                                       </div>
                                                       <div className={`${style['nepal-tour-menu']}`}>
                                                       {_element.activities && chunkArrayInGroups(_element.activities, 2).map(
                                                      (_elementa, _indexa) => (<div className={`${style['nepal-tour-menu-wrap-box']}`}>
                                                      {_elementa && _elementa.map((elementai, indexaoi) => (<div className={`${style['nepal-tour-menu-lft']}`}>
                                                          <div className={`${style['nepal-tour-menu-box']}`}>
                                                              <h4 dangerouslySetInnerHTML={{__html:elementai.name}}/>
                                                              <ul>
                                                                {elementai.tour && 
                                                                elementai.tour.map((elementtour,indextour)=>(<li><Link href={`${_element.slug}/${elementtour.slug}`}>{elementtour.title} <small>{elementtour.duration} Days</small></Link></li>))
                                                                }
                                                                  
                                                                  
                                                              </ul>
                                                          </div>
                                                      </div>))}
                                                      
                                                      
                                                  </div>))}
                                                        
                                                           
                                                           
                                                       </div>
                                                   </div>)
                                                    })}
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`${style['sub_menu_open']} ${subMenu2 === true && style['sub-open']}`}>
                                        <Link href="javascript:;"
                                        onClick={() => {
                                            setMenuOpen1(false);
                                            setMenuOpen2(!subMenu2);
                                            setMenuOpen3(false);
                                        }}
                                        >ACTIVITIES</Link>
                                        <div className={`${style['submenu']}`}>
                                            <div className={`${style['submenu-wrap-small']}`}>
                                                <div className={`${style['submenu-wrap-small-box']}`}>
                                                    <ul className="d-flex flex-wrap row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                                                        {menu.activities && menu.activities.map((_element,_index)=>(<li key={_element.id}><Link href={`/activity/${_element.slug}`}>{_element.name}</Link></li>))}
                                                        
                                                        
                                                        
                                                         
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className={`${style['sub_menu_open']} ${subMenu3 === true && style['sub-open']}`}>
                                        <Link href="javascript:;"
                                        onClick={() => {
                                            setMenuOpen1(false);
                                            setMenuOpen2(false);
                                            setMenuOpen3(!subMenu3);
                                        }}
                                        >SUPPORT</Link>
                                        <div className={`${style['submenu']}`}>
                                            <div className={`${style['submenu-wrap-small']}`}>
                                                <div className={`${style['submenu-wrap-small-two']}`}>
                                                    <div className={`${style['submenu-wrap-small-two-lft']} ${style['both-small-two-menu']}`}>
                                                        <h4>COMPANY RELATED</h4>
                                                        <ul>
                                                            <li><Link href={'/support/about'}>About</Link></li>
                                                            <li><Link href={`/team-list`}>Team</Link></li>
                                                            <li><Link href={`/support/our-services`}>Our Services</Link></li>
                                                            <li><Link href={`/support/financial-security`}>Financial Security</Link></li>
                                                            <li><Link href={`/support/partner-with-us`}>Partner With Us</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className={`${style['submenu-wrap-small-two-rgt']} ${style['both-small-two-menu']}`}>
                                                        <h4>GENERAL QUERIES</h4>
                                                        <ul>
                                                            <li><Link href={`/support/destination-guide`}>Destination Guide</Link></li>
                                                            <li><Link href="#">Tripadvicer Reviews</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li><Link href={'/blog'}>BLOG</Link></li>
                                    <li><Link href={'/faq'}>FAQ</Link></li>
                                    <li><Link href={'/contact'}>CONTACT US</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className={`${style['account-area']}`}>
                    <ul className="d-flex align-items-center">
                        <li><a href="#"><BsTelephoneFill />{footer?.contact}</a></li>
                        <li>
                            <a href="javascript:;"><FaUserLarge /></a>
                            <div className={`${style['after-login-menu-wrap']}`}>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <RxDashboard />
                                            my dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <RiLogoutBoxRLine />
                                            logout
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header