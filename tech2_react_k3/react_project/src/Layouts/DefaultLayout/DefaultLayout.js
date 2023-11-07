import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "../../Routes/publicRoutes";
import { protectedRoutes } from "../../Routes/protectedRoutes";
import Error404 from "../../Errors/Error404";

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {publicRoutes}
          {protectedRoutes}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
