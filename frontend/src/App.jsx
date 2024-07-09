import { Routes,Route} from "react-router-dom"
import Home from "./pages/Home.jsx";
import DeleteBook from "./pages/Deletebook.jsx";
import UpdateBook from "./pages/Updatebook.jsx";
import ShowBook from "./pages/Showbook.jsx";
import CreateBook from "./pages/Createbook.jsx";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateBook />} />
      <Route path="/show/:id" element={<ShowBook />} />
      <Route path="/update/:id" element={<UpdateBook />} />
      <Route path="/delete/:id" element={<DeleteBook />} />
    </Routes>
    
  )
}