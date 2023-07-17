import React from "react";

type Props = {};

const ChiTietPhong = (props: Props) => {
  return (
    <div className="container mx-auto w-full p-5">
      <div className="name">
        <p className="text-4xl font-bold text-center lg:text-start">
          <i className="fa fa-hotel"></i> Khách sạn Palace
        </p>
        <div className="review grid lg:grid-cols-2 grid-cols-1 my-3">
          <div className="left-review flex lg:justify-start justify-center between w-full text-center items-center">
            <p className="mr-5 text-xs lg:text-base">
              <i className="fa fa-star mr-1"></i>4
            </p>
            <p className="mr-5 underline text-sm md:text-base">81 đánh giá</p>
            <p className="mr-5 text-sm lg:text-base">
              <i className="fa fa-award mr-1"></i>
              Chủ nhà siêu cấp
            </p>
            <p className="mr-5 underline text-sm lg:text-base">
              Biển Vũng Tàu, Vũng Tàu, Việt Nam
            </p>
          </div>
          <div className="right-review w-full flex lg:justify-end justify-center sm: my-3 items-center">
            <p className="mr-10 text-sm lg:text-base">
              <i className="fa fa-share-square mr-1"></i>
              Chia sẻ
            </p>
            <p className="text-sm lg:text-base">
              <i className="fa fa-heart mr-1"></i>
              Lưu
            </p>
          </div>
        </div>
      </div>
      <div className="pic">
        <div className=" grid grid-rows-1 md:grid-cols-4 gap-10">
          <div className="col-span-2 row-span-2">
            <img
              className="rounded-lg h-full"
              width={"100%"}
              src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1 hidden md:block">
            <img
              className="rounded-lg"
              width={"100%"}
              src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1 hidden md:block">
            <img
              className="rounded-lg"
              width={"100%"}
              src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1 hidden md:block">
            <img
              className="rounded-lg"
              width={"100%"}
              src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-1 hidden md:block">
            <img
              className="rounded-lg"
              width={"100%"}
              src="https://airbnb.cybersoft.edu.vn/public/images/room/1658134435797_put-together-a-perfect-guest-room-1976987-hero-223e3e8f697e4b13b62ad4fe898d492d.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="detail my-10 mx-auto">
        <div className="grid grid-cols-4 gap-10 ">
          <div className="left lg:col-span-3 col-span-4">
            <div className="grid grid-rows-1 grid-cols-3 gap-10 border-b border-solid border-gray-400 py-7">
              <div className="col-span-3 md:col-span-2">
                <p className="font-bold text-lg lg:text-3xl text-center md:text-start">
                  Toàn bộ căn hộ. Chủ nhà Shungwon
                </p>
                <div className="room-detail flex justify-center md:justify-start">
                  <p className="mr-3 text-gray-500 text-md">3 khách</p>
                  <p className="mr-3 text-gray-500 text-md">5 phòng ngủ</p>
                  <p className="mr-3 text-gray-500 text-md">5 phòng tắm</p>
                </div>
              </div>
              <div className="col-span-3 md:col-span-1">
                <div className="icon lg:text-right text-center">
                  <img
                    src="https://airbnb.cybersoft.edu.vn/public/temp/1663923449254_halong-bay-vietnam-from-above-gettyimages.jpg "
                    alt=""
                    className="rounded-full overflow-hidden w-14 h-14 inline-block"
                  />
                </div>
              </div>
            </div>
            <div className="cons  border-b border-solid border-gray-400 py-2">
              <div className="first-con flex justify-start items-center gap-5 my-3">
                <i className="fa fa-award lg:text-2xl text-xl"></i>
                <div className="owner">
                  <p className="lg:text-xl text-sm font-bold">
                    Sungwon là Chủ nhà siêu cấp
                  </p>
                  <p className="text-gray-400 w-3/4 lg:text-base text-sm text-justify">
                    Chủ nhà siêu cấp là những chủ nhà có kinh nghiệm, được đánh
                    giá cao và là những người cam kết mang lại quãng thời gian ở
                    tuyệt vời cho khách.
                  </p>
                </div>
              </div>
              <div className="second-con flex justify-start items-center gap-5 my-3">
                <i className="fa fa-map-marker-alt lg:text-2xl text-xl"></i>
                <div className="owner">
                  <p className="lg:text-xl text-sm font-bold">
                    Địa điểm tuyệt vời
                  </p>
                  <p className="text-gray-400 w-3/4 lg:text-base text-sm text-justify">
                    90% khách gần đây đã xếp hạng 5 sao cho vị trí này.
                  </p>
                </div>
              </div>
              <div className="third-con flex justify-start items-center gap-5 my-3">
                <i className="fa fa-calendar-alt  lg:text-xl text-lg"></i>
                <div className="owner">
                  <p className="lg:text-xl text-sm font-bold">
                    Miễn phí hủy trong 48 giờ.
                  </p>
                </div>
              </div>
            </div>
            <div className="benefit border-b border-solid border-gray-400 py-4">
              <p className="py-2">
                <img
                  src="https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg"
                  width={"15%"}
                  alt=""
                />
              </p>
              <p className="py-1">
                Mọi đặt phòng đều được bảo vệ miễn phí trong trường hợp Chủ nhà
                hủy, thông tin nhà/phòng cho thuê không chính xác và những vấn
                đề khác như sự cố trong quá trình nhận phòng.
              </p>
              <p className="py-1 font-bold underline cursor-pointer">
                Tìm hiểu thêm
              </p>
            </div>
            <div className="info border-b border-solid border-gray-400 py-4">
              <p className="py-3">
                <i className="fa fa-language mr-3"></i>Một số thông tin đã được
                dịch tự động.
                <span className="font-bold underline cursor-pointer">
                  Hiển thị ngôn ngữ gốc
                </span>
              </p>
              <p className="py-3">
                Nhà nghỉ thôn dã hình lưỡi liềm trong một ngôi làng nghệ thuật
                gốm hai nghìn năm. Một ngôi nhà nguyên khối lớn với sân thượng
                ba tầng của Bảo tàng Văn hóa Guitar Serra, nổi tiếng với mặt
                tiền đặc sắc trong một ngôi làng nghệ thuật gốm hai nghìn năm
                pha trộn rất tốt với thiên nhiên.
              </p>
              <p className="py-3">
                Tận hưởng kỳ nghỉ dưỡng sức cảm xúc thư giãn trong một căn phòng
                ấm cúng, chào...
              </p>
              <p className="cursor-pointer font-bold underline">
                Hiển thị thêm
              </p>
            </div>
            <div className="service border-b border-solid border-gray-400 pt-4 pb-10">
              <p className="font-bold text-2xl">Nơi này có những gì cho bạn</p>
              <div className="grid grid-cols-2">
                <div className="service_left col-span-1">
                  <p className="py-3 text-lg">
                    <i className="fa fa-utensils text-xl mr-5"></i>
                    Bếp
                  </p>
                  <p className="py-3 text-lg">
                    <i className="fa fa-door-closed text-xl mr-5"></i>
                    Thang máy
                  </p>
                  <p className="py-3 text-lg">
                    <i className="fa fa-temperature-high text-xl mr-5"></i>
                    Hệ thống sưởi
                  </p>
                </div>
                <div className="service_right col-span-1">
                  <p className="py-3 text-lg">
                    <i className="fa fa-wifi text-xl mr-5"></i>
                    Wifi
                  </p>
                  <p className="py-3 text-lg">
                    <i className="fa fa-tv text-xl mr-5"></i>
                    Tivi
                  </p>
                  <p className="py-3 text-lg">
                    <i className="fa fa-umbrella-beach text-xl mr-5"></i>
                    Hồ bơi
                  </p>
                </div>
              </div>
              <button className="p-3 border border-solid rounded-lg w-64 py-3 hover:bg-gray-200 font-bold duration-300">
                Hiển thị tất cả 75 tiện nghi
              </button>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietPhong;
