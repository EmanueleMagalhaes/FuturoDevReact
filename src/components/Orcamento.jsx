import "./Orcamento.css";

function Orcamento() {
  return (
    <section className='orcamento' id="orcamento">
      <form>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
        <input type="email" id="email" name="email" placeholder="Seu e-mail" required />
        <textarea id="descricao" name="descricao" placeholder="Descreva seu projeto (área, localização...)" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Orcamento;

