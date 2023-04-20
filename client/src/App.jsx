import React, { Suspense } from "react";
import SuspenseFallback from "./components/SuspenseFallback";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import Layout from "./Layouts/Layout";

const App = () => {
  return (
    <Suspense fallback={SuspenseFallback}>
      <Routes>
        <Route path="/*" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
