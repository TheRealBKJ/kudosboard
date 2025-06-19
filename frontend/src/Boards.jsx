import { Link, useLocation, useParams } from "react-router"
import { useEffect, useState } from "react";
import BoardCard from "./components/BoardList/BoardCard/BoardCard.jsx";
import CardList from "./components/CardList/CardList.jsx"
import CreateACard from "./components/CardList/CreateACard/CreateACard.jsx";
import "./Boards.css"
const API_BASE = 'http://localhost:3000/board';

export default function Boards() {
    const { boardId } = useParams() // gets the ID for fetching
    const boardTitle = useLocation(); // gets the state passed over from boardcard for title
    const { title } = location.state
    const [cards, setCards] = useState([])


    // when id changes so does the page
    useEffect(() => {
        // fetch cards
    }, [boardId])

    async function fetchCards() {
        try {
            const res = await fetch(`${API_BASE}/${boardId}`);
            const data = await res.json();
            setCards(data);
        } catch (error) {
            console.error(error);
        }
    }

    // Load cards when boardId changes
    useEffect(() => {
        if (boardId) fetchCards();
    }, [boardId]);

    // add new card
    async function addCard({ message, gif, owner }) {
        try {
            const res = await fetch(`${API_BASE}/${boardId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message,
                    gif,
                    owner
                }),
            });
            await fetchCards(); // refresh after adding
        } catch (error) {
            console.error(error);
        }
    }

    // upvote a card
    async function upvoteCard(cardId) {
        try {
            const res = await fetch(`${API_BASE}/${boardId}/${cardId}`, {
                method: 'PUT',
            });
            if (!res.ok) throw new Error('Failed to upvote card');
            await fetchCards(); // refresh after upvote
        } catch (error) {
            console.error(error);
        }
    }

    // delete a card
    async function deleteCard(cardId) {
        try {
            const res = await fetch(`${API_BASE}/${boardId}/${cardId}`, {
                method: 'DELETE',
            });
            if (res.status !== 204) throw new Error('Failed to delete card');
            await fetchCards(); // refresh after delete
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <header className ="boards-header">
                <h1>{title}</h1>
                <Link to="/">← Back to Home</Link>
            </header>

            {/* Modal to create a card */}
            <CreateACard onCreate={addCard} />

            {/* List of all cards */}
            <CardList
                cards={cards}
                onDelete={deleteCard}
                onUpvote={upvoteCard}
            />
        </div>
    );
}