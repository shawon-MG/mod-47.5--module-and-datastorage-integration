import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import LoadedData from './components/LoadedData/LoadedData';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <Shoes></Shoes>
      <LoadedData></LoadedData>
     
    </div>
  );
}

export default App;
