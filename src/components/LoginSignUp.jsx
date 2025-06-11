import { FormCard, Title, StyledForm, Input, Button, ToggleText, ErrorMsg } from '../styled/components/LoginSignUpStyled';
import React, { useState } from 'react';


export const LoginSignUp = React.memo(({ isLoginView, credentials, switchToSignUp, switchToLogin, handleChange, handleSubmit, loading, error }) => {
    const [showPassword, setShowPassword] = useState(false);
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
                <div style={{ position: 'relative' }}>
                    <Input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Remember your password!"
                        value={credentials.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            right: '10px',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer'
                        }}
                    >
                        {showPassword ? '🙈' : '👁️'}
                    </button>
                </div>
                <Button type="submit" disabled={loading}>
                    {isLoginView ? 'Login' : 'Register'}
                </Button>
            </StyledForm>

            {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
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
})