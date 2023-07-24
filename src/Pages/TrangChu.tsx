import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch } from "react-redux";
import { getLocationAPI } from "../Reducer/locationReducer";
type Props = {};
const TrangChu = (props: Props) => {
  const dispatch = useDispatch();
  const getLocation = async () => {
    const action: any = await getLocationAPI();
    dispatch(action);
  };
  useEffect(() => {
    getLocation();
  });
  return (
    <div className="container mx-auto">
      <div className="swiper w-full mx-auto mb-5">
        <Swiper
          // install Swiper modules
          //@ts-ignore
          modules={[Navigation]}
          slidesPerView={5}
          navigation
        >
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
              alt=""
              width={24}
              height={24}
            />
            <p className="text-sm text-gray-400 mt-3">Bãi biển</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Nhà nhỏ</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Thiết kế</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Bắc cực</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Cabin</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Ven hồ</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Chơi golf</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Khung cảnh tuyệt vời</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Hang động</p>
          </SwiperSlide>
          <SwiperSlide className="text-center p-3 border-b border-solid border-white hover:border-gray-300 duration-200 ease-in-out cursor-pointer">
            <img
              className="block mx-auto"
              src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
              alt=""
              width={30}
              height={30}
            />
            <p className="text-sm text-gray-400 mt-3">Lướt sóng</p>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center gap-10">
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
  );
};

export default TrangChu;
