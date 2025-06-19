
import './App.css'
import Header from "./components/Header/Header"; //header with search and filter
import BoardList from "./components/BoardList/BoardList" // boardlist with add new card, board card
import Footer from './components/Footer/Footer';
import { useState } from 'react';
const API_BASE = 'https://localhost:3000/boards'

//link to boards view through clikcing on boards
//pass down items to boardlist
// let header return an array

export default function App() {

  const [boards, setBoards] = useState([]) //hold card of boards to pass down to BoardsList


  // call when its loaded
  useEffect(() => {
    fetchBoards();
  }, [boards]);

  // fetch all boards using useEffect and passes down to BoardList
  const fetchBoards = async () => {
    try {
      const boards = await fetch(`${API_BASE}`, { // fetch all the boards
        method: 'GET',
      })

      const data = await boards.json() // wait to be turend into json data
      setBoards(data)
    } catch (error) {
      console.error(error)
    }
  }


  //delete a board
  const deleteBoard = async (id) => {
    try {
      await fetch(`${API_BASE}/${id}`, {
        method: 'DELETE', //delete
      })
      setBoards(prev => prev.filter((board) => board.id !== id)) //sets boards to each one that doesnt call ID
    } catch (error) {
      console.error(error)
    }
  }

  // add a board
  const addABoard = async (data) => {
    try {
      const res = await fetch(`${API_BASE}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          category,
          author,
        }),
      })
      const newBoard = await res.json() 
      setBoards((prev) => [...prev,newBoard]) // adds data to boards

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='all-container'>
      <Header boards={boards} // passes down current boards
          changedData = {setBoards}  // setsBoards based on what is propped up back from search or filter
      />
      <BoardList
        boards={boards} //  pass down current boards
        addABoard={addABoard} // adds boards ad props up the data
        deleteBoard={deleteBoard} // props up the id to delete a board
      />
      <Footer /> {/* no fetching*/}
    </div>
  )


}


