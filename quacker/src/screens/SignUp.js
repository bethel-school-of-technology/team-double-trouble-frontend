import "../styling/SignUp.css";
import LoginForm from '../components/LoginForm';
import WelcomePhoto from "../components/WelcomePhoto";

function SignUp() {
    return (
        <div className="Welcome">
           <WelcomePhoto />
           <LoginForm />
        </div>
    )
}

export default SignUp
