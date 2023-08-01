import { useSelector } from "react-redux";
import "./App.css";
import { Board } from "./components/Board";
import { Layout } from "./components/Layout";
import { Sidebar } from "./components/Sidebar";
import { RootState } from "./redux/store";
import { NewBoardModal } from "./components/NewBoardModal";
import { NewTaskModal } from "./components/NewTaskModal";



function App() {
  const sidebarStatus=useSelector((state:RootState)=>state.sidebarStatus.status)
  const newBoardModalStatus=useSelector((state:RootState)=>state.boardModal.status)
  const newTaskModalStatus=useSelector((state:RootState)=>state.taskModal.status)


  return (
    <>
    {newBoardModalStatus &&
 <NewBoardModal/>
      }
      {newTaskModalStatus && 
      <NewTaskModal/>
      }
      <Layout>
        {sidebarStatus &&
        <Sidebar />
        }
        <Board />
      </Layout>
      
    </>
  );
}

export default App;
