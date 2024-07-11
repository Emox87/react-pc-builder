import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import RootLayout from "./pages/RootLayout";

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import CasePage from "./pages/CasePage";
import MotherboardPage from "./pages/MotherboardPage";
import MemoryPage from "./pages/MemoryPage";
import CpuPage from "./pages/CpuPage";
import GpuPage from "./pages/GpuPage";
import PowerSupplyPage from "./pages/PowerSupplyPage";
import AioCoolersPage from "./pages/AioCoolersPage";
import FansPage from "./pages/FansPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/cpu",
        element: <CpuPage />,
      },
      {
        path: "/case",
        element: <CasePage />,
      },
      {
        path: "/motherboard",
        element: <MotherboardPage />,
      },
      {
        path: "/ram",
        element: <MemoryPage />,
      },
      {
        path: "/gpu",
        element: <GpuPage />,
      },
      {
        path: "/psu",
        element: <PowerSupplyPage />,
      },
      {
        path: "/aio",
        element: <AioCoolersPage />,
      },
      {
        path: "/fans",
        element: <FansPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
