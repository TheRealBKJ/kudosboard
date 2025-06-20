import { useState } from "react";
import "./CreateACard.css"; // Optional styling
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY
export default function CreateCard({ onSubmit, onExit }) {
    const [message, setMessage] = useState("");
    const [gif, setGif] = useState("");
    const [owner, setOwner] = useState("");
    const [images, setImages] = useState([]) // hold images fetched from gif
    const [selectedGif, setSelectedGif] = useState("")// hold url towards selected gif
    const [searchQuery, setSearchQuery] = useState("")

    const handleSubmit = (e) => {// props up the data of the new card
        e.preventDefault();
        onSubmit({
            message,
            gif,
            owner: owner || null,
        });
    };

    // function for when search is clicked for gif
    const searchForGif = async (e) => {
        e.preventDefault() //stops the normal program
        if (!searchQuery.trim()) return;

        try {
            const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=Z10e90iXAB2ImEJ1CcbV0Yi4kRAZ6J6w&q=${searchQuery}&limit=6&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
            const data = await response.json()
            // put image urls in images
            setImages(data.data.map((img) => img.images.fixed_height.url))
        } catch (err) {
            console.err(err);
        }
    }





    return (
        <div className="modal" onClick={onExit}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
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

                    <div className="gif-search-bar">
                        <input
                            type="text"
                            placeholder="Search GIFs..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button onClick={searchForGif}>Search</button>
                    </div>

                    <div className="gif-options">
                        {images.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt="GIF option"
                                className={gif === url ? "selected" : ""}
                                onClick={() => setGif(url)}
                            />
                        ))}
                    </div>


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
