// needs a clear button
import "./SearchBar.css";
// should use a fetch request to filter out by name

export default function SearchBar() {

    const [userInput, setUserInput] = useState(""); //take input from user
    const [searchData, setSearchData] = useState([]); // what use to send up data to header, going to use one main fetch function from header



    // tracks what user is putting in and updates 
    const grabSearch = (event) => {
        const { value } = event.target;
        setUserInput(value);
    };

    // need to add parent function that fetches the regular boards
    const clearSearch = () =>{
        setUserInput("")
    }



}