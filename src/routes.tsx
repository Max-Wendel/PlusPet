import { Route, BrowserRouter, Routes } from "react-router-dom";

import Services from "./components/Pages/ServiceList";
import Pets from "./components/Pages/PetList";
import Tutors from "./components/Pages/TutorList";
import Login from "./components/auth"
import ErrorPage from "./components/Pages/ErrorPage";

const AplicationRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Services} path="/home" />
                <Route Component={Login} path="/" />
                <Route Component={Pets} path="/pets" />
                <Route Component={Tutors} path="/tutors" />
                <Route Component={ErrorPage} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default AplicationRoutes;