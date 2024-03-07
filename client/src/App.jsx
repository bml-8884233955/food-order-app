import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import RootLayout from "./components/Root/Root";
import Home from "./views/Home";
import Cart from "./views/Cart";
import ErrorPage from "./views/Error";
import Resturant from "./views/Resturant";
import Signin from "./views/Signin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/', element: <Home /> },
            { path: 'home', element: <Home /> },
            { path: 'resturants/:resturantId', element: <Resturant /> },
            { path: 'cart', element: <Cart /> },
            { path: 'signin', element: <Signin /> }
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