import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import User from "./Components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserHomepage from "./Components/UserHomepage";
import Uploads from "./Components/Uploads";
import Profile from "./Components/Profile";
import Layout from "./Components/Layout";
import { Toaster } from "sonner";
import BlogOpen from "./Components/BlogOpen";
import { Navigate } from "react-router-dom";
import Settings from "./Components/Settings";
import Delete from "./Components/Delete";
import Passchange from "./Components/Passchange";
import Adminlogin from "./Components/Adminlogin";
import Email from "./Components/Email";
import AdminDashBoard from "./Components/AdminDashBoard";
import Landing from "./Components/Landing";
import AdminUser from "./Components/AdminUser";
import Registration from "./Components/Registration";
import Footer from "./Components/Footer";
import BlogsVerify from "./Components/BlogsVerify";
import Reports from "./Components/Reports";
import Reviews from "./Components/Reviews";
import Comments from "./Components/Comments";
import ChatAi from "./Components/ChatAi";
import About from "./Components/About";
import Contactus from "./Components/Contactus";
import ProUpgrade from "./Components/ProUpgrade";

import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min.js";
import Favourites from "./Components/Favourites";






function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/adminlogin" element={<Adminlogin />} />
            <Route path="/admindashboard" element={<AdminDashBoard />} />
            <Route path="/adminuser" element={<AdminUser />} />
             <Route path="/blogsmanaging" element={<BlogsVerify />} />
             <Route path="/reviews" element={<Reviews />} />
             <Route path="/reports" element={<Reports />} />
             <Route path="/comments/:id" element={<Comments />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/userHomepage" />}></Route>
            <Route path="/landing" element={<Landing />} />
            <Route path="/userlogin" element={<User />} />
            <Route path="/about" element={<About />} />
            <Route path="/userHomepage" element={<UserHomepage />} />
            <Route path="/BlogOpen/:id" element={<BlogOpen />} />
            <Route path="/upload" element={<Uploads />} />
            <Route path="/ai" element={<ChatAi />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/deleteaccount" element={<Delete />} />
            <Route path="/Emailverify" element={<Email />} />
            <Route path="/reg" element={<Registration/>} />
            <Route path="/changepassword" element={<Passchange />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/proupgarde" element={<ProUpgrade />} />
            <Route path="/favourites" element={<Favourites />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster position="bottom-right" richColors style={{ transform: "scale(1.5)" }} />
    </div>
  );
}

export default App;
