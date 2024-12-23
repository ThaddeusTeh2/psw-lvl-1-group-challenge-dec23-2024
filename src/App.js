import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskAddNew from "./pages/TaskAddNew";
import { Task } from "@mui/icons-material";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<TaskAddNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
