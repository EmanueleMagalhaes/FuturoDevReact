
import './App.css'
import Navbar from './components/Navbar';
import SobreNos from './components/SobreNos';

function App() {
  return (
    <div>
      <header className='header-app'>
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu futuro</p>
          
        <Navbar />

      </header>
      

    <section className='section-app'>
      <SobreNos /> 
    </section>
    </div>
  );
}

export default App;
