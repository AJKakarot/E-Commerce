import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Autoplay,
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import CatalogCard from "./CatalogCard";

const CourseSlider = ({ Courses }) => {
  return (
    <>
      {Courses && Courses.length > 0 ? (
        <Swiper
          mousewheel={{ enabled: true, forceToAxis: true }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          slidesPerView={1}
          loop={false}
          spaceBetween={20}
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation, FreeMode, Mousewheel, Keyboard]}
          className="mySwiper md:pt-5"
          freeMode={true}
          navigation={true}
          breakpoints={{
            300: { slidesPerView: 2.1, spaceBetween: 10 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.1 },
          }}
        >
          {Courses.map((course) => (
            <SwiperSlide key={course.id || course.title}>
              <CatalogCard course={course} Height="lg:h-[250px] h-[100px]" />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="flex gap-4 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <SkeletonTheme
              key={i}
              baseColor="#2C333F"
              highlightColor="#161D29"
            >
              <div className="">
                <Skeleton className="md:h-[200px] lg:w-[400px] h-[100px] w-[200px] rounded-xl" />
                <Skeleton className="md:h-[20px] w-[70px] rounded-md" />
                <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
                <Skeleton className="md:h-[20px] md:w-[400px] rounded-md" />
              </div>
            </SkeletonTheme>
          ))}
        </div>
      )}
    </>
  );
};

export default CourseSlider;
