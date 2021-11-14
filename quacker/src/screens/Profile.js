import '../styling/Profile.css';
import Sidebar from "../components/Sidebar.js";
import UserProfileFeed from '../components/UserProfileFeed';

function Profile() {
  return (
    <div className="Profile">
            
      {/* Sidebar */}
        <Sidebar />
      
      {/* User Feed */}   
        <UserProfileFeed />

    </div>
  );
}

export default Profile;
