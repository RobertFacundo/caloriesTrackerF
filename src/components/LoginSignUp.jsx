

export const LoginSignUp = ({ isLoginView, credentials, switchToSignUp, switchToLogin, handleChange, handleSubmit, loading, error }) => {

    return (
        <div>
            <h2>{isLoginView ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='username'
                    placeholder="Write your username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Remember your password!"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit" disabled={loading}>
                    {isLoginView ? 'Login' : 'Register'}
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <p>
                {isLoginView
                    ? "Don't you have an account?"
                    : "Already have an account"}{""}
                <button onClick={isLoginView ? switchToSignUp : switchToLogin}>
                    {isLoginView ? 'Sign Up' : 'Log in'}
                </button>
            </p>
        </div>
    )
}