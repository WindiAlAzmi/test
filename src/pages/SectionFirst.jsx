import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import gmbr1 from './../assets/Asgardia.svg';
import gmbr2 from './../assets/Code Lab.svg';
import gmbr3 from './../assets/Kanba.svg';
import gmbr4 from './../assets/Nirastate.svg';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper";


const SectionFirst = () => {
    const dataGmbr = [
        {id:'1', titleGmbr:`${gmbr1}`},
        {id:'2', titleGmbr:`${gmbr2}`},
        {id:'3', titleGmbr:`${gmbr3}`},
        {id:'4', titleGmbr:`${gmbr4}`},
         {id:'5', titleGmbr:`${gmbr3}`},
        {id:'6', titleGmbr:`${gmbr4}`}
    ]
    return (
      <div className="bg-white flex flex-col items-center mt-10 mb-20">
        <div className="border-2 text-center mb-10 justify-center flex items-center flex-row w-[200px] border-white border-b-orange-500">
          <h3 className="font-bold text-2xl">Who with Us</h3>
        </div>
        <Swiper
          slidesPerView={2}
          spaceBetween={100}
          freeMode={true}
        //   pagination={{
        //     clickable: true,
        //   }}
          modules={[FreeMode, Pagination]}
            breakpoints= {{
            500: {
              slidesPerView: 3
               },
              768: {
                slidesPerView: 5
               },
                1200 : {
                     slidesPerView:5
               }}}
          className="mySwiper flex items-center "
        >
          {dataGmbr.map((dt) => {
            return (
              <SwiperSlide>
                <div className=" h-full w-full flex flex-row p-3 items-center justify-center">
                  <img src={dt.titleGmbr} alt="ini gambar" className="h-30" />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
}

export default SectionFirst;