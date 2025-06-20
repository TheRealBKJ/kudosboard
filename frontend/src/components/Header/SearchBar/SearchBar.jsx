// needs a clear button
import "./SearchBar.css";
import { useState, useEffect } from "react";
// should use a fetch request to filter out by name

export default function SearchBar({ boards, changedData, originalBoards }) {

    const [userInput, setUserInput] = useState(""); //take input from user
    const [searchData, setSearchData] = useState([]); // what use to send up data to header, going to use one main fetch function from header



    // tracks what user is putting in and updates, what we do when user types
    const grabSearch = (event) => {
        setUserInput(event.target.value);
    };

    // filters the boards by title
    const runSearch = () => {
        const searchQuery = userInput.toLowerCase().trim(); //stack overflow
        if (searchQuery === "") {
            changedData(boards);
            return;
        }

        // search query not empty and button pressed, run the code
        const filteredBoards = boards.filter((board) =>
            board.title.toLowerCase().includes(searchQuery)
        );
        changedData(filteredBoards); // send to parent header
    };

    // need to add parent function that fetches the regular boards
    const clearSearch = () => {
        setUserInput("");
        changedData(originalBoards); // restore original data
    };

    //listen for enter key, used old code
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            runSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search boards by title..."
                value={userInput}
                onChange={grabSearch}
                onKeyDown={handleKeyPress}
            />
            <button onClick={runSearch}>Search</button>
            <button onClick={clearSearch}>Clear</button>
        </div>
    );
}
