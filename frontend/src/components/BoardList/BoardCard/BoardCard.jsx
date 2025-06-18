import{Link} from "react-router" // link to cards asosciated 



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