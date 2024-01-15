import NavMenu from './Components/nav';
import Main from './Components/main';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <NavMenu />
        <Main />
      </div>
    </div>
  );
}

export default App;
