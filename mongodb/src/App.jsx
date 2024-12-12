import Login from "./pages/login_singup/Login";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signup from "./pages/login_singup/Signup";
import Homepage from "./pages/Homepage/Homepage"
 const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path = "/Home" element = {<Homepage/>} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;

