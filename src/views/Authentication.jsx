import { LoginSignUp } from "../components/LoginSignUp";
import { OnBoarding } from "../components/OnBoarding";
import { useAuth } from "../hooks/useAuthentication";

export const Auth = () => {
    const auth = useAuth()

    return (
        <div>
            <h1>Auth</h1>
            {auth.showOnBoarding ? <OnBoarding /> : <LoginSignUp {...auth}/>}
        </div>
    )
}