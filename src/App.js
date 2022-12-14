import Hero from './components/Hero';
import Navbar from './components/Navbar';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <HeadlineCards/>
      <Food/>
    </div>
  );
}

export default App;
