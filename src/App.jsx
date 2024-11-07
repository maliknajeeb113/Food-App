import './App.css'
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantPage from "./components/RestaurantPage";
import { lazy, Suspense, useState } from "react";
const Grocery = lazy(() => import("./components/Grocery")); // lazy import : imported only if needed - need to use <Suspense><Suspense/> with it 


function App() {

  return (

    <div className="">
      <Header />
      <Outlet />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={
            
          <div>Loading...</div>
          }>
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

export default App
