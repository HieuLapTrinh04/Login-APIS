import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from './components/Login';
import Home from "./components/Home";
import About from "./components/About";
import ProtectedRouter from "./components/ProtectedRouter";
function App() {
  return (
    <div className='flex flex-col text-center bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen'>
      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<FormLogin />}/>
 
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="/about" element={<ProtectedRouter><About /></ProtectedRouter>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <FormLogin /> */}
    </div>
  );
}


export default App;
