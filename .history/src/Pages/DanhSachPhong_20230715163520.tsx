import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const DanhSachPhong = (props: Props) => {
  return (
    <>
      <div className="container grid xs:grid-cols-1 lg:grid-cols-2 gap-10 justify-center">
        <div className="room-list">
          <div className="filter">
            <p className="bold text-2xl">Hơn 1000 căn hộ</p>
            <div className="filter-button">
              <button>
                <i class="fa fa-filter"></i> Bộ lọc
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-center gap-10 w-full">
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
            <NavLink
              to={"/"}
              className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
            >
              <div className="room_image mb-4">
                <img
                  className="rounded-lg"
                  width={"100%"}
                  src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
                  alt=""
                />
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
                <strong className="text-black">$109</strong> đêm
              </div>
            </NavLink>
          </div>
        </div>
        <div className="map w-full xs:hidden md:block relative">
          <iframe
            className="rounded-lg sticky center top-0 h-screen"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.047123210905!2d106.62131717469636!3d10.730848989415135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752df4c0029863%3A0x68d7cdf238c5387f!2sChung%20c%C6%B0%20Diamond%20Riverside%20Q8!5e0!3m2!1svi!2s!4v1689389776320!5m2!1svi!2s"
            width={"100%"}
            height={700}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
};

export default DanhSachPhong;
