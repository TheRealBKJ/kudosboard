// only for home view, holds filter and searchbar, parent compoenent pass u pdata
import SearchBar from "./SearchBar/SearchBar.jsx";
import FilterBar from "./FilterBar/FilterBar.jsx";
import "./Header.css"; // styling

export default function Header({ boards, changedData, originalBoards }) {

    const handleSearchData = (data) => {
        changedData(data)// sends search data to parent componeent to update boards lisr
    }

    const handleFilterData = (data) => {
        changedData(data) // sends filtered data to parent componenet to update
    }

    return (
        <header className="header-bar">
            <div className="elements container">
                <h1 className="banner">Kudos Board</h1>
                {/*Return the data we get from SearchBar and FilterBar being clicked, just pass up data */}
                {/* send boards to search and filter to let them process */}
                <div className="searchbar-wrapper">
                    <SearchBar
                        boards={boards}
                        changedData={handleSearchData}
                        originalBoards={originalBoards}
                    />
                </div>
                <FilterBar boards={boards} changedData={handleFilterData} originalBoards={originalBoards} />
            </div>

        </header>

    )
}