import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (ValidateState()) {
            // alert(`Login Siccessful for ${email}`);
            setEmail('');
            setPassword('');
            navigate('/home');
        }
    }

    const ValidateState = () => {
        let tempErrors = {};

        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Invalid email format";
        }

        if (!password) {
            tempErrors.password = "Password is required";
        } else if (password.length < 6) {
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your email"
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