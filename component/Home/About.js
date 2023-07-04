import dynamic from "next/dynamic";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

// About Box Icon
import aboutIcon1 from "@/assets/images/about/icon-1.png";
import aboutIcon2 from "@/assets/images/about/icon-2.png";
import aboutIcon3 from "@/assets/images/about/icon-3.png";
import aboutIcon4 from "@/assets/images/about/icon-4.png";
import aboutIcon5 from "@/assets/images/about/icon-5.png";
import removeTags from "@/utils/removeTags";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options1 = {
  // autoplay: true,
  autoplayTimeout: 5000,
  smartSpeed: 2000,
  animateOut: "fadeOut",
  loop: false,
  margin: 20,
  stagePadding: 10,
  nav: true,
  dots: false,
  navElement: "div",
  navText: [
    "<i class='fa-solid fa-angle-left'></i>",
    "<i class='fa-solid fa-angle-right'></i> ",
  ],
  responsive: {
    0: {
      items: 1,
      animateOut: false,
    },
    1200: {
      items: 2,
    },
  },
};
function chunkArrayInGroups(arr, size) {
  var myArray = [];
  for (var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}

export default function About(props) {
  return (
    <>
      <section className="home-about-sec home-about-bg">
        <div className="container-fluid left-right-gap">
          <div className="row">
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="section-heading section-heading-lft">
                <h4
                  dangerouslySetInnerHTML={{ __html: props.home?.aboutusTitle }}
                />
                <h3
                  dangerouslySetInnerHTML={{
                    __html: props.home?.aboutusSubTitle,
                  }}
                />
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.home
                      ? removeTags(props.home.aboutusDescription)
                      : "",
                  }}
                  className="section-heading-desc"
                />
                <Link href="#" className="orange-btn">
                  {props.home?.aboutusButtonText}
                  <FiArrowRight />
                </Link>
              </div>
              <div className="as-recomended">
                <div className="as-recomended-heading">
                  <h4>{props.home?.asRecommendedText}:</h4>
                </div>
                <div className="as-recomended-logo">
                  <ul>
                    <li>
                      <span className="recomended-logo-img">
                        <img
                          width={100}
                          src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/recommendedImage/${props.home?.asRecommendedImageOne}`}
                          alt=""
                        />
                      </span>
                    </li>
                    <li>
                      <span className="recomended-logo-img">
                        <img
                          width={100}
                          src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/recommendedImage/${props.home?.asRecommendedImageTwo}`}
                          alt=""
                        />
                      </span>
                    </li>
                    <li>
                      <span className="recomended-logo-img">
                        <img
                          width={100}
                          src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/recommendedImage/${props.home?.asRecommendedImagethree}`}
                          alt=""
                        />
                      </span>
                    </li>
                    <li>
                      <span className="recomended-logo-img">
                        <img
                          width={100}
                          src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/recommendedImage/${props.home?.asRecommendedImageFour}`}
                          alt=""
                        />
                      </span>
                    </li>
                    <li>
                      <span className="recomended-logo-img">
                        <img
                          width={100}
                          src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/recommendedImage/${props.home?.asRecommendedImageFive}`}
                          alt=""
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="about-box-slider">
                {props.home.get_featured_card ? (
                  <OwlCarousel
                    className="owl-theme slider-arrow1 disable-arrow"
                    {...options1}
                  >
                    {chunkArrayInGroups(props.home.get_featured_card, 2).map(
                      (_element, _index) => (
                        <div className="item">
                          {_element.map((element, index) => (
                            <div className="about-info-box">
                              <span className="about-info-box-icon">
                              <img src={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/featureCard/${element.icon}`} alt="" />
                              </span>
                              <h4 dangerouslySetInnerHTML={{__html:element.name}}/>
                              <div className="about-box-desc" dangerouslySetInnerHTML={{__html:removeTags(element.description)}}/>
                            </div>
                          ))}
                        </div>
                      )
                    )}
                  </OwlCarousel>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
