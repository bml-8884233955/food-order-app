const CreateAccount = () => {
    const [user, setUSer] = useState({});
    const [errors, setErrors] = useState({});

    return (
        <>

            <p> Create an account</p>
            <form onSubmit={handleCreateAccount}>
                <div className="row">
                    <div className="input-container">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            id="fullName"
                            type="text"
                            name="fullName"
                            value={fullName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.fullName && <span style={{ color: "red" }}>{errors.fullName}</span>}
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="text"
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                    </div>
                </div>

                <div className="input-container">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        onBlur={handleBlur}

                    />
                    {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
                </div>
                <div className="input-container">
                    <label htmlFor="confirmPassword">confirmPassword </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        value={user.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {errors.confirmPassword && <span style={{ color: "red" }}>{errors.confirmPassword}</span>}
                </div>
                <div className="input-container">
                    <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={user.termsAccepted}
                        onChange={handleChange}
                    />
                    I agree to Terms & Conditions

                    {errors.termsAccepted && <span style={{ color: "red" }}>{errors.termsAccepted}</span>}
                </div>
                <button type="submit" disabled={Object.keys(errors).length > 0}>
                    Sign Up
                </button>
            </form >


        </>
    )
}

export default CreateAccount;