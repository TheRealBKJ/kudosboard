import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import "./BoardList.css";
import { useState } from "react";

export default function BoardList({ boards, addABoard, deleteBoard }) {


    const [isModalOpen, setIsModalOpen] = useState(false); //open and close modal

    const openModal = () => setIsModalOpen(true);// open modal
    const closeModal = () => setIsModalOpen(false);//close modal

    // close modal when data is propped up and submitted 
    const handleAddBoard = (boardData) => {
        addABoard(boardData); //pass up board data
        closeModal();
        // passes up new board, app posts new board and then boardlist reloads
    };

    return (

        <div className="board-list">
            {/*Have something that opens the modal */ }
            <button onClick={openModal}>Add New Board</button>

            {/* to open model and call up data from child function addNewBoard*/}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <AddNewBoard addABoard={handleAddBoard} />
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
            
            <div className="boards-container">
                {boards.map((board) => (
                    <BoardCard
                        key={board.id}
                        data={board}
                        onDeleteBoard={deleteBoard}
                    />
                ))}
            </div>
        </div>
    );
}
