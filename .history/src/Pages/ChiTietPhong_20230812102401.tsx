import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../Reducer/configStore";
import {
  BookRoom,
  Toast,
  addComment,
  bookRoom,
  getCommentAPI,
  getRoomDetailAPI,
} from "../Reducer/locationReducer";
import { Action } from "@reduxjs/toolkit";
import { log } from "console";
import { DatePicker, DatePickerProps } from "antd";
import { useForm } from "react-hook-form";
import { USER_PROFILE, getStoreJson } from "../util/config";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { json } from "stream/consumers";
import { userInfo } from "os";
type Props = {};

const ChiTietPhong = (props: Props) => {
  let [guest, setGuest] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { roomDetail, comments } = useSelector(
    (state: RootState) => state.locationReducer
  );
  const getRoomDetail = async () => {
    const action: any = await getRoomDetailAPI(id);
    dispatch(action);
  };
  const getComment = async () => {
    const action: any = await getCommentAPI(id);
    dispatch(action);
  };
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    getRoomDetail();
    getComment();
  }, [id, dispatch]);

  const [ngayDen, setNgayDen] = useState<any>(null);
  const [ngayDi, setNgayDi] = useState<any>(null);
  const onChangeNgayDen: DatePickerProps["onChange"] = (date) => {
    setNgayDen(date);
  };

  const onChangeNgayDi: DatePickerProps["onChange"] = (date) => {
    setNgayDi(date);
  };
  const currentUser = getStoreJson(USER_PROFILE);
  const onSubmit = async (values: any) => {
    if (currentUser == null) {
      Swal.fire({
        icon: "warning",
        text: "Bạn chưa đăng nhập. Vui lòng đăng nhập để tiếp tuc",
        footer: `<a href='/dang-nhap'>Đăng nhập ngay tại đây</a>`,
      });
      return;
    }
    if (ngayDen > ngayDi) {
      Swal.fire({
        icon: "error",
        text: "Ngày trả phòng không hợp lệ",
      });
      return;
    }
    let dataBack: BookRoom = {
      id: currentUser?.id,
      maPhong: roomDetail?.id,
      ngayDen: JSON.parse(JSON.stringify(ngayDen)),
      ngayDi: JSON.parse(JSON.stringify(ngayDi)),
      soLuongKhach: guest,
      maNguoiDung: currentUser.id,
    };
    if (ngayDen == null) {
      Swal.fire({
        icon: "error",
        text: "Ngày nhận phòng không hợp lệ",
      });
      return;
    } else if (guest == 0) {
      Swal.fire({
        icon: "error",
        text: "Số lượng khách không hợp lệ",
      });
    } else {
      bookRoom(dataBack);
      const action: any = await getCommentAPI(id);
      dispatch(action);
    }
  };

  const date = new Date();
  const onSubmitComment = async (values: any) => {
    let dataBack = {
      id: currentUser.id,
      maPhong: roomDetail?.id,
      maNguoiBinhLuan: currentUser.id,
      ngayBinhLuan: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
      noiDung: values.noiDung,
      saoBinhLuan: 0,
    };
    if (values.noiDung == "") {
      Toast.fire({
        icon: "error",
        title: "Vui lòng nhập nội dung bình luận",
      });
      return;
    } else {
      const action: any = await addComment(dataBack)
      dispatch(action);
    }
  };
  return (
    <div className="container mx-auto w-full p-5">
      <div className="name">
        <p className="text-4xl font-bold text-center lg:text-start">
          <i className="fa fa-hotel"></i> {roomDetail?.tenPhong}
        </p>
        <div className="review grid lg:grid-cols-2 grid-cols-1 my-3">
          <div className="left-review flex lg:justify-start justify-center between w-full text-center items-center">
            <p className="mr-5 text-xs lg:text-base">
              <i className="fa fa-star mr-1"></i>
              {(Math.random() * 5).toFixed(2)}
            </p>
            <p className="mr-5 underline text-sm md:text-base">
              {Math.floor(Math.random() * 100) + 1} đánh giá
            </p>
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
          <div className="col-span-4 row-span-2">
            <img
              className="rounded-lg h-full"
              width={"100%"}
              src={roomDetail?.hinhAnh}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="detail my-10 mx-auto relative ">
        <div className="grid grid-cols-5 gap-10 border-b border-solid border-gray-400">
          <div className="left lg:col-span-3 col-span-4">
            <div className="grid grid-rows-1 grid-cols-3 gap-10 border-b border-solid border-gray-400 py-3">
              <div className="col-span-3 md:col-span-2">
                <p className="font-bold text-lg lg:text-3xl text-center md:text-start">
                  Toàn bộ căn hộ.
                </p>
                <div className="room-detail flex justify-center md:justify-start">
                  <p className="mr-3 text-gray-500 text-md">
                    {roomDetail?.khach} khách
                  </p>
                  <p className="mr-3 text-gray-500 text-md">
                    {roomDetail?.phongNgu} phòng ngủ
                  </p>
                  <p className="mr-3 text-gray-500 text-md">
                    {roomDetail?.phongTam} phòng tắm
                  </p>
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
            <div className="cons  border-b border-solid border-gray-400 py-2 text-justify">
              {roomDetail?.moTa &&
                roomDetail?.moTa
                  .split(/\n/)
                  .map((line: string, index: number) => {
                    if (index == 0 || index % 2 == 0) {
                      return (
                        <p className="lg:text-xl text-sm font-bold mt-2">
                          {line}
                        </p>
                      );
                    } else {
                      return (
                        <p className="text-gray-400 w-3/4 lg:text-base text-sm text-justify mt-2">
                          {line}
                        </p>
                      );
                    }
                  })}
              {/* <div className="first-con flex justify-start items-center gap-5 my-3">
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
              </div> */}
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
            <div className="service  pt-4 pb-10">
              <p className="font-bold text-2xl">Nơi này có những gì cho bạn</p>
              <div className="grid grid-cols-2">
                <div className="service_left col-span-1">
                  {roomDetail?.bep && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-utensils text-xl mr-5"></i>
                      Bếp
                    </p>
                  )}
                  {roomDetail?.mayGiat && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-water text-xl mr-4"></i>
                      Máy giặt
                    </p>
                  )}
                  {roomDetail?.banLa && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-fire-alt text-xl mr-6"></i>
                      Bàn là
                    </p>
                  )}
                  {roomDetail?.dieuHoa && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-snowflake text-xl mr-5"></i>
                      Điều hoà
                    </p>
                  )}
                  {roomDetail?.banUi && (
                    <p className="py-3 text-lg">
                      <i className="fab fa-hotjar text-xl mr-5"></i>
                      Bàn ủi
                    </p>
                  )}
                </div>
                <div className="service_right col-span-1">
                  {roomDetail?.wifi && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-wifi text-xl mr-5"></i>
                      Wifi
                    </p>
                  )}
                  {roomDetail?.tivi && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-tv text-xl mr-5"></i>
                      Tivi
                    </p>
                  )}
                  {roomDetail?.hoBoi && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-umbrella-beach text-xl mr-6"></i>
                      Hồ bơi
                    </p>
                  )}
                  {roomDetail?.doXe && (
                    <p className="py-3 text-lg">
                      <i className="fa fa-parking text-xl mr-7"></i>
                      Đỗ xe
                    </p>
                  )}
                </div>
              </div>
              <button className="p-3 border border-solid rounded-lg w-64 py-3 hover:bg-gray-200 font-bold duration-300">
                Hiển thị tất cả 75 tiện nghi
              </button>
            </div>
          </div>
          <div className="right lg:col-span-2 col-span-4 h-screen sticky top-28">
            <div className="order border border-solid p-5 border-gray-300 rounded-lg py-7 shadow-xl">
              <div className="price flex justify-between items-center">
                <div className="left">
                  <p className="font-bold">{roomDetail?.giaTien}$ / đêm</p>
                </div>
                <div className="right flex">
                  <p className="mr-5 underline text-sm md:text-base">
                    100 đánh giá
                  </p>
                  <p className="mr-5 text-sm md:text-base">
                    <i className="fa fa-star mr-1"></i> 4
                  </p>
                </div>
              </div>
              <form className="book mt-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 grid-rows-2 border border-gray-300 border-solid rounded-lg">
                  <div className="rows-span-1 grid col-span-2 grid-cols-2 border-b border-solid border-gray-300 text-center">
                    <div className="grid-cols-1 p-3 border-e border-gray-300 border-solid hover:bg-gray-100 duration-150">
                      <button type="button">
                        <p className="font-bold">NHẬN PHÒNG</p>
                        <DatePicker
                          style={{ width: 200 }}
                          placeholder="dd/MM/YYYY"
                          bordered={true}
                          format={"DD/MM/YYYY"}
                          className="inline-block p-3 w-full mx-auto"
                          onChange={onChangeNgayDen}
                        />
                      </button>
                    </div>
                    <div className="grid-cols-1 p-3 hover:bg-gray-100 duration-150">
                      <button type="button">
                        <p className="font-bold">TRẢ PHÒNG</p>
                        <DatePicker
                          style={{ width: 200 }}
                          placeholder="dd/MM/YYYY"
                          bordered={true}
                          format={"DD/MM/YYYY"}
                          className="inline-block p-3 w-full mx-auto"
                          onChange={onChangeNgayDi}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="row-span-1 col-span-2">
                    <div className="">
                      <div className="grid-cols-2 p-3 items-center justify-center text-center">
                        <p className="font-bold">KHÁCH</p>
                        <div className="grid grid-cols-3 mt-3">
                          <div className="col-span-1 text-center">
                            <button
                              type="button"
                              className=" bg-gray-400 h-8 w-8 rounded-lg"
                              onClick={() => {
                                setGuest((guest = guest + 1));
                              }}
                            >
                              +
                            </button>
                          </div>
                          <div className="col-span-1 text-center">
                            <button>{guest} khách</button>
                          </div>
                          <div className="col-span-1 text-center">
                            <button
                              type="button"
                              className=" bg-gray-400 h-8 w-8 rounded-lg"
                              onClick={() => {
                                if (guest > 0) setGuest((guest = guest - 1));
                              }}
                            >
                              -
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row-span-1 col-span-2 mx-auto w-full mt-5 text-center">
                  <button
                    type="submit"
                    className="p-5 block w-full rounded-lg text-white bg-pink-600 text-xl hover:bg-pink-700 duration-150"
                  >
                    Đặt phòng
                  </button>
                  <p className="mt-3 text-gray-300">Bạn vẫn chưa bị trừ tiền</p>
                </div>
              </form>
              <div className="total flex justify-between items-center mt-3">
                <div className="left">
                  <p className="underline">{roomDetail?.giaTien}$ x 1 đêm</p>
                </div>
                <div className="right flex">
                  <p className="mr-5 text-sm md:text-base">{roomDetail?.giaTien}$ $</p>
                </div>
              </div>
              <div className="total flex justify-between items-center mt-3 border-b border-solid border-gray-300 pb-5">
                <div className="left">
                  <p className="underline">Phí dịch vụ</p>
                </div>
                <div className="right flex">
                  <p className="mr-5 text-sm md:text-base">0 $</p>
                </div>
              </div>
              <div className="total flex justify-between items-center mt-3">
                <div className="left">
                  <p className="font-bold">Tổng trước thuế</p>
                </div>
                <div className="right flex">
                  <p className="mr-5 text-sm md:text-base font-bold">{roomDetail?.giaTien}$ $</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="comment grid grid-cols-2 gap-x-20 gap-y-5 py-2">
          <div className="score col-span-2">
            <p className="font-bold text-lg">
              <i className="fa fa-star mr-1"></i>4. 19 đánh giá
            </p>
          </div>
          <div className="left col-span-2 lg:col-span-1">
            <div className="rating flex justify-between items-center">
              <p>Giao tiếp</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>
            <div className="rating flex justify-between items-center">
              <p>Nhận phòng</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>
            <div className="rating flex justify-between items-center">
              <p>Mức đô sạch sẽ</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>
          </div>
          <div className="right col-span-2 lg:col-span-1">
            <div className="rating flex justify-between items-center">
              <p>Độ chính xác</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>
            <div className="rating flex justify-between items-center">
              <p>Vị trí</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>{" "}
            <div className="rating flex justify-between items-center">
              <p>Giá trị</p>
              <div className="w-1/2 flex justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div
                    className="bg-gray-800 h-1 rounded-full"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <div className="ml-4">5,0</div>
              </div>
            </div>
          </div>

          <div className="comment-section grid grid-cols-2 gap-x-52 col-span-2">
            <p className="font-bold text-2xl col-span-2">Bình luận</p>
            {comments.length >= 0 &&
              comments?.map((comment) => {
                return (
                  <div className="comment col-span-2 border-b border-solid border-gray-200 py-5">
                    <div className="user flex items-center gap-20">
                      <div className="user-avatar">
                        <img
                          src={comment.avatar}
                          alt=""
                          className="rounded-full overflow-hidden w-14 h-14 inline-block"
                        />
                      </div>
                      <div className="user-comment">
                        <p className="font-bold text-xl">
                          {comment.tenNguoiBinhLuan}
                        </p>
                        <p className="text-base text-gray-400 italic">
                          {comment.ngayBinhLuan}
                        </p>
                        <p>{comment.noiDung}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="show-all mt-10 col-span-2">
              <button className="p-3 border border-solid rounded-lg w-64 py-3 hover:bg-gray-200 font-bold duration-300">
                Hiển thị tất cả bình luận
              </button>
            </div>
            {currentUser != null && (
              <form
                className="comment col-span-2 mt-10"
                onSubmit={handleSubmit(onSubmitComment)}
              >
                <div className="user flex items-center gap-20">
                  <div className="user-avatar">
                    <img
                      src={currentUser.avatar}
                      alt=""
                      className="rounded-full overflow-hidden w-14 h-14 inline-block"
                    />
                  </div>
                  <div className="user-comment">
                    <p className="font-bold text-xl">{currentUser.name}</p>
                    <p className="text-base text-gray-400 italic">
                      {date.getDate()}/{date.getMonth() + 1}/
                      {date.getFullYear()}
                    </p>
                    <input
                      type="text"
                      className="border border-gray-300 border-solid block p-3 rounded-lg lg:w-96 h-20"
                      style={{ textAlign: "start", verticalAlign: "0px" }}
                      {...register("noiDung")}
                    />
                    <button
                      type="submit"
                      className="p-3 border border-solid rounded-lg py-3 mt-3 hover:bg-gray-200 font-bold duration-300"
                    >
                      Add Comment
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietPhong;
