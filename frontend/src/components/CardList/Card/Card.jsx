import "./Card.css";

export default function Card({ card, onDelete, onUpvote, onPin }) {
    const { id, message, gif, upvotes, pinnedAt } = card;

    return (
        <div className="card">
            <p className="card-message">{message}</p>
            <button
                onClick={() => onPin(id)}
                className ={pinnedAt ? "pinned" : ""}
            >
                &#x1F4CC;
            </button>
            <img src={gif} alt="GIF" className="card-gif" />

            <div className="card-actions">
                <button onClick={() => onUpvote(id)}>Upvotes: {upvotes}</button>
                <button onClick={() => onDelete(id)}>Delete</button>
            </div>
        </div>
    );
}