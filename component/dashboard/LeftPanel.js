'use client'
import React from 'react'
import Link from 'next/link';
import { RxDashboard } from 'react-icons/rx';
import { AiFillEdit } from "react-icons/ai";
import { RiLockPasswordLine, RiLogoutBoxRLine } from 'react-icons/ri';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';
import { BsClipboardCheck, BsStar } from 'react-icons/bs';

import style from '@/component/dashboard/LeftPanel.module.scss';


export default function LeftPanel() {
  return (
    <> 
        <div className={`${style['front-dashboard-menu']}`}>
            <div className={`${style['front-dashboard-menu-box']}`}>
                <h5>My Account</h5>
                <ul>
                    <li><Link href="#"><RxDashboard /> Dashboard</Link></li>
                    <li><Link href="#"><AiFillEdit />Edit Profile</Link></li>
                    <li><Link href="#"><RiLockPasswordLine />Change Password</Link></li>
                </ul>
            </div>
            <div className={`${style['front-dashboard-menu-box']}`}>
                <h5>Tour Booking</h5>
                <ul>
                    <li><Link href="#"><BsClipboardCheck />My Bookings</Link></li>
                    <li><Link href="#"><BsStar />Reviews</Link></li>
                </ul>
            </div>
            <div className={`${style['front-dashboard-menu-box']}`}>
                <ul className={`${style['dasboard-logout']}`}>
                    <li><Link href="#"><RiLogoutBoxRLine />Sign Out</Link></li>
                </ul>
            </div>
            <div className={`${style['front-dashboard-need-help']}`}>
                <h5>Need Help?</h5>
                <ul>
                    <li><Link href="#"><FaPhone />+91 9865321012</Link></li>
                    <li><Link href="#"><FaEnvelope />Info@HimalayanLeisure.Com</Link></li>
                </ul>
            </div>
        </div>
    </>
  )
}
