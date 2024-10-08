import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../features/home/HomePage";
import About from "../../features/about/About";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import ProfilePage from "../../features/profiles/ProfilePage";
import RequireAuth from "./RequireAuth";
import RegisterSuccess from "../../features/users/RegisterSuccess";
import ConfirmEmail from "../../features/users/ConfirmEmail";

export const routes: RouteObject[] = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <RequireAuth />,
                children: [
                    { path: "home", element: <HomePage /> },
                    { path: "about", element: <About /> },
                    { path: "profiles/:username", element: <ProfilePage /> },
                ],
            },
            { path: "not-found", element: <NotFound /> },
            { path: "server-error", element: <ServerError /> },
            { path: "account/registerSuccess", element: <RegisterSuccess /> },
            { path: "account/verifyEmail", element: <ConfirmEmail /> },
            {
                path: "*",
                element: (
                    <Navigate
                        replace
                        to="/not-found"
                    />
                ),
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
