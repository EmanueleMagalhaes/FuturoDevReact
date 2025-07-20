import "../Orcamento.css";

function Orcamento() {
    return (
        <section className='orcamento' id="orcamento">
            <h2>Solicite seu Orçamento</h2>
            <form>
                
                <input type="text" id="nome" name="nome" required />

                
                <input type="email" id="email" name="email" required />

                
                <input type="tel" id="telefone" name="telefone" required />

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
}
export default Orcamento;

