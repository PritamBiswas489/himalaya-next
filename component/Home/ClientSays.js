import { Parallax} from "react-parallax";
import dynamic from 'next/dynamic';

import clientSayBg from '@/assets/images/client-says.jpg';
import avatarImage from '@/assets/images/avatar/1.jpg';
import tripadvisorIcon from '@/assets/images/icon/tripadvisor.png';
import googleIcon from '@/assets/images/icon/google.png';
import removeTags from "@/utils/removeTags";
import  { fDateDMMMY } from "@/utils/formatTime";

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });

const clientSauSlider = {
    // autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    animateOut: 'fadeOut',
    loop: false,
    margin: 20,
    stagePadding: 20,
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
      800: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1300: {
        items: 3,
      },
    },
};


export default function ClientSays(props){
    return (<>
    <section className="home-client-say-sec">
        <Parallax bgImage={clientSayBg.src} strength={500} className="client-say-parallax add-footer-pattern-gap">
          <div className="container-fluid left-right-gap">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-12">
                <div className="section-heading blue-text">
                  <h4 dangerouslySetInnerHTML={{__html:props.home?.reviewTitle}}/> 
                  <h3 dangerouslySetInnerHTML={{__html:props.home?.reviewSubTitle}}/> 
                   
                </div>
              </div>
            </div>
            <div className="client-say-slider-wrap">
            <OwlCarousel className="owl-theme slider-arrow1 disable-arrow" {...clientSauSlider}>
              
              {props.review.map((element, index) => (
                <div className="item">
                <div className="client-say-box">
                    <div className="client-say-box-user">
                      <div className="client-say-box-user-lft">
                       {element.image!='' ? <div className="client-say-box-user-img-wrap">
                          <span className="client-say-box-user-img">
                            <img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/review/${element.image}`} alt="" />
                          </span>
                          <span className="say-platform">
                              <img src={tripadvisorIcon.src} alt="" />
                            </span>
                        </div> : '' }
                        
                      </div>
                      <div className="client-say-box-user-rgt">
                        <h4 dangerouslySetInnerHTML={{__html:element.name}}/>
                        <div dangerouslySetInnerHTML={{__html: element.get_country.name}}/>

                       
                      </div>
                    </div>
                    <div className="client-say-text">
                      <div className="client-say-desc" dangerouslySetInnerHTML={{__html: element.review}}/>  
                      <ul className="review-wrap">
                        <li><div className="stars" style={{'--rating': parseInt(element.rating)}} /></li>
                        <li dangerouslySetInnerHTML={{__html:fDateDMMMY(element.ratingDate)}}></li>
                      </ul>
                    </div>
                  </div>
              </div>

))}
            </OwlCarousel>
            </div>
          </div>
        </Parallax>        
      </section>
    
    
    </>)
}