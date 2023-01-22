import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Product from './Components/product';
import Appareldemo from './Components/Appareldemo';

function App() {
  return (
    <div >
      <h1 class="text-3xl hover:text-5xl hover:text-blue-400">Hello world!</h1>
      {/* <Header /> */}
      <Product />
      <Appareldemo />
    </div>
  );
}

export default App;
