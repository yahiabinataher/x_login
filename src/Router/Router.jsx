import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignIn from "../pages/SignIn/SignIn";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Home/>

    },
    {
        path:"/login",
        element:<Login/>

    },
    {
        path:"/sign",
        element:<SignIn/>

    }
])


export default router