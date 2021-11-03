import "../styling/SignUp.css";
import LoginForm from '../components/LoginForm';
import WelcomePhoto from "../components/WelcomePhoto";

function Signup() {
    return (
        <div className="Welcome">
           <WelcomePhoto />
           <LoginForm />
        </div>
    )
}

export default Signup
