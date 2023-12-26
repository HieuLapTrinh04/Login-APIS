import Header from "./Header";
import FormLogin from "./FormLogin";
import '../App.css'
const Login = () => {
    return <div className='w-96 m-auto bg-white rounded-2xl'>
        <Header></Header>
        <FormLogin/>
    </div>
}
export default Login;