import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/home/Navigation/Navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/Authentication/Authentication";

const App = ()=>{

  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
 
  )
}

export default App;