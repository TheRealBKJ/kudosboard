// take in data to add atrributues, prepare to add comments inf tuure

// each board has an id, image, category, author, title, description, and 
// has a link to a card 
// in DB need a foregin key that links to cardlist
// just shows data and passed props to BoardCardList

import { Link } from "react-router-dom"; // how to add link to viewboards page
//use params to get the id of board for fetch!


export default function BoardCard ({data , onDeleteBoard, onViewBoard}){

    return (
        <div className = "movie-card">
            <img className = "movie-card-img"/>

            <div className="movie-card-contents">
                <h2 className= "movie-card-title">{data.title}</h2>
                <h3 className ="movie-card-genre"> {data.category}</h3>
                <div className="movie-card-buttons">
                    <button 
                        className="view-button" 
                        onClick ={() => onViewBoard(data.id)}>
                        View Board
                    </button>

                    <button
                        className = "delete-button">
                        OnClick = {() => onDeleteBoard(data.id)}
                        Delete Board
                    </button>
                </div>



            </div>

        </div>

    );

}