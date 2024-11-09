import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";


export const route = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    }
]);