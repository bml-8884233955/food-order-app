import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import RootLayout from "./components/Root/Root";
import Home from "./views/Home";
import Explore from "./views/Explore";
import ErrorPage from "./views/Error";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'explore', element: <Explore /> }
        ]

    }
])

export default function App() {
    return (
        <>
            <Header />
            <RouterProvider router={router} />

            {/* <Footer></Footer> */}
        </>
    );
}