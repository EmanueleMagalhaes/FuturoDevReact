
import "./SobreNos.css";
import painelImg from '../img/painel-solar.jpg';

function SobreNos() {
    return (
        <div className='sobre-nos'>
            <h2>Sobre Nós</h2>
            <figure>
                <img src={painelImg} alt='Casa com Painel Solar' width={700} />
            </figure>
            <p>Somos a Energia Solar 365, referência em projetos sustentáveis. Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com <br /> alta eficiência e confiabilidade.</p>
        </div>
    )
}
export default SobreNos;