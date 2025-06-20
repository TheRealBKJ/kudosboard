import { Link } from "react-router-dom";
import "./BoardCard.css";

export default function BoardCard({ data, onDeleteBoard }) {
    return (
        <div className="board-card">
            <img
                className="board-card-img"
                src={`https://picsum.photos/seed/${data.id}/300/200`}
                alt={data.title}
            />

            <div className="board-card-contents">
                <h2 className="board-card-title">{data.title}</h2>
                <h3 className="board-card-category">{data.category}</h3>

                <div className="board-card-buttons">

                    <Link
                        className="view-board-link"
                        to={`/boards/${data.id}`}
                        state={{ title: data.title, category: data.category }}>
                        View Board
                    </Link>


                    <button
                        className="delete-board-button"
                        onClick={() => onDeleteBoard(data.id)}
                    >
                        Delete Board
                    </button>
                </div>
            </div>
        </div >
    );
}
