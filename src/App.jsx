import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Home from "./pages/Home/Home";
import Layout from "./Layout/Layout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const loadAOS = async () => {
      const AOS = await import("aos");
      AOS.init({
        duration: 600,
        once: true,
      });
    };
    loadAOS();
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
};

export default App;
