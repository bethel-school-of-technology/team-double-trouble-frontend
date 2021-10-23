import './App.css';
import Sidebar from "./Sidebar.js";
import Feed from './Feed.js';

function App() {
  return (
    <div className="App">
            
      {/* Sidebar */}
        <Sidebar />
      
      {/* Feed */}   
        <Feed />

    </div>
  );
}

export default App;
