import { useState } from "react";
import "./FilterBar.css";

export default function FilterBar({ boards, changedData, originalBoards }) {
    const [filterByValue, setFilterByValue] = useState("All");

    const handleFilterChange = (event) => {
        const selected = event.target.value;
        setFilterByValue(selected);

        if (selected === "All") {
            // Show all boards
            changedData(originalBoards);
        } else if (selected === "Recent") {
            // Sort by createdAt descending and show latest 6
            const sorted = [...boards].sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            changedData(sorted.slice(0, 6));
        } else {
            // Filter by category case-insensitive
            const filtered = boards.filter(
                (board) => board.category.toLowerCase() === selected.toLowerCase()
            );
            changedData(filtered);
        }
    };

    return (
        <div className="filter-bar">
            <label htmlFor="filter-select">Filter:</label>
            <select
                id="filter-select"
                value={filterByValue}
                onChange={handleFilterChange}
            >
                <option value="All">All / Home</option>
                <option value="Recent">Recent</option>
                <option value="Celebration">Celebration</option>
                <option value="Thank you">Thank you</option>
                <option value="Inspiration">Inspiration</option>
            </select>
        </div>
    );
}
