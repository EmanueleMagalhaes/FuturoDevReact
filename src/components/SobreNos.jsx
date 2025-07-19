
import "./SobreNos.css";
import painelImg from '../img/painel-solar.jpg';

function SobreNos() {
    return (
        <section className='sobre-nos' id="sobre">
            <h2>Sobre Nós</h2>
            <figure>
                <img src={painelImg} alt='Casa com Painel Solar' width={700} />
            </figure>
            <p>Somos a Energia Solar 365, referência em projetos sustentáveis. Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com <br /> alta eficiência e confiabilidade.</p>
            <div className='card_sobre'>
                <h3>Dados do Mercado Brasileiro (até 2025)</h3>
                <ul>
                    <li>Economia na conta de luz: até 90%</li>
                    <li>Payback médio: 4 a 6 anos</li>
                    <li>Redução de CO2: 1.5 t </li>
                    <li>Sistemas conectados: mais de 400.000 (ANEEL abr 2025)</li>
                </ul>
            </div>
        </section>
    )
}
export default SobreNos;