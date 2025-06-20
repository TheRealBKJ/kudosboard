import Card from "./Card/Card.jsx";
import "./CardList.css";
export default function CardList({ cards, onDelete, onUpvote, onPin }) {

    //have to sort out cards before diplaying for pinneed
    const sortedCards = [...cards].sort((a, b) => {
        if (a.pinnedAt && b.pinnedAt) {
            return new Date(b.pinnedAt) - new Date(a.pinnedAt); // newer pinned first
        }
        if (a.pinnedAt) return -1; // a pinned, b not → a first
        if (b.pinnedAt) return 1;  // b pinned, a not → b first
        return 0;                  // neither pinned → keep original order
    });


    return (
        <div className="card-list">
            {sortedCards.map((card) => (
                <Card
                    key={card.id}
                    card={card}
                    onDelete={onDelete}
                    onUpvote={onUpvote}
                    onPin={onPin}
                />
            ))}
        </div>
    );
}
