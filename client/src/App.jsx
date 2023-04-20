import React, { Suspense } from "react";
import SuspenseFallback from "./components/SuspenseFallback";

const App = () => {
  return <Suspense fallback={SuspenseFallback}>App</Suspense>;
};

export default App;
