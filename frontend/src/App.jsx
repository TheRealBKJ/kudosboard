
import './App.css'
import Header from "./components/Header/Header"; //header with search and filter
import BoardList from "./components/BoardList/BoardList" // boardlist with add new card, board card
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import axios from "axios"; // using axios easier to fetch

//link to boards view through clikcing on boards
//pass down items to boardlist
// let header return an array

export default function App() {

  const [boards, setBoards] = useState([]) //hold card of boards to pass down to BoardsList


  // call when its loaded
  useEffect(() => {
    fetchBoards();
  }, []);

  // fetch all boards using useEffect and passes down to BoardList
  const fetchBoards = async () => {
    try {
      const boards = await fetch('https://localhost:3000/boards', { // fetch all the boards
        method: 'GET',
      })
      setBoards(boards)
    } catch (error) {
      console.error(error)
    }
  }




  //delete a board
  const deleteBoard = async (id) => {
    try {
      fetch(`https://localhost:3000/boards/${id}`, {
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
      const res = await fetch('http://localhost:3000/boards', {
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
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='all-container'>
      <Header />
      <BoardList />
      <Footer />
    </div>
  )


}


