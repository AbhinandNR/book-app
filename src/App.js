import logo from './logo.svg';
import './App.css';
import Addbook from './components/Addbook';
import Searchbook from './components/Searchbook';
import Deletebook from './components/Deletebook';
import Bookview from './components/Bookview';

function App() {
  return (
    <div >

     <Addbook/> 
      <Searchbook/>
      <Deletebook/>
    <Bookview/>

    </div>
  );
}

export default App;
