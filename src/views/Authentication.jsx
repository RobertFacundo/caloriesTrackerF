import { LoginSignUp } from "../components/LoginSignUp";
import { OnBoarding } from "../components/OnBoarding";
import { useAuth } from "../hooks/useAuthentication";
import { AuthWrapper } from "../styled/auth/AuthWrapper";

export const Auth = () => {
    const auth = useAuth();

    return (
        <AuthWrapper>
            {auth.showOnBoarding ? <OnBoarding /> : <LoginSignUp {...auth} />}
        </AuthWrapper>
    );
};