import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Styles from "./App.style";
import axios, { AxiosResponse } from "axios";
import { refresh, refreshToken } from "./features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./app/store";
import { logout } from "./features/auth/authSlice";
import { IAuthToken } from "./shared/types";
import Modal from "./components/Modal";

function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch: AppDispatch = useDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  axios.interceptors.response.use(
    (response: AxiosResponse) => response,
    async (error) => {
      const prevRequest = error?.config;
      if (
        error.response.status === 401 &&
        !prevRequest?.sent &&
        error?.response?.data.message === "Expired JWT Token"
      ) {
        prevRequest.sent = true;
        const data: IAuthToken = {
          refresh_token: user.refresh_token,
        };
        try {
          const newAccessToken: IAuthToken = await refresh(data);
          prevRequest.headers[
            "Authorization"
          ] = `Bearer ${newAccessToken.token}`;
          dispatch(refreshToken(newAccessToken));
          localStorage.setItem("user", JSON.stringify(newAccessToken));
          return axios(prevRequest);
        } catch (error) {
          dispatch(logout());
        }
      }
    }
  );

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <Router>
        <Styles.Container>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<Dashboard setIsOpen={setIsOpen} />}
            ></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </Styles.Container>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
