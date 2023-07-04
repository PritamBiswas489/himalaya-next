import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

import packageImage2 from '@/assets/images/package/2.jpg';
import packageImage3 from '@/assets/images/package/3.jpg';
import packageImage4 from '@/assets/images/package/4.jpg';
import Link from 'next/link';
import duration from '@/assets/images/icon/duration.svg';
import difficulty from '@/assets/images/icon/difficulty.svg';
import activity from '@/assets/images/icon/activity.svg';
import removeTags from '@/utils/removeTags';
import { EqualHeight, EqualHeightElement } from 'react-equal-height';

const options = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: true,
    margin: 20,
    stagePadding: 15,
    nav: true,
    dots: false,
    navElement: 'div',
    navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i> "],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      900: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  };

export default function TourSlider(props){
    return ( <div className="package-sliderwrap">
      <EqualHeight>
      <OwlCarousel className="owl-theme slider-arrow1" {...options}>
      {props.home.get_related_tour.map((element, index) => {
      return  <div className="item" key={index}>
          <div className="papular-package-two">
            <div className="papular-package-two-img">
              


              {element.tour_details.get_ribbon ? <div className={index % 2 === 0 ? 'green-badge-wrap' : 'purple-badge-wrap'}>{element.tour_details.get_ribbon.name}</div> : ''}

              <img className="imgblock" src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/tour/bannerThumb/${element.tour_details.bannerThumb}`} alt={element.tour_details.bannerThumb} />
              <div className="price-tag-wrap">
                <h6>From <del>$10</del></h6>
                <h5>USD 1,258</h5>
              </div>
            </div>
            <EqualHeightElement name="Name">
              <div className="papular-package-two-desc">
                <h3><Link href="#">{element.tour_details.title}</Link></h3>
                <div className="package-two">{removeTags(element.tour_details.description).slice(0, 165)}</div>
                <ul className="destination-info-list-wrap d-flex justify-content-between">
                  <li><span className="destination-info-list-img"><img className="img-block" src={duration.src} alt="" /></span> {element.tour_details.duration} {element.tour_details.duration > 1 ? 'days' : 'day'}</li>
                  <li><span className="destination-info-list-img"><img className="img-block" src={difficulty.src} alt="" /></span> {element?.tour_details?.get_difficulty?.name}</li>
                  <li><span className="destination-info-list-img"><img className="img-block" src={activity.src} alt="" /></span> {element?.tour_details?.get_activities?.name}</li>
                </ul>
                <ul className="review-wrap">
                  <li><div className="stars" style={{'--rating': element.tour_details.average_rating === null ? 0 : element.tour_details.average_rating}} /></li>
                  <li>5.0 of <strong>{element.tour_details.get_review.length} Reviews</strong></li>
                </ul>
              </div>
            </EqualHeightElement>
          </div>
        </div>
      })}
      </OwlCarousel>
    </EqualHeight>
    </div>);

}