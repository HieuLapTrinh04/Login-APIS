import Header from "./Header";
import Login from "./Login";
import '../App.css'
const FormLogin = () => {
    const onSubmit = username => console.log(username)
    const onSubmitPassword = password => console.log(password)
    return <div className='w-96 m-auto bg-white rounded-2xl'>
        <Header></Header>
        <Login onSubmitUserName={onSubmit} onSubmitPassword={onSubmitPassword}/>
    </div>
}
export default FormLogin;