export const Card = ({ image, title, category, paragraph }) => {
    return (
        <div style={{ border: "1px solid black" }}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h6>{category}</h6>
            <p>{paragraph}</p>
        </div>
    );
}

export default Card;