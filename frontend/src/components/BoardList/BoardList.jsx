import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import {useEffect,useState} from React;
import data from "../../assets/data.json";

// fetch data from DB , be able to manipulate it from other compoenents like filter or searchbar


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
        <div className ="board-list">

            {/*maps the boards out*/}
            {boards.map((board) =>{
                <BoardCard
                    key = {board.id}
                    data = {board}
                    onDeleteBoard={handleDeleteBoard}
                    onViewBoard={handleViewBoard}
                />
            })}


        </div>
    );
}
