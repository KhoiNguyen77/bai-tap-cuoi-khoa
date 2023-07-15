import React from 'react'

type Props = {}

const TrangChu = (props: Props) => {
  return (
    <div className='container mx-auto'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center">
        <div className="room border-2">
          <div className="room_image">
            <img width={'100%'} src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name flex justify-between">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance">
            <p>5120 Km</p>
          </div>
          <div className="date">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price">
            $109 đêm
          </div>
        </div>
        <div className="room border">
          <div className="room_image">
            <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance">
            <p>5120 Km</p>
          </div>
          <div className="date">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price">
            $109 đêm
          </div>
        </div>
        <div className="room border">
          <div className="room_image">
            <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance">
            <p>5120 Km</p>
          </div>
          <div className="date">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price">
            $109 đêm
          </div>
        </div>
        <div className="room border">
          <div className="room_image">
            <img src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg" alt="" />
          </div>
          <div className="name">
            <p>Khách sạn Hồng Hào</p>
            <p>
              <i className="fa fa-star"></i>
              2.85
            </p>
          </div>
          <div className="distance">
            <p>5120 Km</p>
          </div>
          <div className="date">
            Ngày 24 - Ngày 16 tháng 2
          </div>
          <div className="price">
            $109 đêm
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrangChu