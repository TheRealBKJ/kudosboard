import "./Card.css";
import CreateComment from "./CreateComment/CreateComment.jsx";
import { useState } from "react";

export default function Card({ card, onDelete, onUpvote, onPin }) {
    const { id, board_id, message, gif, upvotes, pinnedAt } = card;
    const [showComments, changeShowComments] = useState(false)




    //add a button for add a comment that pens and calls createComment
    return (

        <div className="card">

            {showComments &&
                <CreateComment
                    cardId={id} //pass down id for fetching
                    boardId={board_id} // pass down boardid for fetching
                    onExit={() => changeShowComments(false)} // close out when clicked
                />}

            <p className="card-message">{message}</p>

            <button
                onClick={() => onPin(id)}
                className={pinnedAt ? "pinned" : ""}
            >
                &#x1F4CC;
            </button>

            <img src={gif} alt="GIF" className="card-gif" />

            <div className="card-actions">
                <button onClick={() => onUpvote(id)}>Upvotes: {upvotes}</button>
                <button onClick={() => onDelete(id)}>Delete</button>
                <button onClick={() => changeShowComments(prev => !prev)}>Comments</button>
            </div>
        </div>
    );
}