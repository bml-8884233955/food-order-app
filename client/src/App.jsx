import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header/Header";
import RootLayout from "./components/Root/Root";
import Home from "./views/Home";
import Cart from "./views/Cart";
import ErrorPage from "./views/Error";
import Resturant from "./views/Resturant";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'home', element: <Home /> },
            { path: 'resturants/:resturantId', element: <Resturant /> },
            { path: 'cart', element: <Cart /> }
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