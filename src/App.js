import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Showcase from "./components/Showcase";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Showcase/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
