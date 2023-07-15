import React from 'react'
import { NavLink } from 'react-router-dom';
import { register } from 'swiper/element/bundle';
type Props = {}
register();
const TrangChu = (props: Props) => {
  return (
    <div className='container mx-auto'>
      <div className="swiper">
        <swiper-container slides-per-view="3" speed="500" loop="true" css-mode="true">
          <swiper-slide>Slide 1</swiper-slide>
          <swiper-slide>Slide 2</swiper-slide>
          <swiper-slide>Slide 3</swiper-slide>
          ...
        </swiper-container>
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