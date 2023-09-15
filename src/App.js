import './App.css';
import Landing from './Pages/Landing';

function App() {
  return (
    <div className="App">
      <div className='bgWrapper'>
        <ul className='figures'>
          <li data-role="left-top-1"></li>
          <li data-role="left-top-2"></li>
          <li data-role="left-top-3"></li>
          <li data-role="right-top-1"></li>
          <li data-role="right-top-2"></li>
          <li data-role="right-top-3"></li>
          <li data-role="right-center-1"></li>
          <li data-role="right-center-2"></li>
          <li data-role="right-center-3"></li>
        </ul>
      </div>
      <Landing />
    </div>
  );
}

export default App;
