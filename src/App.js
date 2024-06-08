import './App.css';
import log from "./component/images/header-logo.jpg";
import Person2Icon from '@mui/icons-material/Person2';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import Home from './component/Home/Home';
function App() {
  return (
    <div className="App">
      <div className='Header'>
        <div className='header-log'>
          <img src={log} alt="header log image" draggable='false' />
        </div>
        <div className='header-nav'>
          <div className='nav-bar'>
            <h3>Dashboard</h3>
            <h3>FAQS</h3>
            <h3>Support</h3>
          </div>
          <div className='nav-profile'>
            <div className='profile'>
              <Person2Icon className='profile-icon' />
              <ExpandMoreOutlinedIcon className='profile-icon' />
            </div>
          </div>
        </div>
      </div>
      <Home />

    </div>
  );
}

export default App;
