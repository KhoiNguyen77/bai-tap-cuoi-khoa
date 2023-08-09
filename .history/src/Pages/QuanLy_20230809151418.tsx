import React from "react";
import { NavLink, Outlet } from "react-router-dom";

type Props = {};

const QuanLy = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col h-screen bg-gray-100">
        {/* Barra de navegación superior */}
        <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <NavLink
                to=""
                className="hidden sm:flex items-start text-rose-500 z-20 py-3 w-96"
              >
                <div className="hidden md:block">
                  <svg
                    width={102}
                    height={32}
                    fill="currentcolor"
                    style={{ display: "block" }}
                  >
                    <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5zM41.54 24.12a5.02 5.02 0 01-3.95-1.83 6.55 6.55 0 01-1.6-4.48 6.96 6.96 0 011.66-4.58 5.3 5.3 0 014.08-1.86 4.3 4.3 0 013.7 1.92l.1-1.57h2.92V23.8h-2.93l-.1-1.76a4.52 4.52 0 01-3.88 2.08zm.76-2.88c.58 0 1.09-.16 1.57-.45.44-.32.8-.74 1.08-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.55.45zM53.45 8.46c0 .35-.06.67-.22.93-.16.25-.38.48-.67.64-.29.16-.6.22-.92.22-.32 0-.64-.06-.93-.22a1.84 1.84 0 01-.67-.64 1.82 1.82 0 01-.22-.93c0-.36.07-.68.22-.93.16-.3.39-.48.67-.64.29-.16.6-.23.93-.23a1.84 1.84 0 011.6.86 2 2 0 01.21.94zm-3.4 15.3V11.7h3.18v12.08h-3.19zm11.68-8.9v.04c-.15-.07-.35-.1-.5-.13-.2-.04-.36-.04-.55-.04-.89 0-1.56.26-2 .8-.48.55-.7 1.32-.7 2.31v5.93h-3.19V11.69h2.93l.1 1.83c.32-.64.7-1.12 1.24-1.48a3.1 3.1 0 011.81-.5c.23 0 .45.02.64.06.1.03.16.03.22.06v3.2zm1.28 8.9V6.74h3.18v6.5c.45-.58.96-1.03 1.6-1.38a5.02 5.02 0 016.08 1.31 6.55 6.55 0 011.6 4.49 6.96 6.96 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.1 1.57-2.92.03zm6.15-2.52c.57 0 1.08-.16 1.56-.45.44-.32.8-.74 1.08-1.25.26-.51.38-1.12.38-1.8 0-.67-.12-1.28-.38-1.79a3.75 3.75 0 00-1.08-1.25 2.95 2.95 0 00-3.12 0c-.45.32-.8.74-1.09 1.25a4.01 4.01 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.98.45 1.56.45zm7.51 2.53V11.69h2.93l.1 1.57a3.96 3.96 0 013.54-1.89 4.1 4.1 0 013.82 2.44c.35.76.54 1.7.54 2.75v7.24h-3.19v-6.82c0-.84-.19-1.5-.57-1.99-.38-.48-.9-.74-1.56-.74-.48 0-.9.1-1.27.32-.35.23-.64.52-.86.93a2.7 2.7 0 00-.32 1.35v6.92h-3.16zm12.52 0V6.73h3.19v6.5a4.67 4.67 0 013.73-1.89 5.02 5.02 0 013.95 1.83 6.57 6.57 0 011.59 4.48 6.95 6.95 0 01-1.66 4.58 5.3 5.3 0 01-4.08 1.86 4.3 4.3 0 01-3.7-1.92l-.09 1.57-2.93.03zm6.18-2.53c.58 0 1.09-.16 1.56-.45.45-.32.8-.74 1.09-1.25.25-.51.38-1.12.38-1.8a3.42 3.42 0 00-1.47-3.04 2.95 2.95 0 00-3.12 0c-.44.32-.8.74-1.08 1.25a3.63 3.63 0 00-.38 1.8 3.42 3.42 0 001.47 3.04c.47.29.95.45 1.55.45z" />
                  </svg>
                </div>
                <div className="block md:hidden">
                  <svg
                    width={30}
                    height={32}
                    fill="currentcolor"
                    className="block"
                  >
                    <path d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z" />
                  </svg>
                </div>
              </NavLink>
              <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
            </div>
            <div className="md:hidden flex items-center">
              <button id="menuBtn">
                <i className="fas fa-bars text-gray-500 text-lg" />
              </button>
            </div>
          </div>

          <div className="space-x-5">
            <button>
              <i className="fas fa-bell text-gray-500 text-lg" />
            </button>
            {/* Botón de Perfil */}
            <button>
              <i className="fas fa-user text-gray-500 text-lg" />
            </button>
          </div>
        </div>
        {/* Contenido principal */}
        <div className="flex-1 flex flex-wrap">
          {/* Barra lateral de navegación (oculta en dispositivos pequeños) */}
          <div
            className="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden"
            id="sideNav"
          >
            <nav>
              <NavLink
                to="quan-ly-nguoi-dung"
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              >
                <i className="fas fa-home mr-2" />
                Quản lý người dùng
              </NavLink>
              <NavLink
                to="quan-ly-vi-tri"
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              >
                <i className="fas fa-file-alt mr-2" />
                Quản lý vị trí
              </NavLink>
              <NavLink
                to="/quan-ly-phong"
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              >
                <i className="fas fa-users mr-2" />
                Quản lý phòng
              </NavLink>
              <NavLink
                to="/quan-ly-dat-phong"
                className="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
              >
                <i className="fas fa-store mr-2" />
                Quản lý đặt phòng
              </NavLink>
            </nav>
            {/* Ítem de Cerrar Sesión */}
            <a
              className="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto"
              href="#"
            >
              <i className="fas fa-sign-out-alt mr-2" />
              Thoát
            </a>
            {/* Señalador de ubicación */}
            <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2" />
          </div>

          <div className="flex-1 p-4 w-full md:w-1/2">
            {/* <div className="relative max-w-md w-full">
              <div className="absolute top-1 left-2 inline-flex items-center p-2">
                <i className="fas fa-search text-gray-400" />
              </div>
              <input
                className="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline"
                type="search"
                placeholder="Tìm..."
              />
            </div>

            <div className="mt-8 bg-white p-4 shadow rounded-lg">
              <h2 className="text-gray-500 text-lg font-semibold pb-4">
                Thông tin người dùng
              </h2>

              <div className="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6" />
              <table className="w-full table-auto text-sm">
                <thead>
                  <tr className="text-sm leading-normal">
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Avatar
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Mã người dùng
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Tên
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Role
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Email
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Số điện thoại
                    </th>
                    <th className="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm text-grey-light border-b border-grey-light">
                      Ngày sinh
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Juan Pérez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Comercio
                    </td>
                  </tr>
                  {/* Añade más filas aquí como la anterior para cada autorización pendiente */}
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      María Gómez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Carlos López
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Laura Torres
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Comercio
                    </td>
                  </tr>
                  <tr className="hover:bg-grey-lighter">
                    <td className="py-2 px-4 border-b border-grey-light">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Foto Perfil"
                        className="rounded-full h-10 w-10"
                      />
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Ana Ramírez
                    </td>
                    <td className="py-2 px-4 border-b border-grey-light">
                      Usuario
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* Botón "Ver más" para la tabla de Autorizaciones Pendientes */}
              <div className="text-right mt-4">
                <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded">
                  Thêm quản trị viên
                </button>
              </div>
            </div>
          </div> */}
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default QuanLy;
