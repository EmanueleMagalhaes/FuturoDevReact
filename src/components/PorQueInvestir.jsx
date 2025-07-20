import "./PorQueInvestir.css";

function PorQueInvestir({ title, description }) {
    return (
        <article className="investir-item">
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    );
}

export default PorQueInvestir;


