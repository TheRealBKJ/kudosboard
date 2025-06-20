import Card from "./Card/Card.jsx";
import "./CardList.css";
export default function CardList({ cards, onDelete, onUpvote }) {
    return (
        <div className="card-list">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onDelete={onDelete}
                    onUpvote={onUpvote}
                />
            ))}
        </div>
    );
}
