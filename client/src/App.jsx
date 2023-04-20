import React, { Suspense } from "react";
import SuspenseFallback from "./components/SuspenseFallback";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";

const App = () => {
  return (
    <Suspense fallback={SuspenseFallback}>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
