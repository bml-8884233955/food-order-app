import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const Signin = () => {
    return (
        <>
            <h2>Login</h2>

            <span>or</span>
            <Link to="/createanaccount" className="link-success">
                Create an account
            </Link>

            <LoginForm />
        </>
    )
}

export default Signin;