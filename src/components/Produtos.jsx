import "./Produtos.css";

function Produtos ({imageUrl, title, description}) {
    return (
        <article className="produtos-item">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

export default Produtos;