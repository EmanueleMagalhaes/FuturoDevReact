
import './App.css'
import Navbar from './components/Navbar';
import PorQueInvestir from './components/PorQueInvestir';
import SobreNos from './components/SobreNos';

function App() {
  return (
    <div>
      <header className='header-app'>
        <h1>Energia Solar 365</h1>
        <p>Economize com o sol. Invista no seu futuro</p>
          
        <Navbar />

      </header>
      
      <SobreNos />

      <section className='investir-section' id='investir'>
 
        <div className='investir-container'>
          <h2 className="investir-titulo">Por que investir em Energia Solar?</h2>
          <PorQueInvestir title={"Redução da Conta"} description={"Economize até 90% na conta de energia elétrica."} />
          <PorQueInvestir title={"Sustentabilidade"} description={"Energia limpa e renovável, ajudando o planeta."} />
          <PorQueInvestir title={"Valorização do Imóvel"} description={"Residências com placas solares aumentam até 10% no valor de mercado."} />
          <PorQueInvestir title={"Retorno Garantido"} description={"Payback em 4-6 anos e economia mensal garantida."} />
        
        </div>
      </section>
    </div>
  );
}

export default App;
