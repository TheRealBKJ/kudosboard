import "./CreateComment.css";
import { useState, useEffect, useSyncExternalStore } from "react"; // load comments when loaded and let ua dd comments
const API_URL = import.meta.env.VITE_API_CARD_URL; // holds base url to fetch from
// fetch from here because it should only be called when someone wants to add a comment

export default function CreateComment({ cardId, boardId, onExit, card_gif, card_text }) {
    const [comments, setComments] = useState([]) //hold current comments
    const [newComment, makeNewComment] = useState("")//hold message
    const [author, setAuthor] = useState("") //keep author , optional value

    //get all the current comments
    const fetchComments = async () => {
        try {
            const res = await fetch(`${API_URL}/${boardId}/${cardId}/comments`);
            const data = await res.json();
            setComments(data);

        } catch (err) {

            console.error("Failed to fetch comments:", err);

        }
    };

    useEffect(() => {
        fetchComments();
    }, [cardId, boardId]) // fetch when the boardId or cardID changes

    //post  a comment all can fetch cards
    const postComments = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return; //if theres nothing in ocmment dont do anything

        try {
            const res = await fetch(`${API_URL}/${boardId}/${cardId}/comment`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    message: newComment,
                    author: author || null
                })
            });

            const created = await res.json();
            setComments((prev) => [...prev, created]);
            makeNewComment("");
            setAuthor(""); //set everything back to normal
        } catch (err) {
            console.error("Error posting comment:", err);
        }
    }



    //map out comments andthen have a form to add more comments, make it column based
    return (
        <div className="modal" onClick={onExit}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="exit-button" onClick={onExit}>×</button>
                <h2>Comments</h2>

                {/* comments Display */}
                <img src={card_gif} alt="GIF" className="card-gif" />
                <h2>{card_text}</h2>

                <div className="comments-box">
                    {comments.map((comment) => (
                        //map out a comment in rows
                        <div className="comment-row" key={comment.id}>
                            <span className="comment-author">{comment.author || "Anonymous"}:</span>
                            <span className="comment-text">{comment.message}</span>
                        </div>
                    ))}
                </div>

                {/* Comment form*/}
                <form className="comment-form" onSubmit={postComments}>
                    <input
                        type="text"
                        placeholder="Comment"
                        value={newComment}
                        onChange={(e) => makeNewComment(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Author"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button type="submit">Post Comment</button>
                </form>



            </div>
        </div>



    )
}


