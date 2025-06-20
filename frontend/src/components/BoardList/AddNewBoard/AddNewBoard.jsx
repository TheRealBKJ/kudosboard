// post request feature, save for later
// should update BoardList with a new moviecard?? Bubble it up, boardlist will do a POST
//this should be a modal, BoardList has  abutton for this

//Should take input and then pass it back up
import "./AddNewBoard.css";
import { useEffect, useState } from "react";



export default function AddNewBoard({ addABoard, onClose }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");


    const handleSubmit = (e) => {

        e.preventDefault(); // stops normal behavorial
        if (title && category) { // Basic validation to ensure required fields are filled
            addABoard({ title, category, author });
            setTitle("");
            setCategory("");
            setAuthor("");
            onClose(); // Close the modal after submission
        } else {
            alert("Please fill in the required fields.");
        }
        //error handling for input in future 
        // bubble up data for new board
        setTitle(""); // sets the fields back to nothing for next fetch
        setCategory("");
        setAuthor("");
    };


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>
                    &times;
                </button>
                <form className="form-card" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select a category</option>
                        <option value="Thank you">Thank you</option>
                        <option value="Celebration">Celebration</option>
                        <option value="Inspiration">Inspiration</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Author (optional)"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <button className="submit-button" type="submit">
                        Add Board
                    </button>
                </form>
            </div>
        </div>
    );

}

