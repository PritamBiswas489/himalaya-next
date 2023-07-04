
import { useState } from "react";
import { Parallax} from "react-parallax";
import homeBanner from '@/assets/images/home-banner.jpg';
import { tourApi } from "@/service/Tour.service";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useRouter } from "next/router";


import { FaMagnifyingGlass } from "react-icons/fa6";
export default function HomeBannerComp({home}){
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const router = useRouter();
  const handleSearch = async (query) => {
    setOptions([]);
    setIsLoading(true);
    if (query) {
      const res = await tourApi.searchTour(query);
      if (res.status === 200 && res.data.status === 200 && res.data.success === true) {
        setOptions(res.data.data);
      }
    }
    setIsLoading(false);
  };
  const filterBy = () => true;


      return (<section className="main-banner">
      <Parallax bgImage={`${process.env.NEXT_PUBLIC_APP_HOST_IMAGE}image/homePage/banner/${home?.bannerImage}`} strength={500}>
        <div className="menu-top-gap home-banner d-flex align-items-center justify-content-center">
          <div className="banner-text-wrap">
            <div className="container">
              <div className="home-banner-title">
                <h2>Adventure for all</h2>
              </div>
              <div className="banner-src">
                <div className="bannr-src-box">
                  
                <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="title"
     
      minLength={1}
      onSearch={handleSearch}
      options={options}
      placeholder="Find your next adventure"
      renderMenuItemChildren={(option) => (
        <>
          
          <span onClick={()=>{
                
               router.push(`/${option.get_destination.slug}/${option.slug}`);

          }}>{option.title}</span>
        </>
      )}
    />
                  
                  
                 
                  <span className="bannr-src-btn-wrap"><button type="button" className="bannr-src-btn"><FaMagnifyingGlass /></button></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>); 
}

