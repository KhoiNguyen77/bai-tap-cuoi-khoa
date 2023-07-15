import React from 'react'
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
type Props = {}

const TrangChu = (props: Props) => {
  return (
    <div className='container mx-auto'>
      <div className="swiper">
        {/* Additional required wrapper */}
        <div className="swiper-wrapper">
          {/* Slides */}
          <div className="swiper-slide">Slide 1</div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
          ...
        </div>
        {/* If we need pagination */}
        <div className="swiper-pagination" />
        {/* If we need navigation buttons */}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
        {/* If we need scrollbar */}
        <div className="swiper-scrollbar" />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
        <div className="room">
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
        </div>
      </div>
    </div>
  )
}

export default TrangChu