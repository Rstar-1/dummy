import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default App;
