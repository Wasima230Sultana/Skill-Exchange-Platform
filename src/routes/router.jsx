import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import PopularSkills from "../Components/PopularSkills";

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
                // loader:()=>fetch('/public/skill.json')
            }
        ]
    }
])