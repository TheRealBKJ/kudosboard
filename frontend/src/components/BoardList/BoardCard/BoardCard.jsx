import { Link } from "react-router" // link to cards asosciated 
import "./BoardCard.css";

import { Link } from "react-router-dom"; // how to add link to viewboards page
//use params to get the id of board for fetch!


export default function BoardCard({ data, onDeleteBoard }) {

    return (
        <div className="movie-card">
            <img className="movie-card-img" src="https://picsum.photos/200/300?random=197" alt={data.title} />

            <div className="movie-card-contents">
                <h2 className="movie-card-title">{data.title}</h2>
                <h3 className="movie-card-genre"> {data.category}</h3>
                <div className="movie-card-buttons">

                    <Link
                        className="cards-link"
                        to={`/boards/${data.id}`}
                        state={{ title: data.title, category: data.category }} // use useLocation for cardLocation
                    >
                        View Board
                    </Link>
                    <button
                        className="delete-button"
                        onClick={() => onDeleteBoard(data.id)}
                    >
                        Delete Board
                    </button>
                </div>
            </div>
        </div>
    );
}