import Main from "@/LayOut/Main";
import ComparePrice from "@/Pages/ComparePrice/ComparePrice";
import Consultant from "@/Pages/Consultant/Consultant";
import Home from "@/Pages/Home/Home";
import {createBrowserRouter} from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'compare-price',
                element: <ComparePrice></ComparePrice>
            },
            {
                path: 'consultant',
                element: <Consultant></Consultant>
            }
      ]
    },
  ]);