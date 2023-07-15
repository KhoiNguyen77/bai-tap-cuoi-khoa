import React from 'react'
import { NavLink } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {}
const TrangChu = (props: Props) => {
  return (
    <div className='container mx-auto'>
      <div className="swiper">
        {/* <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          ...
        </Swiper> */}
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>
        <NavLink to={'/'} className="room cursor-pointer">
          <div className="room_image mb-4">
            <img className='rounded-lg' width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between  font-bold text-lg">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance text-gray-500 text-lg">
            <p>5120 Km</p>
          </div>
          <div className="date text-gray-500 text-lg">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price text-gray-500 text-lg">
            <strong className='text-black'>$109</strong> đêm
          </div>
        </NavLink>

      </div>
    </div>
  )
}

export default TrangChu