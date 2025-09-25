import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/App.scss';
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import RootLayout from "./layouts/Root/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/Error";
import Resturant from "./pages/Resturant";
import Signin from "./pages/Signin";
import CreateAccount from "./pages/CreateAccount";

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
            { path: 'signin', element: <Signin /> },
            { path: 'createanaccount', element: <CreateAccount /> }
        ]

    }
])

const App = () => {
    return (
        <div className="App">
            <Header />
            <RouterProvider router={router} />
            <Footer></Footer>
        </ div>
    );
}
export default App;