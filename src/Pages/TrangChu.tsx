import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import {
  LocationState,
  Room,
  getLocationAPI,
  getRoomAPI,
} from "../Reducer/locationReducer";
import { RootState } from "../Reducer/configStore";
type Props = {};
const TrangChu = (props: Props) => {
  const { rooms } = useSelector((state: RootState) => state.locationReducer);
  const dispatch = useDispatch();
  const getLocation = async () => {
    const action: any = await getLocationAPI();
    dispatch(action);
  };
  const getRoom = async () => {
    const action: any = await getRoomAPI();
    dispatch(action);
  };
  useEffect(() => {
    getLocation();
    getRoom();
  }, []);

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
        {rooms.length > 0 &&
          rooms.map((item: Room, index: number) => {
            return (
              <NavLink
                to={`/chi-tiet-phong/${item.id}`}
                className="room cursor-pointer hover:shadow-xl ease-in-out duration-500 p-5 rounded-lg"
                key={index}
              >
                <div className="room_image mb-4">
                  <img
                    className="rounded-lg"
                    width={"100%"}
                    src={item.hinhAnh}
                    alt=""
                  />
                </div>
                <div className="name grid grid-cols-4 font-bold text-sm gap-5">
                  <p className="col-span-3">{item.tenPhong}</p>
                  <p>
                    <i className="fa fa-star"></i>
                    {(Math.random()*5).toFixed(2)}
                  </p>
                </div>
                <div className="distance text-gray-500 text-sm">
                  <p>{Math.floor(Math.random() * 10)} km</p>
                </div>
                <div className="date text-gray-500 text-sm">
                  Ngày {Math.floor(Math.random() * 30)+1} - Ngày{" "}
                  {Math.floor(Math.random() * 30)} tháng 2
                </div>
                <div className="price text-gray-500 text-lg">
                  <strong className="text-black">{item.giaTien}$</strong>/đêm
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
  );
};

export default TrangChu;
