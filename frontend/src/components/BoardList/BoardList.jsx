import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import { useEffect, useState } from 'react';
import "./BoardList.css";
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
            <button className="add-new-trigger" onClick={openModal}>Add New Board</button>
            {isModalOpen && (
                <AddNewBoard
                    addABoard={handleAddBoard}
                    onClose={() => setIsModalOpen(false)}
                />
            )}

            {/*maps the boards out*/}
            <div className="board-box">
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
