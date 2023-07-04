import { Parallax} from "react-parallax";
import parallaxImage from '@/assets/images/our-work.jpg';
import Link from 'next/link';



export default function OurWork(props) {
  return (
    <>
      <section className="home-activity-sec">
        <Parallax
          bgImage={parallaxImage.src}
          strength={500}
          className="parallax-wrap"
        >
          <div className="container-fluid left-right-gap">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h4 dangerouslySetInnerHTML={{__html:props.home?.activityTitle}}/>
                  <h3 dangerouslySetInnerHTML={{__html:props.home?.activitySubTitle}}/> 
                </div>
              </div>
            </div>
            <div className="row g-3">
            {props.activityList.map((element, index) => (
              <div className="col-xxl-3 col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                <div className="activity-wrap">
                  <Link href={`${process.env.REACT_APP_URL}activity/${element.slug}`} className="activity-box">
                    <span className="activity-box-img">
                      <img  src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/activities/icon/${element.icon}`} alt={element.icon} />
                    </span>
                    <h3 dangerouslySetInnerHTML={{__html:element.name}}></h3>
                    <span className="activity-count">{element.get_tour.length} tour</span>
                  </Link>
                </div>
              </div>
             ))} 
            </div>
          </div>
        </Parallax>
      </section>
    </>
  );
}
