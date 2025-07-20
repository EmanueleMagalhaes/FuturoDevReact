
import './App.css'
import Navbar from './components/Navbar';
import PorQueInvestir from './components/PorQueInvestir';
import SobreNos from './components/SobreNos';
import Produtos from './components/Produtos';
import Orcamento from './components/Orcamento';

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

    <section className='produtos-section' id='produtos'>
 
        <div className='produtos-container'>
          <h2 className="produtos-titulo">Nossos Produtos</h2>
          <Produtos imageUrl={"https://images.tcdn.com.br/img/img_prod/245284/modulo_fotovoltaico_monocristalino_half_cell_550w_emsh_550_hc_off_intelbras_10016899_1_a6f476f6281c8e6955e96ba7d5c26440.png"} title={"Placa Solar 400 W"} description={"Alta eficiência para uso residencial e comercial."} />
          <Produtos imageUrl={"https://sollares.com.br/1933-large_default/gerador-solar-1917kw-microinversor-tsun-3kw-1278kwp-painel-710w.jpg"} title={"Kit Solar Completo"} description={"Inclui placas, inversor, estrutura, cabos e instalação profissional."} />
          <Produtos imageUrl={"https://d2u2qhufg0q9tn.cloudfront.net/assets/arquivos/imgDetProduto_f244b2a0-4ad2-4f51-9b63-03a5e31b3ada_inversor-alta-site.jpg"} title={"Inversor Solar"} description={"Transforma energia elétrica para sua casa."} />
          
        </div>
      </section>


      <section className='orcamento-section' id='orcamento'>
        <h2 className='orcamento-titulo'>Solicite seu Orçamento</h2>
        <Orcamento />
      </section>

    </div>
  );
}

export default App;
