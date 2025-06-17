import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";
import {useEffect,useState} from React;
import data from "../../assets/data.json";

// fetch data from DB , be able to manipulate it from other compoenents like filter or searchbar


export default function BoardList (){

    const [boards,setBoards] = useState([])

    // useEffect to fetch and update boards

    // has to do a delete request to get rid of it and then update it using react and then will also show in next render
    const handleDeleteBoard = (id) =>{

    }
    //propogates and switches views to /boards page
    const handleViewBoard = (id) => {
        //switch to a diff link and a get request??
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