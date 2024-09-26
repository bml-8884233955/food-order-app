import { useRef } from "react";
import './Form.css';

export default function Form() {
    const email = useRef();
    const password = useRef();

    return (
        <>
            Demo Commit
            <form>
                <h2>Login</h2>
                <div className="row">
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            ref={email}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            ref={password}
                        />
                    </div>
                    <p className="form-actions">
                        <button className="button button-flat">Reset</button>
                        <button className="button">Login</button>
                    </p>
                </div>
            </form>
        </>
    )
}