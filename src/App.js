import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Landing, Error, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {AddJob, AllJobs, Profile, SharedLayout, Stats} from "./pages/Dashboard";
import {ProtectedRoute} from './pages'

const App = () => {
  return (
    <Router>
      <Wrapper>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
            <Route index={true}  element={<Stats/>}></Route>
            <Route path='all-jobs' element={<AllJobs />}></Route>
            <Route path='add-job' element={<AddJob />}></Route>
            <Route path='profile' element={<Profile />}></Route>
          </Route>
          <Route path="/landing" element={<Landing />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Wrapper>
    </Router>
  );
};

const Wrapper = styled.main``;
export default App;
