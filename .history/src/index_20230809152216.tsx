import ReactDOM from "react-dom/client";
import { store } from "./Reducer/configStore";
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import HomeTemplate from "./Template/HomeTemplate";
import TrangChu from "./Pages/TrangChu";
import DanhSachPhong from "./Pages/DanhSachPhong";
import ChiTietPhong from "./Pages/ChiTietPhong";
import Profile from "./Pages/Profile";
import "./index.css";
import DangKy from "./Pages/DangKy";
import DangNhap from "./Pages/DangNhap";
import QuanLyDatPhong from "./Pages/QuanLyDatPhong";
import UpdateProfile from "./Layout/UpdateProfile";
import UpdateAvatar from "./Layout/UpdateAvatar";
import ChuyenDi from "./Pages/ChuyenDi";
import QuanLy from "./Pages/QuanLy";
import QuanLyPhong from "./Pages/QuanLyPhong";
import QuanLyViTri from "./Pages/QuanLyViTri";
import QuanLyNguoiDung from "./Pages/QuanLyNguoiDung";
import QuanLyTemplate from "./Template/QuanLyTemplate";

export const history: History | any = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate></HomeTemplate>}>
          <Route index element={<TrangChu></TrangChu>}></Route>
          <Route
            path="/quan-ly-dat-phong"
            element={<QuanLyDatPhong></QuanLyDatPhong>}
          ></Route>
          <Route
            path="/phong-theo-vi-tri/:maViTri"
            element={<DanhSachPhong></DanhSachPhong>}
          ></Route>
          <Route
            path="/chi-tiet-phong/:id"
            element={<ChiTietPhong></ChiTietPhong>}
          ></Route>
          <Route
            path="/thong-tin-ca-nhan/:id"
            element={<Profile></Profile>}
          ></Route>
          <Route
            path="/update-thong-tin/:id"
            element={<UpdateProfile></UpdateProfile>}
          ></Route>
          <Route
            path="/update-avatar"
            element={<UpdateAvatar></UpdateAvatar>}
          ></Route>
          <Route path="/chuyen-di/:id" element={<ChuyenDi></ChuyenDi>}></Route>
        </Route>
        {/* <Route path="/quan-ly" element={<QuanLy></QuanLy>}></Route> */}
        <Route path="/quanly" element={<QuanLyTemplate></QuanLyTemplate>}>
          <Route
            path="/quan-ly-phong"
            element={<QuanLyPhong></QuanLyPhong>}
          ></Route>
          <Route
            path="/quan-ly-vi-tri"
            element={<QuanLyViTri></QuanLyViTri>}
          ></Route>
          <Route
            path="/quan-ly-dat-phong"
            element={<QuanLyDatPhong></QuanLyDatPhong>}
          ></Route>
          <Route
            path="/quan-ly-nguoi-dung"
            element={<QuanLyNguoiDung></QuanLyNguoiDung>}
          ></Route>
        </Route>
        <Route path="/dang-ky" element={<DangKy></DangKy>}></Route>
        <Route path="/dang-nhap" element={<DangNhap></DangNhap>}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
