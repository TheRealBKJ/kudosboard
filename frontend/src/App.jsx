
import './App.css'
import Header from "./components/Header/Header"; //header with search and filter
import BoardList from "./components/BoardList/BoardList" // boardlist with add new card, board card
import Footer from './components/Footer/Footer';

//link to boards view through clikcing on boards

export default function App() {

  // fetch all boards using useEffect and passes down to BoardList
  const fetchAll = () =>{

  }

  //delete a board
  const deleteBoard = (id) =>{

  }

  // add a board

  const addABoard = (data) =>{

  }

  return (
    <div className='all-container'>
      <Header/>
      <BoardList/>
      <Footer/>
    </div>
  )


}


