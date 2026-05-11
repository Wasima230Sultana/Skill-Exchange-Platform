import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import PopularSkills from "../Components/PopularSkills";
import SkillDetails from "../Components/SkillDetails";
import Loading from "../Components/Loading";
import AuthLayout from "../layout/AuthLayout";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/popular-skills',
                element:<PopularSkills></PopularSkills>,
            },{
                path:'/skill/:id',
                element:<SkillDetails></SkillDetails>,
                 loader:()=>fetch('/skill.json'),

            }
            
        ]
    },{
        path:'/auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
])