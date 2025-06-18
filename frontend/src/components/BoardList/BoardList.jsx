import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import {useEffect,useState} from React;
import data from "../../assets/data.json";

// fetch data from DB , be able to manipulate it from other compoenents like filter or searchbar


export default function BoardList (){

    const [boards,setBoards] = useState([])

    // useEffect to fetch and update boards when prompted


    //pushes delete requeest up from BoardCard
    const handleDeleteBoard = (id) =>{

    }
     // pushes up data reuqeust from addNewBoard
    const handleAddNewBoard= (data) => {

    }


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
    )

}