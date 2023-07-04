 import Link from 'next/link';
import duration from '@/assets/images/icon/duration.svg';
import difficulty from '@/assets/images/icon/difficulty.svg';
import activity from '@/assets/images/icon/activity.svg';
import { FiArrowRight } from "react-icons/fi";

export default function Populartours(props){

    return (<section className="home-popular-section add-waves-wrap">
    <div className="waves-wrap home-waves">
      <svg className="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x={48} y={0} fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x={48} y={5} fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x={48} y={7} fill="#fff" />
        </g>
      </svg>
    </div>
    <div className="container-fluid left-right-gap">
      <div className="row">
        <div className="col-12">
          <div className="section-heading">
            <h4 dangerouslySetInnerHTML={{__html:props.home?.mostPopularTitle}}/>
            <h3 dangerouslySetInnerHTML={{__html:props.home?.mostPopularSubTitle}}/>
          </div>
        </div>
      </div>
      <div className="row g-3">

      {props.popularTour.map((element, index) => {
            let price = 0;
            if (props.setting) {
            const currentDate = new Date();
            const discountStartDate = new Date(props.setting.discountStartDate);
            const discountEndDate = new Date(props.setting.discountEndDate);
            if (currentDate.getTime() >= discountStartDate.getTime() && currentDate.getTime() <= discountEndDate.getTime() && props.setting.globalDiscount > element.discount) {
                price = element.price - Number(((element.price * props.setting.globalDiscount) / 100).toFixed(2));
            } else {
                price = element.price - Number(((element.price * element.discount) / 100).toFixed(2));
            }
            } else {
            price = element.price - Number(((element.price * element.discount) / 100).toFixed(2));
            }
            price = Math.round(price);

              return  <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12" key={index}>
              <div className="popular-destination-wrap">
                <Link href={'/'} className="popular-destination-box">
                  <span className="popular-destination-img">
                    <img className="img-block" src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/tour/bannerThumb/${element.bannerThumb}`} alt={element.bannerThumb}   />
                  </span>
                  <div className="popular-destination-text">
                    <div className="popular-txt-top">
                      <div className="popular-title">
                        <h4 dangerouslySetInnerHTML={{__html:element.title}}/>
                      </div>
                      <div className="after-hover">
                        <div className="after-hover-text" dangerouslySetInnerHTML={{__html:element.content}}/>
                        <ul className="popular-destination-info d-flex justify-content-between">
                          <li><span className="popular-destination-info-img"><img className="img-block" src={duration.src} alt="" /></span>  {element.duration} {element.duration > 1 ? 'days' : 'day'}</li>
                          <li><span className="popular-destination-info-img"><img className="img-block" src={difficulty.src} alt="" /></span> {element?.get_difficulty?.name}</li>
                          <li><span className="popular-destination-info-img"><img className="img-block" src={activity.src} alt="" /></span> {element?.get_activities?.name}</li>
                        </ul>
                      </div>
                    </div>
                    <div className="popular-price-wrap">
                      <h6>From <del>$10</del></h6>
                      <h5>USD {price}</h5>
                    </div>
                    <span className="transparent-link-btn">Enquiry Now<FiArrowRight /></span>
                  </div>
                  {element.get_ribbon ? <div className={index % 2 === 0 ? 'green-badge-wrap' : 'purple-badge-wrap'}>{element.get_ribbon.name}</div> : ''}
                </Link>
              </div>
            </div>
      })}



       
        
        
         
      </div>
    </div>
    </section>);

} 

