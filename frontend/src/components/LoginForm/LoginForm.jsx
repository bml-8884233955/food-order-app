import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ValidateState()) {
            // alert(`Login Siccessful for ${email}`);
            setUser({
                email: "",
                password: ""
            });
            navigate('/home');
        }
    }

    const ValidateState = () => {
        let tempErrors = {};

        if (!user.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            tempErrors.email = "Invalid email format";
        }

        if (!user.password) {
            tempErrors.password = "Password is required";
        } else if (user.password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    }

    return (
        <>
            <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="input-container">
                        {/* Email */}
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                        {errors.password && (<span style={{ color: "red" }}>
                            {errors.password}</span>)}
                    </div>
                    <div className="form-actions">
                        <button className="button">Login</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default LoginForm;