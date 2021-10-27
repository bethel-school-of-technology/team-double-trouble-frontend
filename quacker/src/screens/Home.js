import '../styling/Home.css';
import Sidebar from "../components/Sidebar.js";
import Feed from '../components/Feed.js';

function Home() {
  return (
    <div className="Home">
            
      {/* Sidebar */}
        <Sidebar />
      
      {/* Feed */}   
        <Feed />

    </div>
  );
}

export default Home;
