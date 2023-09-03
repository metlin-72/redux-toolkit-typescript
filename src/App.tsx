import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import MainProfile from "./component/MainProfile";
import PostList from "./component/asyncThunk/PostList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/postList" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
