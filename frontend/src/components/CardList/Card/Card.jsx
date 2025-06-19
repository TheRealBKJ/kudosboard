import "./Card.css"; 

export default function Card({ card, onDelete, onUpvote }) {
    const { id, message, gif, upvotes } = card;

    return (
        <div className="card">
            <p className="card-message">{message}</p>
            <img src={gif} alt="GIF" className="card-gif" />

            <div className="card-actions">
                <button onClick={() => onUpvote(id)}>Upvotes: {upvotes}</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
}