
import * as React from 'react';
import { Parallax} from "react-parallax";
import packageBg from '@/assets/images/packagebg.jpg';
// Package Image
import packageImage from '@/assets/images/package/1.jpg';
import duration from '@/assets/images/icon/duration.svg';
import difficulty from '@/assets/images/icon/difficulty.svg';
import activity from '@/assets/images/icon/activity.svg';

import parse from 'html-react-parser';
import removeTags from "@/utils/removeTags";



import TourSlider from "./TourSlider";

export default function Tourpackage(props){

    const [bestSellingOnePrice, setBestSellingOnePrice] = React.useState('');
    const [bestSellingTwoPrice, setBestSellingTwoPrice] = React.useState('');

    React.useEffect(() => {
        if (props.home) {
          if (props.home.get_best_selling_one) {
            let price = 0;
            if (props.setting) {
              const currentDate = new Date();
              const discountStartDate = new Date(props.setting.discountStartDate);
              const discountEndDate = new Date(props.setting.discountEndDate);
              if (currentDate.getTime() >= discountStartDate.getTime() && currentDate.getTime() <= discountEndDate.getTime() && props.setting.globalDiscount > props.home.get_best_selling_one.discount) {
                price = props.home.get_best_selling_one.price - Number(((props.home.get_best_selling_one.price * props.setting.globalDiscount) / 100).toFixed(2));
                price = Math.round(price);
                setBestSellingOnePrice(price);
              } else {
                price = props.home.get_best_selling_one.price - Number(((props.home.get_best_selling_one.price * props.home.get_best_selling_one.discount) / 100).toFixed(2));
                price = Math.round(price);
                setBestSellingOnePrice(price);
              }
            } else {
              price = props.home.get_best_selling_one.price - Number(((props.home.get_best_selling_one.price * props.home.get_best_selling_one.discount) / 100).toFixed(2));
              price = Math.round(price);
              setBestSellingOnePrice(price);
            }
          }
          if (props.home.get_best_selling_two) {
            let price = 0;
            if (props.setting) {
              const currentDate = new Date();
              const discountStartDate = new Date(props.setting.discountStartDate);
              const discountEndDate = new Date(props.setting.discountEndDate);
              if (currentDate.getTime() >= discountStartDate.getTime() && currentDate.getTime() <= discountEndDate.getTime() && props.setting.globalDiscount > props.home.get_best_selling_two.discount) {
                price = props.home.get_best_selling_two.price - Number(((props.home.get_best_selling_two.price * props.setting.globalDiscount) / 100).toFixed(2));
                price = Math.round(price);
                setBestSellingTwoPrice(price);
              } else {
                price = props.home.get_best_selling_two.price - Number(((props.home.get_best_selling_two.price * props.home.get_best_selling_two.discount) / 100).toFixed(2));
                price = Math.round(price);
                setBestSellingTwoPrice(price);
              }
            } else {
              price = props.home.get_best_selling_two.price - Number(((props.home.get_best_selling_two.price * props.home.get_best_selling_two.discount) / 100).toFixed(2));
              price = Math.round(price);
              setBestSellingTwoPrice(price);
            }
          }
        }
      }, [props])


    return (<>
     <section className="home-package-bg">
        <Parallax bgImage={packageBg.src} strength={500}>
        <div className="package-parallax-wrap">
          <div className="container-fluid left-right-gap">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="section-heading">
                  <h4 dangerouslySetInnerHTML={{__html:props.home?.recommendedPackageTitle}}/>
                  <h3 dangerouslySetInnerHTML={{__html:props.home?.recommendedPackageSubTitle}}/>
                  <div className="section-heading-desc" dangerouslySetInnerHTML={{__html:props.home ? removeTags(props.home.recommendedPackagedescription) : ''}}/>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="papular-package-one">
                  <div className="papular-package-one-lft">
                    <div className="papular-package-one-img">
                      <img className="img-block" src={props.home.get_best_selling_one ? `${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/tour/bannerThumb/${props.home.get_best_selling_one.bannerThumb}` : ''} alt="" />
                      <div className="price-tag-wrap">
                      {props.home.get_best_selling_one.price === bestSellingOnePrice || props.home.get_best_selling_one.price === null? <h6>From</h6> : <h6>From <del>${props.home.get_best_selling_one.price}</del></h6>}
                        <h5>USD {bestSellingOnePrice}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="papular-package-one-rgt">
                    <div className="ribbon-badge">Best Selling Package</div>
                    <h3><a href="#">{props.home.get_best_selling_one?.title}</a></h3>
                    <div className="package-onedesc"
                    dangerouslySetInnerHTML={{__html:props.home ?
                                 
                        removeTags(props.home.get_best_selling_one.description).slice(0, 130)
                         
                         : ''}}
                    
                    />
                    <ul className="destination-info-list-wrap d-flex justify-content-between">
                      <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> {props.home.get_best_selling_one?.duration} {props.home.get_best_selling_one?.duration > 1 ? 'days' : 'day'}</li>
                      <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> {props.home.get_best_selling_one?.get_difficulty?.name}</li>
                      <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> {props.home.get_best_selling_one?.get_activities?.name}</li>
                    </ul>
                    <ul className="review-wrap">
                      <li><div className="stars" style={{'--rating': props.home.get_best_selling_one ? props.home.get_best_selling_one.average_rating : 0}}></div></li>
                      <li>5.0 of <strong>{props.home.get_best_selling_one?.get_review.length} Reviews</strong></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="papular-package-one">
                  <div className="papular-package-one-lft">
                    <div className="papular-package-one-img">
                      <img className="img-block" src={props.home.get_best_selling_two ? `${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/tour/bannerThumb/${props.home.get_best_selling_two.bannerThumb}` : ''} alt="" />
                      <div className="price-tag-wrap">
                      {props.home.get_best_selling_two.price === bestSellingTwoPrice || props.home.get_best_selling_two.price === null? <h6>From</h6> : <h6>From <del>${props.home.get_best_selling_two.price}</del></h6>}
                        <h5 dangerouslySetInnerHTML={{__html:`USD ${bestSellingTwoPrice}`}}/>
                      </div>
                    </div>
                  </div>
                  <div className="papular-package-one-rgt">
                    <div className="ribbon-badge">Best Selling Package</div>
                    <h3><a href="#">{props.home.get_best_selling_two?.title}</a></h3>
                    <div className="package-onedesc" dangerouslySetInnerHTML={{__html:props.home ?
                                
                                removeTags(props.home.get_best_selling_two.description).slice(0, 130) 
                                
                               : ''}}/>
                    <ul className="destination-info-list-wrap d-flex justify-content-between">
                      <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> {props.home.get_best_selling_two?.duration} {props.home.get_best_selling_two?.duration > 1 ? 'days' : 'day'}</li>
                      <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> {props.home.get_best_selling_two?.get_difficulty?.name}</li>
                      <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> {props.home.get_best_selling_two?.get_activities?.name}</li>
                    </ul>
                    <ul className="review-wrap">
                      <li><div className="stars" style={{'--rating': props.home.get_best_selling_two ? props.home.get_best_selling_two.average_rating : 0}}></div></li>
                      <li>5.0 of <strong>{props.home.get_best_selling_two?.get_review.length} Reviews</strong></li>
                    </ul>
                  </div>
                </div>
              </div>
              
            </div>
             {props.home.get_related_tour ? <TourSlider setting={props.setting} home={props.home}/> : ''} 
          </div>
          </div>
        </Parallax>
      </section>
    
    </>)
}