'use client'
import React from 'react'
import style from '@/component/CvvImage.module.scss';
import cvvImg from '@/assets/images/checkout/cvv-indicator.jpg';

function CvvImage() {
  return (
    <>
        <div className={`${style['cvv-img']}`}>
            <img src={cvvImg.src} />
        </div>
    </>
  )
}

export default CvvImage