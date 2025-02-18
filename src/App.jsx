import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import EventPage from "./pages/Events/EventPage";
import EventShowPage from "./pages/EventDisplay/EventShowPage";
import CulturalFest from "./pages/CulturalFest/CulturalFestPage";
import CulturalFestPage from "./pages/CulturalFest/CulturalFestPage";
import DepartmentShowOff from "./pages/Technical-Fest/DepartmentShowOff";
import AppNavigation from "./router/AppNavigation";
import Banners from "./components/page-components/Banners";
import MaskedCursor from "./components/page-components/MaskedCursor";
import LiveinConcert from "./pages/Live-in-Concert/LiveinConcert";
import FlipCard from "./components/page-components/FlipCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <HomePage /> */}
      {/* <DepartmentShowOff /> */}
      {/* <EventShowPage /> */}
      {/* <EventPage /> */}
      {/* <CulturalFestPage /> */}
      {/* <LiveinConcert/> */}
      <MaskedCursor />
      <AppNavigation  />
      {/* <FlipCard /> */}
      {/* <Banners /> */}
    </>
  );
}

export default App;
