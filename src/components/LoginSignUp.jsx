import {FormCard, Title, StyledForm, Input, Button, ToggleText, ErrorMsg} from '../styled/components/LoginSignUpStyled';


export const LoginSignUp = ({ isLoginView, credentials, switchToSignUp, switchToLogin, handleChange, handleSubmit, loading, error }) => {

    return (
        <FormCard>
            <Title>{isLoginView ? 'Login' : 'Sign Up'}</Title>
            <StyledForm onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name='username'
                    placeholder="Write your username"
                    value={credentials.username}
                    onChange={handleChange}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Remember your password!"
                    value={credentials.password}
                    onChange={handleChange}
                    required
                />
                <Button type="submit" disabled={loading}>
                    {isLoginView ? 'Login' : 'Register'}
                </Button>
            </StyledForm>

            {loading && <p>Loading...</p>}
            {error && <ErrorMsg style={{ color: 'red' }}>{error}</ErrorMsg>}

            <ToggleText>
                {isLoginView
                    ? "Don't you have an account? "
                    : "Already have an account? "}{""}
                <button onClick={isLoginView ? switchToSignUp : switchToLogin}>
                    {isLoginView ? 'Sign Up' : 'Log in'}
                </button>
            </ToggleText>
        </FormCard>
    )
}