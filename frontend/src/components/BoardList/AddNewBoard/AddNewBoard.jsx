// post request feature, save for later
// should update BoardList with a new moviecard?? Bubble it up
//this should be a modal, BoardList has  abutton for this
import "./AddNewBoard.css";
import { useState } from "react";



export default function AddNewBoard({ addABoard }) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault(); // stops normal behavorial
        //error handling for input in future 


        addABoard({ title, category, author }); // bubble up data for new board
        setTitle(""); // sets the fields back to nothing for next fetch
        setCategory("");
        setAuthor("");
    };


    return (
        <form className="form-card" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Category"
                value={category}
                onChange={e => setCategory(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author (optional)"
                value={author}
                onChange={e => setAuthor(e.target.value)}
            />
            <button className = "submit Button" type="submit">Add Board</button>
        </form>
    );

}

