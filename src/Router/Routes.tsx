import Main from "@/LayOut/Main";
import ComparePrice from "@/Pages/ComparePrice/ComparePrice";
import Consultation from "@/Pages/Consultant/Consultant";
import Consultant from "@/Pages/Consultant/Consultant";
import DentistTrend from "@/Pages/Consultant/DentistTrend";
import DermatologistTrend from "@/Pages/Consultant/DermatologistTrend";
import Gynaecologist from "@/Pages/Consultant/Gynaecologist";
import Immunodermatologist from "@/Pages/Consultant/Immunodermatologist";
import AsideNav from "@/Pages/Home/Aside/AsideNav";
import Home from "@/Pages/Home/Home";
import Register from "@/Pages/Home/Register/Register";
import Constipation from "@/Pages/Home/medicineAll/Constipation";
import CoughFlu from "@/Pages/Home/medicineAll/CoughFlu";
import Dermatitis from "@/Pages/Home/medicineAll/Dermatitis";
import Diarrhea from "@/Pages/Home/medicineAll/Diarrhea";
import Eczema from "@/Pages/Home/medicineAll/Eczema";
import Fever from "@/Pages/Home/medicineAll/Fever";
import Gastric from "@/Pages/Home/medicineAll/Gastric";
import Gynecological from "@/Pages/Home/medicineAll/Gynecological";
import Nasal from "@/Pages/Home/medicineAll/Nasal";
import OTCmedicine from "@/Pages/Home/medicineAll/OTCmedicine";
import OralFungalInfection from "@/Pages/Home/medicineAll/OralFungalInfection";
import Spasm from "@/Pages/Home/medicineAll/Spasm";
import Ulcer from "@/Pages/Home/medicineAll/Ulcer";
import Vitamins from "@/Pages/Home/medicineAll/Vitamins";
import ZincDeficiency from "@/Pages/Home/medicineAll/ZincDeficiency";
import Login from "@/Pages/login/Login";
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
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
      ]
  },
  {
    path: '/aside',
    element: <AsideNav></AsideNav>,
    children: [
        {
            path: 'otc-medicine',
            element: <OTCmedicine></OTCmedicine>
        },
        {
            path: 'nasal',
            element: <Nasal></Nasal>
        },
        {
            path: 'gastric',
            element: <Gastric></Gastric>
        },
        {
            path: "zinc-deficiency",
            element: <ZincDeficiency></ZincDeficiency>
        },
        {
            path: 'eczema',
            element: <Eczema></Eczema>
        },
        {
            path: "Spasm",
            element: <Spasm></Spasm>
        },
        {
            path: 'cough-flu',
            element: <CoughFlu></CoughFlu>
        },
        {
            path: "diarrhea",
            element: <Diarrhea></Diarrhea>

        },
        {
            path: "fever",
            element: <Fever></Fever>
        },
        {
            path: "ulcer",
            element: <Ulcer></Ulcer>
        },
        {
            path: "constipation",
            element: <Constipation></Constipation>
        },
        {
            path: "vitamins",
            element: <Vitamins></Vitamins>
        },
        {
            path: "dermatitis",
            element: <Dermatitis></Dermatitis>
        },
        {
            path: 'oral-fungal-infection',
            element: <OralFungalInfection></OralFungalInfection>
        },
        {
            path: 'gynecological',
            element: <Gynecological></Gynecological>
        }

    ]
    },
    {
        path: '/consultant',
        element: <Consultation></Consultation>,
        children: [
           
            {
                path: 'dentist',
                element: <DentistTrend></DentistTrend>
            },
            {
                path: 'dermatologist-T',
                element: <DermatologistTrend></DermatologistTrend>
            },
            {
                path: 'immunodermatologist',
                element: <Immunodermatologist></Immunodermatologist>
            },
            {
                path: 'gynaecologist',
                element: <Gynaecologist></Gynaecologist>
            }
        ]
    }
  ]);