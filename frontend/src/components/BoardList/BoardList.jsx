import AddNewBoard from "./AddNewBoard/AddNewBoard.jsx";
import BoardCard from "./BoardCard/BoardCard.jsx";


export default function BoardList({ boards, addABoard, deleteBoard }) {
    return (

        <div className="board-list">
            <AddNewBoard addABoard={addABoard} /> {/* pass the add function */}
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
