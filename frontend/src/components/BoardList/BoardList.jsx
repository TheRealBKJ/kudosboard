import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import { useEffect, useState } from React;
import data from "../../assets/data.json";

// fetch data from DB , be able to manipulate it from other compoenents like filter or searchbar


export default function BoardList() {

    const [boards, setBoards] = useState([])
    const [addModal, setAddModal] = useState(false)

    // useEffect to fetch and update boards

    // has to do a delete request to get rid of it and then update it using react and then will also show in next render
    const handleDeleteBoard = (id) => {
        //do state after fetch request
        //update UseState

        //delete Request

    }
    //propogates and switches views to /boards page
    const handleViewBoard = (id) => {

        // get request??

        //switch to a diff link 
    }

    const handleAddBoard = async (newBoard) =>{

        //post request
        setBoards((prev) => [...prev,newBoard])
    }

    const openModal = () => {
        setAddModal(true);
    };

    const closeModal = () => {
        setAddModal(false);
    };

    return (
        <div className="board-list">

            {/*Button to toggle on the add list*/}
            <button className="addNewBoard-button"
                onClick={() => setAddModal(true)}>
                Add New Board
            </button>

            {/*/Displays Modal depending on if it is clicked*/}
            {showModal && (
                <AddNewBoardModal
                    onClose={() => setShowModal(false)}
                    onAddBoard={handleAddBoard}
                />
            )}

            {/*maps the boards out*/}
            {boards.map((board) => {
                <BoardCard
                    key={board.id}
                    data={board}
                    onDeleteBoard={handleDeleteBoard}
                    onViewBoard={handleViewBoard}
                />
            })}



        </div>
    )

}