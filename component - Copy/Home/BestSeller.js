
import { Parallax} from "react-parallax";




// Best Seller
import tripMonth from '@/assets/images/best-seller-left.png';
import bestSeller1 from '@/assets/images/best-seller/1.jpg';
import bestSeller2 from '@/assets/images/best-seller/2.jpg';
import bestSeller3 from '@/assets/images/best-seller/3.jpg';

import bestSellerBg from '@/assets/images/bestseller.jpg';

// Destination Info Icon
import duration from '@/assets/images/icon/duration.svg';
import difficulty from '@/assets/images/icon/difficulty.svg';
import activity from '@/assets/images/icon/activity.svg';

export default function BestSeller(props){
  let price = 0;
  if (props.home.get_tour_of_the_month) {
    if (props.setting) {
      const currentDate = new Date();
      const discountStartDate = new Date(props.setting.discountStartDate);
      const discountEndDate = new Date(props.setting.discountEndDate);
      if (currentDate.getTime() >= discountStartDate.getTime() && currentDate.getTime() <= discountEndDate.getTime() && props.setting.globalDiscount > props.home.get_tour_of_the_month.discount) {
        price = props.home.get_tour_of_the_month.price - Number(((props.home.get_tour_of_the_month.price * props.setting.globalDiscount) / 100).toFixed(2));
      } else {
        price = props.home.get_tour_of_the_month.price - Number(((props.home.get_tour_of_the_month.price * props.home.get_tour_of_the_month.discount) / 100).toFixed(2));
      }
    } else {
      price = props.home.get_tour_of_the_month.price - Number(((props.home.get_tour_of_the_month.price * props.home.get_tour_of_the_month.discount) / 100).toFixed(2));
    }
    price = Math.round(price);
  }
    return (<>
    <section className="best-seller-sec">
        <Parallax bgImage={bestSellerBg.src} strength={500} className="parallax-wrap">
          <span className="trip-month"><img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/tourOfTheMonth/${props.home?.tourOfTheMonthLogo}`} alt="" /></span>
          <div className="best-seller-tag"><span dangerouslySetInnerHTML={{__html:props.home?.tourOfTheMonthText}}/></div>
        </Parallax>
        <div className="best-seller-wrap">
          <div className="container">
            <div className="best-seller-round-box-wrap">
              <div className="best-seller-round-img">
              <img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/tourOfTheMonth/${props.home?.tourOfTheMonthTourImageOne}`} alt="" />
              </div>
              <div className="best-seller-round-img">
              <img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/tourOfTheMonth/${props.home?.tourOfTheMonthTourImageTwo}`} alt="" />
              </div>
              <div className="best-seller-round-img">
              <img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/tourOfTheMonth/${props.home?.tourOfTheMonthTourImageThree}`} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-8 col-md-12 col-12">
              <div className="best-seller-text">
                <h3 dangerouslySetInnerHTML={{__html:props.home.get_tour_of_the_month?.title}}/>
                <ul className="review-wrap">
                  <li><div className="stars" style={{'--rating': props.home.get_tour_of_the_month ? props.home.get_tour_of_the_month.average_rating : 0}} /></li>
                  <li>5.0 of <strong>{props.home.get_tour_of_the_month?.get_review.length} Reviews</strong></li>
                </ul>
                <ul className="destination-info-list-wrap d-flex justify-content-between">
                  <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> {props.home.get_tour_of_the_month?.duration} {props.home.get_tour_of_the_month?.duration > 1 ? 'days' : 'day'}</li>
                  <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> {props.home.get_tour_of_the_month?.get_difficulty?.name}</li>
                  <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> {props.home.get_tour_of_the_month?.get_activities?.name}</li>
                </ul>
                <div className="best-price-wrap">
                  <h4>{props.home.get_tour_of_the_month && props.home.get_tour_of_the_month.price !== null ? <>
                  {props.home.get_tour_of_the_month && props.home.get_tour_of_the_month.price === price ? '' : <del>From ${props.home.get_tour_of_the_month?.price}</del>}</>:''}</h4>
                  <h2>USD {Math.floor(price)}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)

}