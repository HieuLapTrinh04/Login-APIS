import Header from "./Header";
import FormLogin from "./FormLogin";
import '../App.css'
const Login = () => {
    const onSubmit = username => console.log(username)
    const onSubmitPassword = password => console.log(password)
    return <div className='w-96 m-auto bg-white rounded-2xl'>
        <Header></Header>
        <FormLogin onSubmitUserName={onSubmit} onSubmitPassword={onSubmitPassword}/>
    </div>
}
export default Login;