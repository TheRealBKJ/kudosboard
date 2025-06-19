import { useState } from "react";
import "./CreateACard.css"; // Optional styling

export default function CreateCard({ onSubmit, onExit }) {
    const [message, setMessage] = useState("");
    const [gif, setGif] = useState("");
    const [owner, setOwner] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({// prop up data
            message,
            gif,
            owner: owner || null,
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                {/*Exit Button*/}
                <button className="exit-button" onClick={onExit}>×</button>

                <h2>Create a New Card</h2>
                <form onSubmit={handleSubmit} className="create-card-form">
                    <input
                        type="text"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="GIF URL"
                        value={gif}
                        onChange={(e) => setGif(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Owner (optional)"
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}
