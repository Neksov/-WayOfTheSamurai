import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
        Simple HTML
        <Header/>
        <Tehno/>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
    </div>
  );
}
const Tehno = ()=>{
  return(
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
  );
}
export default App;
