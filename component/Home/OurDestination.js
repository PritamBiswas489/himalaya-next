// Destination Image
import destiNation1 from '@/assets/images/destination/1.jpg';
import destiNation3 from '@/assets/images/destination/3.jpg';
import destiNation4 from '@/assets/images/destination/4.jpg';
import terrain from '@/assets/images/terrain.png';
import pattern from '@/assets/images/pattren.png';
import Link from 'next/link';
import { FiArrowRight } from "react-icons/fi";
import parse from 'html-react-parser';
import removeTags from '@/utils/removeTags';

import ProjectCounter from '@/component/ProjectCounter';
export default function OurDestination(props){
    return (<section className="home-destination-sec">
    <div className="container-fluid left-right-gap">
      <div className="row align-items-center destination-gap">
     
        {props.destination ? <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="row destination-brick">


          {Object.keys(props.destination).map((element, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
              <div className="tour-destination-wrap">
                <Link href="#" className="tour-destination-box">
                  <span className="destination-box-img"><img className="img-block" src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/destination/${props.destination[element]?.image}`} alt="" /></span>
                  <div className="destination-box-dtls">
                    <div className="destination-name">
                      <h3 dangerouslySetInnerHTML={{__html:props.destination[element].name}}/>
                      <span className="destination-count">{props.destination[element].get_tour.length} tours</span>
                    </div>
                    <div className="destination-text">
                      <span className="mount-img"><img src={terrain.src} alt="" /></span>
                      <h4 dangerouslySetInnerHTML={{__html:props.destination[element].content !== null ? props.destination[element].content.main_title:''}}/>
                      <div className="text-desc"
                       dangerouslySetInnerHTML={{
                        __html:
                        removeTags(props.destination[element].content.main_description).slice(0, 123),
                    }}
                      /> 
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            ))}
            
             
            
          </div>
        </div> : ''}
        



        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
          <div className="destination-info-wrap">
            <span className="pattern-1"><img src={pattern.src} alt="" /></span>
            <span className="pattern-2"><img src={pattern.src} alt="" /></span>
            <span className="pattern-3"><img src={pattern.src} alt="" /></span>
            <div className="destination-info-dtls">
              <h4 dangerouslySetInnerHTML={{__html:props.home?.destinationTitle}}/>
              <h3 dangerouslySetInnerHTML={{__html:props.home?.destinationSubTitle}}/>
              <div className="destination-info-text" dangerouslySetInnerHTML={{__html:props.home ? removeTags(props.home.destinationDescription) : ''}}/> 
            </div>
            <ProjectCounter countdown = {props.countdown} />
            <Link href={'/destination'} className="orange-btn">{props.home?.destinationButton}<FiArrowRight /></Link>
          </div>
        </div>
      </div>
    </div>
  </section>);

}
