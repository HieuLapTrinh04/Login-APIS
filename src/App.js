import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormLogin from './components/FormLogin';
import NoPage from "./components/NoPage";

function App() {
  return (
    <div className='flex flex-col text-center bg-gradient-to-r from-purple-500 to-pink-500 w-full h-screen'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} /> */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      {/* <FormLogin /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
