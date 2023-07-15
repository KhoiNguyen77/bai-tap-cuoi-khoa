
import ReactDOM from 'react-dom/client';
import { store } from './Reducer/configStore';
import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history';
import HomeTemplate from './Template/HomeTemplate';
import TrangChu from './Pages/TrangChu';
import DanhSachPhong from './Pages/DanhSachPhong';
import ChiTietPhong from './Pages/ChiTietPhong';
import Profile from './Pages/Profile';
import './index.css'
import DangKy from './Pages/DangKy';
import DangNhap from './Pages/DangNhap';


export const history: History | any = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path='' element={<HomeTemplate></HomeTemplate>}>
          <Route index element={<TrangChu></TrangChu>}></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/phong-theo-vi-tri' element={<DanhSachPhong></DanhSachPhong>}>
            <Route path=':city-name'></Route>
          </Route>
          <Route path='/chi-tiet-phong' element={<ChiTietPhong></ChiTietPhong>}></Route>
          <Route path='/thong-tin-ca-nhan' element={<Profile></Profile>}></Route>
        </Route>

        <Route path='/dang-ky' element={<DangKy></DangKy>}></Route>
        <Route path='/dang-nhap' element={<DangNhap></DangNhap>}></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
