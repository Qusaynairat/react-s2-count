import Navbar from './assets/components/Navbar/Navbar';
import './App.css';
import Counter from './assets/components/Counter/Counter';
function App() {

  return (
    <div className='container'>
      <Navbar />
      {/* <Counter count='10'>
        <h1>Counter</h1>
      </Counter> */}
      <Counter />
    </div>
  );
}

export default App
