import "./App.css";
import avtar from "../src/Components/avtar.png";
import Login from "./Components/Login";
import Avtar from "./Components/Avtar";
import Registration from "./Components/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Table from "./Components/Table";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/dash" element={<Table />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// // import avtar from "../src/Components/avtar.png";
// const App = () => {
//   return (
//     <>
//       <Table />

//       {/* <div class="dropdown">

//   <img src={avtar} type="button" alt="" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
//   <div class="dropdown-menu" style={{top:"13px "}} aria-labelledby="dropdownMenuButton">
//     <a class="dropdown-item" href="#">My Profile</a>
//     <a class="dropdown-item" href="#">Logout</a>  </div>
// </div> */}
//     </>
//   )
// }

// export default App
