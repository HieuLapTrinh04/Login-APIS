import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from './components/Login';
import NoPage from "./components/NoPage";

function App() {
  // const User = [{
  //   userName: 'minhhieu',
  //   password: 111111
  // }, {
  //   userName: 'buihieu',
  //   password: 222222
  // }]
  // const 
  //   // eslint-disable-next-line no-undef
  //   if (username !== User || password !== User) {
  //     alert("Sai tên hoặc mật khẩu !!");
  // }
  // else 
  //      window.location.href = "/about";
    
  return (
    <div className='flex flex-col text-center bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen'>
      <BrowserRouter>
      <Routes>

        <Route path="/login" element={<FormLogin />}/>
 
        <Route path="/">
          <Route index element={<> Day la trang home</>} />
          <Route path="/about" element={<> Day la trang about</>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <FormLogin /> */}
    </div>
  );
}


export default App;
