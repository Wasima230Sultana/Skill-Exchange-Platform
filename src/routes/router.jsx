import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import PopularSkills from "../Components/PopularSkills";
import SkillDetails from "../Components/SkillDetails";
import Loading from "../Components/Loading";

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
    }
])